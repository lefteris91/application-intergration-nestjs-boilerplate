import { TldDto } from './tld-events.dto';

export class DomainCategoryDto {
  category_id: string;
  category_name: string;
  forbidden_tlds?: TldDto[];
}
