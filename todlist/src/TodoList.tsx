import React from 'react';
import TodoItem from './TodoItem';

// Definiera ett gränssnitt för Todo-objektet
interface Todo {
  id: number; // Unikt ID för varje todo
  text: string; // Textinnehållet i todo
}

// Definiera props för TodoList-komponenten
interface TodoListProps {
  todos: Todo[]; // En array av Todo-objekt
  removeTodo: (id: number) => void; // Funktion för att ta bort en todo baserat på dess ID
}

// TodoList-komponenten
const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list"> {/* Lista för att visa todos */}
      {todos.map(todo => ( // Iterera över varje todo i todos-arrayen
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} /> // Rendera en TodoItem för varje todo
      ))}
    </ul>
  );
};

// Exportera TodoList-komponenten för användning i andra delar av applikationen
export default TodoList;
/*

pseudokod 
Importera React
Importera TodoItem-komponenten

Definiera ett gränssnitt för Todo-objektet
Definiera Todo med egenskaper: id (nummer) och text (sträng)

Definiera props för TodoList-komponenten
Definiera TodoListProps med:
    - todos (en array av Todo-objekt)
    - removeTodo (en funktion som tar ett ID som parameter för att ta bort en todo)

Definiera TodoList-komponenten med props
Funktion TodoList:
    Returnera:
        En lista (ul) med CSS-klassen "todo-list":
            Iterera över varje todo i todos-arrayen:
                För varje todo, rendera en TodoItem med följande egenskaper:
                    - key: todo.id (unikt ID för varje todo)
                    - todo: todo (det aktuella Todo-objektet)
                    - removeTodo: removeTodo (funktionen för att ta bort en todo)

Exportera TodoList-komponenten för användning i andra delar av applikationen
*/