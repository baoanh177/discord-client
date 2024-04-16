const setLocalStorage = (data: any) => {
    if(typeof data == "object") {
        Object.keys(data).forEach(key => {
            localStorage.setItem(key, JSON.stringify(data[key]))
        })
    }
}

const getLocalStorage = (...keys: string[]) => {
    const data: any = {}
    keys.forEach(key => {
        const jsonData = localStorage.getItem(key)
        if(jsonData) data[key] = JSON.parse(jsonData)
    })
    return data
}

export { setLocalStorage, getLocalStorage }