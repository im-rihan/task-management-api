import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './tasks-status.enum';
import { User } from './../auth/user.entity';

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	status: TaskStatus;

	@ManyToOne(type => User, (user) => user.task, { eager: true })
	user: User[]
}
