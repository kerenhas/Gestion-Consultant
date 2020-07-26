import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Task } from 'src/app/models/task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.findAll()
      .subscribe(tasks => this.tasks = tasks)
  }

  deleteTask(id) {
    this.taskService.delete(id)
      .subscribe(() => {
        this.tasks = this.tasks.filter(task => task.id_cons != id)
      });
      //Rentre dans la fonctions
  }
}
