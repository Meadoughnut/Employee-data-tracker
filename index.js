const inquirer = require('inquirer');
const pool = require('./db/connection');
const { 
    getDepartments, 
    getRoles, 
    getEmployees, 
    addDepartment, 
    addRole, 
    addEmployee, 
    updateEmployeeRole 
} = require('./db/queries');

const mainMenu = async () => {
    await pool.connect()
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            const departments = await getDepartments();
            console.table(departments);
            break;
        case 'View all roles':
            const roles = await getRoles();
            console.table(roles);
            break;
        case 'View all employees':
            const employees = await getEmployees();
            console.table(employees);
            break;
        case 'Add a department':
            const { deptName } = await inquirer.prompt({
                type: 'input',
                name: 'deptName',
                message: 'Enter the name of the department:'
            });
            await addDepartment(deptName);
            console.log(`Added department: ${deptName}`);
            break;
        case 'Add a role':
            const { roleTitle, roleSalary, deptId } = await inquirer.prompt([
                { type: 'input', name: 'roleTitle', message: 'Enter the title of the role:' },
                { type: 'input', name: 'roleSalary', message: 'Enter the salary of the role:' },
                { type: 'input', name: 'deptId', message: 'Enter the department ID for the role:' }
            ]);
            await addRole(roleTitle, roleSalary, deptId);
            console.log(`Added role: ${roleTitle}`);
            break;
        case 'Add an employee':
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: 'input', name: 'firstName', message: 'Enter the first name of the employee:' },
                { type: 'input', name: 'lastName', message: 'Enter the last name of the employee:' },
                { type: 'input', name: 'roleId', message: 'Enter the role ID for the employee:' },
                { type: 'input', name: 'managerId', message: 'Enter the manager ID for the employee (if applicable):' }
            ]);
            await addEmployee(firstName, lastName, roleId, managerId);
            console.log(`Added employee: ${firstName} ${lastName}`);
            break;
        case 'Update an employee role':
            const { empId, newRoleId } = await inquirer.prompt([
                { type: 'input', name: 'empId', message: 'Enter the employee ID:' },
                { type: 'input', name: 'newRoleId', message: 'Enter the new role ID for the employee:' }
            ]);
            await updateEmployeeRole(empId, newRoleId);
            console.log(`Updated employee ID ${empId} with new role ID ${newRoleId}`);
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
            break;
    }
    mainMenu();
};

mainMenu();
