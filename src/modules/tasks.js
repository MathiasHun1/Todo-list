

export class Task {
    constructor(project='all', desc, dueDate, status=false) {
        this.project = project;
        this.desc = desc;
        this.dueDate = dueDate;
        this.status = status;
    }
}

