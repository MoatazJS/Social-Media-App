import React from "react";
import { Card, Skeleton } from "@heroui/react";
import SkeletonComment from "./Comment/CommentSkeleton";

export default function SkeletonAvatar() {
  return (
    // <Card className="w-[200px] space-y-5 p-4" radius="lg">
    //   <Skeleton className="rounded-lg">
    //     <div className="h-24 rounded-lg bg-default-300" />
    //   </Skeleton>
    //   <div className="space-y-3">
    //     <Skeleton className="w-3/5 rounded-lg">
    //       <div className="h-3 w-3/5 rounded-lg bg-default-200" />
    //     </Skeleton>
    //     <Skeleton className="w-4/5 rounded-lg">
    //       <div className="h-3 w-4/5 rounded-lg bg-default-200" />
    //     </Skeleton>
    //     <Skeleton className="w-2/5 rounded-lg">
    //       <div className="h-3 w-2/5 rounded-lg bg-default-300" />
    //     </Skeleton>
    //   </div>
    // </Card>
    <div className="bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5">
      {/* Header: avatar + name/date + menu dots */}
      <div className="w-full h-16 items-center flex justify-between ">
        <div className="flex items-center gap-3">
          <Skeleton className="rounded-full w-10 h-10">
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
        <Skeleton className="w-6 h-6">
          <div className="w-6 h-6 rounded-full bg-default-300" />
        </Skeleton>
      </div>

      {/* Body text */}
      <div className="space-y-2 mt-2">
        <Skeleton className="w-full h-4 rounded-md">
          <div className="h-4 w-full rounded-md bg-default-200" />
        </Skeleton>
        <Skeleton className="w-5/6 h-4 rounded-md">
          <div className="h-4 w-5/6 rounded-md bg-default-200" />
        </Skeleton>
      </div>

      {/* Image placeholder */}
      <Skeleton className="w-full h-40 object-cover mt-2 rounded-md">
        <div className="w-full h-40 rounded-md bg-default-300" />
      </Skeleton>

      {/* Reaction bar (likes/comments counts) */}
      <div className="w-full h-8 flex items-center px-3 my-3">
        <div className="flex gap-1">
          <Skeleton className="w-5 h-5 rounded-full">
            <div className="w-5 h-5 rounded-full bg-default-300" />
          </Skeleton>
          <Skeleton className="w-5 h-5 rounded-full -ml-1">
            <div className="w-5 h-5 rounded-full bg-default-300" />
          </Skeleton>
        </div>
        <div className="w-full flex justify-between ml-3">
          <Skeleton className="w-6 h-4 rounded-md">
            <div className="h-4 w-6 rounded-md bg-default-200" />
          </Skeleton>
          <Skeleton className="w-20 h-4 rounded-md">
            <div className="h-4 w-20 rounded-md bg-default-200" />
          </Skeleton>
        </div>
      </div>

      {/* Buttons row */}
      <div className="grid grid-cols-3 w-full px-5 my-3 border-t border-divider pt-4 gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-row justify-center items-center w-full space-x-3"
          >
            <Skeleton className="w-5 h-5">
              <div className="w-5 h-5 rounded bg-default-300" />
            </Skeleton>
            <Skeleton className="w-16 h-5 rounded-md">
              <div className="h-5 w-16 rounded-md bg-default-200" />
            </Skeleton>
          </div>
        ))}
      </div>

      {/* Single comment preview */}
      <SkeletonComment />
    </div>
  );
}
