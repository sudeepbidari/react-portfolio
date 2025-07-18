import ProjectCard from "../components/ProjectCards";

function Projects() {
    const projects = [
        {
            title: "Todo App",
            description: "A simple yet functional To-Do list app built with React and Tailwind CSS.",
            techstack: "React(JS), Tailwind CSS, LocalStorage API",
            github: "https://github.com/sudeepbidari/todo-app.git",
            demo: "https://todo-app-three-sable-75.vercel.app/"
        },
        {
            title: "Blog App",
            description: "A simple yet functional To-Do list app built with React and Tailwind CSS.",
            techstack: "React(JS), React Router Tailwind CSS, JSONPlaceholder API",
            github: "https://github.com/sudeepbidari/blog-app.git",
            demo: "https://blog-app-fawn-two.vercel.app"
        },
        {
            title: "User Management App",
            description: "A multi-page blog viewer app built with React, Vite, React Router, and Tailwind CSS. This project demonstrates dynamic routing, API fetching using useEffect, and responsive UI with Tailwind CSS.",
            techstack: "React(JS), Tailwind CSS",
            github: "https://github.com/sudeepbidari/user-management-app.git",
            demo: "https://user-management-app-delta-hazel.vercel.app/"
        },

    ];
  return (
    <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </div>
  );
}

export default Projects;