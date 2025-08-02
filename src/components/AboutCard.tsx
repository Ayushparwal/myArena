import React from 'react';

interface CardProps {
  title: string;
  content?: string | React.ReactNode;
  image?: string;
  className?: string;
}

const Card = ({
  title,
  content,
  image,
  className = '',
}: CardProps) => {
  return (
    <div className={`glassmorphic overflow-hidden rounded-2xl group w-full ${className}`}>
      {image ? (
        <div className='relative'>
          <img
            src={image}
            alt={title}
            className='w-full h-auto max-h-[300px] sm:max-h-[400px] object-cover transition-transform duration-300 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end'>
            <h3 className='text-3xl sm:text-4xl font-[800] text-white p-4 sm:p-6 transition-transform duration-300 group-hover:translate-x-2'>
              {title}
            </h3>
          </div>
        </div>
      ) : (
        <h3 className='text-3xl sm:text-4xl font-[800] text-white p-4 sm:p-6 transition-transform duration-300 group-hover:translate-x-2'>
          {title}
        </h3>
      )}

      {content && (
        <div className='p-4 sm:p-6 pt-4'>
          <div className='text-white/80 text-sm sm:text-base font-[500] leading-relaxed transition-transform duration-300 group-hover:translate-x-2'>
            {typeof content === 'string'
              ? content.split('<newline>').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))
              : content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
