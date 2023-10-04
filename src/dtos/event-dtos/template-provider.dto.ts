import { TemplateDto } from './template.dto';

export class TemplateProviderDto {
  id: string;
  title: string;
  path?: string;
  template: TemplateDto;
  config?: Record<string, any>;
}

export class TemplateProvidersDto {
  count: number;
  template_providers: TemplateProviderDto[];
}
