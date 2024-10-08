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
      w={["100%", "100%", "90%", "80%", "70%"]}
      p={4}
      maxW="100%"
      display="flex"
      flexDirection="column"
      mb={15}
    >
      <Box>
        <Heading as="h1" fontSize="2xl" fontWeight="bold">
          AssetTracker
        </Heading>
      </Box>

      <form onSubmit={(e) => handleSearch(e)}>
        <FormControl mt={4}>
          <InputGroup borderBlock="none" borderBlockEnd="none" borderBlockEndStyle="none">
            <Input
              id="search"
              type="text"
              value={searchInput}
              placeholder="Track your favourite crypto assets"
              color="white"
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
