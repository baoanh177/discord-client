"use client"
import React, { ReactNode } from "react"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@nextui-org/react"
import Link from "next/link"

export default function CustomModal({
    title,
    content,
    redirectPath,
    redirectContent,
    onClose,
    isOpen,
}: {
    title: string
    content: ReactNode | string
    redirectPath?: string
    redirectContent?: string
    onClose?: any
    isOpen: boolean
}) {
    return (
        <div className="flex flex-col gap-2">
            <Modal isOpen={isOpen} placement="center" hideCloseButton={true}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">
                        {title}
                    </ModalHeader>
                    <ModalBody>
                        {content}
                    </ModalBody>
                    <ModalFooter>
                        {redirectPath ?
                        <Link href={redirectPath} scroll={false}>
                            <Button color="success">
                                {redirectContent || "Okay"}
                            </Button>
                        </Link>
                        : (
                            <Button color="primary" onPress={onClose}>
                                Okay
                            </Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
