import { storage } from "./modules/storage";
import { Task } from "./modules/tasks";
import { format, add, endOfWeek, endOfISOWeek } from "date-fns";
import { UI } from "./modules/UI";

// const date = format(new Date("2024-03-15"), 'yyyy-MM-dd')
// storage.addnewProject('Peca', '')
// storage.addNewTask('peca', 'venni kukoricát', format(new Date('2024-03-18'), 'yyyy-MM-dd'), false)

storage.setProjectToActive('Today')
UI.loadPage()