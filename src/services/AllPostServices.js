import axios from "axios";
const baseUrl = "https://linked-posts.routemisr.com/";

export async function getAllPostsApi() {
  try {
    const { data } = await axios.get(baseUrl + "posts", {
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
    console.log(error.response.data);
  }
}
