
let employees = [
    { id: 1, firstName: 'Ganesh', lastName: 'Arfath', email: 'ganesh@zoho.com', department: 'HR', role: 'Manager' },
    { id: 2, firstName: 'Rohith', lastName: 'Johnson', email: 'rohith@outlook.com', department: 'IT', role: 'Developer' },
    { id: 3, firstName: 'Akay', lastName: 'Kohli', email: 'akaykohli@gmail.com', department: 'Finance', role: 'Analyst' },
    { id: 4, firstName: 'Satyamurthy', lastName: 'Nuthakki', email: 'satya@outlook.com', department: 'IT', role: 'Developer' },
    { id: 5, firstName: 'Ajay', lastName: 'Davis', email: 'ajay@gmail.com', department: 'HR', role: 'Coordinator' },
    { id: 6, firstName: 'Arfath', lastName: 'Alishaik', email: 'arfath@gmail.com', department: 'Finance', role: 'Manager' },
    { id: 7, firstName: 'Saitej', lastName: 'Uyyuru', email: 'saitej@gmail.com', department: 'IT', role: 'Senior Developer' },
    { id: 8, firstName: 'Abhinav', lastName: 'Kolla', email: 'abhinav@gmail.com', department: 'HR', role: 'Recruiter' },
    { id: 9, firstName: 'Teja', lastName: 'Thomas', email: 'teja@gmail.com', department: 'Finance', role: 'Analyst' },
    { id: 10, firstName: 'Sandeep', lastName: 'Sadguna', email: 'sandeep@gmail.com', department: 'IT', role: 'DevOps' },
    { id: 11, firstName: 'Karan', lastName: 'Sharma', email: 'karan@gmail.com', department: 'HR', role: 'Manager' },
    { id: 12, firstName: 'Mahesh', lastName: 'Gattamaneni', email: 'maheshgattamaneni@gmail.com', department: 'Finance', role: 'Senior Analyst' },
    { id: 13, firstName: 'Priya', lastName: 'Reddy', email: 'priya.reddy@gmail.com', department: 'HR', role: 'Recruiter' },
    { id: 14, firstName: 'Vikram', lastName: 'Singh', email: 'vikram.singh@gmail.com', department: 'IT', role: 'Developer' },
    { id: 15, firstName: 'Anjali', lastName: 'Mehra', email: 'anjali.mehra@gmail.com', department: 'Finance', role: 'Analyst' },
    { id: 16, firstName: 'Rahul', lastName: 'Verma', email: 'rahul.verma@gmail.com', department: 'IT', role: 'Developer' },
    { id: 17, firstName: 'Sneha', lastName: 'Patel', email: 'sneha.patel@gmail.com', department: 'HR', role: 'Coordinator' },
    { id: 18, firstName: 'Arjun', lastName: 'Nair', email: 'arjun.nair@gmail.com', department: 'Finance', role: 'Manager' },
    { id: 19, firstName: 'Divya', lastName: 'Sharma', email: 'divya.sharma@gmail.com', department: 'IT', role: 'Senior Developer' },
    { id: 20, firstName: 'Rakesh', lastName: 'Gupta', email: 'rakesh.gupta@gmail.com', department: 'HR', role: 'Manager' },
    { id: 21, firstName: 'Meena', lastName: 'Kumari', email: 'meena.kumari@gmail.com', department: 'Finance', role: 'Analyst' },
    { id: 22, firstName: 'Vikas', lastName: 'Chopra', email: 'vikas.chopra@gmail.com', department: 'IT', role: 'DevOps' },
    { id: 23, firstName: 'Pooja', lastName: 'Jain', email: 'pooja.jain@gmail.com', department: 'HR', role: 'Recruiter' },
    { id: 24, firstName: 'Amit', lastName: 'Desai', email: 'amit.desai@gmail.com', department: 'Finance', role: 'Senior Analyst' },
    { id: 25, firstName: 'Neha', lastName: 'Joshi', email: 'neha.joshi@gmail.com', department: 'IT', role: 'Developer' },
    { id: 26, firstName: 'Suresh', lastName: 'Rao', email: 'suresh.rao@gmail.com', department: 'HR', role: 'Manager' },
    { id: 27, firstName: 'Lakshmi', lastName: 'Menon', email: 'lakshmi.menon@gmail.com', department: 'Finance', role: 'Analyst' },
    { id: 28, firstName: 'Manoj', lastName: 'Kumar', email: 'manoj.kumar@gmail.com', department: 'IT', role: 'Developer' },
    { id: 29, firstName: 'Deepa', lastName: 'Mishra', email: 'deepa.mishra@gmail.com', department: 'HR', role: 'Coordinator' },
    { id: 30, firstName: 'Ravi', lastName: 'Shankar', email: 'ravi.shankar@gmail.com', department: 'Finance', role: 'Manager' },
    { id: 31, firstName: 'Sunita', lastName: 'Yadav', email: 'sunita.yadav@gmail.com', department: 'IT', role: 'Senior Developer' },
    { id: 32, firstName: 'Tarun', lastName: 'Kapoor', email: 'tarun.kapoor@gmail.com', department: 'HR', role: 'Manager' },
    { id: 33, firstName: 'Kavya', lastName: 'Srinivasan', email: 'kavya.srinivasan@gmail.com', department: 'Finance', role: 'Analyst' },
    { id: 34, firstName: 'Nikhil', lastName: 'Agarwal', email: 'nikhil.agarwal@gmail.com', department: 'IT', role: 'DevOps' },
    { id: 35, firstName: 'Shreya', lastName: 'Pandey', email: 'shreya.pandey@gmail.com', department: 'HR', role: 'Recruiter' },
    { id: 36, firstName: 'Harsha', lastName: 'Vardhan', email: 'harsha.vardhan@gmail.com', department: 'Finance', role: 'Senior Analyst' },
    { id: 37, firstName: 'Venu', lastName: 'Gopal', email: 'venu.gopal@gmail.com', department: 'IT', role: 'Developer' },
    { id: 38, firstName: 'Bhavana', lastName: 'Reddy', email: 'bhavana.reddy@gmail.com', department: 'HR', role: 'Coordinator' },
    { id: 39, firstName: 'Sanjay', lastName: 'Mishra', email: 'sanjay.mishra@gmail.com', department: 'Finance', role: 'Manager' },
    { id: 40, firstName: 'Aishwarya', lastName: 'Iyer', email: 'aishwarya.iyer@gmail.com', department: 'IT', role: 'Senior Developer' },
    { id: 41, firstName: 'Praveen', lastName: 'Kumar', email: 'praveen.kumar@gmail.com', department: 'HR', role: 'Manager' },
    { id: 42, firstName: 'Ritu', lastName: 'Gupta', email: 'ritu.gupta@gmail.com', department: 'Finance', role: 'Analyst' },
    { id: 43, firstName: 'Siddharth', lastName: 'Malhotra', email: 'siddharth.malhotra@gmail.com', department: 'IT', role: 'DevOps' },
    { id: 44, firstName: 'Anusha', lastName: 'Shetty', email: 'anusha.shetty@gmail.com', department: 'HR', role: 'Recruiter' },
    { id: 45, firstName: 'Rajesh', lastName: 'Pillai', email: 'rajesh.pillai@gmail.com', department: 'Finance', role: 'Senior Analyst' },
    { id: 46, firstName: 'Chaitanya', lastName: 'Das', email: 'chaitanya.das@gmail.com', department: 'IT', role: 'Developer' },
    { id: 47, firstName: 'Madhuri', lastName: 'Patil', email: 'madhuri.patil@gmail.com', department: 'HR', role: 'Coordinator' },
    { id: 48, firstName: 'Vishal', lastName: 'Rana', email: 'vishal.rana@gmail.com', department: 'Finance', role: 'Manager' },
    { id: 49, firstName: 'Pavan', lastName: 'Kalyan', email: 'pavan.kalyan@gmail.com', department: 'IT', role: 'Senior Developer' },
    { id: 50, firstName: 'Sowmya', lastName: 'Krishna', email: 'sowmya.krishna@gmail.com', department: 'HR', role: 'Manager' }
];

