

# Employee Tracker

## Description

This is a command-line application designed to manage a company's employee database. The application provides an easy-to-use interface for non-developers to interact with the company's database. The Employee Tracker allows business owners to view and manage the departments, roles, and employees in their company, aiding in better organization and planning of their business operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Video Walkthrough](#video-walkthrough)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To use this application, follow these steps:

1. Clone the repository to your local machine.
   ```sh
   git clone <repository-url>
   ```

2. Navigate to the project folder.
   ```sh
   cd employee-tracker
   ```

3. Install the necessary dependencies.
   ```sh
   npm install
   ```

4. Install Inquirer version 8.2.4.
   ```sh
   npm i inquirer@8.2.4
   ```

5. Install the `pg` package for PostgreSQL.
   ```sh
   npm i pg
   ```

6. Set up the PostgreSQL database with the necessary tables and seed data:
   - Open a terminal and start the PostgreSQL interactive terminal.
     ```sh
     psql -U postgres
     ```
   - Execute the SQL script to set up the schema.
     ```sql
     \i schema.sql
     ```
   - Exit the PostgreSQL interactive terminal.
     ```sql
     \q
     ```

## Usage

To start the application, run the following command:
```sh
node index.js
```

You will be presented with a menu of options to choose from:
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

### Viewing Data

- **View All Departments**: Displays a formatted table showing department names and department IDs.
- **View All Roles**: Displays job titles, role IDs, the department each role belongs to, and salaries for each role.
- **View All Employees**: Displays employee IDs, first names, last names, job titles, departments, salaries, and managers for each employee.

### Adding Data

- **Add a Department**: Prompts for the name of the department and adds it to the database.
- **Add a Role**: Prompts for the role name, salary, and department, then adds the role to the database.
- **Add an Employee**: Prompts for the employee's first name, last name, role, and manager, then adds the employee to the database.

### Updating Data

- **Update an Employee Role**: Prompts to select an employee to update and their new role, then updates the employee's role in the database.

## Features

- Command-line interface for easy interaction with the database.
- View, add, and update departments, roles, and employees.
- Structured and formatted output for better readability.

## Video Walkthrough

A walkthrough video demonstrating the functionality of the application can be found [here](https://app.screencastify.com/v3/watch/Fmz5tTcKPIPAVI7gfwI9).

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

## Questions

If you have any questions about the project, please feel free to contact me at [meadinmenbere488@gmail.com].

---

