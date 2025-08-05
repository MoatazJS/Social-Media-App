import React from "react";
import userPhoto from "/src/assets/user-photo.jpg";
import { Skeleton } from "@heroui/react";

export default function SkeletonComment({ comment }) {
  return (
    <div className="my-3">
      <div className="flex items-center">
        <Skeleton className="w-10 h-10 rounded-full mr-3">
          <div className="w-10 h-10 rounded-full bg-default-300" />
        </Skeleton>
        <div className="flex flex-col gap-1">
          <Skeleton className="w-24 h-4 rounded-md">
            <div className="h-4 w-24 rounded-md bg-default-200" />
          </Skeleton>
          <Skeleton className="w-16 h-3 rounded-md">
            <div className="h-3 w-16 rounded-md bg-default-200" />
          </Skeleton>
        </div>
      </div>
      <Skeleton className="w-11/12 h-4 mt-2 rounded-md ml-12">
        <div className="h-4 w-full rounded-md bg-default-200" />
      </Skeleton>
    </div>
  );
}
