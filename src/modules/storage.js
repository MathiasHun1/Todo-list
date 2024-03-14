import { Project } from "./project";
import { isToday, isBefore, endOfWeek, format } from "date-fns";
import { Task } from "./tasks";

class Storage {
    constructor() {
        //initialize default projects
      this._defProjects= [];
      this._defProjects.push(new Project('all', 'default', true));
      this._defProjects.push(new Project('today', 'default', false));
      this._defProjects.push(new Project('this week', 'default', false));
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

    addnewProject(name) {
        const projects = this.getOwnProjects();
        const newProject = new Project(name);
        this.setProjectToActive(newProject);
        projects.push(newProject);
        this.saveProjects();
    }

    deleteProject(name) {
        const projects = this.getAllprojects();
        const projectIndex = projects.findIndex(project => project.name === name);
        projects.splice(projectIndex, 1);
        projects[0].active = true;
        this.saveProjects();
    }

    setProjectToActive(projectToSet) {
        const projects = this.getAllprojects();
        projects.forEach(project => project.active = false);
        projectToSet.active = true;
        this.saveProjects;
    }

    //methods for tasks
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.getAllTasks()));
    }

    addNewTask(project='all', desc, dueDate, status) {
        const tasks = storage.getAllTasks()
        const newTask = new Task(project='all', desc, dueDate, status);
        tasks.push(newTask);
        this.saveTasks();
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

    getThisWeekTasks() {
        const tasks = this.getAllTasks();
        const endOfWeekDate = endOfWeek(new Date()); 
        const thisWeekTasks = tasks.filter((task) => {
            if (typeof task.dueDate !== 'object') {
                const dueDate = new Date(task.dueDate);
                return isBefore(dueDate, endOfWeekDate);
            }
            return isBefore(task.dueDate, endOfWeekDate);
        })
        return thisWeekTasks;
    }

    getTasksById(id) {
        const tasks = this.getAllTasks();
        const tasksByID = tasks.filter((task) => {
            return task.id === id;
        })
        return tasksByID;
    }
}

const storage = new Storage;
export {storage}