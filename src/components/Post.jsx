import Comment from "./Comment";
import CardHeader from "./Post/CardHeader";
import PostBody from "./Post/PostBody";
import PostFooter from "./Post/PostFooter";
import PostActions from "./Post/PostActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Input } from "@heroui/react";
export default function Post({ post, commentsLimit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleComments, setVisibleComments] = useState(5);
  const showMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleComments(visibleComments + 10);
      setIsLoading(false);
    }, 500);
  };

  const navigate = useNavigate();
  const openPostDetails = (e) => {
    if (e.currentTarget.id === "post-card") {
      navigate(`/post-details/${post._id}`);
    }
  };
  return (
    <div
      id="post-card"
      onClick={openPostDetails}
      className=" bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5"
    >
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
      <PostFooter numOfComments={post.comments.length} />
      <PostActions />
      <div className="flex">
        <Input />
      </div>
      {post.comments
        .slice(0, commentsLimit ?? visibleComments)
        .map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      {visibleComments < post.comments.length && !commentsLimit && (
        <Button
          isLoading={isLoading}
          onPress={showMore}
          className="block mx-auto"
          variant="faded"
        >
          Show More
        </Button>
      )}
    </div>
  );
}
