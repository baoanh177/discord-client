import toast from "react-hot-toast"

const showError = (errors: any = "Something went wrong") => {
    if(typeof errors == "string") {
        toast.error(errors)
    }else {
        Object.keys(errors).forEach(key => {
            toast.error(errors[key])
        })
    }
}

export default showError