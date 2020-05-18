// TODO: AAFDFDSFSDF
// TODO: AAFDFDSFJHJH
// TODO: AAFDFDFA

import * as fs from 'fs';
import * as path from "path";

import * as todo from './todoRegex';
import { Todo, Task } from './todo';

const ROOT_DIR = __dirname;
const TODO_FILE_PATH = path.join(__dirname, 'todo.txt');
const tasks: Array<Task> = [];


const files = fs.readdirSync(ROOT_DIR)
for (let file of files) {
  if (file.includes('.ts')) {
    let filePath = path.join(ROOT_DIR, file);
    const data = fs.readFileSync(filePath);
    const todos = todo.todoSeperator(data.toString())        
    let task: Task = { filename: file, todos }
    tasks.push(task);
  }
}
for (let t of tasks) {
  let str: string = ''
  if (t.todos === null) continue;
  let todoStr = ''
  
  for (let todo of t.todos) {    
    todoStr += `${todo.task} [Line: ${todo.lineNumber}]\n`
  }
  str += `-----${t.filename}-----\n${todoStr}\n`
  fs.writeFileSync(TODO_FILE_PATH, str, {flag:'a'});
  
  
}

