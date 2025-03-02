import { FileText, Github, Linkedin, Mail, CodeIcon } from 'lucide-react';
import { ReactNode, useEffect, useMemo, useState } from 'react';

interface ContactItemProps {
    icon: ReactNode;
    label: string;
    link: string;
    position: {
      top: string;
      left: string;
    };
}

const Contact = () => {
  const contactLinks = [
    {
      icon: <Github className='w-6 h-6 text-white' />,
      label: 'GitHub',
      link: 'https://github.com/Ayushparwal',
      position: { top: '20%', left: '80%' },
    },
    {
      icon: <Linkedin className='w-6 h-6 text-white' />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ayush-parwal-797a79255/',
      position: { top: '40%', left: '20%' },
    },
    {
      icon: <Mail className='w-6 h-6 text-white' />,
      label: 'ayushparwal777@gmail.com',
      link: 'mailto:ayushparwal777@gmail.com',
      position: { top: '80%', left: '70%' },
    },
    {
      icon: <CodeIcon className='w-6 h-6 text-white' />,
      label: 'kaggle',
      link: 'https://www.kaggle.com/ayushparwal',
      position: { top: '10%', left: '40%' },
    },
  ];

  const stars = useMemo(() => {
    return [...Array(150)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  const getCoordinates = (position: { top: string; left: string }) => {
    const top = parseFloat(position.top) / 100;
    const left = parseFloat(position.left) / 100;
    return {
      x: left * 100,
      y: top * 100,
    };
  };

  const constellationLines = [
    {
      start: getCoordinates(contactLinks[1].position),
      end: getCoordinates(contactLinks[2].position),
    },
    {
      start: getCoordinates(contactLinks[1].position),
      end: getCoordinates(contactLinks[3].position),
    },
    {
      start: getCoordinates(contactLinks[0].position),
      end: getCoordinates(contactLinks[3].position),
    },
    {
      start: getCoordinates(contactLinks[2].position),
      end: getCoordinates(contactLinks[3].position),
    },
    {
      start: getCoordinates(contactLinks[2].position),
      end: getCoordinates(contactLinks[0].position),
    },
  ];

  return (
    <div className='relative bg-[#010219] overflow-hidden'>
      <h1 className='text-4xl text-white font-bold text-center pt-10'>
        Please Contact Us
      </h1>

      <section id='contact' className='relative min-h-screen flex items-center justify-center'>
        <div className='absolute inset-0'>
          {stars.map((star, i) => (
            <div
              key={i}
              className='absolute w-[1px] h-[1px] bg-white opacity-60 rounded-full animate-twinkle'
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        <svg className='absolute inset-0 w-full h-full'>
          {constellationLines.map((line, index) => (
            <line
              key={index}
              x1={`${line.start.x + 0.3}%`}
              y1={`${line.start.y + 1.5}%`}
              x2={`${line.end.x + 0.3}%`}
              y2={`${line.end.y + 1.5}%`}
              stroke='rgba(255, 255, 255, 1)'
              strokeWidth='0.2'
              className='constellation-line'
            />
          ))}
        </svg>

        {contactLinks.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </section>
      <footer className='text-center text-white py-4 bg-[#010219]'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Ayush Parwal. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const ContactItem = ({ icon, label, link, position }: ContactItemProps) => {
  const [typedLabel, setTypedLabel] = useState('');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let timeout;
    if (hovered) {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= label.length) {
          setTypedLabel(label.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 70);
      return () => clearInterval(interval);
    } else {
      timeout = setTimeout(() => setTypedLabel(''), 200);
    }
    return () => clearTimeout(timeout);
  }, [hovered, label]);

  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='absolute flex items-center group'
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] animate-twinkle'></div>
      <div className='ml-2'>{icon}</div>
      <span className='ml-2 text-white text-sm transition-opacity duration-200'>
        {typedLabel}
      </span>
    </a>
  );
};

export default Contact;
