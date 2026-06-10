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
      <span className={ToDoItemStyles.Text}>{label}</span>

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
