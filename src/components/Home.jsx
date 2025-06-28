import Avatar from '../assets/Avatar.webp';
import { FiDownload } from 'react-icons/fi';
import priyanshuResume from '../assets/priyanshu_Resume.pdf';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 bg-gradient-to-b from-black via-blue-950 to-gray-900"
    >
      <div className="text-center z-10 px-4">
        <img
          className="w-[400px] border-0 mt-20 rounded-full lg:m-0 lg:max-w[250px] object-cover object-bottom"
          src={Avatar}
          alt="profile image"
        />
      </div>
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w[500px] font-semibold mb-5 px-1 pb-2 bg-gradient-to-r from-teal-400 via-sky-500 to-blue-900 bg-clip-text text-transparent ">
          <span className="text-white">
            Hi There,
            <br />
            I'm
          </span>{' '}
          Priyanshu
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-[33rem] text-left mx-auto">
          Motivated and detail-oriented Frontend Developer intern with a solid
          foundation in HTML, CSS, JavaScript, and basic React.js.{' '}
          <br className="mb-2" /> Eager to learn concepts in a real-world
          environment and contribute to building clean, efficient, and
          accessible web applications.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            className="flex font-semibold flex-row p-2 bg-gradient-to-b from-sky-500 via-blue-500 to-blue-800 rounded hover:-translate-y-1 "
            href="#contact"
          >
            Contact Me
          </a>
          <a
            className="flex font-semibold flex-row items-center p-2 bg-gradient-to-b from-sky-500 via-blue-500 to-blue-800 rounded hover:-translate-y-1 "
            href={priyanshuResume}
            target="_blank"
          >
            <p>Resume</p>
            <span className="h-5 ml-2 text-xl text-white">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
