import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

import logo from "assets/logo/logo2.jpeg";
import { AuthContext } from "context/auth";
import { useCookies } from "react-cookie";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text my={{ base: 2, md: 0 }} mr={{ base: 0, md: isLast ? 0 : 8 }} display="block" {...rest}>
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width="24" fill="black" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="black">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const UserNav = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);
  const [cookie, , removeCookie] = useCookies("user");
  const { state, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    removeCookie("user");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={8} pt={8} color="black" {...props}>
      <Flex align="center">
        <Image src={logo} h={["60px", "100px"]} />
        <Text fontSize={["lg", "lg", "xl", "2xl"]} fontFamily="Roboto Mono" fontWeight="bold" color="#152A89">
          Serenity Digital
        </Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box display={{ base: show ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={{ base: "column", md: "row" }}
        >
          {/* <MenuItem to="/">Home</MenuItem> */}
          {state.token ? (
            <>
              {state.is_superuser && <MenuItem to="/admin">Admin Panel</MenuItem>}
              <Button colorScheme="red" size="sm" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <MenuItem to="/signup" isLast>
              <Button size="sm" variant="outline" colorScheme="blue">
                Create Account
              </Button>
            </MenuItem>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserNav;
