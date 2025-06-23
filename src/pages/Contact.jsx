import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>
        Feel free to reach out via email at{" "}
        <a href="mailto:wmweemba@gmail.com" className="text-blue-500">
          wmweemba@gmail.com
        </a>
        .
      </p>
      <p className="mt-2">
        Or call us at{" "}
        <strong>(260) 979-645 911</strong> during business hours.
      </p>
      <p className="mt-2">
        You can also fill out the form below and we'll get back to you as soon as possible!
      </p>
      <form className="mt-8 w-3/5 mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full mb-6 bg-transparent border-0 border-b-2 border-grey-900 focus:border-blue-600 focus:ring-0 text-gray-900 dark:text-gray-100 placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="block w-full mb-6 bg-transparent border-0 border-b-2 border-grey-900 focus:border-blue-600 focus:ring-0 text-gray-900 dark:text-gray-100 placeholder-gray-400"
        />
        <textarea
          placeholder="Your Message"
          className="block w-full mb-6 bg-transparent border-0 border-b-2 border-grey-900 focus:border-blue-600 focus:ring-0 text-gray-900 dark:text-gray-100 placeholder-gray-400 resize-none"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;