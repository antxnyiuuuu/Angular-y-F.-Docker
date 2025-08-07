import { student } from "./student";

export class Course {
    id!: number;
    name!: string;
    students!: student[];
}