import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { Asset } from "@/types/asset";

const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
//const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

const apiUrl =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=25";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { sortDir, sort } = req.query;

  try {
    const response = await axios.get(`${apiUrl}&sort=${sort}&sort_dir=${sortDir}`, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });

    console.log(response);

    const topAssets: Asset[] = response.data.data.map((entry: any) => ({
      id: entry.id,
      cmc_rank: entry.cmc_rank,
      name: entry.name,
      symbol: entry.symbol,
      price: entry.quote.USD.price,
      percent_change_24h: entry.quote.USD.percent_change_24h,
      market_cap: entry.quote.USD.market_cap,
    }));
    console.log("TopAssets");
    console.log(topAssets);
    res.status(200).json(topAssets);
  } catch (error) {
    res.status(500).json({ message: "Failed to Fetch Data : ", error: error });
  }
}
