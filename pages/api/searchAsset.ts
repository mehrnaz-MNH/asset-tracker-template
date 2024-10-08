import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

import { Asset } from "@/types/asset";

const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

const apiUrl = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";

type QuotesData = {
  id: string;
  name: string;
  symbol: string;
};

type QuotesResponse = {
  status: Object;
  data: Record<string, QuotesData[]>;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol } = req.query;

  console.log("testing here");

  try {
    const { data } = await axios.get<QuotesResponse>(`${apiUrl}?symbol=${symbol}`, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });

    const resultAssets: Asset[] = Object.values(data.data)?.[0].map((entry: any) => ({
      id: entry.id,
      cmc_rank: entry.cmc_rank,
      name: entry.name,
      symbol: entry.symbol,
      price: entry.quote.USD.price,
      percent_change_24h: entry.quote.USD.percent_change_24h,
      market_cap: entry.quote.USD.market_cap,
    }));

    console.log("here2");

    const test = Object.values(data.data);

    // console.log(response);

    res.status(200).json(resultAssets);
  } catch (error) {
    res.status(500).json({ message: "Failed to Fetch Data : ", error: error });
  }
}
