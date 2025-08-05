import React, { useEffect, useState } from "react";
import { getAllPostsApi } from "../services/AllPostServices";
import Post from "../components/Post";
import SkeletonAvatar from "../components/Skeleton";

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  async function getAllPosts() {
    setIsLoading(true);
    const data = await getAllPostsApi();

    if (data.message === "success") {
      setPosts(data.posts);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className="grid gap-3 max-w-2xl mx-auto ">
        {isLoading ? (
          <>
            <SkeletonAvatar />;
            <SkeletonAvatar />;
            <SkeletonAvatar />;
          </>
        ) : (
          posts.map((post) => <Post key={post.id} post={post} />)
        )}
      </div>
    </>
  );
}
