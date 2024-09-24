import { Card, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import useAssets from "@/helpers/fetchAssets";
import AssetCard from "@/components/AssetCard";
import { Asset } from "@/types/asset";
import AssetsTable from "@/components/AssetsTable";

const Home: NextPage = () => {
  const { data, error, isLoading } = useAssets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  console.log(data);

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading>🚀 Asset Tracker</Heading>
      <AssetsTable assets={data} />
    </Flex>
  );
};

export default Home;

// https://tanstack.com/query/latest/docs/framework/react/overview
// https://chakra-ui.com/docs/getting-started
// https://nextjs.org/docs
