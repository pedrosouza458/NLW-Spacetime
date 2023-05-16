import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', () => {
    const users = prisma.user.findMany();

    return users
})

app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('🚀 Http server is running in PORT 3333')
    })
