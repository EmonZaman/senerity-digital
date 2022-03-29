import {
  Flex,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { getUserCountData } from "api/apiCalls";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import CategoriesCard from "components/Video/CategoriesCard";
import CreateVideoCard from "components/Video/CreateVideoCard";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUser, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { useQueries, useQuery } from "react-query";

export default function Dashboard() {
  const iconblue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  const { data, isLoading } = useQuery("userCountData", getUserCountData);

  if (!data) {
    console.log(data);
  }

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" mb="24px">
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                  Total Users
                </StatLabel>
                <Flex>
                  {data && (
                    <StatNumber fontSize="lg" color={textColor}>
                      {data.total_users}
                    </StatNumber>
                  )}
                </Flex>
              </Stat>
              <IconBox h={"45px"} w={"45px"} bg={iconblue}>
                <FaUserFriends h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                  Total Pro Users
                </StatLabel>
                <Flex>
                  {data && (
                    <StatNumber fontSize="lg" color={textColor}>
                      {data.Total_pro_users}
                    </StatNumber>
                  )}
                </Flex>
              </Stat>
              <IconBox h={"45px"} w={"45px"} bg={iconblue}>
                <FaUser h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat>
                <StatLabel fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                  New Users
                </StatLabel>
                <Flex>
                  {data && (
                    <StatNumber fontSize="lg" color={textColor}>
                      {data.pro_users_today}
                    </StatNumber>
                  )}
                </Flex>
              </Stat>
              <Spacer />
              <IconBox h={"45px"} w={"45px"} bg={iconblue}>
                <FaUserPlus h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel fontSize="sm" color="gray.400" fontWeight="bold" pb=".1rem">
                  Total Income
                </StatLabel>
                <Flex>
                  {data && (
                    <StatNumber fontSize="lg" color={textColor}>
                      ${data.pro_users_today * 20}
                    </StatNumber>
                  )}
                </Flex>
              </Stat>
              <IconBox h={"45px"} w={"45px"} bg={iconblue}>
                <BsCurrencyDollar h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} spacing="24px" mb="24px" alignItems="start">
        <CategoriesCard />
        <CreateVideoCard />
      </SimpleGrid>
    </Flex>
  );
}
