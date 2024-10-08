import { useQuery } from "@tanstack/react-query";

import axios from "axios";

async function searchAsset(symbol: string) {
  console.log();
  const { data } = await axios.get(`/api/searchAsset?symbol=${symbol}`);
  return data;
}

function getAsset(symbol: string) {
  return useQuery({
    queryKey: ["assets", symbol],
    queryFn: () => searchAsset(symbol),
  });
}

export default getAsset;
