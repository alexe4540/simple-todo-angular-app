import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const tasks = [
      { id: 1, done: false, desc: 'Build a house', edit: false, color: '#ffa232' },
      { id: 2, done: true, desc: 'Plant a tree', edit: false, color: '#ff1282' },
      { id: 3, done: false, desc: 'Grow up son', edit: false, color: '#009627' }
    ];
    return {tasks};
  }

  genId(tasks: any[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}
