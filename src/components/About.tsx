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
            content='Math never got boring for me—solving problems and spotting patterns just clicked. That love for logic led me to coding, where every bug feels like a puzzle to crack. I was born in Jaipur, Rajasthan. I scored 86% in 10th grade and later secured the 97th percentile in JEE Mains, landing me at IIIT Nagpur, where I’m pursuing AI & ML. My passion for numbers drew me to Kaggle, where I once secured Rank 1.

Beyond coding, I enjoy investing in stocks, playing chess, and listening to Bruno Mars. Cricket has been a childhood favorite, and I’m always eager to build, break, and fix things with code.'
            image='https://iiitn.ac.in/images/album/upcoming-campus-photo//16.jpeg'
            className='md:col-span-2 h-[400px]'
          />
          <div className='md:col-span-1 flex flex-col gap-6'>
            {/* Two stacked cards on the right */}
            <Card
              title='Foodie.'
              image='foodie_veg.jpg'
              className='h-[185px]'
            />
            <Card
              title='Binge List.'
              image='cricket_virat.jpg'
              content='Been watching Cricket and Fan of RCB.'
              className='h-[190px]'
            />
          </div>
        </div>

        {/* Rest of the cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Hometown - Small card */}
          
          {/* Tech Enthusiast - Medium width */}
          <Card
            title='Tech Obsession.'
            content='I don’t just solve problems—I hunt them down, tear them apart, and rebuild them into something better. Whether it’s resurrecting a dead deployment at 2 AM, forcing an AI model to actually be useful, or making my ML models stop their endless feud, I thrive in the chaos of debugging and creation. It’s maddening, sure—but when everything finally clicks, and the code bends to my will? That’s pure adrenaline. I don’t work for tech—I make it work for me.'
            className='md:col-span-2'
          />

          {/* Reading - Medium width */}
          <Card
            title='Things to know.'
            content='I speak three languages fluently—English, Hindi, and Marwadi. I love watching cricket, coding for hours, and the thrill of racing cars. And when it comes to food, nothing beats a good plate of Curry khichadi.'
            className='md:col-span-2'
          />

          {/* Quick Facts - Small card */}
          <Card
            title='Bruno Mars.'
            image='BrunoMars.jpg'
            imgsize={'52'}
            className='md:col-span-1'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
