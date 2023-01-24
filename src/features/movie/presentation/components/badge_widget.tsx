interface BadgeWidgetProps {
    text: string;
}

export const BadgeWidget = (props: BadgeWidgetProps) => {
    const {text} = props;
    return (
        <div className={`rounded text-white bg-pengrey text-2sm py-[2px] px-1 mr-1 inline-block`}>{text}</div>
    );
} 