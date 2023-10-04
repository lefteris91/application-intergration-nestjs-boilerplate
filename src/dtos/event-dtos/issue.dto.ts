export class IssueDto {
  id: string;
  title: string;
  description: string;
}
export class IssuesDto {
  count: number;
  issues: IssueDto[];
}
