import { buildJsonSchemas } from 'fastify-zod';
import {z} from 'zod';

const userCore = {
  email: z.string({
    required_error: "Email é requerido",
    invalid_type_error: "Email precisa ser string"
  }).email(),

  name: z.string(),
}

const createUserSchema = z.object({
  ...userCore,
  password: z.string({
    required_error: "Password é requerido",
    invalid_type_error: "Password precisa ser string"
  })
})

const createUserResponseSchema = z.object({
  id: z.number(),
  ...userCore
})

export type CreateUserInput = z.infer<typeof createUserSchema>

export const  { schemas: userSchemas, $ref } = buildJsonSchemas ({
  createUserSchema, 
  createUserResponseSchema
});