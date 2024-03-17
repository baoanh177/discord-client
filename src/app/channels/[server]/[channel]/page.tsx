import TextChannel from "~/app/components/common/TextChannel"

const ChannelPage = ({ params }: { params: { channel: string } }) => {
    const { channel } = params
    return <>
        <div className="grow">
            <TextChannel />
        </div>
    </>
}

export default ChannelPage