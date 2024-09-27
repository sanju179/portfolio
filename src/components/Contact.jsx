import { useEffect } from "react";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "./keys";

const Contact = () => {
  useEffect(() => {
    // Dynamically load the EmailJS script
    const script = document.createElement("script");
    script.src = "https://cdn.emailjs.com/sdk/2.6.4/email.min.js";
    script.onload = () => {
      emailjs.init(PUBLIC_KEY); // Initialize EmailJS with your user ID
    };
    document.body.appendChild(script);

    // Form submission handler
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const templateParams = {
          from_name: document.getElementById('email').value,
          to_name: 'Sanjeevini',
          message: document.getElementById('message').value,
          subject: document.getElementById('subject').value,
          reply_to: document.getElementById('email').value,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
          .then(response => {
            console.log('Email sent successfully!', response.status, response.text);
          })
          .catch(error => {
            console.error('Error sending email:', error);
          });
      });
    }

    // Cleanup: Remove event listener when component unmounts
    return () => {
      if (form) {
        form.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-light text-center text-gray-900 dark:text-white">
          Connect With Me
        </h2>
        <form className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg shadow-sm border border-gray-300 focus:ring-1 focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg shadow-sm border border-gray-300 focus:ring-1 focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Subject"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg shadow-sm border border-gray-300 focus:ring-1 focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="Your Message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-900 sm:w-fit hover:bg-purple-950 focus:ring-4 focus:outline-purple focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
