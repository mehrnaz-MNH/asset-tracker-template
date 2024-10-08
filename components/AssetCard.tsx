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
    <Flex
      justify="space-between"
      textColor="white"
      bg="#2F2E2E
"
      p={4}
      borderRadius="md"
      boxShadow="md"
      alignItems="center"
      _hover={{ bg: "#9747FF" }}
    >
      {/* Rank */}
      <Flex w="10%" alignItems="center">
        <Box>#{asset.cmc_rank}</Box>
      </Flex>

      {/* Name and Market Cap */}
      <Flex w="20%" justify={["left", "left", "center"]}>
        <Image
          boxSize={["20px", "35px"]}
          mr={4}
          src={`/assets/color/${asset.symbol.toLowerCase()}.svg`}
          alt={`${asset.symbol} icon`}
          onError={(e) => {
            e.currentTarget.src = "/assets/color/generic.svg";
          }}
        />
        <Stat>
          <StatLabel fontSize={["11px ", "13px", "15px", "18px", "20px"]}>{asset.symbol}</StatLabel>
          <StatLabel color="gray.500" fontSize={["11px ", "13px", "15px", "18px", "20px"]}>
            {asset.market_cap === null ? "0.00" : formatNumber(asset.market_cap)}
          </StatLabel>
        </Stat>
      </Flex>

      {/* Price */}
      <Flex w="25%" justify={["right", "right", "left"]}>
        <Box>{asset.price === null ? "0.00" : currencyFormat(asset.price)}</Box>
      </Flex>

      {/* 24h Change */}
      <Flex w="25%" alignItems={"center"}>
        <Stat>
          <StatHelpText
            bg={asset.percent_change_24h >= 0 ? "#24FF001A" : "#FF00001A"}
            fontSize={["11px ", "13px", "15px", "18px", "20px"]}
            w={"fit-content"}
            textAlign="center"
            textColor={asset.percent_change_24h >= 0 ? "#24FF00" : "#FF0000"}
            borderRadius="md"
          >
            <StatArrow type={asset.percent_change_24h >= 0 ? "increase" : "decrease"} />
            {asset.percent_change_24h === null
              ? "0.00"
              : formatNumber(Math.abs(asset.percent_change_24h))}
            %
          </StatHelpText>
        </Stat>
      </Flex>
    </Flex>
  );
};

export default AssetCard;
