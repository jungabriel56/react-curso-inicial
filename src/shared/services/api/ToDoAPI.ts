import axios from "axios"

const  axiosInstance = axios.create();

export interface IToDo {
    id: number,
    label: string,
    completed: boolean
}

interface ToDoWithoutId {
    label: string,
    completed: boolean
}

export const ToDoAPI = {
    async getAll() {
        const response = await axiosInstance.get('/api/toDos');
        console.log(response)

        return response.data.toDos as IToDo[];
    },

    async create(data: ToDoWithoutId) {
        const response = await axiosInstance.post('/api/toDos', data)
        
        return response.data.toDos as IToDo;
    },

    async updateById(id: number, data: Partial<ToDoWithoutId>) {
        await axiosInstance.put(`/api/toDos/${id}`, data)

        return;
    },

    async deleteById(id: number){
        await axiosInstance.delete(`api/toDos/${id}`);

        return;
    }
}