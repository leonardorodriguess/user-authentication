import { FastifyInstance } from "fastify";
import { registerUserHandler } from "../../controllers";
import { $ref } from "../../schemas/user/user.shema";

export async function userRoute(server: FastifyInstance) {
  server.post('/', {
    schema:{
      body: $ref('createUserSchema'),
      response:{
        201: $ref('createUserResponseSchema')
      }
    }
  },  registerUserHandler);
}