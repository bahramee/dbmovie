import { ArrowBack } from "@mui/icons-material"
import { Link } from "react-router-dom";

interface MovieTitleWidgetProps {
    title: string;
    tagline: string;
}

export const MovieTitleWidget = (props: MovieTitleWidgetProps) => {
    const { title, tagline } = props;
    return (
        <div className="p-10 bg-highlight h-15 rounded-md flex items-center">
            <Link to={'/'}>
                <button className="rounded-full bg-primary px-3 py-1 text-white flex-none"><ArrowBack fontSize="small" /><span className="pl-1">Back</span></button>
            </Link>
            <div className="pr-10"></div>
            <div className="grow">
                <h1 className="text-pen text-md text-bold">{title}</h1>
                <div className="text-sm">{tagline}</div>
            </div>

        </div>
    )
}