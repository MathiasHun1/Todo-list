

export class Task {
    constructor(project='all', desc, dueDate, isDone=false) {
        this.project = project;
        this.desc = desc;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }
}

