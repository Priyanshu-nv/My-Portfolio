import ProjectCard from "./ProjectCard";
import habitimg from "../assets/Focus-flow.png";
import weatherApp from "../assets/weatherApp.PNG";
import E_commerce from "../assets/e-commerce.PNG";

const Projects = () => {
  return (
    <section className="min-h-screen flex items-center font-mono justify-center py-20 bg-gradient-to-b from-black via-blue-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="max-w-7xl text-4xl font-semibold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div className="py-12 px-8 flex flex-wrap justify-center gap-5">
          <ProjectCard
            title="FocusFlow - Habit Tracker"
            main="FocusFlow is a responsive habit tracking app built with React.js and TailwindCSS. It includes a focus timer and input validation to enhance user productivity and experience. Also added localStorage persistence and dark mode using Context API."
            link="https://focus-flow-project.vercel.app/"
            image={habitimg}
          />
          <ProjectCard
            title="E-commerce Web Application"
            main="Built a responsive single-page e-commerce application featuring product listing, dynamic routing, and a fully functional cart system with quantity management and localStorage persistence. Implemented user authentication (login/signup) using Context API."
            link="https://priyanshu-nv.github.io/e-commerce-web/"
            image={E_commerce}
          />
          <ProjectCard
            title="Basic Weather App"
            main="A sleek and responsive weather forecast application built using React.js, TailwindCSS, and the OpenWeatherMap API.Users can search for any city worldwide to get real-time weather details including temperature, humidity, wind speed, pressure, and more..."
            link="https://priyanshu-nv.github.io/basic-weather-app/"
            image={weatherApp}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
