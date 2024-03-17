interface Channel {
    id: string
    name: string
    type: "text" | "voice"
    server: string
}