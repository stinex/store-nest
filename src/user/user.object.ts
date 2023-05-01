import { Prisma } from '@prisma/client'

export const userObject: Prisma.UserSelect = {
	id: true,
	email: true,
	lastName: true,
	firstName: true,
	password: false,
	phone: true,
	avatarPath: true
}
