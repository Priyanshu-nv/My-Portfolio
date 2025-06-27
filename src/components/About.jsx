const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'javaScript',
    'ReactJs',
    'Tailwind',
    'Git',
    'GitHub',
  ];

  return (
    <section
      id="about"
      className="min-h-screen font-mono flex justify-center items-center py-20 bg-gradient-to-t from-black via-black to-gray-900"
    >
      <div className="max-w-3xl mx-auto px-2">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 text-center">
          About Me
        </h2>
        <div className="p-8 mb-6 rounded-xl border-white/10 border-2 ">
          <p className="text-gray-300 mb-4 text-xl">
            I'm a passionate web developer with hands-on experience in HTML,
            CSS, JavaScript, and React.js.
            <br className="mb-4" /> I'm currently exploring Frontend-development
            to sharpen my skills. I'm actively looking for a web development
            internship where I can contribute, learn from experienced
            developers, and grow in a team-oriented environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border-white/10 border-2 p-6">
            <h3 className="text-2xl text-center font-bold">💼Skills</h3>
            <div className="flex justify-center flex-wrap gap-2 p-5">
              {skills.map((skills, index) => (
                <span
                  className="text-blue-400 bg-blue-500/10 rounded-full p-1 text-balance"
                  key={index}
                >
                  {skills}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border-white/10 border-2 p-6">
            <h3 className="text-2xl text-center font-bold">📚Education</h3>
            <ul className="pl-5 p-5 list-inside text-lg text-gray-300">
              <li>
                <strong>B.Tech in Information Technology</strong>
              </li>
              <li>
                Bhgawan Mahavir University, Surat [2021-2025]
                <br />
                CGPA: 8.78
              </li>
              <li className="mt-6">
                <strong>Higher Secondary(Class XII)</strong>
              </li>
              <li>
                Shri Sharda Vidyamandir (GSHSEB) [2020-2021]
                <br />
                Grade: 72%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
