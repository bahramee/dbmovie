import star from '../../../../assets/images/star.png'

interface VoteWidgetProps {
    vote: number;
}

export const VoteWidget = (props: VoteWidgetProps) => {
    const { vote } = props;
    return (
        <div className="bg-pengrey rounded inline-block px-1 flex items-center w-12">
            <img className="inline-block" width={16} height={16} src={star} alt="" />
            <div className="inline-block pl-2">{ }</div>
            <span className="text-white inline text-sm">{vote}</span>
        </div>
    );

}