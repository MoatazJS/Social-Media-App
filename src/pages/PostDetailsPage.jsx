import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePostApi } from "../services/AllPostServices";
import Post from "../components/Post";
import SkeletonAvatar from "../components/Skeleton";
export default function PostDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  async function getSinglePost() {
    const response = await getSinglePostApi(id);
    console.log(response);
    if (response.message === "success") {
      setPost(response.post);
    }
  }
  useEffect(() => {
    getSinglePost();
  }, []);

  return (
    <>
      <div className="max-w-3xl mx-auto">
        {post ? <Post post={post} /> : <SkeletonAvatar />}
      </div>
    </>
  );
}
