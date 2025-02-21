import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/')
  async createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.taskService.createTask(title, description);
  }

  @Get('/')
  async getTasks() {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  async getTask(@Param('id') id: string) {
    return this.taskService.getTask(id);
  }

  @Put('/:id')
  async updateTask(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.taskService.updateTask(id, title, description);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body('isCompleted') isCompleted: boolean,
  ) {
    return this.taskService.updateStatus(id, isCompleted);
  }
}
