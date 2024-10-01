import { useQuery } from "@tanstack/react-query";

import axios from "axios";

async function fetchAssets(sortDir: string, sort: string) {
  console.log();
  const { data } = await axios.get(`/api/topAssets?sortDir=${sortDir}&sort=${sort}`);
  return data;
}

function useAssets(sortDir: string, sort: string) {
  return useQuery({
    queryKey: ["assets", sortDir, sort],
    queryFn: () => fetchAssets(sortDir, sort),
  });
}

export default useAssets;
