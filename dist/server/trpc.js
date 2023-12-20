"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicProcedure = exports.router = void 0;
const server_1 = require("@trpc/server");
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = server_1.initTRPC.context().create();
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
exports.router = t.router;
exports.publicProcedure = t.procedure;
