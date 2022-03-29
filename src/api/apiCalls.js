import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://django-testing-app-check.herokuapp.com/api",
});

export const login = async ({ email, password }) => {
  try {
    const { data } = await Axios.post("/accounts/v1/login/", { email, password });
    return data;
  } catch (error) {
    throw Error("User authentication failed");
  }
};

export const signup = async ({ username, email, password, password2 }) => {
  try {
    const { data } = await Axios.post("/accounts/v1/register/", { username, email, password, password2 });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getCategories = async () => {
  try {
    const { data } = await Axios.get("/category/v1/categories/");
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createCategory = async ({ name }) => {
  try {
    const { data } = await Axios.post("/category/v1/categories/", { name });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const updateCategory = async ({ name, id }) => {
  try {
    const { data } = await Axios.put(`/category/v1/categories/${id}/`, { name });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const deleteCategory = async ({ id }) => {
  try {
    const { data } = await Axios.delete(`/category/v1/categories/${id}/`);
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const createVideo = async ({
  title,
  description,
  video_upload_media,
  youtube_video_link,
  video_oid,
  category,
}) => {
  try {
    const { data } = await Axios.post(`/category/v1/video/`, {
      title,
      description,
      video_upload_media,
      youtube_video_link,
      video_oid,
      category,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getUserCountData = async () => {
  try {
    const { data } = await Axios.get("/category/v1/count/", {
      params: {
        total_users: true,
        pro_user_today: true,
        total_pro_user: true,
      },
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await Axios.get("/accounts/v1/userlist/");
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
