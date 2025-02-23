import Card from './AboutCard';

const About = () => {
  return (
    <section id='about' className='min-h-screen py-32 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Top section with education */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          {/* Education - Left side, double height */}
          <Card
            title='Education Journey.'
            content='I was born in Jaipur, Rajasthan, with a mind wired for logic and problem-solving. My love for math led me to coding, where every bug feels like a puzzle to crack. I secured the 97th percentile in JEE Mains and now pursue AI & ML at IIIT Nagpur. Passionate about data, I clinched Rank 1 on Kaggle and love building AI solutions. Beyond coding, I invest in stocks, play chess, and enjoy Bruno Mars. Cricket has been a lifelong love, and whether on the field or behind a screen, I’m always up for building, breaking, and optimizing with code.'
            image='https://iiitn.ac.in/images/album/upcoming-campus-photo//16.jpeg'
            className='md:col-span-2 h-[400px]'
          />
          
        </div>

        {/* Rest of the cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Hometown - Small card */}
          
          {/* Tech Enthusiast - Medium width */}
          <Card
            title='Tech Obsession.'
            content='I love when tech works for me, not the other way around. Messy systems, broken links, stubborn AI models—I dive in, break them apart, and rebuild them to work flawlessly. Whether it’s fine-tuning a deployment, crafting something from scratch, or making AI actually do its job, I thrive on turning chaos into precision. Every click fixes 1%, and there’s no greater thrill than forcing the pieces to align and watching everything click into place.'
            className='md:col-span-2'
          />

          {/* Reading - Medium width */}
          <Card
            title='Things to know.'
            content='I speak three languages fluently—English, Hindi, and Marwadi. I love watching cricket, coding for hours, and the thrill of racing cars. And when it comes to food, nothing beats a good plate of Curry khichadi.'
            className='md:col-span-2'
          />

          {/* Quick Facts - Small card */}
          
        </div>
      </div>
    </section>
  );
};

export default About;
