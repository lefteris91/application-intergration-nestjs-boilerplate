import { Config } from './config/config.dto';

export class SettingsDto {
  id: string;
  config: Config<any>;
}
