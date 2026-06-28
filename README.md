# Publishly

A modern full-stack blogging platform built with **React.js**, **Appwrite**, **Redux Toolkit**, and **Tailwind CSS**. Publishly enables users to create, edit, manage, and publish articles through a clean and responsive interface with secure authentication and rich text editing.

---

## Preview

Publishly is a modern content publishing platform that provides:

- Secure user authentication
- Rich text blog editor
- Image upload and preview
- Create, Read, Update and Delete (CRUD) operations
- Responsive design
- Protected routes
- Modern UI built with Tailwind CSS

---

## Features

### Authentication

- User Registration
- User Login
- User Logout
- Session Management
- Protected Routes

### Blog Management

- Create Blog Posts
- Edit Existing Posts
- Delete Posts
- View All Posts
- View Individual Posts
- Rich Text Editor using TinyMCE
- Upload Featured Images

### User Experience

- Responsive Design
- Modern UI
- Dark Theme
- Form Validation
- Image Preview
- Dynamic Routing
- Loading Friendly Navigation

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Redux Toolkit
- React Hook Form
- Tailwind CSS
- TinyMCE Editor
- HTML React Parser

### Backend

- Appwrite Authentication
- Appwrite Database
- Appwrite Storage

### Tools

- Vite
- Git
- GitHub
- VS Code

---

## Project Structure

```
src
│
├── appwrite
│   ├── auth.js
│   └── config.js
│
├── components
│   ├── Header
│   ├── Footer
│   ├── Button
│   ├── Input
│   ├── Logo
│   ├── PostCard
│   ├── RTE
│   ├── SelectButton
│   └── Container
│
├── pages
│   ├── Home
│   ├── Login
│   ├── Signup
│   ├── AddPost
│   ├── EditPost
│   ├── AllPosts
│   └── Post
│
├── store
│   └── Redux Toolkit
│
└── main.jsx
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/publishly.git
```

### Navigate to Project

```bash
cd publishly
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_APPWRITE_URL=YOUR_APPWRITE_ENDPOINT
VITE_APPWRITE_PROJECT_ID=YOUR_PROJECT_ID
VITE_APPWRITE_DATABASE_ID=YOUR_DATABASE_ID
VITE_APPWRITE_COLLECTION_ID=YOUR_COLLECTION_ID
VITE_APPWRITE_BUCKET_ID=YOUR_BUCKET_ID
VITE_TINYMCE_API_KEY=YOUR_TINYMCE_API_KEY
```

---

## Screens

- Home
- Login
- Signup
- All Posts
- Create Post
- Edit Post
- Post Details

---

## Key Functionalities

- Authentication using Appwrite
- CRUD Operations
- Rich Text Editing
- Image Upload
- Protected Routes
- Redux State Management
- Dynamic Routing
- Responsive Layout

---

## Future Improvements

- User Profiles
- Categories
- Tags
- Search Functionality
- Comments
- Like System
- Bookmark Posts
- User Dashboard
- Reading Time
- Social Sharing
- Pagination
- Draft Posts
- Theme Switcher
- Email Verification
- Password Reset

---

## Learning Outcomes

During this project, I gained practical experience with:

- React.js
- Component Architecture
- React Hooks
- Redux Toolkit
- React Router
- React Hook Form
- Tailwind CSS
- Appwrite Backend
- Authentication
- Database Integration
- Storage Management
- CRUD Operations
- Responsive Design
- State Management
- Form Validation

---

## Author

**Sahil MJ**

GitHub: https://github.com/SahilMj007

---

## License

This project is licensed under the MIT License.

---

## Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.
