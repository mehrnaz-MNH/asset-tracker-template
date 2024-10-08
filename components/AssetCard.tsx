import { Box, Flex, Image, Stat, StatLabel, StatArrow, StatHelpText } from "@chakra-ui/react";
import { Asset } from "@/types/asset";

interface Props {
  asset: Asset;
}

function currencyFormat(num: number) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function formatNumber(num: number): string {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  return num.toFixed(2);
}

const AssetCard: React.FC<Props> = ({ asset }) => {
  return (
    <Flex justify="space-between" p={4} bg="gray.900" textColor="white" gap={"20px"}>
      {/* Rank */}
      <Flex w="15%" alignItems="center">
        <Box>#{asset.cmc_rank}</Box>
      </Flex>

      {/* Name and Market Cap */}
      <Flex w="30%" alignItems="center">
        <Image
          boxSize="30px"
          mr={4}
          src={`/assets/color/${asset.symbol.toLowerCase()}.svg`}
          alt={`${asset.symbol} icon`}
          onError={(e) => {
            e.currentTarget.src = "/assets/color/generic.svg";
          }}
        />
        <Stat>
          <StatLabel>{asset.symbol}</StatLabel>
          <StatLabel color="gray.500">{formatNumber(asset.market_cap)}</StatLabel>
        </Stat>
      </Flex>

      {/* Price */}
      <Flex w="30%" alignItems="center">
        <Box>{currencyFormat(asset.price)}</Box>
      </Flex>

      {/* 24h Change */}
      <Flex w="25%" alignItems="center">
        <Stat>
          <StatHelpText>
            <StatArrow type={asset.percent_change_24h >= 0 ? "increase" : "decrease"} />
            {Math.abs(asset.percent_change_24h).toFixed(2)}%
          </StatHelpText>
        </Stat>
      </Flex>
    </Flex>
  );
};

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
