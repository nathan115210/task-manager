import { FC } from "react";
import { TaskProps, UserProps } from "../types";

interface TaskListPros {
  tasks: TaskProps[];
  users: UserProps[];
}

const TaskList: FC<TaskListPros> = ({ tasks, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Person</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.name}</td>
            <td>
              {users.find((user) => user.id === task.personId)?.name ||
                "Unknown"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
