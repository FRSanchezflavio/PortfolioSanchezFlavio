import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

function getPrismaClient() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

export interface MessageData {
    id?: number;
    name: string;
    email: string;
    message: string;
    createdAt?: Date;
}

export class MessageModel {
    static async create(data: Omit<MessageData, 'id' | 'createdAt'>) {
        const p = getPrismaClient();
        return await p.message.create({
            data: {
                name: data.name,
                email: data.email,
                message: data.message,
            },
        });
    }

    static async findAll() {
        const p = getPrismaClient();
        return await p.message.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    static async findById(id: number) {
        const p = getPrismaClient();
        return await p.message.findUnique({
            where: { id },
        });
    }

    static async delete(id: number) {
        const p = getPrismaClient();
        return await p.message.delete({
            where: { id },
        });
    }
}

export default MessageModel;