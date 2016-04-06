import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ExamsComponent } from './exams.component';
import { ExamDetailComponent } from './exam-detail.component';

import { CreateExamComponent } from './create-exam.component';
import { AddQuestionComponent } from './add-question.component';
import { AddAnswerComponent } from './add-answer.component';

import { ExamService } from './exam-service';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionService } from './question-service';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a [routerLink]="['Exams']">View Exams</a>
            <a [routerLink]="['CreateExam']">Create Exam</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/views/css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        ExamService,
        QuestionService
    ]
})
@RouteConfig([
    {
        path: '/exams',
        name: 'Exams',
        component: ExamsComponent,
        useAsDefault: true
    },
    {
        path: '/exam-detail',
        name: 'ExamDetail',
        component: ExamDetailComponent
    },
    {
        path: '/create-exam',
        name: 'CreateExam',
        component: CreateExamComponent
    },
    {
        path: '/add-question',
        name: 'AddQuestion',
        component: AddQuestionComponent
    },
    {
        path: '/add-answer',
        name: 'AddAnswer',
        component: AddAnswerComponent
    },
    {
        path: '/i21-question-detail',
        name: 'QuestionDetail',
        component: QuestionDetailComponent
    }
])
export class AppComponent {
}