import React from "react";

import CardHeader from "./Post/CardHeader";

export default function Comment({ comment }) {
  return (
    <div>
      <CardHeader
        avatar={comment.commentCreator.photo}
        header={comment.commentCreator.name}
        subheader={comment.createdAt}
      />
      <p className="ps-12 pt-2">{comment.content}</p>
    </div>
  );
}
