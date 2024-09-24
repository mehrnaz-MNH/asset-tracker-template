import React from "react";
import { Asset } from "@/types/asset";
import { Box, ListItem, Image } from "@chakra-ui/react";

interface Props {
  asset: Asset;
}

function currencyFormat(num: number) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function formatNumber(num: number): string {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + "T";
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M";
  } else {
    return num.toFixed(2);
  }
}

const AssetCard: React.FC<Props> = ({ asset }) => (
  <ListItem key={asset.id} justifyContent="center" alignItems="center">
    <Box
      display="flex"
      flexDirection="row"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
      transition="0.3s ease-in-out"
    >
      <p># {asset.cmc_rank}</p>
      <p>{asset.name}</p>
      <Image
        boxSize="100px"
        src={`/assets/color/${asset.symbol.toLowerCase()}.svg`}
        alt={`${asset.symbol} icon`}
        onError={(e) => {
          e.currentTarget.src = "/assets/color/generic.svg";
          e.currentTarget.alt = "Generic icon";
        }}
      />
      <p>{formatNumber(asset.market_cap)}</p>
      <p>{currencyFormat(asset.price)}</p>
      <p>%{asset.percent_change_24h.toFixed(2)}</p>
    </Box>
  </ListItem>
);

export default AssetCard;
