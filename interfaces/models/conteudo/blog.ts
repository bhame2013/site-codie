import { Base } from 'interfaces/models/base'

import { Pagination } from '../../pagination'


export interface IBlog extends Pagination {
    posts?: Base[]
}