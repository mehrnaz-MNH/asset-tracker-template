import { Box, Button, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
const SearchBar = () => {
  return (
    <Box
      p={4}
      maxW="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      mb={15}
    >
      <Box>
        <Heading as="h1" fontSize="2xl" fontWeight="bold">
          AssetTracker
        </Heading>
      </Box>

      <InputGroup mt={2} width={{ base: "100%", md: "400px" }}>
        <Input
          type="text"
          placeholder="Track your favourite crypto assets"
          color="black"
          border="none"
          _placeholder={{ color: "gray.500", fontSize: { base: "sm", md: "md" } }}
        />
        <InputRightElement children={<Search2Icon color="gray.500" />} />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
