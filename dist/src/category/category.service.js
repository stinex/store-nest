"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const generate_slug_1 = require("../../utils/generate-slug");
const category_object_1 = require("./category.object");
let CategoryService = class CategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async byId(id) {
        const category = await this.prisma.category.findUnique({
            where: {
                id
            },
            select: category_object_1.categoryObject
        });
        if (!category) {
            throw new Error('Category not found');
        }
        return category;
    }
    async bySlug(slug) {
        const category = await this.prisma.category.findUnique({
            where: {
                slug
            },
            select: category_object_1.categoryObject
        });
        if (!category) {
            throw new Error('Category not found');
        }
        return category;
    }
    async getAll() {
        return this.prisma.category.findMany({
            select: category_object_1.categoryObject
        });
    }
    async create() {
        return this.prisma.category.create({
            data: {
                name: '',
                slug: ''
            }
        });
    }
    async update(id, dto) {
        return this.prisma.category.update({
            where: {
                id
            },
            data: {
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name)
            }
        });
    }
    async delete(id) {
        return this.prisma.category.delete({
            where: {
                id
            }
        });
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map