import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import AddCategory from "components/Video/AddCategory";
import UpdateCategory from "components/Video/UpdateVideo";
import React from "react";

function VideosManager() {
  const categories = [
    {
      id: 1,
      name: "Blog",
    },
    {
      id: 2,
      name: "Entertainment",
    },
    {
      id: 3,
      name: "Sports",
    },
    {
      id: 4,
      name: "News",
    },
    {
      id: 5,
      name: "Music",
    },
    {
      id: 6,
      name: "Gaming",
    },
    {
      id: 7,
      name: "Movies",
    },
    {
      id: 8,
      name: "Technology",
    },
  ];

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} spacing="24px" mb="24px" alignItems="start">
        <Card mb="24px">
          <CardHeader justifyContent="space-between" mb="20px">
            <Text fontSize="lg" fontWeight="bold" mb="6px">
              Video Categories
            </Text>

            <AddCategory />
          </CardHeader>
          <Table variant="simple">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Id
                </Th>
                <Th color="gray.400">Name</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {categories.map(({ id, name }) => {
                return (
                  <Tr>
                    <Td pl="0px">
                      <Text fontSize="md" minWidth="100%">
                        {id}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" fontWeight="normal">
                        {name}
                      </Text>
                    </Td>
                    <Td pr="0">
                      <HStack justifyContent="flex-end">
                        <Button colorScheme="red" variant="outline" size="sm">
                          Delete
                        </Button>
                        <UpdateCategory name={name} />
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Card>
        <Card>
          <CardHeader mb="20px">
            <Text fontSize="lg" fontWeight="bold" mb="6px">
              Create New Video
            </Text>
          </CardHeader>

          <CardBody>
            <FormControl>
              <Stack spacing={4}>
                <Box>
                  <FormLabel fontWeight="normal">Video Title</FormLabel>
                  <Input type="text" />
                </Box>
                <Box>
                  <FormLabel fontWeight="normal">Video Category</FormLabel>
                  <Select>
                    {categories.map((category) => (
                      <option value={category.id}>{category.name}</option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <FormLabel fontWeight="normal">Video Source</FormLabel>
                  <Input type="text" />
                </Box>

                <Button
                  type="submit"
                  bg="red.300"
                  fontSize="16px"
                  color="white"
                  fontWeight="bold"
                  w="100%"
                  h="45"
                  _hover={{
                    boxShadow: "rgb(0 0 0 / 25%) 0px 2px 4px 0px",
                  }}
                  _active={{
                    bg: "red.400",
                  }}
                >
                  Add Video
                </Button>
              </Stack>
            </FormControl>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default VideosManager;
