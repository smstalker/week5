//This app will enable users to track vehicles in a fleet program 

class Vehicle {
    constructor(year, model){
        this.year = year;
        this.model = model;
    }

    describe() {
        return `${this.model} was made in ${this.year}.`;
    }
}

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
return `${this.name} has ${this.vehicles.length} vehicles.`
   } 
}

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

    showDepartmentMenuOptions (departmentInfo) {
        return prompt(`
            0) back
            1) create vehicle
            2) delete vehicle
            -------------------------------------- 
            ${departmentInfo} 
            `);

    }

    displayDepartments() {
        let departmentString = '';
        for (let i= 0; i < this.departments.length; i++) {
            departmentString += i +  ') ' + this.departments[i].name + '\n';
        }
        alert(departmentString);
    }
   
    createDepartment() {
        let name = prompt('Enter name of new department:');
        this.departments.push(new Department(name));
     }

     viewDepartment() {
         let index = prompt('Enter index number of department you wish to view:');
         if (index > -1 && index < this.departments.length) {
             this.selectedDepartment = this.departments[index];
             let description = 'Department Name :' + this.selectedDepartment.name + '\n';
         
            for (let i = 0; i < this.selectedDepartment.lentgh; i ++) {
                description += i + ') ' + this.selectedDepartment.vehicle[i].name + ' - ' + this.selectedDepartment.vehicle[i].model + '/n'; 
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

}

let menu = new Menu();
menu.start();

    