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
            listItem.textContent = ownProjects[i].name;
            ownProjectlist.appendChild(listItem);
        }
    }
}