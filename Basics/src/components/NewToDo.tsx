import { useRef } from "react";

export type NewToDoProps = {
  onAddTodo: (todo: string, description: string) => void;
};

export default function NewToDo({ onAddTodo }: NewToDoProps) {
  const todoRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const todoValue = todoRef.current?.value ?? "";
    const descriptionValue = descriptionRef.current?.value ?? "";

    event.currentTarget.reset();

    onAddTodo(todoValue, descriptionValue);

    todoRef.current?.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="todo">Your todo</label>
        <input id="todo" type="text" ref={todoRef} />
      </p>
      <p>
        <label htmlFor="description">Short description</label>
        <input id="description" type="text" ref={descriptionRef} />
      </p>
      <p>
        <button>Add Todo</button>
      </p>
    </form>
  );
}
