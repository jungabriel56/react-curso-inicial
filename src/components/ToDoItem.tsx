import { Link } from 'react-router'

import ToDoItemStyles from "./ToDoItem.module.css";

interface ToDoItemProps {
  id: number;
  label: string;
  completed: boolean;
  
  onComplete(): void;
  onRemove(): void;
}

export const ToDoItem = ({
  id,
  label,
  completed,
  onComplete,
  onRemove,
}: ToDoItemProps) => {
  return (
    <li key={id} className={ToDoItemStyles.Item} data-complete={completed}>
      <Link to={`/todos/detalhe/${id}`} className={ToDoItemStyles.Text}>
        {label}
      </Link>

       <div className={ToDoItemStyles.ButtonsGroup}>
        {!completed && (
          <button onClick={onComplete} className={ToDoItemStyles.ButtonComplete}>
            Concluir
          </button>
        )}
        <button onClick={onRemove} className={ToDoItemStyles.ButtonRemove}>
          Remover
        </button>
      </div>
    </li>
  );
};
