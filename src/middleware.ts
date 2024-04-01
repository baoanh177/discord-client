import { NextResponse } from "next/server"

export default function middleware(request: any) {
    // const path = request.nextUrl.pathname
    // if(path.startsWith("/channels") && path != "/channels") {
    //     return NextResponse.redirect(`${request.nextUrl.origin}/channels`)
    // }
}

export const config = {
    matcher: ["/channels/:path*"]
}