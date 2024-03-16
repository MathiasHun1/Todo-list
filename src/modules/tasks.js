

export class Task {
    constructor(project='all', desc, dueDate) {
        this.project = project;
        this.desc = desc;
        this.dueDate = dueDate;
        this.status = false;
    }
}

