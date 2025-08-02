import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! (Mock)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-white text-black">
      <motion.div
        className="min-h-screen p-8 pt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>

        <div className="flex justify-center">
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-gray-100 border border-gray-300 p-6 rounded-xl space-y-6 shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800">Send a Message</h3>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-black placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-black placeholder-gray-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-black placeholder-gray-500"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition-colors font-medium text-white"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p>
            Drop me an email at{' '}
            <a
              href="mailto:ayushparwal777@gmail.com"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              ayushparwal777@gmail.com
            </a>
          </p>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Made by Ayush Parwal. All rights reserved.</p>
        </footer>
      </motion.div>
    </section>
  );
};

export default Contact;
