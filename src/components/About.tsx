import Card from './AboutCard';

const About = () => {
  return (
    <section id='about' className='min-h-screen flex flex-col justify-center items-center px-6'>
      <div className='max-w-3xl w-full text-center'>
        {/* Top section with education */}
        <div className='flex justify-center mb-6'>
          <Card
            title='Education Journey.'
            content='My love for math led me to coding, where every bug feels like a puzzle to crack. I secured the 97th percentile in JEE Mains and now pursue AI & ML at IIIT Nagpur. Passionate about data, I clinched Rank 1 on Kaggle and love building AI solutions. Beyond coding, I invest in stocks, play chess, and enjoy Bruno Mars. Cricket has been a lifelong love, and whether on the field or behind a screen, I’m always up for building, breaking, and optimizing with code.'
            image='https://iiitn.ac.in/images/album/upcoming-campus-photo/16.jpeg'
            className='w-full h-[400px] mx-auto'
          />
        </div>

        {/* Rest of the cards */}
        <div className='flex flex-col items-center gap-6'>
          <Card
            title='Tech Obsession.'
            content='I love when tech works for me, not the other way around. Messy systems, broken links, stubborn AI models—I dive in, break them apart, and rebuild them to work flawlessly. Whether it’s fine-tuning a deployment, crafting something from scratch, or making AI actually do its job, I thrive on turning chaos into precision. Every click fixes 1%, and there’s no greater thrill than forcing the pieces to align and watching everything click into place.'
            className='w-full mx-auto'
          />

          <Card
            title='Things to know.'
            content='I speak four languages—English, Hindi, Marwadi, and some Marathi. I love watching cricket, coding for hours, and the thrill of racing cars. And when it comes to food, nothing beats a good plate of curry khichadi.'
            className='w-full mx-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
