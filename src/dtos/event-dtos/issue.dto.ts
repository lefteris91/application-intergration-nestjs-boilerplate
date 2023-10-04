export class IssueDto {
  id: string;
  title: string;
  description: string;
}
export class IssuesDto {
  issues: IssueDto[];
}
