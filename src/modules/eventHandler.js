
export class EventHandler {
    static initEventListeners() {
        const openProjectModalButton = document.querySelector('.add-project-button');
        const addTaskButton = document.querySelector('.add-task-button');
        const projectModal = document.querySelector('.project-modal');
        const taskModal = document.querySelector('.task-modal');
        const closeProjectModalButton = document.querySelector('.modal-project-cancel');
        const closeTaskModalButton = document.querySelector('.modal-task-cancel');
        const modalProjectAddButton = document.querySelector('.modal-project-add');
        const modalTaskAddButton = document.querySelector('.modal-task-add');
        
        openProjectModalButton.addEventListener('click', () => projectModal.style.display = 'flex');
        addTaskButton.addEventListener('click', () => taskModal.style.display = 'flex');
        closeProjectModalButton.addEventListener('click', () => projectModal.style.display = 'none');
        closeTaskModalButton.addEventListener('click', () => taskModal.style.display = 'none');
        modalProjectAddButton.addEventListener('click', () => {})
    }

    static openProjectModal() {
        projectModal.style.display = 'flex';
    }

    static openTaskModal() {
        taskModal.style.display = 'flex';
    }

    static closeProjectModal() {
        projectModal.style.display = 'none';
    }

    static closeTaskModal() {
        taskModal.style.display = 'none';
    }
}