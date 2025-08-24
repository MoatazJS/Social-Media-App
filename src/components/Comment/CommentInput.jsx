import { Button, Input } from "@heroui/react";
import React, { useState } from "react";
import { addComment } from "../../services/CommentService";

export default function CommentInput({ postId }) {
  const [commentContent, setCommentContent] = useState("");
  async function handleCommentSumbit() {
    const response = await addComment(commentContent, postId);
    console.log(response);
  }
  return (
    <div className="flex my-4" onClick={(e) => e.stopPropagation()}>
      <Input
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        variant="bordered"
        placeholder="Comment..."
      />
      <Button onPress={handleCommentSumbit} variant="flat" color="primary">
        Comment
      </Button>
    </div>
  );
}
