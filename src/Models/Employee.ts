import { Department } from "./Department";
import { Skill } from "./Skill";

export interface Employee {
  ID: number;
  Name: string;
  Salary: number;
  Permanent: boolean;
  dateOfBirth: Date;
  Department: Department;
  Skills: Skill[];
}
