import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to Fetch Data : ", error: error });
  }
}
