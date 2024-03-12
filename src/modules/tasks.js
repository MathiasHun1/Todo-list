

class Task {
    constructor(project='all', desc, dueDate, status) {
        this.project = project;
        this.desc = desc;
        this.dueDate = dueDate;
        this.status = status;
    }
}


export { Task }
