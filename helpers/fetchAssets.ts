import { useQuery } from "@tanstack/react-query";

import axios from "axios";

async function fetchAssets() {
  const { data } = await axios.get("/api/topAssets");
  return data;
}

function useAssets() {
  return useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
  });
}

export default useAssets;
