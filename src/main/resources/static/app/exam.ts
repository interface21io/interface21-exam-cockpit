import { Question } from './question';

export class Exam {
    id: number;
    examIdentifier: string;
    title: string;
    maxScorePoints: number;
    version: string;
    active: boolean;
    questions: Array<Question>;
}
