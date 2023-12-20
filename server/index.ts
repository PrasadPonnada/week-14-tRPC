import { router, publicProcedure } from "./trpc";
import { z } from 'zod'
import { createHTTPServer } from '@trpc/server/adapters/standalone'

const todoInputType = z.object({
    title: z.string(),
    description: z.string(),
    isDone: z.boolean()
})
const appRouter = router({

    signUp: publicProcedure
        .input(z.object(
            {
                email: z.string(),
                password: z.string()
            },
        ))
        .mutation(async (opts) => {
            const email = opts.input.email;
            const password = opts.input.password;
            //DO Db Stuff!!

            const token = '122222'
            return {
                token
            }
        }),

    createTodo: publicProcedure
        .input(todoInputType)
        .mutation(async (opts) => {

            //getting Context

            const username = opts.ctx.username;
            console.log('COntext Info', username);
            //Db Calls

            const title = opts.input.title;
            const description = opts.input.description;
            return {
                id: 1,
                description: description
            }
        }),
});

const server = createHTTPServer({
    router: appRouter,
    createContext(opts) {
        let authHeader = opts.req.headers["authorization"];
        console.log('authHeader', authHeader)

        //jwt.verify()

        return {
            username: "DP User"
        }
    }
})

server.listen(3000);

export type AppRouter = typeof appRouter;