import { Card, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { NextPage } from "next";

import Link from "next/link";

import AssetsTable from "@/components/AssetsTable";

import useAssets from "@/helpers/fetchAssets";

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
