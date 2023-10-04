export class TaskDto {
  task_id: string;
  task_status: string;
  task_name: string;
  from_intergration?: boolean = false;
  intergration_id?: string;
  // check_status_path: string;
}

export class TasksDto {
  tasks: TaskDto[];
}
