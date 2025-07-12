

let isInitialized = false;


function initializeApp() {
    if (isInitialized) return;
    
    setupEventListeners();
    updateControls();
    refreshEmployeeDisplay();
    
    isInitialized = true;
    console.log('Employee Directory App initialized successfully');
}


function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    // Page size functionality
    const pageSizeSelect = document.getElementById('pageSizeSelect');
    if (pageSizeSelect) {
        pageSizeSelect.addEventListener('change', handlePageSizeChange);
    }
    
    // Filter sidebar
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) {
        filterBtn.addEventListener('click', openFilterSidebar);
    }
    
    const closeSidebar = document.getElementById('closeSidebar');
    if (closeSidebar) {
        closeSidebar.addEventListener('click', closeFilterSidebar);
    }
    
    // Filter form
    const applyFilters = document.getElementById('applyFilters');
    if (applyFilters) {
        applyFilters.addEventListener('click', handleApplyFilters);
    }
    
    const resetFilters = document.getElementById('resetFilters');
    if (resetFilters) {
        resetFilters.addEventListener('click', handleResetFilters);
    }
    
    // Add employee
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');
    if (addEmployeeBtn) {
        addEmployeeBtn.addEventListener('click', openAddEmployeeModal);
    }
    
    // Employee form
    const employeeForm = document.getElementById('employeeForm');
    if (employeeForm) {
        employeeForm.addEventListener('submit', handleEmployeeFormSubmit);
    }
    
    const cancelBtn = document.getElementById('cancelBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeEmployeeModal);
    }
    
    // Overlay clicks
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', handleOverlayClick);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}


function handleSearch(event) {
    const searchTerm = event.target.value.trim();
    updateAppState({ searchTerm });
    refreshEmployeeDisplay();
}


function handleSort(event) {
    const sortBy = event.target.value;
    updateAppState({ sortBy });
    refreshEmployeeDisplay();
}

function handlePageSizeChange(event) {
    const pageSize = parseInt(event.target.value);
    updateAppState({ pageSize });
    refreshEmployeeDisplay();
}


function changePage(page) {
    const processedData = getProcessedEmployees();
    if (page >= 1 && page <= processedData.totalPages) {
        updateAppState({ currentPage: page });
        refreshEmployeeDisplay();
    }
}


function openFilterSidebar() {
    updateFilterForm();
    showFilterSidebar();
}

function closeFilterSidebar() {
    hideFilterSidebar();
}


function handleApplyFilters() {
    const filters = {
        firstName: document.getElementById('filterFirstName').value.trim(),
        department: document.getElementById('filterDepartment').value,
        role: document.getElementById('filterRole').value
    };
    
    updateAppState({ filters });
    refreshEmployeeDisplay();
    closeFilterSidebar();
}


function handleResetFilters() {
    const filters = {
        firstName: '',
        department: '',
        role: ''
    };
    
    updateAppState({ filters });
    updateFilterForm();
    refreshEmployeeDisplay();
}


function openAddEmployeeModal() {
    updateAppState({ editingEmployee: null });
    populateEmployeeForm(null);
    
    // Initialize form validation
    const form = document.getElementById('employeeForm');
    const existingEmployees = getAllEmployees();
    initializeFormValidation(form, existingEmployees);
    
    showModal('employeeModal');
}


function editEmployee(employeeId) {
    const employee = getEmployeeById(employeeId);
    if (!employee) {
        showErrorMessage('Employee not found');
        return;
    }
    
    updateAppState({ editingEmployee: employee });
    populateEmployeeForm(employee);
    
    // Initialize form validation
    const form = document.getElementById('employeeForm');
    const existingEmployees = getAllEmployees();
    initializeFormValidation(form, existingEmployees, employeeId);
    
    showModal('employeeModal');
}


function confirmDeleteEmployee(employeeId) {
    const employee = getEmployeeById(employeeId);
    if (!employee) {
        showErrorMessage('Employee not found');
        return;
    }
    
    const confirmMessage = `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`;
    if (confirm(confirmMessage)) {
        handleDeleteEmployee(employeeId);
    }
}


function handleDeleteEmployee(employeeId) {
    const employee = getEmployeeById(employeeId);
    if (!employee) {
        showErrorMessage('Employee not found');
        return;
    }
    
    const success = deleteEmployee(employeeId);
    if (success) {
        showSuccessMessage(`${employee.firstName} ${employee.lastName} has been deleted successfully`);
        refreshEmployeeDisplay();
    } else {
        showErrorMessage('Failed to delete employee');
    }
}


function closeEmployeeModal() {
    hideModal('employeeModal');
    updateAppState({ editingEmployee: null });
}


function handleEmployeeFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const employeeData = {
        firstName: formData.get('firstName').trim(),
        lastName: formData.get('lastName').trim(),
        email: formData.get('email').trim(),
        department: formData.get('department'),
        role: formData.get('role')
    };
    
    // Validate form
    const state = getAppState();
    const existingEmployees = getAllEmployees();
    const excludeId = state.editingEmployee ? state.editingEmployee.id : null;
    const validation = validateForm(employeeData, existingEmployees, excludeId);
    
    if (!validation.isValid) {
        displayValidationErrors(validation.errors);
        return;
    }
    
    // Save employee
    try {
        if (state.editingEmployee) {
            // Update existing employee
            const updatedEmployee = updateEmployee(state.editingEmployee.id, employeeData);
            if (updatedEmployee) {
                showSuccessMessage(`${employeeData.firstName} ${employeeData.lastName} has been updated successfully`);
            } else {
                showErrorMessage('Failed to update employee');
                return;
            }
        } else {
            // Add new employee
            const newEmployee = addEmployee(employeeData);
            showSuccessMessage(`${employeeData.firstName} ${employeeData.lastName} has been added successfully`);
        }
        
        closeEmployeeModal();
        refreshEmployeeDisplay();
    } catch (error) {
        console.error('Error saving employee:', error);
        showErrorMessage('An error occurred while saving the employee');
    }
}


function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
        closeEmployeeModal();
        closeFilterSidebar();
    }
}

function handleKeyboardShortcuts(event) {
    // Escape key to close modals
    if (event.key === 'Escape') {
        closeEmployeeModal();
        closeFilterSidebar();
    }
    
    // Ctrl/Cmd + N to add new employee
    if ((event.ctrlKey || event.metaKey) && event.key === 'n') {
        event.preventDefault();
        openAddEmployeeModal();
    }
    
    // Ctrl/Cmd + F to focus search
    if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
}


function refreshEmployeeDisplay() {
    try {
        const processedData = getProcessedEmployees();
        renderEmployeeGrid(processedData.employees);
        renderPagination(processedData);
    } catch (error) {
        console.error('Error refreshing employee display:', error);
        showErrorMessage('An error occurred while loading employees');
    }
}


function handleWindowResize() {
    // Close sidebar on mobile when window is resized to desktop
    if (window.innerWidth > 768) {
        closeFilterSidebar();
    }
}


document.addEventListener('DOMContentLoaded', initializeApp);


window.addEventListener('resize', debounce(handleWindowResize, 250));

window.editEmployee = editEmployee;
window.confirmDeleteEmployee = confirmDeleteEmployee;
window.changePage = changePage;