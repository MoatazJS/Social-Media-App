import { Button, Input } from "@heroui/react";
import React, { useState } from "react";

export default function CommentInput() {
  const [commentContent, setCommentContent] = useState("");
  function handleCommentSumbit() {
    console.log(commentContent);
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
