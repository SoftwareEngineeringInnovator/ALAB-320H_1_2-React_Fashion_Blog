# [Netlify Live Link](https://alab-320h-1-2-react-fashion-blog.netlify.app/)

# [GitHub Pages Live Link](https://softwareengineeringinnovator.github.io/ALAB-320H_1_2-Fashion_Blog_HTML/)

# [GitHub Link of HTML Version](https://github.com/SoftwareEngineeringInnovator/ALAB-320H_1_2-Fashion_Blog_HTML)

# ALAB 320H.1.2 - React Fashion Blog

This project is the React version of the Sartre's List Fashion Blog.

I first recreated the provided website mockup using plain HTML and CSS. I then converted the page into a React application using reusable components and props.

The React application was created with Vite and deployed through Netlify.

## Technologies Used

- React
- JavaScript
- JSX
- Vite
- CSS
- Flexbox
- Git
- GitHub
- Netlify

## React Components

The application is divided into the following components:

- `App.jsx` organizes the complete application.
- `Header.jsx` displays the website title, subtitle, and main navigation.
- `Nav.jsx` creates reusable header and footer navigation menus.
- `Article.jsx` creates reusable fashion blog articles using props.
- `Footer.jsx` displays the footer navigation and copyright.

## React Concepts Practiced

While completing this project, I practiced:

- Creating a React application with Vite
- Importing and exporting components
- Writing JSX
- Passing information through props
- Creating reusable components
- Rendering arrays with `.map()`
- Importing local images into React
- Styling React components with CSS
- Running lint and production build commands
- Deploying a React application with Netlify

## Project Structure

```text
ALAB-320H_1_2-React_Fashion_Blog/
├── public/
├── src/
│   ├── assets/
│   │   ├── Three_People.jpg
│   │   └── women_Red_Dress.jpg
│   ├── components/
│   │   ├── Article.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Nav.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## How to Run the Project

Clone the repository and move into the project folder:

```bash
git clone https://github.com/SoftwareEngineeringInnovator/ALAB-320H_1_2-React_Fashion_Blog.git
cd ALAB-320H_1_2-React_Fashion_Blog
```

Install the project dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the local address displayed in the terminal.

## Project Checks

Run the Oxlint check:

```bash
npm run lint
```

Create the production build:

```bash
npm run build
```

The production-ready application will be created inside the `dist` folder.

## Deployment

The plain HTML and CSS version is deployed through GitHub Pages.

The React version is connected to the GitHub repository and deployed through Netlify. New commits pushed to the `main` branch can trigger a new Netlify deployment.

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: ALAB 320H.1.2 - React Fashion Blog