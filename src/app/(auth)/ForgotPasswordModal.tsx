"use client"
import React from "react"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react"

export default function ForgotPasswordModal({
    email = "",
    onClose,
    isOpen,
}: {
    email: any
    onClose: any
    isOpen: boolean
}) {
    return (
        <div className="flex flex-col gap-2">
            <Modal isOpen={isOpen} placement="center" hideCloseButton={true}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        Instructions Sent
                    </ModalHeader>
                    <ModalBody>
                        <p>
                            We sent instructions to change your password to 
                            <b> {email}</b>, please check both your inbox and
                            spam folder.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onPress={onClose}>
                            Okay
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
