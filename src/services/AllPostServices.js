import axios from "axios";
const baseUrl = "https://linked-posts.routemisr.com/";

export async function getAllPostsApi() {
  try {
    const { data } = await axios.get(baseUrl + "posts", {
      headers: { token: localStorage.getItem("token") },
      params: {
        page: 35,
        // page: data.paginationInfo,
      },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
export async function getSinglePostApi(id) {
  try {
    const { data } = await axios.get(baseUrl + "posts/" + id, {
      headers: { token: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
export async function addPost(formData) {
  try {
    const { data } = await axios.post(baseUrl + "posts", formData, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}

export async function deletePostApi(id) {
  try {
    const { data } = await axios.delete(baseUrl + "posts/" + id, {
      headers: { token: localStorage.getItem("token") },
    });
    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
