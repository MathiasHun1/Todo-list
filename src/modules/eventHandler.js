import { storage } from "./storage";
import { UI } from "./UI";

export class EventHandler {
    static openProjectModalButton = document.querySelector('.add-project-button');
    static addTaskButton = document.querySelector('.add-task-button');
    static projectModal = document.querySelector('.project-modal');
    static taskModal = document.querySelector('.task-modal');
    static closeProjectModalButton = document.querySelector('.modal-project-cancel');
    static closeTaskModalButton = document.querySelector('.modal-task-cancel');
    static modalProjectAddButton = document.querySelector('.modal-project-add');
    static modalProjectTextinput = document.querySelector('#modal-project-textinput');
    static modalTaskAddButton = document.querySelector('.modal-task-add');

    static initialize() {
        EventHandler.openProjectModalButton.addEventListener('click', EventHandler.openProjectModal);
        EventHandler.addTaskButton.addEventListener('click', EventHandler.openTaskModal);
        EventHandler.closeProjectModalButton.addEventListener('click', EventHandler.closeProjectModal);
        EventHandler.closeTaskModalButton.addEventListener('click', EventHandler.closeTaskModal);
        EventHandler.modalProjectAddButton.addEventListener('click', () => {
            storage.addnewProject(this.modalProjectTextinput.value);
            UI.renderOwnProjects();
        })
    }

    static openProjectModal() {
        EventHandler.projectModal.style.display = 'flex';
    }

    static openTaskModal() {
        EventHandler.taskModal.style.display = 'flex';
    }

    static closeProjectModal() {
        EventHandler.projectModal.style.display = 'none';
    }

    static closeTaskModal() {
        EventHandler.taskModal.style.display = 'none';
    }
}