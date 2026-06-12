import { createServer, Model } from 'miragejs'

createServer({
    models: {
        toDos: Model
    },
    seeds(server){
        const toDosAsString = localStorage.getItem('MOCK_TODOS');
        if(toDosAsString === null) return;

        const toDos = JSON.parse(toDosAsString);

        toDos.models.forEach((toDo: {}) => server.schema.create('toDos', toDo))
    },
    routes() {
        this.namespace = 'api';

        this.get('/toDos', () => {
            return this.schema.all('toDos');
        });

        this.post('/toDos', (schema, request) => {
            const attrs = JSON.parse(request.requestBody);

            const toDo = schema.create('toDos', attrs);

            const toDos = schema.all("toDos");
            localStorage.setItem('MOCK_TODOS', JSON.stringify(toDos))

            return toDo;
        });

        this.delete('/toDos/:id',(schema, request) => {
            const id = request.params.id;
            
            const toDo = schema.find('toDos', id);
            toDo?.destroy()

            const toDos = schema.all("toDos");
            localStorage.setItem('MOCK_TODOS', JSON.stringify(toDos))

            return {}
        });

        this.put('/toDos/:id', (schema, request) => {
            const id = request.params.id;

            const newAttrs = JSON.parse(request.requestBody)

            const toDo = schema.find('toDos', id)
            toDo?.update(newAttrs)

            const toDos = schema.all("toDos");
            localStorage.setItem('MOCK_TODOS', JSON.stringify(toDos))

            return {}
        })
    },


})