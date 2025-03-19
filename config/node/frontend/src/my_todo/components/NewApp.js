import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";
import TodoNewTodo from "./TodoNewTodo/TodoNewTodo";

function NewApp() {
  const [listaZadan, setlistaZadan] = useState([
    "wstac rano",
    "isc na zaprawe",
    "zjesc sniadanie",
  ]);
  const [newItem, setnewItem] = useState("");
  const [listFiltered, setlistFiltered] = useState(listaZadan);

  const listHandler = () => {
    setlistaZadan([...listaZadan, newItem]);
    setlistFiltered([...listaZadan, newItem]);
  };

  const itemHandler = (e) => {
    setnewItem(e.target.value);
    setnewItem("");
  };

  const listFilter = (e) => {
    console.log(e.target.value);
    setlistFiltered(listaZadan.filter((item) => item.includes(e.target.value)));
  };

  const listItemRemover = (id) => {
    console.log(id);
    setlistaZadan(listaZadan.filter((item, index) => index !== id));
    setlistFiltered(listaZadan.filter((item, index) => index !== id));
  };

  return (
    <div>
      {/* 1. Opracowanie listy zadań do zdrobienia przez użytkownika */}

      <TodoList listaZadan={listFiltered} listItemRemover={listItemRemover} />

      {/* 2. Dodawanie nowego zadania do listy zadań użytkownika */}
      <TodoNewTodo listHandler={listHandler} itemHandler={itemHandler} />

      {/* 3. filtrowanie zadań użytkownika */}
      <div>
        <h5>Wyszukaj</h5>
        <input onChange={(e) => listFilter(e)}></input>
      </div>

      {/* 4. usuwanie zadania użytkownika */}
    </div>
  );
}

export default NewApp;
