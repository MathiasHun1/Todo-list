import { storage } from "./storage";

export class UI {
    static loadPage() {
        UI.renderDefProjects();
        UI.renderOwnProjects();
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
}