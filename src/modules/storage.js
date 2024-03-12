import { Project } from "./project";
import { isToday } from "date-fns";

class Storage {
    constructor() {
        //initialize default projects
      this._defProjects= [];
      this._defProjects.push(new Project('all', '', 'default', true));
      this._defProjects.push(new Project('today', '', 'default', false));
      this._defProjects.push(new Project('this week', '', 'default', false));
        //initialize custom projects if exists
      this._ownProjects = JSON.parse(localStorage.getItem('projects')) || [];
      this._allProjects = this._defProjects.concat(this._ownProjects);
        //initialize tasks
      this._tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    // methods for projects
    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.getOwnProjects()));
    }

    getDefProjects() {
        return this._defProjects;
    }

    getOwnProjects() {
        return this._ownProjects;
    }

    getAllprojects() {
        return this._allProjects;
    }

    addnewProject(name, desc) {
        const projects = this.getOwnProjects();
        projects.push(new Project(name, desc));
        this.saveProjects();
    }

    //methods for tasks
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.getAllTasks));
    }

    getAllTasks() {
        return this._tasks; 
    }

    getTodayTasks() {
        const tasks = this.getAllTasks();
        const todayTasks = tasks.filter((task) => {
            return isToday(task.dueDate);
        })
        return todayTasks;
    }
}


export {Storage}