import {
  Box,
  Button,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface Props {
  handleSearch: (e: React.FormEvent) => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<Props> = ({ handleSearch, searchInput, setSearchInput }) => {
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

      <form onSubmit={(e) => handleSearch(e)}>
        <FormControl mt={4} width={{ base: "100%", md: "400px" }}>
          <InputGroup>
            <Input
              id="search"
              type="text"
              value={searchInput}
              placeholder="Track your favourite crypto assets"
              color="black"
              onChange={(e) => setSearchInput(e.target.value)}
              _placeholder={{ color: "gray.500", fontSize: { base: "sm", md: "md" } }}
            />
            <InputRightElement>
              <Button size="sm" onClick={handleSearch} type="submit" variant="link">
                <Search2Icon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
    </Box>
  );
};

export default SearchBar;
