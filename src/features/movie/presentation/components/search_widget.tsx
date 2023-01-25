import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SearchWidgetProps {
    onChangeStart: (data: any) => any;
    onChangeEnd: (data: any) => any;
    startDate: any;
    endDate: any;
    onClickSearch: () => any;
}

export const SearchWidget = (props: SearchWidgetProps) => {
    const { onChangeStart, onChangeEnd, startDate, endDate, onClickSearch } = props;
    return (
        <div className="p-10 bg-highlight h-15 rounded-md flex items-center">
            <h3 className="text-sm flex-none">Search by release date:</h3>
            <div className="pr-4"></div>
            <div className="grow">
                <DatePicker
                    selected={startDate}
                    onChange={(date:any) => onChangeStart(date)}
                    placeholderText="Start Date"
                    className="px-2 text-sm"
                />
                <div className="pb-2"></div>
                <DatePicker
                    selected={endDate}
                    onChange={(date:any) => onChangeEnd(date)}
                    placeholderText="End Date"
                    className="px-2 text-sm"
                />
            </div>
            <button onClick={onClickSearch} className="rounded-full bg-primary px-3 py-1 text-white flex-none">Search</button>
        </div>
    )
}