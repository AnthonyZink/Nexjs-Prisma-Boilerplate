import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PrismaClient } from "@prisma/client";
import type {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
    const prisma = new PrismaClient();

    const users = await prisma.users.findMany();
    return {
        props: {
            users
        }, // will be passed to the page component as props
      }
}

export default function Home({users}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Prisma</h1>

            <main className={styles.main}>
                <ul>
                    {users.map(({id, firstname}) => <li>{id} - {firstname}</li>)}
                </ul>
                
            </main>
        </div>
    );
}
