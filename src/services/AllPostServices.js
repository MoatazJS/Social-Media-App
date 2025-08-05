import axios from "axios";
const baseUrl = "https://linked-posts.routemisr.com/";
export async function getAllPosts() {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get(baseUrl + "posts", {
      headers: { token },
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
}
