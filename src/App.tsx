import { useState, useEffect } from "react";
import { InputAdd } from "./components/InputAdd";
import { ToDoItem } from "./components/ToDoItem";
import { List } from "./components/List";
import { ToDoAPI, type IToDo } from "./shared/services/api/ToDoAPI";

// ToDoAPI.getAll().then((data) => console.log("1", data));
// ToDoAPI.create({ label: "Fazer café", completed: false });
// ToDoAPI.create({ label: "Fazer almoço", completed: false });
// ToDoAPI.create({ label: "Fazer jantar", completed: false });
// ToDoAPI.getAll().then((data) => console.log("2", data));
// ToDoAPI.updateById(1, { label: "To do 1" });
// ToDoAPI.getAll().then((data) => console.log("3", data));




export function App() {

  const [list, setList] = useState<IToDo[]>([]);

  useEffect(() => {
    ToDoAPI.getAll()
      .then(data => setList(data));
  }, []);

  const handleAdd = (value: string) => {

    ToDoAPI.create({ label: value, completed: false})
    .then(data => setList([...list, data]))
  };

  const handleComplete = (id: number) => {
    setList([
      ...list.map((item) => ({
        ...item,
        completed: item.id === id ? true : item.completed,
      })),
    ]);
  };

  const handleRemove = (id: number) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  return (
    <div>
      <InputAdd onAdd={handleAdd} />

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
    </div>
  );
}
