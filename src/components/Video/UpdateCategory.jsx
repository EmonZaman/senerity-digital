import {
  Box,
  Button,
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
import { updateCategory } from "api/apiCalls";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

function UpdateCategory({ id, name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation("createCategory", updateCategory, {
    onSuccess: () => {
      toast({
        title: "Category Updated",
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
        id: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Button size="sm" colorScheme="blue" variant="outline" onClick={onOpen}>
        update
      </Button>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Update Category</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Category Name</FormLabel>
                <Input defaultValue={name} ref={initialRef} placeholder="Category Name" {...register("name")} />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button isLoading={isLoading} type="submit" colorScheme="blue" mr={3} size="sm">
                Save
              </Button>
              <Button size="sm" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Box>
  );
}

export default UpdateCategory;
