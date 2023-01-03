import Fastify from 'fastify';
import { userRoute } from './routes';
import { userSchemas } from './schemas/user/user.shema';


const server = Fastify()

server.get('/funcionando', async function (request, respose) {
  return { status: "funcionando " };
})

async function main() {

  for(const schema of userSchemas) {
    server.addSchema(schema);
  }

  server.register(userRoute, {prefix: 'api/users'})
  
  try{
    await server.listen(3000, '0.0.0.0');
    console.log("Sever vivo");
  }catch(e){
    console.error(e);
    process.exit(1);
  }
}

main();