import { Github, Linkedin, Mail, CodeIcon } from 'lucide-react';

const contactLinks = [
  {
    icon: <Github className='w-8 h-8 text-white' />, label: 'GitHub',
    link: 'https://github.com/Ayushparwal'
  },
  {
    icon: <Linkedin className='w-8 h-8 text-white' />, label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ayush-parwal-797a79255/'
  },
  {
    icon: <Mail className='w-8 h-8 text-white' />, label: 'Email',
    link: 'mailto:ayushparwal777@gmail.com'
  },
  {
    icon: <CodeIcon className='w-8 h-8 text-white' />, label: 'Kaggle',
    link: 'https://www.kaggle.com/ayushparwal'
  },
];

const Contact = () => {
  return (
    <section 
      id='contact' 
      className='min-h-screen flex flex-col items-center justify-center px-6 bg-[#010219] text-white'
    >
      <h1 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Contact Me</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl'>
        {contactLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-col items-center justify-center p-5 bg-[#12162e] 
                       rounded-xl shadow-lg transition-transform transform hover:scale-105 
                       hover:bg-[#1b1f3a] text-center'
          >
            <div className='mb-2'>{item.icon}</div>
            <span className='text-lg font-semibold'>{item.label}</span>
          </a>
        ))}
      </div>

      <footer className='mt-10 text-sm opacity-80 text-center px-4'>
        &copy; {new Date().getFullYear()} Made with ❤️ by Ayush Parwal. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
