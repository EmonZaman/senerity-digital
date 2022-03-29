import { Badge, Box, Flex, FormLabel, HStack, Select, SimpleGrid, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import React from "react";
import ReactPlayer from "react-player";

function Videos() {
  const categories = [
    {
      id: 1,
      name: "All",
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
      <Box mb="24px" maxW="200px">
        <FormLabel fontWeight="bold">Filter Video</FormLabel>
        <Select>
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </Select>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 2 }} spacing="24px" mb="24px">
        <VideoCard
          title="How to create a new video"
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          category="Blog"
        />
        <VideoCard
          title="How to create a new video"
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          category="Blog"
        />
      </SimpleGrid>
    </Flex>
  );
}

export default Videos;

const VideoCard = ({ title, src, category }) => {
  return (
    <Card>
      <HStack mb="20px" justifyContent="space-between" fontSize="xl" fontWeight="bold">
        <Text>{title}</Text>
        <Badge ml="1" fontSize="0.8em" colorScheme="red">
          {category}
        </Badge>
      </HStack>
      <ReactPlayer url={src} controls={true} width="100%" />
    </Card>
  );
};
