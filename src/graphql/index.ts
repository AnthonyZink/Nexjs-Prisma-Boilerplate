import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import typeDefs from "./schema";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const resolvers = {
    Query: {
        users: async () => {
            return await prisma.users.findMany();
        },

        user: async (_, { email }) => {
            return await prisma.users.findFirst({
                where: {
                    email,
                },
            });
        },

        logIn: async (_, { email, password }) => {
            const user = await prisma.users.findFirst({
                where: {
                    email,
                },
            });

            if (!user) {
                throw new Error("User does not exists");
            }

            const samePassword = await comparePassword(password, user.password);

            if (!samePassword) {
                throw new Error("Incorrect password");
            }

            return {
                token: jwt.sign({ email }, process.env.TOKEN_KEY),
                user,
            };
        },
    },
    Mutation: {
        createUser: async (_, { email, password }) => {
            const userExists = await prisma.users.count({
                where: {
                    email,
                },
            });

            if (userExists) {
                throw new Error("User already exists");
            }

            return await prisma.users.create({
                data: {
                    email,
                    password: await hashPassword(password),
                },
            });
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at: http://localhost:4000 ⭐️⭐️⭐️⭐️`)
);
