<#-- Employee Card Template -->
<div class="employee-card" data-id="${employee.id}">
    <h3 class="employee-name">${employee.firstName} ${employee.lastName}</h3>
    <div class="employee-details">
        <p><span class="detail-label">Email:</span> ${employee.email}</p>
        <p><span class="detail-label">Department:</span> ${employee.department}</p>
        <p><span class="detail-label">Role:</span> ${employee.role}</p>
    </div>
    <div class="employee-actions">
        <button class="btn btn-edit" onclick="editEmployee(${employee.id})">
            <span class="edit-icon">✏️</span>
            Edit
        </button>
        <button class="btn btn-delete" onclick="deleteEmployee(${employee.id})">
            <span class="delete-icon">🗑️</span>
            Delete
        </button>
    </div>
</div>