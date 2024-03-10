const StartPage = ({ params }: {params: { server: string }}) => {
    const { server } = params
    return <>
        <h1>{ server }</h1>
    </>
}

export default StartPage
