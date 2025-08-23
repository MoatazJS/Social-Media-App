import React, { useEffect, useState } from "react";
import { getAllPostsApi } from "../services/AllPostServices";
import Post from "../components/Post";
import SkeletonAvatar from "../components/Skeleton";
import CreatePost from "../components/CreatePost";

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function getAllPosts() {
    setIsLoading(true);
    const data = await getAllPostsApi();

    if (data.message === "success") {
      console.log(data);
      setPosts(data.posts.reverse());
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className="grid gap-3 max-w-2xl mx-auto ">
        <CreatePost getAllPosts={getAllPosts} />
        {isLoading ? (
          <>
            <SkeletonAvatar />
            <SkeletonAvatar />
            <SkeletonAvatar />
          </>
        ) : (
          posts.map((post) => (
            <Post key={post.id} post={post} commentsLimit={1} />
          ))
        )}
      </div>
    </>
  );
}
