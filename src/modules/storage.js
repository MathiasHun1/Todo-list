import { Project } from "./project";
import { isToday, isBefore, endOfWeek, format, compareAsc } from "date-fns";
import { Task } from "./tasks";

class Storage {
    constructor() {
        //initialize default projects
      this._defProjects = [{
        name: 'All',
        type: 'default',
        active: false
      },
      {
        name: 'Today',
        type: 'default',
        active: true
      },
      {
        name: 'This week',
        type: 'default',
        active: false
      }];
     
      if(!JSON.parse(localStorage.getItem('defProjects'))) {
        localStorage.setItem('defProjects', JSON.stringify(this._defProjects))
      }
        //initialize custom projects if exists
      this._ownProjects = JSON.parse(localStorage.getItem('projects')) || [];
        
        //initialize tasks
      this._tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    // methods for projects
    saveProjects() {
        localStorage.setItem('projects', JSON.stringify(this.getOwnProjects()));
        localStorage.setItem('defProjects', JSON.stringify(this.getDefProjects()));
    }

    getDefProjects() {
        return this._defProjects;
    }

    getOwnProjects() {
        return this._ownProjects;
    }

    addnewProject(name) {
        const projects = this.getOwnProjects();
        const newProject = new Project(name);
        projects.push(newProject);
        this.saveProjects();
        this.setProjectToActive(name);
    }

    getProjectByName(name) {
        if(this.getOwnProjects().find(project => project.name === name)) {
            return this.getOwnProjects().find(project => project.name === name)
        }
        if(this.getDefProjects().find(project => project.name === name)) {
            return this.getDefProjects().find(project => project.name === name)
        }
    }

    deleteProject(name) {
        const projects = this.getOwnProjects();
        const projectIndex = projects.findIndex(project => project.name === name);
        projects.splice(projectIndex, 1);
        // this.getDefProjects[0].active = true;
        this.saveProjects();
    }

    setProjectToActive(name) {
        this.getDefProjects().forEach(project => project.active = false);
        this.getOwnProjects().forEach(project => project.active = false);
        const projectToSet = this.getProjectByName(name)
        projectToSet.active = true;
        this.saveProjects();
    }

    getActiveProject() {
        if (this.getDefProjects().find(project => project.active)) {
            return this.getDefProjects().find(project => project.active)
        }
        if (this.getOwnProjects().find(project => project.active)) {
            return this.getOwnProjects().find(project => project.active)
        }
    }

    //methods for tasks
    setTasks(tasks) {
        this._tasks = tasks
    }

    saveTasks() {
        const tasks = this.getAllTasks()
        localStorage.setItem('tasks', JSON.stringify(this.getAllTasks().sort((a, b) => compareAsc(a.dueDate, b.dueDate))));
    }

    addNewTask(projectName, desc, dueDate, status=false) {
        const tasks = storage.getAllTasks()
        const newTask = new Task(projectName, desc, dueDate, status=false);
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

    getTasksByProject() {
        const tasks = storage.getAllTasks().filter(task => storage.getActiveProject().name === task.project)
        return tasks
    }

    filterTasks() {
        if (storage.getActiveProject().name === 'All') {
            return storage.getAllTasks()
        } else if (storage.getActiveProject().name === 'Today') {
            return storage.getTodayTasks()
        } else if (storage.getActiveProject().name === 'This week') {
            return storage.getThisWeekTasks();
        } else return storage.getTasksByProject()    
    }

    deleteTaskByProjectName(projectName) {
        const tasks = storage.getAllTasks()
        const tasksToKeep = tasks.filter(task => task.project !== projectName)
        this.setTasks(tasksToKeep)
        this.saveTasks()
    }

    deleteTaskByDesc(desc) {
        const tasks = storage.getAllTasks()
        const taskIndex = tasks.findIndex(task => task.desc === desc)
        tasks.splice(taskIndex, 1)
        this.saveTasks()
    }

    setTaskDone(desc) {
        const tasks = storage.getAllTasks()
        const taskIsDone = tasks.find(task => task.desc === desc)
        taskIsDone.isDone = !taskIsDone.isDone;
        this.saveTasks()
    }

    editTask(desc, newDesc, newDueDate) {
        const tasks = storage.getAllTasks()
        const selectedTask = tasks.find(task => task.desc === desc)
        selectedTask.desc = newDesc
        selectedTask.dueDate = newDueDate
        this.saveTasks()
    }
}

const storage = new Storage;
export {storage}