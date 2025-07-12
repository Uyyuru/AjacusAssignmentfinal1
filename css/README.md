# Employee Directory Web Interface

A modern, responsive Employee Directory built with **HTML, CSS, JavaScript, and Freemarker templates**.  
This project demonstrates clean UI/UX, modular code, and dynamic rendering without backend dependencies.

---

## 🚀 Features

- **Dashboard:** Grid/list of employees with ID, name, email, department, and role.
- **Add/Edit Employee:** Modal form with validation and smooth UX.
- **Delete Employee:** Confirmation and error handling.
- **Filter/Sort/Search:** Sidebar filter, top search bar, and sorting controls.
- **Pagination:** Choose page size (10, 25, 50, 100).
- **Responsive Design:** Looks great on desktop, tablet, and mobile.
- **Freemarker Templating:** Dynamic HTML rendering for employee cards/grid.
- **Client-side Data:** All data handled in-memory (no backend/API).

---

## 🖥️ Screenshots

> **Tip:** Add your own screenshots here for extra impact!

| Desktop | Tablet | Mobile |
|---------|--------|--------|
| ![Desktop Screenshot](C:\Users\U H Saitej\Desktop\Ajacus\assignment\Screenshot 2025-07-12 135758.png) | ![Tablet Screenshot](C:\Users\U H Saitej\Desktop\Ajacus\assignment\Screenshot 2025-07-12 135813.png) | ![Mobile Screenshot](screenshots/mobile.png) |

---

## 📦 Project Structure


---

## ⚙️ Setup & Run Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/employee-directory.git
   cd employee-directory


2. ** Install dependencies (if any):**

No dependencies required for frontend.
For local server, ensure Node.js is installed.


The app will be available at http://localhost:8000.

Open in your browser and explore!




📝 How It Works
Employee Data:
Stored in a local JS array (data.js).
Rendered via Freemarker templates for the grid and cards.

Add/Edit:
Opens a modal form.
Validates input (required fields, email format, etc).
Updates the in-memory array and UI.

Delete:
Prompts for confirmation before removing an employee.

Filter/Sort/Search:

Filter: Sidebar for filtering by name, department, role.
Search: Top bar for name/email.
Sort: By first name or department.
Pagination:
User can select how many employees per page.

Responsive:
Layout adapts for desktop, tablet, and mobile via responsive.css.

🧩 Technologies Used
HTML5, CSS3 (modular, BEM-inspired)
Vanilla JavaScript (ES6+)
Freemarker Templates
Node.js + Express (for local dev server only)



📧 Contact
For any questions or feedback, please contact your uyyuruhimasaitej@gmail.com