import React from "react";
import Comment from "./Comment";
import CardHeader from "./Post/CardHeader";
import PostBody from "./Post/PostBody";
import PostFooter from "./Post/PostFooter";
import PostActions from "./Post/PostActions";
export default function Post({ post }) {
  return (
    <div className="bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
      <div className="w-full h-16 items-center flex justify-between ">
        <CardHeader
          avatar={post.user.photo}
          header={post.user.name}
          subheader={post.createdAt}
        />
        <svg
          className="w-16"
          xmlns="http://www.w3.org/2000/svg"
          width={27}
          height={27}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b0b0b0"
          strokeWidth={2}
          strokeLinecap="square"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={1} />
          <circle cx={19} cy={12} r={1} />
          <circle cx={5} cy={12} r={1} />
        </svg>
      </div>
      <PostBody caption={post.body} image={post.image} />
      <PostFooter numOfComments={post.comment.length} />
      <PostActions />
      {post.comments[0] && <Comment comment={post.comments[0]} />}
    </div>
  );
}
