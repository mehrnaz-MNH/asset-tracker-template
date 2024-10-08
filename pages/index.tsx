import { Divider, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";

import AssetsTable from "@/components/AssetsTable";
import AssetsSearchTable from "@/components/AssetSearchTable";
import SearchBar from "@/components/SearchBar";
import useAssets from "@/helpers/fetchAssets";
import React, { useState } from "react";
import { Asset } from "@/types/asset";
import getAsset from "@/helpers/fetchSearch";

const Home: NextPage = () => {
  const [sortedField, setSortedField] = useState<string>("market_cap");
  const [orderField, setOrderField] = useState<string>("desc");
  const [searchInput, setSearchInput] = useState<string>("");
  //const [searchData, setSearchData] = useState<Asset[]>([]);
  const [symbol, setSymbol] = useState<string>("");

  const { data, error, isLoading } = useAssets(orderField, sortedField);
  const { data: assetData, error: assetError, isLoading: assetLoading } = getAsset(symbol);

  const handleSortClick = (sortFiled: string) => {
    setSortedField(sortFiled);
    setOrderField(orderField == "desc" ? "asc" : "desc");
  };

  const filterOnSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput && searchInput != "") {
      console.log(searchInput);
      setSymbol(searchInput);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={filterOnSearch}
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error in loading data from API</div>
      ) : (
        <>
          {searchInput && assetData?.length > 0 ? (
            <AssetsSearchTable assets={assetData} />
          ) : searchInput && assetData?.length === 0 ? (
            <div>No result returned for this input, try again.</div>
          ) : null}

          <Divider m={25} />

          <Heading mb={30}>Top 25 Crypto Assets</Heading>

          <AssetsTable
            assets={data}
            sortedField={sortedField}
            handleSortClick={handleSortClick}
            orderField={orderField}
          />
        </>
      )}
    </Flex>
  );
};

export default Home;
