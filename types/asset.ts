export interface Asset {
  id: number;
  cmc_rank: number;
  name: string;
  symbol: string;
  price: number;
  percent_change_24h: number;
  market_cap: number;
}

// class AssetObj implements Asset {
//   id: number;
//   cmc_rank: number;
//   name: string;
//   symbol: string;
//   price: number;
//   percent_change_24h: number;
//   market_cap: number;

//   constructor(
//     id: number,
//     cmc_rank: number,
//     name: string,
//     symbol: string,
//     price: number,
//     percent_change_24h: number,
//     market_cap: number
//   ) {
//     this.id = id;
//     this.cmc_rank = cmc_rank;
//     this.name = name;
//     this.symbol = symbol;
//     this.price = price;
//     this.percent_change_24h = percent_change_24h;
//     this.market_cap = market_cap;
//   }
// }

//export default AssetObj;
