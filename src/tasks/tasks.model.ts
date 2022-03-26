export interface Task {
  id: string;
  title: string;
  description: string;
  status: tasksStatus;
}

export enum tasksStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
