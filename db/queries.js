const pool = require('./connection');



const getDepartments = async () => { 
   
    const res = await pool.query('SELECT * FROM department');
    return res.rows;
};

const getRoles = async () => {
   
    const res = await pool.query('SELECT * FROM role');
    return res.rows;
};

const getEmployees = async () => {
   
    const res = await pool.query('SELECT * FROM employee');
    return res.rows;
};

const addDepartment = async (name) => {
   
    await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
};

const addRole = async (title, salary, departmentId) => {
   
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
   
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
};

const updateEmployeeRole = async (employeeId, roleId) => {
    
    await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [roleId, employeeId]);
};

module.exports = {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};
