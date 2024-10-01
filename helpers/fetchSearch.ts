import { useQuery } from "@tanstack/react-query";

import axios from "axios";

async function searchAsset() {
  console.log();
  const { data } = await axios.get("/api/searchAsset");
  return data;
}

function getAsset() {
  return useQuery({
    queryKey: ["assets"],
    queryFn: searchAsset,
  });
}

export default getAsset;
