import { useState } from "react";

export function App() {
  const [value, setValue] = useState('')
 const [list, setList] = useState([
  {id: 1, label: 'Fazer café', completed: false},
  {id: 2, label: 'Fazer café', completed: false},
  {id: 3, label: 'Fazer almoço', completed: false},
  {id: 4, label: 'Fazer jantar', completed: false}
 ]);



  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => {
        setList([...list,{id: (list.length + 1), label: value, completed: false}])
        setValue('')
      }}
      >Adicionar</button>

      <ol>
        {list.map((listItem: {id: number, label: string, completed: boolean}) => (
          <li key={listItem.id}>{listItem.label} 

          {listItem.completed ? 'Concluido' : ''} 

            <button onClick={() => setList([...list.map(item => ({ ...item, completed: item.id === listItem.id ? true : item.completed}))])}>Concluir</button> 
            <button onClick={() => setList([...list.filter(item => item.id !== listItem.id)])}>Remover</button> 
          </li>
        ))}
      </ol>
    </div>
  )
}



