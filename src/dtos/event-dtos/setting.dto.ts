export class SettingDto {
  id: string;
  config: Record<string, any>;
}

export class SettingsDto {
  settings: SettingDto[];
}
