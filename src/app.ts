import Fastify from 'fastify';

const server = Fastify()

server.get('/funcionando', async function aleatorio(request, respose) {
  return { status: "funcionando rota " }
})

async function main() {
  
  try{
    await server.listen(3000, '0.0.0.0');
    console.log("Sever vivo");
  }catch(e){
    console.error(e);
    process.exit(1);
  }
}

main();