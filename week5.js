//This app will enable users to track vehicles in a citywide fleet program. 
//This will alow the city planners to track aging fleet vehicles 
// Class Vehicle will hold the model name and year the vehicle was made. 
class Vehicle {
    constructor(year, model){
        this.year = year;
        this.model = model;
    }

    describe() {
        return `${this.model} was made in ${this.year}.`;
    }
}

// The Department class with denote which department within the city the vehicle belongs too.
//It will give the user an Error if what they enter is not an instance of vehicle. 
class Department {
    constructor(name) {
        this.name = name;
        this.vehicles = [];
    }
    addVehicle(vehicle) {
    if (vehicle instanceof Vehicle) {
       this.vehicles.push(vehicle);     
    } else {
        throw new Error ('not an instance of vehicle')
    }
} 
describe(){
return `${this.name} Department has ${this.vehicles.length} vehicles.`
   } 
}

// Build out the user Menu, for creating, viewing, deleting, and displaing all departments. 
class Menu {
    constructor(){
        this.departments = [];
        this.selectedDepartment = null;
    }
    
    start(){
        let selection = this.showMainMenuOptions();
        
        while (selection !=0){
            switch (selection){
                case '1':
                    this.createDepartment(); 
                    break; 
                case '2':
                    this.deleteDepartment();
                    break;
                case '3':
                    this.viewDepartment();
                    break;    
                case '4':
                    this.displayDepartments();
                    break;        
               default:
                    selection = 0;
            }        
            selection = this.showMainMenuOptions();
        }
       
        alert ("Goodbye!");
    }
    
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new department
            2) delete department
            3) view department
            4) display all departments
        `);
    }

// This menu will be a sub menu in the View Department choice which will allow the user
    // to create, or delete the vehicles within each department. 
    showDepartmentMenuOptions (departmentInfo) {
        return prompt(`
            0) back
            1) create vehicle
            2) delete vehicle
            -------------------------------------- 
            ${departmentInfo} 
            `);

    }
//This diplays all created departments. 
    displayDepartments() {
        let departmentString = '';
        for (let i= 0; i < this.departments.length; i++) {
            departmentString += i +  ') ' + this.departments[i].name + '\n';
        }
        alert(departmentString);
    }

//Create a new department 
    createDepartment() {
        let name = prompt('Enter name of new department:');
        this.departments.push(new Department(name));
     }

//View Department, and will display any vehicles created under that department. 
     viewDepartment() {
         let index = prompt('Enter index number of department you wish to view:');
         if (index > -1 && index < this.departments.length) {
             this.selectedDepartment = this.departments[index];
             let description = 'Department Name : ' + this.selectedDepartment.name + '\n';
         
            for (let i = 0; i < this.selectedDepartment.vehicles.length; i ++) {
                description += i + ') ' + this.selectedDepartment.vehicles[i].year + ' - ' + 
                this.selectedDepartment.vehicles[i].model + '\n';
            }

            let selection = this.showDepartmentMenuOptions(description);
            switch (selection) {
                case '1': 
                    this.createVehicle();
                    break; 
                case '2': 
                    this.deleteVehicle();

            }
        }
     }

// Delete any department using the index number for that department 
     deleteDepartment() { 
        let index = prompt ('Enter the index of the Department you wish to delete');
        if (index > -1 && index < this.departments.length) {
            this.departments.splice([index], 1);
            }
        }

//Create and delete vehicles respectively. 
    createVehicle() {
        let model = prompt ('Enter model name of new vehicle:');
        let year = prompt ('Enter the model year the vehicle:');
        this.selectedDepartment.vehicles.push(new Vehicle(model, year));
        }

    deleteVehicle() {
        let index = prompt('Enter the index number of the vehicle you wish to delete');
        if (index > -1 && index < this.selectedDepartment.vehicles.length) {
            this.selectedDepartment.vehicles.splice([index], 1);
        }
    }
}


let menu = new Menu();
menu.start();

    