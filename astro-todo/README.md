# 📝 A minimal todo app

A minimal and modern to-do app built with React, Astro, and Shadcn UI. This project serves as a personal learning exercise and also demonstrates how to integrate React with Astro and Shadcn to create a simple yet clean and usable to-do list web application.

## 🚀 Features

- **Add Tasks**: Quickly add tasks to your to-do list with a simple input field.
- **Delete Tasks**: Remove tasks with a single click.
- **Modern Tech Stack**: Built with Astro and React, styled using Shadcn and Tailwind CSS.

## 🛠️ Tech Stack

- **Astro**: For the project structure and static site generation.
- **React**: To create dynamic components.
- **Shadcn UI**: For modern, pre-designed UI components.
- **Tailwind CSS**: For styling.

## 🚧 Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/copypasteonly/todolist
   cd todolist
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   When you're ready to deploy, build the app:

   ```bash
   npm run build
   ```

5. **Preview the production build:**

   Test the production build locally:

   ```bash
   npm run preview
   ```

## 🧩 Project Structure

```bash
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── TodoList.jsx
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── package.json
└── tailwind.config.cjs
```

- **`/public`**: Static files like favicon.
- **`/src/components`**: React components.
- **`/src/pages`**: Astro pages.
- **`/src/styles`**: Global styles.
- **`tailwind.config.cjs`**: Tailwind CSS configuration.
