export interface ISourceValue {
  label: string;
  value: number;
}
export interface ProfileState {
  search: string;
  status: string;
  signal: ISourceValue[] | [] | string[];
  source: [];
}
