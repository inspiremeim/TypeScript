import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import ToDoGoalList from "./components/ToDoGoalList.tsx";
import NewToDo from "./components/NewToDo.tsx";

export type TodoGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [todos, SetTodos] = useState<TodoGoal[]>([]);

  function handleAddTodo(todo: string, description: string) {
    SetTodos((existingTodos) => {
      const newTodoGoal: TodoGoal = {
        id: Math.random(),
        title: todo,
        description: description,
      };

      return [...existingTodos, newTodoGoal];
    });
  }

  function handleDeleteTodo(id: number) {
    SetTodos((existingTodos) => existingTodos.filter((todo) => todo.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of todo goals" }}>
        <h1>Your Todo Goals</h1>
      </Header>

      <NewToDo onAddTodo={handleAddTodo} />

      {/* <ToDoGoal title="Learning TS with React" description="Adding front-end tech stack in learning curve to be full stack developer." /> */}
      {/* <ToDoGoal title="Learning TS with React">
          <p>
            Adding front-end tech stack in learning curve to be full stack
            developer.
          </p>
      </ToDoGoal> */}
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ToDoGoal title={todo.title}>
              <p>{todo.description}</p>
            </ToDoGoal>
          </li>
        ))}
      </ul> */}
      <ToDoGoalList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </main>
  );
}
