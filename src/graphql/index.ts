 
import { ApolloServer } from 'apollo-server';
import  { PrismaClient } from '@prisma/client';
import typeDefs from './schema';

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        users: async () => {
            return await prisma.users.findMany();
        },

        user: async (_, {firstname}) => {
            return await prisma.users.findFirst({
                where:{
                 firstname
                }
            });
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(
  { port: 4000 },
  () => console.log(`🚀 Server ready at: http://localhost:4000 ⭐️⭐️⭐️⭐️`),
)
