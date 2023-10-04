import { Config } from './config/config.dto';
import { TemplateDto } from './template.dto';

export class TemplateProviderDto {
  id: string;
  title: string;
  path: string;
  template: TemplateDto;
  config: Config<any>;
  
}