// Application state
let appState = {
    currentPage: 1,
    pageSize: 10,
    sortBy: 'firstName',
    searchTerm: '',
    filters: {
        firstName: '',
        department: '',
        role: ''
    },
    editingEmployee: null
};


function getAllEmployees() {
    return [...employees];
}


function getEmployeeById(id) {
    return employees.find(emp => emp.id === id) || null;
}


function addEmployee(employeeData) {
    const newId = Math.max(...employees.map(emp => emp.id), 0) + 1;
    const newEmployee = {
        id: newId,
        ...employeeData
    };
    employees.push(newEmployee);
    return newEmployee;
}


function updateEmployee(id, employeeData) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees[index] = { ...employees[index], ...employeeData };
        return employees[index];
    }
    return null;
}


function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        return true;
    }
    return false;
}



function filterEmployees(employeeList) {
    return employeeList.filter(employee => {
        // Search term filter
        const matchesSearch = !appState.searchTerm || 
            employee.firstName.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
            employee.email.toLowerCase().includes(appState.searchTerm.toLowerCase());

        // Advanced filters
        const matchesFirstName = !appState.filters.firstName || 
            employee.firstName.toLowerCase().includes(appState.filters.firstName.toLowerCase());
        
        const matchesDepartment = !appState.filters.department || 
            employee.department === appState.filters.department;
        
        const matchesRole = !appState.filters.role || 
            employee.role === appState.filters.role;

        return matchesSearch && matchesFirstName && matchesDepartment && matchesRole;
    });
}


function sortEmployees(employeeList) {
    return [...employeeList].sort((a, b) => {
        if (appState.sortBy === 'firstName') {
            return a.firstName.localeCompare(b.firstName);
        } else if (appState.sortBy === 'department') {
            return a.department.localeCompare(b.department);
        }
        return 0;
    });
}


function getPaginatedEmployees(employeeList) {
    const startIndex = (appState.currentPage - 1) * appState.pageSize;
    const endIndex = startIndex + appState.pageSize;
    const paginatedEmployees = employeeList.slice(startIndex, endIndex);
    const totalPages = Math.ceil(employeeList.length / appState.pageSize);

    return {
        employees: paginatedEmployees,
        currentPage: appState.currentPage,
        totalPages: totalPages,
        totalEmployees: employeeList.length
    };
}


function getProcessedEmployees() {
    let processedEmployees = getAllEmployees();
    processedEmployees = filterEmployees(processedEmployees);
    processedEmployees = sortEmployees(processedEmployees);
    return getPaginatedEmployees(processedEmployees);
}


function updateAppState(newState) {
    appState = { ...appState, ...newState };
    
    // Reset to first page when filters change
    if (newState.searchTerm !== undefined || newState.filters !== undefined || 
        newState.sortBy !== undefined || newState.pageSize !== undefined) {
        appState.currentPage = 1;
    }
}


function getAppState() {
    return { ...appState };
}