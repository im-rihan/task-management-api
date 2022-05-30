import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';


export class TaskFilterDto {
	@IsOptional()
	@IsEnum(TaskStatus)
	status?: TaskStatus;

	@IsOptional()
	@IsString()
	search?: string;
}

// docker run --name mysql-nest -p 5432:5432 -e MYSQL_ROOT_PASSWORD=78626458 -d mysql
// daa1856410fa0fae8727517b135e47d2f49a2c4d41d5f4ae2e88c1a13ca0f96e
