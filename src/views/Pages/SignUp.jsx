import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  chakra,
  Input,
  Link,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { signup } from "api/apiCalls";
import { AuthContext } from "context/auth";
import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link as RouteLink, useHistory } from "react-router-dom";

function SignUp() {
  const titleColor = "blue.500";
  const textColor = useColorModeValue("gray.400", "white");
  const bgColor = useColorModeValue("white", "gray.700");

  const history = useHistory();
  const [, setCookie] = useCookies(["user"]);
  const { dispatch } = useContext(AuthContext);

  const { mutateAsync, isLoading } = useMutation("register", signup, {
    onSuccess: (data) => {
      toast({ title: "Successfully registered", status: "success" });
      history.push("/signin");
    },
    onError: (err) => {
      console.log(err.message);
      toast({
        description: err.message,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    },
  });
  const toast = useToast();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await mutateAsync({
        username: data.username,
        email: data.email,
        password: data.password,
        password2: data.password2,
      });
    } catch (error) {}
  };

  return (
    <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          mt="100px"
          direction="column"
          w="445px"
          background="transparent"
          p="40px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="lg"
        >
          <Text color={titleColor} fontSize="3xl" fontFamily="Roboto Mono" fontWeight="bold">
            Create your account
          </Text>
          <Text mb="36px" color={textColor} fontWeight="semibold" fontSize="16px">
            Enter your information to sign up
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Username
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                type="text"
                placeholder="Your full name"
                mb="24px"
                size="lg"
                {...register("username")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                type="email"
                placeholder="Your email address"
                mb="24px"
                size="lg"
                {...register("email")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                type="password"
                placeholder="Your password"
                mb="24px"
                size="lg"
                {...register("password")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Confirm Password
              </FormLabel>
              <Input
                fontSize="sm"
                ms="4px"
                type="password"
                placeholder="Confirm password"
                mb="24px"
                size="lg"
                {...register("password2")}
              />
            </FormControl>

            <Button isLoading={isLoading} type="submit" colorScheme="blue" w="100%" size="md" mb="20px">
              SIGN UP
            </Button>
          </form>
          {/* <Text textAlign="center" fontSize="sm" color="gray.600" fontWeight="bold" mb="10px">
              OR
            </Text>
            <GoogleButton
              style={{ width: "100%", marginBottom: "20px" }}
              label="Sign up with Google"
              onClick={() => {
                console.log("Google button clicked");
              }}
            /> */}
          <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <chakra.span color={titleColor} ms="5px" fontWeight="bold">
                <RouteLink to="/signin">Sign In</RouteLink>
              </chakra.span>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
