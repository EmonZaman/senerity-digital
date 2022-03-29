import { Avatar, Button, Flex, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import { tablesTableData } from "variables/general";

function Subscriptions() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Today's Subscriptions
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Name
                </Th>
                <Th color="gray.400">Email</Th>
                <Th color="gray.400">User since</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map(({ logo, name, email, domain, subdomain, status, date }) => {
                return (
                  <Tr>
                    <Td minWidth={{ sm: "250px" }} pl="0px">
                      <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                        <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
                        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
                          {name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Text fontSize="sm" color="gray.400" fontWeight="normal">
                        {email}
                      </Text>
                    </Td>

                    <Td>
                      <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                        {date}
                      </Text>
                    </Td>
                    <Td>
                      <Button colorScheme="red" variant="solid" size="sm">
                        Block
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Subscriptions;
