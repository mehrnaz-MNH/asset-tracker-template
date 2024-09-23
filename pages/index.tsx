import { Card, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <Flex justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
    <Heading>🚀 Asset Tracker</Heading>
  </Flex>
);

export default Home;

// https://tanstack.com/query/latest/docs/framework/react/overview
// https://chakra-ui.com/docs/getting-started
// https://nextjs.org/docs
