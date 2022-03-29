import { Button, Center, HStack, Table, Tbody, Td, Text, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import { deleteCategory } from "api/apiCalls";
import { getCategories } from "api/apiCalls";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import LoadingSpinner from "components/Spinner/LoadingSpinner";
import AddCategory from "components/Video/AddCategory";
import UpdateCategory from "components/Video/UpdateCategory";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import DeleteCategory from "./DeleteCategory";

function CategoriesCard() {
  const { data, isLoading } = useQuery("categories", getCategories);
  const toast = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading: isDeleting } = useMutation(deleteCategory, {
    onSuccess: (data) => {
      toast({
        title: "Category Deleted",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      queryClient.invalidateQueries("categories");
    },
  });

  const deleteCat = async (id) => {
    mutateAsync({
      id: id,
    });
  };

  return (
    <Card mb="24px">
      <CardHeader justifyContent="space-between" mb="20px">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Video Categories
        </Text>

        <AddCategory />
      </CardHeader>
      {isLoading ? (
        <Center p={30}>
          <LoadingSpinner />
        </Center>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              <Th pl="0px" color="gray.400">
                Id
              </Th>
              <Th color="gray.400">Name</Th>
              <Th></Th>
            </Tr>
          </Thead>

          <Tbody>
            {data &&
              data.map(({ id, name }) => {
                return (
                  <Tr key={id}>
                    <Td pl="0px">
                      <Text fontSize="md" minWidth="100%">
                        {id}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm" fontWeight="normal">
                        {name}
                      </Text>
                    </Td>
                    <Td pr="0">
                      <HStack justifyContent="flex-end">
                        <DeleteCategory id={id} />
                        <UpdateCategory name={name} id={id} />
                      </HStack>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      )}
    </Card>
  );
}

export default CategoriesCard;
