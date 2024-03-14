import { storage } from "./storage";
import { EventHandler } from "./eventHandler";

export class UI {
    static loadPage() {
        UI.renderDefProjects();
        UI.renderOwnProjects();
        EventHandler.initEventListeners();
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
 
        ownProjects.forEach(project => {
            let listItem = document.createElement('li');
            let para = document.createElement('p');
            let icon = document.createElement('span');
            para.textContent = project.name; 
            icon.textContent = 'person_edit';  //google symbol
            icon.classList.add('material-symbols-outlined') //google symbol
            listItem.appendChild(icon);
            listItem.appendChild(para);
            ownProjectlist.appendChild(listItem);
        })
    }
}