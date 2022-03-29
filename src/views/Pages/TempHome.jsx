import { Button, Container, HStack } from "@chakra-ui/react";
import { AuthContext } from "context/auth";
import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const TempHome = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [cookie, , removeCookie] = useCookies("user");

  const handleLogout = () => {
    removeCookie("user");
    dispatch({
      type: "LOGOUT",
    });
  };

  console.log(cookie.email);
  console.log(cookie.token);

  return (
    <Container maxW="container.lg">
      {!state.token ? (
        <HStack m={20}>
          <Link to="/signin">
            <Button colorScheme="blue">Sign in </Button>
          </Link>
          <Link to="/signup">
            <Button colorScheme="orange">Sign up </Button>
          </Link>
        </HStack>
      ) : (
        <HStack m={20}>
          <Button colorScheme="green" onClick={handleLogout}>
            Log Out
          </Button>
          <Link to="/admin">
            <Button colorScheme="teal">Admin Panel</Button>
          </Link>
        </HStack>
      )}
    </Container>
  );
};

export default TempHome;
