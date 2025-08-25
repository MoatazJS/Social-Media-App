import { Button, Input } from "@heroui/react";
import React, { useState } from "react";
import { addComment, getCommentsApi } from "../../services/CommentService";

export default function CommentInput({ postId, callback }) {
  const [commentContent, setCommentContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function handleCommentSumbit() {
    setIsLoading(true);
    const response = await addComment(commentContent, postId);
    console.log(response);
    setIsLoading(false);
    getCommentsApi(postId);
    setCommentContent("");
    callback();
  }
  return (
    <div className="flex my-4" onClick={(e) => e.stopPropagation()}>
      <Input
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        variant="bordered"
        placeholder="Comment..."
      />
      <Button
        isLoading={isLoading}
        onPress={handleCommentSumbit}
        variant="flat"
        color="primary"
      >
        Comment
      </Button>
    </div>
  );
}
