function Contact() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact Me</h2>
      <p className="text-gray-700 mb-6">
        Feel free to reach out for collaborations, project inquiries, or just to say hello!
      </p>

      <div className="mb-6">
        <p className="text-gray-800 font-semibold">Email:</p>
        <a href="mailto:sudeep.bidari1@gmail.com" className="text-blue-600 hover:underline">
          sudeep.bidari1@gmail.com
        </a> <br />
        <a href="https://linkedin.com/sudeepbidari" className="text-blue-700 hover:underline">LinkedIn</a>
      </div>

      {/* Optional Contact Form (not functional) */}
      {/* <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
          disabled
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
          disabled
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded h-32"
          disabled
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled
        >
          <strike>Send Message </strike>
        </button>
      </form> */}
    </div>
  );
}

export default Contact;
