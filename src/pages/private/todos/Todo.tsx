import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ToDoAPI, type IToDo } from '../../../shared/services/api/ToDoAPI'
import { List } from "../../../components/List";
import { ToDoItem } from "../../../components/ToDoItem";
import { PageLayout } from "../../../shared/layout/page-layout/PageLayout";
import TodoStyles from "./Todo.module.css"

export const Todo = () => {

   const [list, setList] = useState<IToDo[]>([]);
   
     useEffect(() => {
       ToDoAPI.getAll()
         .then(data => setList(data));
     }, []);
   
   
     const handleComplete = (id: number) => {
       ToDoAPI.updateById(id, {completed: true}).then(() => {
         setList([
           ...list.map((item) => ({
             ...item,
             completed: item.id === id ? true : item.completed,
           })),
         ]);
   
       })
   
     };
   
   
     const handleRemove = (id: number) => {
       
       ToDoAPI.deleteById(id).then(() => {
         setList([...list.filter((item) => item.id !== id)]);
   
       })
     };
   
     return (
       <PageLayout title="TODO List">
        <div className={TodoStyles.ButtonContainer}>
         <Link to='/todos/detalhe/adicionar'  className={TodoStyles.Button}>
          Adicionar
          </Link>
        </div>
   
         <List>
           {list.map(
             (listItem: { id: number; label: string; completed: boolean }) => (
               <ToDoItem
                 key={listItem.id}
                 id={listItem.id}
                 label={listItem.label}
                 completed={listItem.completed}
                 onComplete={() => handleComplete(listItem.id)}
                 onRemove={() => handleRemove(listItem.id)}
               />
             ),
           )}
         </List>
       </PageLayout>
     );
    
};
