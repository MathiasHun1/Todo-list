import { storage } from "./storage";

export class UI {
    static loadPage() {
        UI.renderDefProjects();
        UI.renderOwnProjects();
        UI.eventListeners()
    }

    static renderDefProjects() {
        const today = document.querySelector('#today');
        const thisWeek = document.querySelector('#this-week');
        const all = document.querySelector('#all');

        today.addEventListener('click', initTodayTasks);
        thisWeek.addEventListener('click', initThisWeekTasks);
        all.addEventListener('click', initAllTasks);

        function initTodayTasks () {}
        function initThisWeekTasks() {}
        function initAllTasks() {}
    }

    static renderOwnProjects() {
        const ownProjectlist = document.querySelector('.project-list');
        const ownProjects = storage.getOwnProjects();
        console.log(ownProjects);

        for(let i = 0; i < ownProjects.length; i++) {
            let listItem = document.createElement('li');
            let para = document.createElement('p');
            let icon = document.createElement('span');
            para.textContent = ownProjects[i].name;
            icon.textContent = 'person_edit';
            icon.classList.add('material-symbols-outlined')
            listItem.appendChild(icon);
            listItem.appendChild(para);
            ownProjectlist.appendChild(listItem);
        }
    }

    static eventListeners() {
        const addProjectButton = document.querySelector('.add-project-button');
        const addTaskButton = document.querySelector('.add-task-button');
        const projectModal = document.querySelector('.project-modal');
        const taskModal = document.querySelector('.task-modal');
        const closeProjectModalButton = document.querySelector('.project-cancel');
        const closeTaskModalButton = document.querySelector('.task-cancel');
        
        addProjectButton.addEventListener('click', openProjectModal);
        addTaskButton.addEventListener('click', openTaskModal);
        closeProjectModalButton.addEventListener('click', closeProjectModal)
        closeTaskModalButton.addEventListener('click', closeTaskModal)
        
        function openProjectModal() {
            projectModal.style.display = 'flex';
        }

        function openTaskModal() {
            taskModal.style.display = 'flex';
        }

        function closeProjectModal() {
            projectModal.style.display = 'none';
        }

        function closeTaskModal() {
            taskModal.style.display = 'none';
        }
    }
}