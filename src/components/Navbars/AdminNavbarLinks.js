import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ProfileIcon } from "components/Icons/Icons";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import { AuthContext } from "context/auth";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import routes from "routes.js";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  const [, , removeCookie] = useCookies("user");
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    removeCookie("user");
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };
  let mainText = useColorModeValue("gray.700", "gray.200");
  let navbarIcon = useColorModeValue("gray.500", "gray.200");

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();
  return (
    <Flex w={{ sm: "100%", md: "auto" }} alignItems="center" flexDirection="row">
      <NavLink to="/">
        <Button
          px="0px"
          color={navbarIcon}
          variant="transparent-with-icon"
          rightIcon={<ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />}
        >
          <Text display={{ sm: "none", md: "flex" }} onClick={handleLogout}>
            Log Out
          </Text>
        </Button>
      </NavLink>
      <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        // logo={logo}
        {...rest}
      />
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
