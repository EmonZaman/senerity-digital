/*eslint-disable*/
import { Text } from "@chakra-ui/react";
import React from "react";

export default function Footer(props) {
  return (
    <Text align="center" color="gray.400" my="20px">
      &copy; {1900 + new Date().getYear()} . All Right Reserved
    </Text>
  );
}
