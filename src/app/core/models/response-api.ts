export interface ResponseAPI<T> {
  ok: boolean;
  message: string;
  totalCount: number;
  data: T;
}
