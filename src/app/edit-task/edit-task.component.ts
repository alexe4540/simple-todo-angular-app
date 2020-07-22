import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task: any;


  constructor(private tasksService: TaskService) { }

  ngOnInit(): void {
  }

  save(): void{
    this.task.edit = false;
    this.tasksService.updateTask(this.task)
      .subscribe();
  }

}
