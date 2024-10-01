import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

import AssetCard from "@/components/AssetCard";
import { Asset } from "@/types/asset";

interface Props {
  assets: Asset[];
  sortedField: string;
  orderField: string;
  handleSortClick: (sortFiled: string) => void;
}

const AssetsTable: React.FC<Props> = ({ assets, sortedField, handleSortClick, orderField }) => (
  <TableContainer>
    <Table variant="simple" bg="black" color="white" border="none" borderRadius={50}>
      <TableCaption>top 25 cryptocurrency tokens ordered by highest volume to lowest</TableCaption>
      <Thead>
        <Tr bg="gray.800">
          <Th>
            #
            <Button variant="link" onClick={() => handleSortClick("market_cap")}>
              {sortedField == "market_cap" ? (
                orderField == "asc" ? (
                  <TriangleUpIcon color="purple" />
                ) : (
                  <TriangleDownIcon color="purple" />
                )
              ) : (
                <TriangleDownIcon />
              )}
            </Button>
          </Th>
          <Th>
            Name
            <Button variant="link" onClick={() => handleSortClick("name")}>
              {sortedField == "name" ? (
                orderField == "asc" ? (
                  <TriangleUpIcon color="purple" />
                ) : (
                  <TriangleDownIcon color="purple" />
                )
              ) : (
                <TriangleDownIcon />
              )}
            </Button>
          </Th>
          <Th>
            Price
            <Button variant="link" onClick={() => handleSortClick("price")}>
              {sortedField == "price" ? (
                orderField == "asc" ? (
                  <TriangleUpIcon color="purple" />
                ) : (
                  <TriangleDownIcon color="purple" />
                )
              ) : (
                <TriangleDownIcon />
              )}
            </Button>
          </Th>
          <Th>
            24h%
            <Button variant="link" onClick={() => handleSortClick("percent_change_24h")}>
              {sortedField == "percent_change_24h" ? (
                orderField == "asc" ? (
                  <TriangleUpIcon color="purple" />
                ) : (
                  <TriangleDownIcon color="purple" />
                )
              ) : (
                <TriangleDownIcon />
              )}
            </Button>
          </Th>
        </Tr>
      </Thead>
      <Tbody bg="gray.800">
        {assets.map((asset: Asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default AssetsTable;
