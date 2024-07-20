-- populate the database with initial data.
INSERT INTO department (name) VALUES ('Engineering'), ('Finance'), ('HR');

INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 90000, 1),
('Accountant', 80000, 2),
('HR Manager', 75000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Sara', 'Connor', 3, 1);
