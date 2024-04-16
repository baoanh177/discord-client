type methodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface fetchHeaders {
    "Content-Type"?: string
    Authorization?: string
}

interface fetchOptions extends fetchHeaders {
    method: methodType
    body?: string
}

export const client = {
    SERVER_API: process.env.NEXT_PUBLIC_SERVER_API,
    tokens: { access: "", refresh: "" },
    setTokens(access: string = "", refresh: string = "") {
        this.tokens = { access, refresh }
    },
    async send(path: string, method: methodType = "GET", body?: any) {
        const options: fetchOptions = {
            method,
        }
        const headers: fetchHeaders = {}
        if (this.tokens.access) {
            headers.Authorization = `Bearer ${this.tokens.access}`
        }

        if (body) {
            headers["Content-Type"] = "application/json"
            options.body = JSON.stringify(body)
        }
        Object.assign(options, {
            headers,
        })
        const response = await fetch(`${this.SERVER_API}${path}`, options)
        const data = await response.json()
        return { response, data }
    },
    get(path: string) {
        return this.send(path)
    },
    post(path: string, body?: any) {
        return this.send(path, "POST", body)
    },
    put(path: string, body: any) {
        return this.send(path, "PUT", body)
    },
    patch(path: string, body: any) {
        return this.send(path, "PATCH", body)
    },
    delete(path: string) {
        return this.send(path, "DELETE")
    },
}
