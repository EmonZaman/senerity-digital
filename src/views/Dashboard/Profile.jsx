import { Avatar, Box, Button, Flex, Grid, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "assets/img/avatars/avatar4.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { FaCube, FaFacebook, FaInstagram, FaPenFancy, FaTwitter } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Profile() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue("white", "rgba(255, 255, 255, 0.31)");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="22px" alignItems="start">
        <Box borderRadius="15px" px="0px" display="flex" flexDirection="column" justifyContent="center" align="center">
          <Flex
            direction={{ sm: "column", md: "row" }}
            maxH="330px"
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            borderRadius="20px"
          >
            <Flex
              align="center"
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
              p="15px"
            >
              <Avatar me={{ md: "22px" }} src={avatar4} w="80px" h="80px" borderRadius="15px" />
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  Esthera Jackson
                </Text>
                <Text fontSize={{ sm: "sm", md: "md" }} color={emailColor} fontWeight="semibold">
                  esthera@simmmple.com
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box />
        <Card p="16px">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult
                paths, choose the one more painful in the short term (pain avoidance is creating an illusion of
                equality).
              </Text>
              <Flex align="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Full Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Esthera Jackson
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Mobile:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  (44) 123 1234 123
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Email:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  esthera@simmmple.com
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Location:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  United States
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="md" color={textColor} fontWeight="bold" me="10px">
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link href="#" color="red.300" fontSize="lg" me="10px" _hover={{ color: "red.300" }}>
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link href="#" color="red.300" fontSize="lg" me="10px" _hover={{ color: "red.300" }}>
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link href="#" color="red.300" fontSize="lg" me="10px" _hover={{ color: "red.300" }}>
                    <Icon as={FaTwitter} />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Profile;
