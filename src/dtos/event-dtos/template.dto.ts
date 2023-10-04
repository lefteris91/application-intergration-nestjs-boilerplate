import { RecordDto } from './types/types.dto';

export class TemplateDto {
  id: string;
  name: string;
  content: string;
  owner?: string;
  version?: number;
  tags?: string[];
  customFields?: Record<string, any>;
}

export class TemplatesDto {
  count: number;
  templates: TemplateDto[];
}
