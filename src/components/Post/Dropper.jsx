import React, { useContext } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  useDisclosure,
} from "@heroui/react";
import { authContext } from "../../contexts/AuthContext";
import DeleteModal from "../DeleteModal";

export default function Dropper({ post, callback }) {
  const { userData } = useContext(authContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {post.user._id === userData?._id && (
        <Dropdown onClick={(e) => e.stopPropagation()}>
          <DropdownTrigger>
            <svg
              className="w-fit rotate-90 outline-none cursor-pointer"
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
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit Post</DropdownItem>
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              onPress={onOpen}
            >
              Delete Post
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
      <DeleteModal
        callback={callback}
        post={post}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
//
