import { Box, Flex, Button, Text, Icon } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Asset } from "@/types/asset";
import AssetCard from "@/components/AssetCard";

interface Props {
  assets: Asset[];
}

const AssetsTable: React.FC<Props> = ({ assets }) => {
  return (
    <Box
      bg="#1E1E1E
"
      p={6}
      borderRadius="md"
      boxShadow="xl"
      w={["100%", "100%", "90%", "80%", "70%"]}
      fontSize={["11px ", "13px", "15px", "18px", "20px"]}
    >
      <Box bg="#2F2E2E" p={4} borderRadius="md" mb={5} alignItems="center">
        <Flex justify="space-between" textColor="gray.400" fontWeight="bold" textAlign="center">
          <Flex w="10%" alignItems="center">
            <Text>#</Text>
          </Flex>

          <Flex w="20%" alignItems="center">
            <Text>Name</Text>
          </Flex>

          <Flex w="25%" alignItems="center">
            <Text>Price</Text>
          </Flex>

          <Flex w="25%" alignItems="center" justify={"center"}>
            <Text>24h %</Text>
          </Flex>
        </Flex>
      </Box>

      <Flex rowGap={"8px"} flexDirection="column">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </Flex>
    </Box>
  );
};

export default AssetsTable;
