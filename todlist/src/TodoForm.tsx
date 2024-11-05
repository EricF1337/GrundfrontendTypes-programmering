import React, { useState } from 'react';

// Definiera props för TodoForm-komponenten
interface TodoFormProps {
  addTodo: (text: string) => void; // Funktion för att lägga till en ny todo
}

// TodoForm-komponenten
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // Använd useState för att hantera värdet i inmatningsfältet
  const [inputValue, setInputValue] = useState('');

  // Funktion som hanterar formulärinlämning
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Förhindra standardbeteendet för formuläret
    if (inputValue.trim()) { // Kontrollera att inmatningen inte är tom
      addTodo(inputValue); // Anropa addTodo-funktionen med det angivna värdet
      setInputValue(''); // Rensa inmatningsfältet efter att todo har lagts till
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form"> {/* Formulär för att lägga till en todo */}
      <input
        type="text" // Typ av inmatningsfält
        value={inputValue} // Sätt värdet till inputValue från state
        onChange={(e) => setInputValue(e.target.value)} // Uppdatera state när användaren skriver
        placeholder="Lägg till en todo" // Platshållare för inmatningsfältet
        className="todo-input" // CSS-klass för styling
      />
      <button type="submit" className="add-button">Lägg till</button> {/* Knapp för att skicka formuläret */}
    </form>
  );
};

// Exportera TodoForm-komponenten för användning i andra delar av applikationen
export default TodoForm;

/*
pseudokod  
Importera React och useState

Definiera props för TodoForm-komponenten
Definiera TodoFormProps med en funktion addTodo som tar en sträng som parameter

Definiera TodoForm-komponenten med props
Funktion TodoForm:
    // Använd useState för att hantera värdet i inmatningsfältet
    Skapa en state-variabel inputValue som är en tom sträng

    // Funktion som hanterar formulärinlämning
    Funktion handleSubmit(e):
        Förhindra standardbeteendet för formuläret
        Om inputValue inte är tom (efter att ha tagit bort mellanslag):
            Anropa addTodo-funktionen med inputValue
            Rensa inputValue till en tom sträng

    Returnera:
        Ett formulär med en onSubmit-händelse som anropar handleSubmit:
            Ett inmatningsfält med följande egenskaper:
                Typ: text
                Värde: inputValue
                onChange: uppdatera inputValue när användaren skriver
                Platshållare: "Lägg till en todo"
                CSS-klass: "todo-input"
            En knapp med typ "submit" och texten "Lägg till"

Exportera TodoForm-komponenten för användning i andra delar av applikationen
*/