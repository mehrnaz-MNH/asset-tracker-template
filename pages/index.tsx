import { Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";

import AssetsTable from "@/components/AssetsTable";
import SearchBar from "@/components/SearchBar";
import useAssets from "@/helpers/fetchAssets";
import { useState } from "react";

const Home: NextPage = () => {
  const [sortedField, setSortedField] = useState<string>("market_cap");
  const [orderField, setOrderField] = useState<string>("desc");
  //let sort_filed = sortedField ? sortedField : "market_cap";

  console.log(sortedField);
  console.log(orderField);

  const { data, error, isLoading } = useAssets(orderField, sortedField);

  const handleSortClick = (sortFiled: string) => {
    setSortedField(sortFiled);
    setOrderField(orderField == "desc" ? "asc" : "desc");
  };
  // const handleOrderClick = () => {
  //   setOrderField(orderField == "desc" ? "asc" : "desc");
  // };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {(error as Error).message}</div>;
  // }

  console.log(data);

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <SearchBar />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error in loading data from API</div>
      ) : (
        <AssetsTable
          assets={data}
          sortedField={sortedField}
          handleSortClick={handleSortClick}
          orderField={orderField}
        />
      )}
    </Flex>
  );
};

export default Home;

// https://tanstack.com/query/latest/docs/framework/react/overview
// https://chakra-ui.com/docs/getting-started
// https://nextjs.org/docs
// import Link from "next/link";
