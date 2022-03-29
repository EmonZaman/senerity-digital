import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  createIcon,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Input,
  Stack,
  Text,
  chakra,
  Textarea,
  useMediaQuery,
} from "@chakra-ui/react";
import UserNav from "components/Navbars/UserNav";
import React from "react";
import Fade from "react-reveal/Fade";
import "video-react/dist/video-react.css"; // import css
import bannerImg from "assets/svg/banner.svg";
import { NotificationIcon } from "components/Icons/Icons";

export default function Home() {
  const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");

  return (
    <Container maxW="container.xl">
      <UserNav />

      <Grid templateColumns={["1fr", "1fr", "1fr", "repeat(4, 1fr)"]} gap={5} my={20}>
        <GridItem bg="gray.50" colSpan={[2, 2, 2, 2]}>
          <Fade left duration={2000}>
            <AspectRatio ratio={16 / 9} bg="gray.50">
              <iframe
                src="https://drive.google.com/file/d/1AjtmuddxStXYYJsCXp-XkHkSSM5Bc12U/preview"
                allow="autoplay"
              ></iframe>
            </AspectRatio>
          </Fade>
        </GridItem>
        <GridItem
          p={isSmallerThan1280 ? 10 : 10}
          colSpan={2}
          bg="#F91517"
          color="white"
          display="flex"
          alignItems="center"
        >
          <Fade right cascade>
            <Text fontSize={["2xl", "3xl", "4xl", "4xl"]} lineHeight="1.2" letterSpacing={2}>
              Entertainment to expand the mind with free downloadable app.
            </Text>
          </Fade>
        </GridItem>
        <GridItem
          p={isSmallerThan1280 ? 10 : 10}
          colSpan={2}
          bg="#152A89"
          color="white"
          display="flex"
          alignItems="center"
        >
          <Fade left cascade>
            <Text fontSize={["2xl", "3xl", "4xl", "4xl"]} lineHeight="1.2">
              Please fill up the form for a month’s pre subscription and early excess.
            </Text>
          </Fade>
        </GridItem>
        <GridItem bg="gray.50" colSpan={[2, 2, 2, 2]}>
          <Fade right duration={2000}>
            <AspectRatio ratio={16 / 9} bg="gray.50">
              <iframe
                src="https://drive.google.com/file/d/1mhXqgb_gmDyqS34wu-CvyhJtozPDM0UG/preview  "
                allow="autoplay"
              ></iframe>
            </AspectRatio>
          </Fade>
        </GridItem>
      </Grid>

      <Box mt={[10, 10, 10, 20]} maxW="900px" mx="auto">
        <Fade bottom cascade>
          <Text mb={4} fontSize="3xl" lineHeight="1.2" fontWeight="semibold">
            How does one expand the thinking capacity of a challenged mind?
          </Text>
          <Text fontSize={["lg", "lg"]}>
            Well, our entertainment platform will focus on providing video content that is going to use ridiculous out
            of the box visual scenarios which are designed to motivate the fragile mind to ask the question why? And by
            doing so the hope is to expand a person’s cognitive brain usage to now give them the ability to think wider
            and more broadly surrounding the environments they now live in. The brain is encouraged quite organically to
            expand its overall capabilities towards a more independent style of thinking.
          </Text>
          <Text mb={2} fontSize={["lg", "lg"]}>
            And that in the end is our ultimate goal.
          </Text>
          <Text fontSize={["lg", "lg"]}>
            We are incredibly excited to bring to you and your loved ones many amazing stories and entertainment to
            expand the mind through a free downloadable app.
          </Text>
          <Text fontSize={["lg", "lg"]}>
            If you would like to follow our journey as we begin to launch our platform please provide your email below
            so we can keep you up to date. We will even add a month free subscription and early access.
          </Text>
        </Fade>

        <Box py={[6, 12]} mb={20}>
          <Stack bg="white" px={[2, 10]} py={[5, 10]} spacing={4} align="center">
            <form>
              <Stack spacing={6}>
                <Fade cascade bottom>
                  <Grid w="100%" templateColumns="1fr 1fr" gap="20px">
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Middle Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Grid>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>

                  <Grid w="100%" templateColumns="1fr 1fr" gap="20px">
                    <FormControl isRequired>
                      <FormLabel>Age</FormLabel>
                      <Input type="number" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Telephone</FormLabel>
                      <Input type="tel" />
                    </FormControl>
                  </Grid>
                  <FormControl isRequired>
                    <FormLabel>Country of residence</FormLabel>
                    <Input type="text" />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Comments</FormLabel>
                    <Textarea type="text" />
                  </FormControl>
                  <Button w="100%" colorScheme="blue">
                    Submit
                  </Button>
                </Fade>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
