// export default function ToDoGoal(props: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <article>
//       <div>
//         <h2>{props.title}</h2>
//         <p>{props.description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// export default function ToDoGoal({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// type ToDoGoalProps = {
//   title: string;
//   description: string;
// };

// export default function ToDoGoal({ title, description }: ToDoGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// interface ToDoGoalProps {
//   title: string;
//   description: string;
// }

// export default function ToDoGoal({ title, description }: ToDoGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// import { type ReactNode } from "react";

// interface ToDoGoalProps {
//   title: string;
//   children: ReactNode;
// }

// export default function ToDoGoal({ title, children }: ToDoGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }

// import { type FC, type PropsWithChildren } from "react";

// type ToDoGoalProps = PropsWithChildren<{ title: string }>;

// const ToDoGoal: FC<ToDoGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default ToDoGoal;

import { type PropsWithChildren } from "react";

type ToDoGoalProps = PropsWithChildren<{
  title: string;
  onDelete: (id: number) => void;
  id: number;
}>;

export default function ToDoGoal({
  title,
  onDelete,
  id,
  children,
}: ToDoGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
