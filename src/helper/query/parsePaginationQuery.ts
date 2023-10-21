import { Request } from 'express';
import { PAGE_NUMBER_PARAM, PAGE_SIZE_PARAM } from 'constant/query';
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from 'constant/pagination';
import PaginationFilter from 'domain/entity/PaginationFilter';

const parseQueryParam = (value: number, fallback: number) => {
    return value > 0 ? value : fallback;
};

export default function parsePaginationQuery(req: Request): PaginationFilter {
    const pageSize = parseQueryParam(Number(req.query[PAGE_SIZE_PARAM]), DEFAULT_PAGE_SIZE);
    const pageNumber = parseQueryParam(Number(req.query[PAGE_NUMBER_PARAM]), DEFAULT_PAGE_NUMBER);

    return {
        pageSize,
        pageNumber,
    };
}
