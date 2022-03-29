import {
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { login } from "api/apiCalls";
import { AuthContext } from "context/auth";
import React, { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { Link as RouteLink } from "react-router-dom";

const SignIn = () => {
  const titleColor = "blue.500";
  const textColor = "gray.400";
  const history = useHistory();
  const [, setCookie] = useCookies(["user"]);
  const { dispatch } = useContext(AuthContext);

  const { mutateAsync, isLoading } = useMutation("login", login, {
    onSuccess: (data) => {
      dispatch({
        type: "LOGIN",
        value: {
          token: data.token,
          is_superuser: data.is_superuser,
        },
      });
      setCookie("user", { ...data });
      history.push("/");
    },
    onError: (err) => {
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
        email: data.email,
        password: data.password,
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
          bg="white"
          boxShadow="lg"
        >
          <Text color={titleColor} fontSize="3xl" fontFamily="Roboto Mono" fontWeight="bold">
            Welcome Back
          </Text>
          <Text mb="36px" color={textColor} fontWeight="semibold" fontSize="16px">
            Enter your email and password to sign in
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input
                mb="24px"
                fontSize="sm"
                type="email"
                placeholder="Your email address"
                size="lg"
                defaultValue="shibli1@gmail.com"
                {...register("email")}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input
                mb="24px"
                fontSize="sm"
                type="password"
                placeholder="Your password"
                size="lg"
                defaultValue="shibli1"
                {...register("password")}
              />

              <Button isLoading={isLoading} type="submit" colorScheme="blue" w="100%" size="md" mb="20px">
                SIGN IN
              </Button>
            </FormControl>
          </form>
          <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
            <Text color={textColor} fontWeight="medium">
              Don't have an account?
              <chakra.span color={titleColor} ms="5px" fontWeight="bold">
                <RouteLink to="/signup">Sign Up</RouteLink>
              </chakra.span>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
