//import courses from "./courses.json";
//import modules from "./modules.json";
//import assignments from "./assignments.json"
//import users from "./users.json"
//import enrollments from "./enrollments.json"
//export {  courses, modules, assignments, users, enrollments };
// use types:
import coursesData from "./courses.json";
import modulesData from "./modules.json";
import assignmentsData from "./assignments.json";
import usersData from "./users.json";
import enrollmentsData from "./enrollments.json";

import type {
  Course,
  Module,
  Assignment,
  User,
  Enrollment,
} from "./types";

export const courses: Course[] = coursesData;
export const modules: Module[] = modulesData;
export const assignments: Assignment[] = assignmentsData;
export const users: User[] = usersData;
export const enrollments: Enrollment[] = enrollmentsData;