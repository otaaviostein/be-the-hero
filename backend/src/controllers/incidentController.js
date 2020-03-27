const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
      
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count(); // [count] retorna o primeiro valor do array, mesmo que fazer count[0]
    
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5) // page = 2 -> 2 - 1 = 1 * 5 = 5 -> pega a partir do quinto registro e por aí vai
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
        
    },

    async create (request, response) {
        const {title, description, value} = request.body;
        const ong_id  = request.headers.authorization; //context da requisição

        const result = await connection('incidents').insert ({
            title,
            description,
            value,
            ong_id,
        });
        const id = result[0];

        return response.json({ id });
    },

    async delete (request, response) {
        const { id } = request.params; //pega o id da url
        const ong_id = request.headers.authorization;

        const incident = await connection ('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' }); // código de "não autorizado"
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //retorna uma resposta ao frontend sem conteudo
    }
}