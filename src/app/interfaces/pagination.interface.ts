export interface IPagination<D> {
  page: number,
  limit: number,
  total: number,
  data: D[]
}
