import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { createCategory } from "api/apiCalls";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

function AddCategory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation("createCategory", createCategory, {
    onSuccess: (data) => {
      toast({
        title: "Category Created",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
      queryClient.invalidateQueries("categories");
    },
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await mutateAsync({
        name: data.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Button rightIcon={<AddIcon />} size="sm" colorScheme="green" variant="outline" onClick={onOpen}>
        Add Category
      </Button>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Add Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Category Name</FormLabel>
                <Input ref={initialRef} placeholder="Category Name" {...register("name")} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <Button isLoading={isLoading} type="submit" colorScheme="blue" size="sm">
                  Save
                </Button>
                <Button size="sm" onClick={onClose}>
                  Cancel
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Box>
  );
}

export default AddCategory;
