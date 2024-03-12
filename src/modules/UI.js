import { ProjectStorage } from "./storage";

class UI {
    static loadPage() {
        UI.renderProjects();
    }

    static renderDefProjects() {
        const today = document.querySelector('#today');
        const thisWeek = document.querySelector('#this-week');
        const all = document.querySelector('#all');

        today.addEventListener('click', renderTodayTasks);
        thisWeek.addEventListener('click', renderThisWeekTasks);
        all.addEventListener('click', renderAllTasks);

        function renderTodayTasks () {}
        function renderThisWeekTasks() {}
        function renderAllTasks() {}
    }

    static renderOwnProjects() {
        
    }
}