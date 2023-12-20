import { initTRPC } from '@trpc/server'

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<{ username?: string }>().create()

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */

export const router = t.router;
export const publicProcedure = t.procedure