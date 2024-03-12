
class Project {
    constructor(name, description='', type='custom', active=false) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.active = active;
    }
}

export {Project};