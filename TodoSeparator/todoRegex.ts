import { Todo } from './todo';
// TODO: HELP NEEDED
// TODO: HELP REQUIRED
const TODO_REGEX: RegExp = /\/\/\s?TODO:.*/g;


export const todoSeperator = (str: string) => {
  const todos: Array<Todo> = [];

  let strings: Array<string> = str.split('\n');
  let matchStrings: Array<string> = str.match(TODO_REGEX);
  for (let matchString of matchStrings) {
    let task: string = matchString.split(':')[1].trim();
    let lineNumber: number = strings.indexOf(`${matchString}\r`) + 1;
    let todo: Todo = {task,lineNumber};
    todos.push(todo)
  }
  return todos
  
}