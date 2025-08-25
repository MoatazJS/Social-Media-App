import Comment from "./Comment/Comment";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import CardHeader from "./Post/CardHeader";
import PostBody from "./Post/PostBody";
import PostFooter from "./Post/PostFooter";
import PostActions from "./Post/PostActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Input } from "@heroui/react";
import CommentInput from "./Comment/CommentInput";
import Dropper from "./Post/Dropper";
export default function Post({ post, commentsLimit, callback }) {
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
        <Dropper post={post} />
      </div>
      <PostBody caption={post.body} image={post.image} />
      <PostFooter numOfComments={post.comments.length} />
      <PostActions />
      <CommentInput callback={callback} postId={post._id} />
      {post.comments
        .slice(0, commentsLimit ?? visibleComments)
        .map((comment) => (
          <Comment key={comment._id} comment={comment} />
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
