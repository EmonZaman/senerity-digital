import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "context/auth";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Fonts } from "theme/foundations/fonts";
import theme from "theme/theme";
import App from "./app";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
