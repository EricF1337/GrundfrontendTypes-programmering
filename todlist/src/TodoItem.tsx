import React from 'react';

// Definiera ett gränssnitt för Todo-objektet
interface Todo {
  id: number; // Unikt ID för varje todo
  text: string; // Textinnehållet i todo
}

// Definiera props för TodoItem-komponenten
interface TodoItemProps {
  todo: Todo; // Ett Todo-objekt som ska visas
  removeTodo: (id: number) => void; // Funktion för att ta bort en todo baserat på dess ID
}

// TodoItem-komponenten
const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo }) => {
  return (
    <li className="todo-item"> {/* Lista för att visa en enskild todo */}
      {todo.text} {/* Visa texten för todo */}
      <button onClick={() => removeTodo(todo.id)} className="remove-button"> {/* Knapp för att ta bort todo */}
        Ta bort
      </button>
    </li>
  );
};

// Exportera TodoItem-komponenten för användning i andra delar av applikationen
export default TodoItem;


/* 
pseudokod
Importera React

Definiera ett gränssnitt för Todo-objektet
Definiera Todo med egenskaper: id (nummer) och text (sträng)

Definiera props för TodoItem-komponenten
Definiera TodoItemProps med:
    - todo (ett Todo-objekt som ska visas)
    - removeTodo (en funktion som tar ett ID som parameter för att ta bort en todo)

Definiera TodoItem-komponenten med props
Funktion TodoItem:
    Returnera:
        En lista (li) med CSS-klassen "todo-item":
            Visa texten för todo
            En knapp med en onClick-händelse som anropar removeTodo med todo.id:
                Texten "Ta bort" på knappen

Exportera TodoItem-komponenten för användning i andra delar av applikationen
*/