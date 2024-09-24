import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { Asset } from "@/types/asset";
import AssetCard from "./AssetCard";

interface Props {
  assets: Asset[];
}

const AssetsTable: React.FC<Props> = ({ assets }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>
          top 25 cryptocurrency tokens ordered by highest volume to lowest
        </TableCaption>
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
};

export default AssetsTable;
