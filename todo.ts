// TODO: AAFDFDSFSDF
// TODO: AAFDFDSFJHJH
// TODO: AAFDFDFA

export interface Todo {
  task:string,
  lineNumber: number
}

export interface Task {
  filename: string;
  todos: Array<Todo> | null;
}
