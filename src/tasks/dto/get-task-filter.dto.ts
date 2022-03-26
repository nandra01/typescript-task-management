import { tasksStatus } from '../tasks.model';

export class GetTaskFilterDTO {
  status: tasksStatus;
  search: string;
}
