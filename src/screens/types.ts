export interface TaskProps {
  id: string;
  name: string;
  personId: number;
  pin: boolean;
  group: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  title: string;
  group: string;
}
