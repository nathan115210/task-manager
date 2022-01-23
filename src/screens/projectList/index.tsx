import SearchPanel from "./SearchPanel";
import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import { TaskProps, UserProps } from "../types";
import * as qs from "qs";
import { cleanObject, useDebounce } from "../helpers/helpers";

// const apiUrl = process.env.APP_API_URL;
const apiUrl = "http://localhost:8080";
console.log("apiUrl", apiUrl);

const ProjectListScreen = () => {
  const [users, setUser] = useState<Array<UserProps>>([]);

  const [param, setParam] = useState<{
    name: string;
    personId: string;
  }>({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 200);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/tasks?${qs.stringify(cleanObject(debouncedParam))}`).then(
      async (response) => {
        if (response.ok) {
          setTasks(await response.json());
        }
      }
    );
  }, [debouncedParam]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUser(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <TaskList tasks={tasks} users={users} />
    </div>
  );
};

export default ProjectListScreen;
