import ToDoGoal from "./ToDoGoal";
import { type TodoGoal as TGoal } from "../App";
import InfoBox from "./InfoBox";
import type { ReactNode } from "react";

type ToDoGoalListProp = {
  todos: TGoal[];
  onDeleteTodo: (id: number) => void;
};

export default function ToDoGoalList({
  todos,
  onDeleteTodo,
}: ToDoGoalListProp) {
  if (todos.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no todo goals yet. Start adding some.
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (todos.length >= 6) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're setting too many todos. Keep it small so you can focus on it
        without distracting.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ToDoGoal title={todo.title} onDelete={onDeleteTodo} id={todo.id}>
              <p>{todo.description}</p>
            </ToDoGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
