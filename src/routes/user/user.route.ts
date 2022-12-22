import { FastifyInstance } from "fastify";
import { registerUserHandler } from "../../controllers";

export async function userRoute(server: FastifyInstance) {
  server.post('/', registerUserHandler);
}