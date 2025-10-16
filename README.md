# Todo Task Manager 📝

A modern, responsive todo/task management application built with React and Vite. This app allows users to efficiently manage their daily tasks with full CRUD functionality and persistent storage.

## ✨ Features

- **Add Tasks**: Create new tasks with ease
- **Edit Tasks**: Update existing tasks inline
- **Delete Tasks**: Remove completed or unwanted tasks
- **Mark Complete**: Toggle task completion status
- **Persistent Storage**: Tasks are saved to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Real-time Updates**: Instant UI updates without page refresh

## 🚀 Tech Stack

- **Frontend**: React 18 with Hooks
- **Build Tool**: Vite for lightning-fast development
- **Styling**: Modern CSS with responsive design
- **State Management**: React Context API
- **Storage**: Browser localStorage for data persistence
- **Code Quality**: ESLint configuration included

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd context-project-localStorage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create a .env file in the root directory
   VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🎯 Usage

1. **Adding Tasks**: Click the "Add Task" button or press Enter in the input field
2. **Editing Tasks**: Double-click on any task to edit it inline
3. **Marking Complete**: Click the checkbox next to a task to mark it as complete
4. **Deleting Tasks**: Click the delete button (🗑️) to remove a task
5. **Persistence**: All changes are automatically saved to localStorage

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/         # React components
├── context/           # Context providers
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── styles/            # CSS stylesheets
└── App.jsx            # Main application component
```

## 🔧 Configuration

The project uses Vite's environment variable system. Make sure to:

- Prefix environment variables with `VITE_`
- Place the `.env` file in the project root
- Restart the dev server after adding new variables

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with React and Vite
- Inspired by modern task management principles
- Part of the "Chai aur Code" React course

---

**Happy Task Managing! 🎉**
