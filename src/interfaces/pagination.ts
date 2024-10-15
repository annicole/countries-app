export interface Pagination {
    totalCount: number;
    pageSize: number;
    siblingCount?: number;
    currentPage: number;
}

export interface FooterProps {
    totalCount: number;
    pageSize?: number;
    currentPage: number;
    onPageChange : (page: number) => void;
}