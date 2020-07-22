import { Component, OnInit } from '@angular/core';


import { TaskService } from '../task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  tasks: any[];

  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTasks()
      .subscribe(task => this.tasks = task);
  }

  addTask(obj) {
    // obj.desc = obj.desc.trim();
    // if (!obj.desc || obj.color) { return; }
    obj.done = false;
    obj.edit = false;
    this.tasksService.addTask(obj)
      .subscribe(task => this.tasks.push(task));
  }

  doDone(task): void {
    task.done = !task.done;
    this.tasksService.doDone(task)
      .subscribe();
  }

  remove(task): void {
    this.tasks = this.tasks.filter(v => v !== task);
  }
}
