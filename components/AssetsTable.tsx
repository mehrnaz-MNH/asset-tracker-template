import { Table, Thead, Tbody, Tr, Th, TableCaption, TableContainer } from "@chakra-ui/react";

import AssetCard from "./AssetCard";
import { Asset } from "@/types/asset";

interface Props {
  assets: Asset[];
}

const AssetsTable: React.FC<Props> = ({ assets }) => (
  <TableContainer>
    <Table variant="stripped">
      <TableCaption>top 25 cryptocurrency tokens ordered by highest volume to lowest</TableCaption>
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>24h%</Th>
        </Tr>
      </Thead>
      <Tbody>
        {assets.map((asset: Asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);

export default AssetsTable;
