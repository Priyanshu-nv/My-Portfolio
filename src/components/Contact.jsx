export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center font-mono justify-center py-20 bg-gradient-to-t from-black via-black to-gray-900"
    >
      <div className="px-4 w-150">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 text-center">
          Get In Touch
        </h2>
        <form
          className="space-y-6"
          action="https://formsubmit.co/pnavidolatwala@gmail.com"
          method="POST"
        >
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
              required
              className="w-full bg-white/10 border  rounded px-4 py-3 text-white trasition focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              required
              className="w-full bg-white/10 border  rounded px-4 py-3 text-white trasition focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <textarea
              type="message"
              id="message"
              name="message"
              rows={6}
              placeholder="Type your message..."
              required
              className="w-full bg-white/10 border  rounded px-4 py-3 text-white trasition focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="flex p-2 bg-gradient-to-br from-teal-500 via-blue-500 to-blue-800 rounded hover:shadow-[0_0_9px_rgba(59,130,246,0.4)] w-full text-center justify-center cursor-pointer transition relative overflow-hidden font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
