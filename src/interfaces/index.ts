interface Channel {
    id: string
    name: string
    type: "text" | "voice"
    server: string
}

interface Server {
    id: number
    image?: string
    isPublic?: boolean
    name: string
    ownerId: number
    status: boolean
}