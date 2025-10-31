// Database/types.ts

export interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
}

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string;
  description: string;
  department: string;
  credits: number;
}

export interface Assignment {
  _id: string;
  title: string;
  course: string;
}

export interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
  firstName?: string;
  lastName?: string;
}

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}
