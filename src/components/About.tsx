import Card from './AboutCard';

const About = () => {
  return (
    <section id='about' className='min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12'>
      <div className='max-w-lg md:max-w-3xl w-full text-center'>
        
        {/* Top section with education */}
        <div className='flex justify-center mb-6'>
          <Card
  title='Education Journey.'
  content="My passion for math naturally led me into the world of coding, where every challenge feels like a puzzle waiting to be solved. After scoring in the 97th percentile in JEE Mains, I began my journey in Artificial Intelligence and Machine Learning at Indian Institute of Information Technology, Nagpur. I find joy in building intelligent systems that solve real-world problems. Outside academics, I’m curious about the stock market, enjoy a good game of chess, vibe to Bruno Mars, and never miss a chance to play or watch cricket."
  image='https://i.postimg.cc/9XycCcNj/maxresdefault.jpg'
  className='w-full h-auto mx-auto'
/>
      
        </div>
      </div>
    </section>
  );
};

export default About;
