# Todo App
This is a simple todo list application built using React, Redux, and TypeScript. The app allows users to add, toggle, delete, and clear todos. It also supports undo/redo functionality, keyboard accessibility, error handling, data validation, and custom filters.

## Features
- **Add Todo:** Users can add new todos using the input field at the top of the app. Pressing Enter creates the todo.
- **Toggle Todo:** Users can mark todos as complete by clicking the checkbox next to the todo item.
- **Delete Todo:** Users can delete a todo by clicking the delete button next to the todo item.
- **Clear Completed:** Users can clear all completed todos by clicking the "Clear completed" button.
- **Undo/Redo:** Undo and redo functionality is available to revert or reapply todo actions.
- **Keyboard Accessibility:** Keyboard shortcuts are provided for adding todos (Enter key) and toggling completion (Enter key). Deleting todos is also supported using the Delete key.
- **Error Handling:** Error handling is implemented to handle cases such as failing to save/load data from localStorage.
- **Data Validation:** Data validation ensures that todo titles are not empty or contain only whitespace characters.

## Project Structure
The project structure is organized as follows:

```bash
todo-app/
│   .eslintrc.cjs
│   .gitignore
│   directory-structure.md
│   index.html
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.js
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
│
├───public
│       vite.svg
│
└───src
    ├───App.tsx
    ├───index.css
    ├───main.tsx
    ├───setupTests.ts
    ├───vite-env.d.ts
    │
    ├───assets
    │   ├───react.svg
    │
    ├───components
    │   ├───index.ts
    │   │
    │   ├───Footer
    │   │   ├───Footer.test.tsx
    │   │   ├───index.tsx
    │   │
    │   ├───ListHeader
    │   │   ├───index.tsx
    │   │
    │   ├───NoTodoAlert
    │   │   ├───index.tsx
    │   │
    │   ├───TodoInput
    │   │   ├───index.tsx
    │   │
    │   ├───TodoItem
    │   │   ├───index.tsx
    │   │   ├───TodoItem.test.tsx
    │   │
    │   └───TodoList
    │       ├───index.tsx
    │       ├───TodoList.test.tsx
    │
    ├───pages
    │   ├───Active.tsx
    │   ├───All.tsx
    │   ├───Completed.tsx
    │
    ├───store
    │   ├───action.test.ts
    │   ├─── action.ts
    │   ├───reducer.test.ts
    │   ├───reducers.ts
    │   ├───store.ts
    │   ├───types.ts
    │
    └───utils
        ├───localstorage.ts
        ├───test-utils.tsx         # TypeScript configuration
```
## Getting Started
1. Clone the repository:
 ```bash
  git clone https://github.com/ops295/mvctodo.git
```
2. Install dependencies:
 ```bash
 cd mvctodo
 npm install
 ```
3. Run the app:
```bash
npm start
```
4. Open the app:
Visit http://localhost:5173 in your web browser to view the todo app. Or you can change the port by configuring in `vite.config.js`.

###  Contributing
Contributions are welcome! Feel free to submit pull requests or open issues for any bugs or feature requests.

#### License
This project is licensed under the MIT License - see the LICENSE file for details.