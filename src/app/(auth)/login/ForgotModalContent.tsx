const ForgotModalContent = ({ email }: { email?: string }) => {
    return <>
        <p>
            We sent instructions to change your password to 
            <b> {email}</b>, please check both your inbox and
            spam folder.
        </p>
    </>
}

export default ForgotModalContent