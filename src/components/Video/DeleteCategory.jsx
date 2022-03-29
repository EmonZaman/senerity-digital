import { Button, useToast } from "@chakra-ui/react";
import { deleteCategory } from "api/apiCalls";
import React from "react";
import { useMutation, useQueryClient } from "react-query";

const DeleteCategory = ({ id }) => {
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
    <Button isLoading={isDeleting} colorScheme="red" variant="outline" size="sm" onClick={() => deleteCat(id)}>
      Delete
    </Button>
  );
};

export default DeleteCategory;
