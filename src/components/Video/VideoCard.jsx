import { Badge, HStack, Icon, Text } from "@chakra-ui/react";
import Card from "components/Card/Card";
import React from "react";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";

export const VideoCard = ({ title, src, category }) => {
  return (
    <Card borderRadius="2">
      <HStack mb="20px" justifyContent="space-between" fontSize="xl" fontWeight="bold">
        <Text>{title}</Text>
        <Badge ml="1" fontSize="0.8em" colorScheme="red">
          {category}
        </Badge>
      </HStack>
      <ReactPlayer url={src} controls={true} width="100%" />
      <HStack mt="4">
        <Icon color="red.400" fontSize="26" as={AiFillLike} />
        <Text>330</Text>
      </HStack>
    </Card>
  );
};
