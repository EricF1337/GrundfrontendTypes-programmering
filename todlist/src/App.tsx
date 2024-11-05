import React, { useState, useEffect } from 'react'; // Importera React och nödvändiga hooks
import './App.css'; // Importera CSS-stilark för appen
import TodoList from './TodoList'; // Importera TodoList-komponenten
import TodoForm from './TodoForm'; // Importera TodoForm-komponenten

// Definiera gränssnittet för en Todo
interface Todo {
  id: number; // Unikt ID för varje todo
  text: string; // Textinnehållet för todo
}

// Definiera App-komponenten
const App: React.FC = () => {
  // Använd useState för att hantera listan av todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // Hämta todos från local storage när komponenten mountas
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos'); // Hämta todos från local storage
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos)); // Om det finns, parsa och sätt todos
    }
  }, []); // Tom array betyder att effekten körs endast en gång vid mount

  // Spara todos till local storage när todos ändras
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // Spara den aktuella todos-listan
  }, [todos]); // Effekten körs varje gång todos ändras

  // Funktion för att lägga till en ny todo
  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text }; // Skapa ett nytt todo-objekt med ett unikt ID
    setTodos([...todos, newTodo]); // Uppdatera todos-listan med det nya todo-objektet
  };

  // Funktion för att ta bort en todo baserat på dess ID
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Filtrera bort todo med det angivna ID:t
  };

  // Rendera komponenten
  return (
    <div className="app-container"> {/* Huvudbehållare för appen */}
      <h1 className="title">Todo App</h1> {/* Titel för appen */}
      <TodoForm addTodo={addTodo} /> {/* Formulär för att lägga till nya todos */}
      <TodoList todos={todos} removeTodo={removeTodo} /> {/* Lista för att visa todos */}
    </div>
  );
};

// Exportera App-komponenten så att den kan användas i andra filer
export default App;

/*
pseudokod 

Importera nödvändiga bibliotek och komponenter
Importera React och hooks
Importera CSS-stilark
Importera TodoList-komponenten
Importera TodoForm-komponenten

Definiera gränssnittet för en Todo
Definiera Todo med egenskaper: id (nummer) och text (sträng)

Definiera App-komponenten
Funktion App:
    // Använd useState för att hantera listan av todos
    Skapa en state-variabel todos som är en tom lista

    // Hämta todos från local storage när komponenten mountas
    När komponenten mountas:
        Hämta todos från local storage
        Om todos finns:
            Sätt todos till de hämtade värdena

    // Spara todos till local storage när todos ändras
    När todos ändras:
        Spara den aktuella todos-listan till local storage

    // Funktion för att lägga till en ny todo
    Funktion addTodo(text):
        Skapa ett nytt todo-objekt med ett unikt ID
        Uppdatera todos-listan med det nya todo-objektet

    // Funktion för att ta bort en todo baserat på dess ID
    Funktion removeTodo(id):
        Filtrera bort todo med det angivna ID:t från todos-listan

    // Rendera komponenten
    Returnera:
        En div som innehåller:
            En rubrik med titeln "Todo App"
            TodoForm-komponenten för att lägga till nya todos
            TodoList-komponenten för att visa todos

Exportera App-komponenten
*/