import {
  Tr,
  Td,
  Image,
  Text,
  Box,
  Stat,
  StatNumber,
  StatLabel,
  StatArrow,
  StatHelpText,
} from "@chakra-ui/react";

import { Asset } from "@/types/asset";

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
  <Tr padding="20px" borderBlock="1px" paddingBlock="10px solid grey">
    <Td># {asset.cmc_rank}</Td>
    <Td display="flex" flexDirection="row">
      <Image
        boxSize="40px"
        paddingRight="10px"
        src={`/assets/color/${asset.symbol.toLowerCase()}.svg`}
        alt={`${asset.symbol} icon`}
        onError={(e) => {
          e.currentTarget.src = "/assets/color/generic.svg";
          e.currentTarget.alt = "Generic icon";
        }}
      />
      <Stat>
        <StatLabel>{asset.symbol}</StatLabel>
        <StatLabel>{formatNumber(asset.market_cap)}</StatLabel>
      </Stat>
    </Td>
    <Td>{currencyFormat(asset.price)}</Td>
    <Td>
      <Stat>
        <StatHelpText>
          <StatArrow type={asset.percent_change_24h >= 0 ? "increase" : "decrease"} />%
          {Math.abs(asset.percent_change_24h).toFixed(3)}
        </StatHelpText>
      </Stat>
    </Td>
  </Tr>
);

export default AssetCard;

// <Th>#</Th>
//             <Th>Name</Th>
//             <Th>Price</Th>
//             <Th>24h%</Th>

// <ListItem key={asset.id} justifyContent="center" alignItems="center">
//     <Box
//       display="flex"
//       flexDirection="row"
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       p={4}
//       boxShadow="md"
//       _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
//       transition="0.3s ease-in-out"
//     >
//       <p># {asset.cmc_rank}</p>
//       <p>{asset.name}</p>
//       <Image
//         boxSize="100px"
//         src={`/assets/color/${asset.symbol.toLowerCase()}.svg`}
//         alt={`${asset.symbol} icon`}
//         onError={(e) => {
//           e.currentTarget.src = "/assets/color/generic.svg";
//           e.currentTarget.alt = "Generic icon";
//         }}
//       />
//       <p>{formatNumber(asset.market_cap)}</p>
//       <p>{currencyFormat(asset.price)}</p>
//       <p>%{asset.percent_change_24h.toFixed(2)}</p>
//     </Box>
//   </ListItem>
