'use client'; // This directive ensures the component uses client-side features

import React, { useState, useEffect } from 'react';
import PinnedRepos from './_components/github/PinnedRepos';
import getRepos from '../lib/getRepos';
import Layout from './_components/layout/Layout';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

// Assuming Repo is a type that looks something like this:
type Repo = {
  id: number;
  name: string;
  description: string;
  // Add other necessary fields
};

export default function Home() {
  const [pinnedRepos, setPinnedRepos] = useState<Repo[]>([]); // Use useState with the correct type

  useEffect(() => {
    async function fetchRepos() {
      const repos: Repo[] = await getRepos(); // Assume getRepos() correctly returns Repo[]
      setPinnedRepos(repos);
    }
    fetchRepos();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <section className="flex flex-col md:flex-row w-full max-w-4xl justify-center items-center mb-20 mt-16 gap-8 text-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-primary">
              Hi, I'm{' '}
              <span className="text-primary">
                <Typewriter
                  words={["Mohammed Bensassi", " a  Full Stack Developer", " a Software Developer"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl mb-4 text-gray-400">Aspiring Full Stack & Software Developer</p>
            <p className="relative text-sm text-grayText max-w-lg mx-auto">
              Passionate about web development and open-source contributions. Currently exploring new technologies and sharing knowledge with the developer community.
            </p>
          </div>
          <Image
            src="https://avatars.githubusercontent.com/u/154572400?v=4"
            alt="Mohammed Bensassi"
            className="relative rounded-full shadow-xl w-32 h-32 grayscale hover:grayscale-0 transition-all duration-300"
            width={128}
            height={128}
          />
        </section>

        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-primary">Pinned Projects</h2>
          <PinnedRepos pinnedRepos={pinnedRepos} />
        </section>
      </div>
    </Layout>
  );
}
