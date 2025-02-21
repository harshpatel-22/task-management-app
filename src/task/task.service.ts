import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
    export class TaskService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    async createTask(title: string, description: string): Promise<Task> {
        const task = new Task();
        task.title = title;
        task.description = description;
        return this.taskRepository.save(task);
    }

    async getTasks(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    async getTask(id: string): Promise<Task | null> {
        const task = this.taskRepository.findOneBy({id});
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;
    }

    async updateTask(
        id: string,
        title: string,
        description: string,
    ): Promise<Task | null> {
        const task = await this.getTask(id);
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        task.title = title;
        task.description = description;
        return this.taskRepository.save(task);
    }

    async deleteTask(id: string): Promise<void> {
        await this.taskRepository.delete(id);
    }
}
