import {
  Avatar,
  Badge,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { getUsers } from "api/apiCalls";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import LoadingSpinner from "components/Spinner/LoadingSpinner";
import { DateTime } from "luxon";
import React from "react";
import { useQuery } from "react-query";
import { tablesTableData } from "variables/general";

function UsersList() {
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { data, isLoading } = useQuery("users", getUsers);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Users
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
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <Tbody>
                {data.map(({ logo, username, email, date_joined }) => {
                  return (
                    <Tr>
                      <Td minWidth={{ sm: "250px" }} pl="0px">
                        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
                          <Flex direction="column">
                            <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
                              {username}
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>
                        <Text fontSize="sm" color="gray.400" fontWeight="normal">
                          {email}
                        </Text>
                      </Td>

                      <Td>
                        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                          {DateTime.fromISO(date_joined).toFormat("ff")}
                          {/* {date_joined} */}
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
            )}
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default UsersList;
