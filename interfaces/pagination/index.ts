import { Base } from 'interfaces/models/base'

export interface Pagination {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
    items: Base[];
    pageNumber: number;
    pageSize: number;
    pageTotal: number;
}