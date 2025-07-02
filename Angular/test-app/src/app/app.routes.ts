import { Routes } from '@angular/router';
import { Task4 } from './angular-tasks/task4/task4';
import { App } from './app';
import { JsTasks } from './js-tasks/js-tasks';
import { AngularTasks } from './angular-tasks/angular-tasks';
import { Task5 } from './angular-tasks/task5/task5';

export const routes: Routes = [
  {
    path: 'jsTasks',
    component: JsTasks,
    title: 'Javascript Tasks'
  },
  {
    path: 'angularTasks',
    component: AngularTasks,
    title: 'Angular Tasks',
     children: [
      {
        path: 'task4',
        component: Task4
      },
      {
        path: 'task5',
        component: Task5
      },
    ]
  },
];
