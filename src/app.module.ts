import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ExpensesModule } from './expenses/expenses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      port: 5432,
      host: 'ec2-52-21-136-176.compute-1.amazonaws.com',
      username: 'qlzxbrwvqultnp',
      database: 'd7rl1llkd4np2n',
      password: 'a54424e06e18c0920797b42c891b3fcf3f203487d839ff4cc2f0917c854d8726',
      entities: [__dirname+'/../**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    TasksModule, 
    ExpensesModule, 
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
