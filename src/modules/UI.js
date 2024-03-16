import { storage } from "./storage";

export class UI {
    static openProjectModalButton = document.querySelector('.add-project-button');
    static addTaskButton = document.querySelector('.add-task-button');
    static projectModal = document.querySelector('.project-modal');
    static taskModal = document.querySelector('.task-modal');
    static closeProjectModalButton = document.querySelector('.modal-project-cancel');
    static closeTaskModalButton = document.querySelector('.modal-task-cancel');
    static modalProjectAddButton = document.querySelector('.modal-project-add');
    static modalProjectTextinput = document.querySelector('#modal-project-textinput');
    static modalTaskAddButton = document.querySelector('.modal-task-add');
    static projectListItem = document.querySelectorAll('.project-list-item');
    static defProjectList = document.querySelector('.def-project-list');
    static ownProjectlist = document.querySelector('.own-project-list');
    static projectNameHeader = document.querySelector('#project-name-header');


    static loadPage() {
        UI.renderDefProjects();
        UI.renderOwnProjects();
        UI.initEventHandlers();
        UI.createTaskView()
}

    static renderDefProjects() {
        const today = document.querySelector('#today');
        const thisWeek = document.querySelector('#this-week');
        const all = document.querySelector('#all');
        // theese are hardcoded
        today.addEventListener('click', () => {
            UI.removeClassActive()
            today.classList.add('active');
            storage.setProjectToActive('Today');
            UI.renderOwnProjects()
        });
        thisWeek.addEventListener('click', () => {
            UI.removeClassActive()
            thisWeek.classList.add('active');
            storage.setProjectToActive('This week');
            UI.renderOwnProjects()
        });
        all.addEventListener('click', () => {
            UI.removeClassActive()
            all.classList.add('active');
            storage.setProjectToActive('All');
            UI.renderOwnProjects()
        });
            today.classList.add('active');
            UI.projectNameHeaderUpdate()

    }

    static renderOwnProjects() {
        const ownProjects = storage.getOwnProjects();
        UI.clearOwnProjectsCont();
        ownProjects.forEach(project => {
            UI.createProjectView(project)
        })
        UI.clearModalInputValue()
        UI.closeProjectModal()
        UI.projectNameHeaderUpdate(storage.getActiveProject().name)
    }

    static initEventHandlers() {
        UI.openProjectModalButton.addEventListener('click', UI.openProjectModal);
        UI.addTaskButton.addEventListener('click', UI.openTaskModal);
        UI.closeProjectModalButton.addEventListener('click', UI.closeProjectModal);
        UI.closeTaskModalButton.addEventListener('click', UI.closeTaskModal);
        UI.modalProjectAddButton.addEventListener('click', () => {
            storage.addnewProject(UI.modalProjectTextinput.value);
            UI.removeClassActive();
            UI.renderOwnProjects();
            })  
        // listeners to the ownProjects container
        UI.ownProjectlist.addEventListener('click', (e) => {
            // delete project
            if (e.target.classList.contains('project-delete-button')) {
                const projectName = e.target.previousSibling.textContent; //name of project
                storage.deleteProject(projectName);
                storage.setProjectToActive('Today');
                UI.renderDefProjects()
                UI.renderOwnProjects()
            }
            //set project to active
            if (e.target.classList.contains('project-name')) {
                const currentProject = e.target.parentNode;
                const projectName = e.target.textContent // **returns the name properly
                storage.setProjectToActive(projectName)
                UI.removeClassActive() 
                currentProject.classList.add('active')
                UI.renderOwnProjects()
            }
        })
    }

    static createProjectView(project) {
        let listItem = document.createElement('li');
        let para = document.createElement('p');
        let icon = document.createElement('span');
        let deleteButton = document.createElement('span');
        para.textContent = project.name; 
        para.classList.add('project-name')
        deleteButton.textContent = 'X';
        project.active === true ? deleteButton.classList.add('project-delete-button') : deleteButton.classList.add('project-delete-button', 'hidden')
        icon.textContent = 'person_edit';  //google symbol
        icon.classList.add('material-symbols-outlined') //google symbol
        listItem.appendChild(icon);
        listItem.appendChild(para);
        listItem.appendChild(deleteButton);
        listItem.classList.add('project-list-item');
        if(project.active === true) {
            listItem.classList.add('active')
        }
        UI.ownProjectlist.appendChild(listItem);
    }

    static createTaskView(text='default', dueDate='default date') {
        const tasksContainer = document.querySelector('.main-body')
        //creating nodes
        const cardElement = document.createElement('div')
        const textContainer = document.createElement('div')
        const inputBox = document.createElement('input')
        const cardText = document.createElement('p')
        const datePara = document.createElement('p')
        const buttonsContainer = document.createElement('div')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        //add classes
        cardElement.classList.add('card')
        textContainer.classList.add('card-text-cont')
        inputBox.classList.add('task-done-box')
        cardText.classList.add('card-text')
        datePara.classList.add('card-date')
        buttonsContainer.classList.add('card-buttons-cont')
        editButton.classList.add('material-symbols-outlined', 'task-edit-button')
        deleteButton.classList.add('material-symbols-outlined', 'task-delete-button')

        //add remaining properties
        inputBox.type = 'checkbox'
        cardText.textContent = text 
        datePara.textContent = dueDate
        editButton.textContent = 'edit'
        deleteButton.textContent = 'delete'

        //appending each nodes to their containers
        textContainer.appendChild(inputBox)
        textContainer.appendChild(cardText)
        buttonsContainer.appendChild(editButton)
        buttonsContainer.appendChild(deleteButton)
        cardElement.appendChild(textContainer)
        cardElement.appendChild(datePara)
        cardElement.appendChild(buttonsContainer)


        tasksContainer.appendChild(cardElement)
    }

    static removeClassActive() {
        UI.defProjectList.querySelectorAll('li').forEach(item => item.classList.remove('active'));
        UI.ownProjectlist.querySelectorAll('li').forEach(item => item.classList.remove('active'));
    }

    static clearOwnProjectsCont() {
        const ownProjectlist = document.querySelector('.own-project-list');
        ownProjectlist.innerHTML = '';
    }

    static clearModalInputValue() {
        const modalProjectTextinput = document.querySelector('#modal-project-textinput');
        modalProjectTextinput.value ='';
    }

    static openProjectModal() {
        UI.projectModal.style.display = 'flex';
    }

    static openTaskModal() {
        UI.taskModal.style.display = 'flex';
    }

    static closeProjectModal() {
        UI.projectModal.style.display = 'none';
        const input = UI.projectModal.querySelector('input')
        input.value = ''
    }

    static closeTaskModal() {
        UI.taskModal.style.display = 'none';
        const inputs = UI.taskModal.querySelectorAll('input')
        inputs.forEach(input => input.value = '')
    }

    static addDeleteButton() {
        const delButton = document.createElement('span');
        delButton.textContent = 'X';
        delButton.addEventListener('click', (event) => {
            const parentCont = event.target.parentNode;
        })
    }

    static showDeleteButton(element) {
        const button = element.querySelector('.project-delete-button')
        console.dir(button)
        button.classList.remove('hidden');
    }

    static projectNameHeaderUpdate() {
        UI.projectNameHeader.innerHTML = storage.getActiveProject().name;
    }
}



