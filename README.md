# Notepad Application

A simple Notepad application with backend built using Node.js, Express, and EJS templating.

## Features

- Create, view, and edit notes/tasks
- File-based storage for notes
- Dark mode / Light mode toggle
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AtharvaSachan123/Notepad-with-backend.git
   cd Notepad-with-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Dark Mode Feature

The application includes a built-in dark mode feature for improved user experience.

### How to Use Dark Mode

1. Look for the **theme toggle button** in the top-right corner of any page
2. Click the button to switch between themes:
   - **☀️ Light Mode** - Click to switch to light theme
   - **🌙 Dark Mode** - Click to switch to dark theme
3. Your preference is automatically saved and will persist across browser sessions

### Theme Persistence

The selected theme is stored in your browser's local storage. This means:
- Your theme preference is remembered even after closing the browser
- The theme applies immediately when you return to the application
- Each browser/device can have its own theme preference

## Usage

### Creating a Note

1. On the home page, enter a title in the "Title goes here" field
2. Add your content in the "Description goes here" textarea
3. Click "Create task" to save your note

### Viewing a Note

1. Click "Read more" on any note card to view its full content

### Editing a Note Filename

1. Click "Edit Filename" on any note card
2. Enter the new filename
3. Click "Update Name" to save changes

## Project Structure

```
Notepad-with-backend/
├── files/              # Storage for note files
├── node_modules/       # Dependencies
├── public/             # Static files (JS, CSS)
│   └── theme.js        # Theme toggle functionality
├── views/              # EJS templates
│   ├── index.ejs       # Home page
│   ├── edit.ejs        # Edit filename page
│   └── show.ejs        # View note page
├── index.js            # Express server
├── package.json        # Project configuration
└── README.md           # This file
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **EJS** - Templating engine
- **Tailwind CSS** - Styling (via CDN)

## License

ISC
