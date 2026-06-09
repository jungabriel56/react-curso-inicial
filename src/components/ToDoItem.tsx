
interface ToDoItemProps {
    id: number;
    label: string;
    completed: boolean;
    onComplete(id: number): void;
    onRemove(id: number): void;
}

export const ToDoItem = ({id, label, completed, onComplete, onRemove}: ToDoItemProps) => {
    return (
        <li key={id}>
              {label}
              {completed ? " Concluido" : ""}

              <button onClick={() => onComplete(id)}>
                Concluir
              </button>
              
              <button onClick={() => onRemove(id)}>
                Remover
              </button>
            </li>

            
    )
}