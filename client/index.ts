import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
import { boolean } from "zod";

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.

const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
            async headers() {
                return {
                    Authorization: "Bearer " + '12345'
                }
            },
        }),
    ],
})

async function main() {
    const res = await trpc.createTodo.mutate(
        {
            title: 'dp',
            description: 'Added',
            isDone: true
        })
    console.log(res.description)
}

async function signUp() {
    const response = await trpc.signUp.mutate({
        email: 'dp@gmail.com',
        password: "dp@1234"
    });
    console.log(response.token)
}

main();
// main()