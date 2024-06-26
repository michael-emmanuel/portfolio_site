'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a degree in{' '}
        <span className='font-medium'>Information Technology</span> and{' '}
        <span className='font-medium'>Software Engineering</span>, I decided to
        pursue my passion for programming. After working both freelance and
        coporate tech roles, I honed my skills by learning the ins and outs of{' '}
        <span className='font-medium'>full-stack web development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className='font-medium'>
          TypeScript, React, Next.js, Node.js, Nest.js, MySQL
        </span>{' '}
        and <span className='font-medium'>MongoDB</span>. I am also familiar
        with AWS and Prisma. I am always looking to learn new technologies. I am
        currently looking to <span className='font-medium'>collaborate</span>{' '}
        with and bring value to others as a software developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy walks in
        nature, watching movies, and working out. I also enjoy{' '}
        <span className='font-medium'>learning new things</span>. I am currently
        learning about{' '}
        <span className='font-medium'>history and philosophy</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  );
}
