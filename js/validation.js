/**
 * Form Validation Module
 * Handles all form validation logic
 */

/**
 * Validation rules for employee form fields
 */
const validationRules = {
    firstName: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s'-]+$/,
        message: 'First name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes'
    },
    lastName: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s'-]+$/,
        message: 'Last name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    department: {
        required: true,
        message: 'Please select a department'
    },
    role: {
        required: true,
        message: 'Please select a role'
    }
};

/**
 * Validate a single field
 * @param {string} fieldName - Name of the field to validate
 * @param {string} value - Value to validate
 * @param {Array} existingEmployees - Array of existing employees (for duplicate checking)
 * @param {number} excludeId - ID to exclude from duplicate checking (for editing)
 * @returns {Object} Validation result with isValid and message
 */
function validateField(fieldName, value, existingEmployees = [], excludeId = null) {
    const rule = validationRules[fieldName];
    if (!rule) {
        return { isValid: true, message: '' };
    }

    // Required field check
    if (rule.required && (!value || value.trim() === '')) {
        return { 
            isValid: false, 
            message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required` 
        };
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') {
        return { isValid: true, message: '' };
    }

    const trimmedValue = value.trim();

    // Length validation
    if (rule.minLength && trimmedValue.length < rule.minLength) {
        return { 
            isValid: false, 
            message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${rule.minLength} characters` 
        };
    }

    if (rule.maxLength && trimmedValue.length > rule.maxLength) {
        return { 
            isValid: false, 
            message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must not exceed ${rule.maxLength} characters` 
        };
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(trimmedValue)) {
        return { 
            isValid: false, 
            message: rule.message 
        };
    }

    // Email uniqueness check
    if (fieldName === 'email' && existingEmployees.length > 0) {
        const isDuplicate = existingEmployees.some(emp => 
            emp.email.toLowerCase() === trimmedValue.toLowerCase() && 
            emp.id !== excludeId
        );
        
        if (isDuplicate) {
            return { 
                isValid: false, 
                message: 'This email address is already in use' 
            };
        }
    }

    return { isValid: true, message: '' };
}

/**
 * Validate entire form
 * @param {Object} formData - Form data object
 * @param {Array} existingEmployees - Array of existing employees
 * @param {number} excludeId - ID to exclude from duplicate checking
 * @returns {Object} Validation result with isValid and errors object
 */
function validateForm(formData, existingEmployees = [], excludeId = null) {
    const errors = {};
    let isValid = true;

    // Validate each field
    Object.keys(validationRules).forEach(fieldName => {
        const validation = validateField(fieldName, formData[fieldName], existingEmployees, excludeId);
        if (!validation.isValid) {
            errors[fieldName] = validation.message;
            isValid = false;
        }
    });

    return { isValid, errors };
}

/**
 * Display validation error for a field
 * @param {string} fieldName - Name of the field
 * @param {string} message - Error message
 */
function displayFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}Error`);
    
    if (field && errorElement) {
        if (message) {
            field.classList.add('error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        } else {
            field.classList.remove('error');
            errorElement.textContent = '';
            errorElement.style.display = 'none';
        }
    }
}

/**
 * Clear all validation errors
 */
function clearValidationErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const fieldElements = document.querySelectorAll('.form-input, .form-select');
    
    errorElements.forEach(element => {
        element.textContent = '';
        element.style.display = 'none';
    });
    
    fieldElements.forEach(element => {
        element.classList.remove('error');
    });
}

/**
 * Display multiple validation errors
 * @param {Object} errors - Object containing field names and error messages
 */
function displayValidationErrors(errors) {
    // Clear existing errors first
    clearValidationErrors();
    
    // Display new errors
    Object.keys(errors).forEach(fieldName => {
        displayFieldError(fieldName, errors[fieldName]);
    });
}

/**
 * Real-time field validation
 * @param {HTMLElement} field - Field element
 * @param {Array} existingEmployees - Array of existing employees
 * @param {number} excludeId - ID to exclude from duplicate checking
 */
function setupRealTimeValidation(field, existingEmployees = [], excludeId = null) {
    const fieldName = field.name || field.id;
    
    // Validate on blur
    field.addEventListener('blur', function() {
        const validation = validateField(fieldName, this.value, existingEmployees, excludeId);
        displayFieldError(fieldName, validation.isValid ? '' : validation.message);
    });
    
    // Clear error on input (but don't validate until blur)
    field.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            displayFieldError(fieldName, '');
        }
    });
}

/**
 * Initialize validation for all form fields
 * @param {HTMLFormElement} form - Form element
 * @param {Array} existingEmployees - Array of existing employees
 * @param {number} excludeId - ID to exclude from duplicate checking
 */
function initializeFormValidation(form, existingEmployees = [], excludeId = null) {
    const fields = form.querySelectorAll('.form-input, .form-select');
    fields.forEach(field => {
        setupRealTimeValidation(field, existingEmployees, excludeId);
    });
}