import {
  chakra,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { createVideo, getCategories } from "api/apiCalls";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";

const CreateVideoCard = () => {
  const { data, isLoading } = useQuery("categories", getCategories);
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading: isCreatingVideo } = useMutation("createVideo", createVideo, {
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
        title: data.title,
        description: data.description,
        youtube_video_link: data.youtube_video_link,
        video_oid: data.video_oid,
        category: data.category,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardHeader mb="20px">
        <Text fontSize="lg" fontWeight="bold" mb="6px">
          Create New Video
        </Text>
      </CardHeader>

      <CardBody>
        <chakra.form flex={1} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="normal">Title</FormLabel>
              <Input type="text" {...register("title")} />
            </FormControl>
            <FormControl>
              <FormLabel fontWeight="normal">Description</FormLabel>
              <Textarea type="text" {...register("description")} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight="normal">Oid</FormLabel>
              <Input type="text" {...register("video_oid")} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontWeight="normal">Category</FormLabel>
              <Select {...register("category")}>
                {data &&
                  data.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="normal">Source</FormLabel>
              <Input type="url" {...register("youtube_video_link")} />
            </FormControl>
            <Button isLoading={isCreatingVideo} type="submit" colorScheme="blue" w="100%" mb="20px">
              Create Video
            </Button>
          </Stack>
        </chakra.form>
      </CardBody>
    </Card>
  );
};

export default CreateVideoCard;
