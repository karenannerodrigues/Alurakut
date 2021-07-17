import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST'){
        const TOKEN = 'c16dc3ca4f9d77e6f24b5c75d0d0ad';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
          itemType: "836335", //ID do model de "Communities" criado pelo DATO
          ...request.body,
         // title: "Comunidade de Teste",
         //imageUrl: "http://github.com/karenannerodrigues.png"
         //creatorSlug: "karenannerodrigues"
        })
        console.log(registroCriado);

        response.json({     
           dados: 'Algum dado qualquer',
           registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
     message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}