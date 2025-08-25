import React from "react";

import CardHeader from "../Post/CardHeader";
import { Divider } from "@heroui/react";
import DividerComponent from "../DividerComponent";

export default function Comment({ comment }) {
  return (
    <div className="py-3">
      <CardHeader
        avatar={comment.commentCreator.photo}
        header={comment.commentCreator.name}
        subheader={comment.createdAt}
      />
      <p className="ps-12">{comment.content}</p>
    </div>
  );
}
