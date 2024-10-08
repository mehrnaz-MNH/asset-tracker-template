import { Box, Flex, Button, Text, Icon } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Asset } from "@/types/asset";
import AssetCard from "@/components/AssetCard";

interface Props {
  assets: Asset[];
  sortedField: string;
  orderField: string;
  handleSortClick: (sortField: string) => void;
}

const AssetsTable: React.FC<Props> = ({ assets, sortedField, handleSortClick, orderField }) => {
  return (
    <Box bg="gray.900" p={6} borderRadius="md" boxShadow="xl">
      <Box bg="gray.800" p={4} borderRadius="md">
        {/* Header mimicking table header */}
        <Flex justify="space-between" textColor="gray.400" fontWeight="bold">
          <Flex w="20%" alignItems="center">
            <Text>#</Text>
            <Button variant="link" onClick={() => handleSortClick("market_cap")}>
              <Icon
                as={
                  sortedField === "cmc_rank" && orderField === "asc"
                    ? TriangleUpIcon
                    : TriangleDownIcon
                }
                color={sortedField === "cmc_rank" ? "purple.400" : "gray.400"}
              />
            </Button>
          </Flex>

          <Flex w="30%" alignItems="center">
            <Text>Name</Text>
            <Button variant="link" onClick={() => handleSortClick("name")}>
              <Icon
                as={
                  sortedField === "name" && orderField === "asc" ? TriangleUpIcon : TriangleDownIcon
                }
                color={sortedField === "name" ? "purple.400" : "gray.400"}
              />
            </Button>
          </Flex>

          <Flex w="25%" alignItems="center">
            <Text>Price</Text>
            <Button variant="link" onClick={() => handleSortClick("price")}>
              <Icon
                as={
                  sortedField === "price" && orderField === "asc"
                    ? TriangleUpIcon
                    : TriangleDownIcon
                }
                color={sortedField === "price" ? "purple.400" : "gray.400"}
              />
            </Button>
          </Flex>

          <Flex w="25%" alignItems="center">
            <Text>24h %</Text>
            <Button variant="link" onClick={() => handleSortClick("percent_change_24h")}>
              <Icon
                as={
                  sortedField === "percent_change_24h" && orderField === "asc"
                    ? TriangleUpIcon
                    : TriangleDownIcon
                }
                color={sortedField === "percent_change_24h" ? "purple.400" : "gray.400"}
              />
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* Body to display each asset */}
      <Box>
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </Box>
    </Box>
  );
};

export default AssetsTable;
