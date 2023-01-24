import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface PaginationWidgetProps {
    currentPage: number;
    pageCount: number;
    onClickPaginate: (page: number) => void
    onClickNext: () => void
    onClickPrev: () => void
}

const PaginationWidget = ({ currentPage, pageCount, onClickPaginate, onClickNext, onClickPrev }: PaginationWidgetProps) => {
    const makePagination = () => {
        const paginateActiveStyle = "bg-primary text-white";
        const normalStyle = "p-2 mx-3 cursor-pointer border border-transparent border-2 hover:border-primary border- rounded-full w-9 h-9 block flex justify-center items-center";
        if (pageCount <= 4) {
            const underAgePaginateWidgets = [];
            for (let i = 1; i <= pageCount; i++) {
                underAgePaginateWidgets.push(< span onClick={() => onClickPaginate(i)} className={`${normalStyle} ${i === currentPage ? paginateActiveStyle : ''}`}>
                    <span className="">{i}</span>
                </span >);

            }
            return <div className="px-2 py-10 flex justify-center items-center">
                {underAgePaginateWidgets}
            </div>
            // else if (currentPage === 2) {
            //     return <div className="px-2 py-10 flex justify-center items-center">
            //         <span onClick={() => onClickPaginate(1)} className={`${normalStyle}`}>
            //             <span className="">{1}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(2)} className={`${normalStyle} ${paginateActiveStyle}`}>
            //             <span className="">{2}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(3)} className={`${normalStyle}`}>
            //             <span className="">{3}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(4)} className={`${normalStyle}`}>
            //             <span className="">{4}</span>
            //         </span>
            //     </div>
            // }
            // else if (currentPage === 3) {
            //     return <div className="px-2 py-10 flex justify-center items-center">
            //         <span onClick={() => onClickPaginate(1)} className={`${normalStyle}`}>
            //             <span className="">{1}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(2)} className={`${normalStyle}`}>
            //             <span className="">{2}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(3)} className={`${normalStyle} ${paginateActiveStyle}`}>
            //             <span className="">{3}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(4)} className={`${normalStyle}`}>
            //             <span className="">{4}</span>
            //         </span>
            //     </div>
            // }
            // else if (currentPage === 4) {
            //     return <div className="px-2 py-10 flex justify-center items-center">
            //         <span onClick={() => onClickPaginate(1)} className={`${normalStyle}`}>
            //             <span className="">{1}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(2)} className={`${normalStyle}`}>
            //             <span className="">{2}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(3)} className={`${normalStyle}`}>
            //             <span className="">{3}</span>
            //         </span>
            //         <span onClick={() => onClickPaginate(4)} className={`${normalStyle} ${paginateActiveStyle}`}>
            //             <span className="">{4}</span>
            //         </span>
            //     </div>
            // }
        } else {
            if (currentPage === 1) {
                return <div className="px-2 py-10 flex justify-center items-center">
                    <span onClick={() => onClickPaginate(1)} className={`${normalStyle} ${paginateActiveStyle}`}>
                        <span className="">{currentPage}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage + 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage + 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage + 2)} className={`${normalStyle}`}>
                        <span className="">{currentPage + 2}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage + 3)} className={`${normalStyle}`}>
                        <span className="">{currentPage + 3}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(pageCount)} className={`${normalStyle}`}>
                        <span className="">{pageCount}</span>
                    </span>
                </div>
            }
            else if (currentPage === 2) {
                return <div className="px-2 py-10 flex justify-center items-center">
                    <span onClick={() => onClickPaginate(currentPage - 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage - 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage)} className={`${normalStyle} ${paginateActiveStyle}`}>
                        <span className="">{currentPage}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage + 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage + 1}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(pageCount)} className={`${normalStyle}`}>
                        <span className="">{pageCount}</span>
                    </span>
                </div>
            }
            else if (currentPage === 3) {
                return <div className="px-2 py-10 flex justify-center items-center">
                    <span onClick={() => onClickPaginate(currentPage - 2)} className={`${normalStyle}`}>
                        <span className="">{currentPage - 2}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage - 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage - 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage)} className={`${normalStyle} ${paginateActiveStyle}`}>
                        <span className="">{currentPage}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage + 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage + 1}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(pageCount)} className={`${normalStyle}`}>
                        <span className="">{pageCount}</span>
                    </span>
                </div>
            }
            else if (currentPage === pageCount) {
                return <div className="px-2 py-10 flex justify-center items-center">
                    <span onClick={() => onClickPaginate(1)} className={`${normalStyle}`}>
                        <span className="">{1}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(currentPage - 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage - 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage)} className={`${normalStyle} ${paginateActiveStyle}`}>
                        <span className="">{currentPage}</span>
                    </span>
                </div>
            }
            else if (currentPage === pageCount - 1) {
                return <div className="px-2 py-10 flex justify-center items-center">
                    <span onClick={() => onClickPaginate(1)} className={`${normalStyle}`}>
                        <span className="">{1}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(currentPage - 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage - 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage)} className={`${normalStyle} ${paginateActiveStyle}`}>
                        <span className="">{currentPage}</span>
                    </span>
                    <span onClick={() => onClickPaginate(pageCount)} className={`${normalStyle}`}>
                        <span className="">{pageCount}</span>
                    </span>
                </div>
            }
            else if (currentPage === pageCount - 2) {
                return <div className="px-2 py-10 flex justify-center items-center">
                    <span onClick={() => onClickPaginate(1)} className={`${normalStyle}`}>
                        <span className="">{1}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(currentPage - 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage - 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage)} className={`${normalStyle} ${paginateActiveStyle}`}>
                        <span className="">{currentPage}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage + 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage + 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(pageCount)} className={`${normalStyle}`}>
                        <span className="">{pageCount}</span>
                    </span>
                </div>
            }
            else if (currentPage < pageCount - 2 || currentPage > 3 && pageCount > 4) {
                return <div className="px-2 py-10 flex justify-center items-center">
                    <span onClick={() => onClickPaginate(1)} className={`${normalStyle}`}>
                        <span className="">{1}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(currentPage - 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage - 1}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage)} className={`${normalStyle} ${paginateActiveStyle}`}>
                        <span className="">{currentPage}</span>
                    </span>
                    <span onClick={() => onClickPaginate(currentPage + 1)} className={`${normalStyle}`}>
                        <span className="">{currentPage + 1}</span>
                    </span>
                    ...
                    <span onClick={() => onClickPaginate(pageCount)} className={`${normalStyle}`}>
                        <span className="">{pageCount}</span>
                    </span>
                </div>
            }
        }

    }

    const next = () => {
        if (currentPage < pageCount) {
            onClickNext();
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            onClickPrev();
        }
    }

    return <div className="flex justify-between items-center numberBold text-sm">
        <div onClick={prev} className={`py-2 text-xs cursor-pointer ${currentPage > 1 ? "text-primary" : "text-penlight"}`}>
            <ArrowBack fontSize="small" /><span className="pr-2 max-sm:hidden">Previous</span>
        </div>
        <div className="flex">
            {makePagination()}
        </div>
        <div onClick={next} className={`py-2 text-xs cursor-pointer ${currentPage < pageCount ? "text-primary" : "text-penlight"}`}>
            <span className="pl-2 max-sm:hidden">Next</span><ArrowForward fontSize="small" />
        </div>
    </div>
        ;
    // return <h1 className={`${styles.roisinLogo} text-red-500 font-bold text-3xl`}>Roisin</h1>
};

export default PaginationWidget;