import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// use Axios to get assets
async function fetchAssets() {
  const { data } = await axios.get("/api/assets");

  return data.data;
}

function useAssets() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchAssets,
  });
}

export default useAssets;
