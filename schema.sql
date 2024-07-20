DROP DATABASE IF EXISTS employee tracker;

CREATE DATABASE employee_tracker;

/c Employee_Tracker

CREATE TABLE depatment  (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
);

CREATE TABLE role (
     id SERIAL PRIMARY KEY,
     title VARCHAR(30) UNIQUE NOT NULL,
     salary DECIMAL NOT NULL,
     department_id INTEGER REFERENCES department(id) ON DELETE CASCADE,
);
CREATE TABLE emplloyee(
    id SERIAL PRIMARY KEY,
    first_name  VARCHAR(30) NOT NULL,
    last_name   VARCHAR(30) NOT NULL,
    role_id INTEGER REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER REFERENCES employee(id) ON DELETE SET NULL
);




