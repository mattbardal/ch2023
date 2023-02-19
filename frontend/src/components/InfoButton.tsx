import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function InfoButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="info"
        size="lg"
        borderRadius="full"
        p="2px"
        bg="boxGradient"
        color="white"
        shadow="lg"
        icon={<AiOutlineInfoCircle size="lg" />}
        onClick={onOpen}
        _hover={{
          color: "#8377D1",
          bg: "white",
        }}
      />
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>Info on the Gini Index</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            The Gini Index/Coefficient (or Gini Ratio) is a measure of
            inequality of income or wealth. It can either be on a scale of 0-1
            or 0%-100% where 0 represents perfect equality of wealth or income
            and 1 (or 100%) represents perfect inequality.
          </ModalBody>
          <ModalFooter>
            <Button
              shadow="lg"
              _hover={{
                bg: "boxGradient",
                color: "white",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
