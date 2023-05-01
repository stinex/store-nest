import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    byId(id: number): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        slug?: string;
        name?: string;
        products?: import(".prisma/client").Product[];
        _count?: Prisma.CategoryCountOutputType;
    }>;
    bySlug(slug: string): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        slug?: string;
        name?: string;
        products?: import(".prisma/client").Product[];
        _count?: Prisma.CategoryCountOutputType;
    }>;
    getAll(): Promise<{
        id?: number;
        createdAt?: Date;
        updatedAt?: Date;
        slug?: string;
        name?: string;
        products?: import(".prisma/client").Product[];
        _count?: Prisma.CategoryCountOutputType;
    }[]>;
    create(): Promise<import(".prisma/client").Category>;
    update(id: number, dto: CategoryDto): Promise<import(".prisma/client").Category>;
    delete(id: number): Promise<import(".prisma/client").Category>;
}
