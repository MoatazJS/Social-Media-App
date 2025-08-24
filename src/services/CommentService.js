import axios from "axios";
const baseUrl = "https://linked-posts.routemisr.com/";

export async function addComment(commentContent, postId) {
  try {
    const { data } = await axios.post(
      baseUrl + "comments",
      {
        content: commentContent,
        post: postId,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );

    console.log(data);

    return data;
  } catch (error) {
    return error.response ? error.response.data.error : error.message;
  }
}
