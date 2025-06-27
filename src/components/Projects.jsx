import ProjectCard from './ProjectCard';
import todoimg from '../assets/to-do.PNG';
import weatherApp from '../assets/weatherApp.PNG';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20 bg-gradient-to-b from-black via-blue-950 to-gray-900"
    >
      <div className="max-w-3xl mx-auto px-2">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
          <ProjectCard
            title="To-Do List"
            main="Stay organized with this simple To-Do List app that lets you add, check off, and delete tasks in a clean, responsive UI. Built with React and TailwindCSS."
            link="https://priyanshu-nv.github.io/to-do-list/"
            image={todoimg}
          />
          <ProjectCard
            title="Basic Weather App"
            main="A sleek and responsive weather forecast application built using React.js, TailwindCSS, and the OpenWeatherMap API.Users can search for any city worldwide to get real-time weather details including temperature, humidity, wind speed, pressure, and more "
            link="https://priyanshu-nv.github.io/basic-weather-app/"
            image={weatherApp}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
