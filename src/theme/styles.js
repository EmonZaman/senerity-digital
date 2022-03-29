import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
        overflowY: "scroll",
      },
      "html, body": {
        fontFamily: "MyriadPro",
        bg: mode("gray.50", "gray.800")(props),
      },
      "*": {
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "0",
        },
        "&::-webkit-scrollbar-thumb": {
          boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "blue.500",
        },
      },
    }),
  },
};
