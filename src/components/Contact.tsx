import { FileText, Github, Linkedin, Mail, Code, Braces, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    { icon: <Github className='w-6 h-6 text-white' />, label: 'GitHub', link: 'https://github.com/Ayushparwal' },
    { icon: <Linkedin className='w-6 h-6 text-white' />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ayush-parwal-797a79255/' },
    { icon: <Code className='w-6 h-6 text-white' />, label: 'Kaggle', link: 'https://www.kaggle.com/ayushparwal' }
  ];

  return (
    <div className='bg-[#010219] min-h-screen flex flex-col items-center justify-center text-white p-8 border border-gray-500 rounded-lg'>
      <h2 className='text-3xl font-bold mb-6'>Contact Me!</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {contactLinks.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='flex items-center space-x-3 p-4 bg-[#12163A] rounded-lg shadow-md hover:bg-[#1d2047] transition duration-300'
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
      <footer className='mt-12 text-white/70 text-sm text-center'>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>
          <a href='mailto:ayushparwal777@gmail.com' className='text-blue-400 hover:underline'>Message me</a>
        </p>
      </footer>
    </div>
  );
};

export default Contact;
