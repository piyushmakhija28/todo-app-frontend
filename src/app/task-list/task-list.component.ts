import { Component, OnInit } from '@angular/core';
import { TaskDto } from '../task-dto';
import { HttpClient } from '@angular/common/http';
import { ApiResponseDto } from '../api-response-dto';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskDtoList: TaskDto[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get<ApiResponseDto>('http://localhost:8080/api/v1/tasks').subscribe((response) => {
      if (response.success) {
        this.taskDtoList = response.data;
      } else {
        console.error(response.message);
      }
    }, (error) => {
      console.error(error);
    });

  }

}
