import { Pagination } from "interfaces/pagination";
import { useMemo } from "react";

const range = (start: number, end: number) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 2,
    currentPage
}: Pagination) => {
    const paginationRange = useMemo(() => {

        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 3;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [...middleRange];

    }, [totalCount, pageSize, siblingCount, currentPage]);

    return paginationRange;
};