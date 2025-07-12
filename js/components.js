

function renderEmployeeCard(employee) {
    return `
        <div class="employee-card" data-id="${employee.id}">
            <h3 class="employee-name">${escapeHtml(employee.firstName)} ${escapeHtml(employee.lastName)}</h3>
            <div class="employee-details">
                <p><span class="detail-label">Email:</span> ${escapeHtml(employee.email)}</p>
                <p><span class="detail-label">Department:</span> ${escapeHtml(employee.department)}</p>
                <p><span class="detail-label">Role:</span> ${escapeHtml(employee.role)}</p>
            </div>
            <div class="employee-actions">
                <button class="btn btn-edit" onclick="editEmployee(${employee.id})">
                    <span class="edit-icon">✏️</span>
                    Edit
                </button>
                <button class="btn btn-delete" onclick="confirmDeleteEmployee(${employee.id})">
                    <span class="delete-icon">🗑️</span>
                    Delete
                </button>
            </div>
        </div>
    `;
}


function renderEmployeeGrid(employees) {
    const gridElement = document.getElementById('employeeGrid');
    
    if (!employees || employees.length === 0) {
        gridElement.innerHTML = `
            <div class="no-employees">
                <p>No employees found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    gridElement.innerHTML = employees.map(employee => renderEmployeeCard(employee)).join('');
}


function renderPagination(paginationData) {
    const paginationElement = document.getElementById('pagination');
    const { currentPage, totalPages, totalEmployees } = paginationData;
    
    if (totalPages <= 1) {
        paginationElement.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
   
    paginationHTML += `
        <button class="pagination-btn" onclick="changePage(${currentPage - 1})" 
                ${currentPage === 1 ? 'disabled' : ''}>
            Previous
        </button>
    `;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" 
                    onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    paginationHTML += `
        <button class="pagination-btn" onclick="changePage(${currentPage + 1})" 
                ${currentPage === totalPages ? 'disabled' : ''}>
            Next
        </button>
    `;
    
    paginationElement.innerHTML = paginationHTML;
}


function showModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    
    if (modal && overlay) {
        modal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}


function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('overlay');
    
    if (modal && overlay) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}


function showFilterSidebar() {
    const sidebar = document.getElementById('filterSidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hideFilterSidebar() {
    const sidebar = document.getElementById('filterSidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}


function populateEmployeeForm(employee) {
    const form = document.getElementById('employeeForm');
    const modalTitle = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('submitBtn');
    
    if (employee) {
        // Edit mode
        modalTitle.textContent = 'Edit Employee';
        submitBtn.textContent = 'Update';
        
        // Populate form fields
        document.getElementById('firstName').value = employee.firstName;
        document.getElementById('lastName').value = employee.lastName;
        document.getElementById('email').value = employee.email;
        document.getElementById('department').value = employee.department;
        document.getElementById('role').value = employee.role;
    } else {
        // Add mode
        modalTitle.textContent = 'Add Employee';
        submitBtn.textContent = 'Add';
        
        // Clear form fields
        form.reset();
    }
    
    // Clear any existing validation errors
    clearValidationErrors();
}


function updateFilterForm() {
    const state = getAppState();
    
    document.getElementById('filterFirstName').value = state.filters.firstName;
    document.getElementById('filterDepartment').value = state.filters.department;
    document.getElementById('filterRole').value = state.filters.role;
}


function updateControls() {
    const state = getAppState();
    
    document.getElementById('sortSelect').value = state.sortBy;
    document.getElementById('pageSizeSelect').value = state.pageSize;
    document.getElementById('searchInput').value = state.searchTerm;
}


function showLoading() {
    const gridElement = document.getElementById('employeeGrid');
    gridElement.innerHTML = `
        <div class="no-employees">
            <p>Loading employees...</p>
        </div>
    `;
}


function showSuccessMessage(message) {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.className = 'toast toast-success';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        z-index: 10000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showErrorMessage(message) {
    // Create a simple toast notification
    const toast = document.createElement('div');
    toast.className = 'toast toast-error';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        z-index: 10000;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 5000);
}


function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}


function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}