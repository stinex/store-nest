import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService]
})
export class CategoryModule {}
