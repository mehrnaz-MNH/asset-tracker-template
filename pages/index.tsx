import { Card, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

console.log(apiKey);
console.log(apiUrl);

const Home: NextPage = () => (
  <Flex justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
    <Heading>🚀 Asset Tracker</Heading>
  </Flex>
);

export default Home;

// https://tanstack.com/query/latest/docs/framework/react/overview
// https://chakra-ui.com/docs/getting-started
// https://nextjs.org/docs
