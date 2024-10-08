import { Table, Thead, Tbody, Tr, Th, TableCaption, TableContainer } from "@chakra-ui/react";

import AssetCard from "@/components/AssetCard";
import { Asset } from "@/types/asset";

interface Props {
  assets: Asset[];
}

const AssetsSearchTable: React.FC<Props> = ({ assets }) => (
  <TableContainer>
    <Table variant="unstyled">
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

export default AssetsSearchTable;
