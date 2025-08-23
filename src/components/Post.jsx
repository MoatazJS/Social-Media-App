import Comment from "./Comment";
import CardHeader from "./Post/CardHeader";
import PostBody from "./Post/PostBody";
import PostFooter from "./Post/PostFooter";
import PostActions from "./Post/PostActions";
import { useNavigate } from "react-router-dom";
export default function Post({ post, commentsLimit }) {
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
      {post.comments.slice(0, commentsLimit).map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
