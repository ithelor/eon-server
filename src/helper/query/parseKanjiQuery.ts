import { Request } from 'express';
import { PAGE_NUMBER_PARAM, PAGE_SIZE_PARAM } from 'constant/query';
import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from 'constant/pagination';
import PaginationFilter from 'domain/entity/PaginationFilter';

export default function parseKanjiQuery(req: Request): PaginationFilter {
    const pageNumber = Number(req.query[PAGE_NUMBER_PARAM]) ?? DEFAULT_PAGE_NUMBER;
    const pageSize = Number(req.query[PAGE_SIZE_PARAM]) ?? DEFAULT_PAGE_SIZE;

    return {
        pageSize,
        pageNumber,
    };
}
