import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { deletePostApi } from "../services/AllPostServices";
import { useState } from "react";

export default function DeleteModal({ post, isOpen, onOpenChange }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeletePost() {
    setIsDeleting(true);
    const response = await deletePostApi(post._id);
    console.log(response);
    setIsDeleting(false);
  }
  return (
    <>
      <Modal
        onClick={(e) => e.stopPropagation()}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure? This action is permenant and cannot be reversed.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  isLoading={isDeleting}
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  isLoading={isDeleting}
                  color="primary"
                  onPress={handleDeletePost}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
