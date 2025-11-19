'use client';

import { useState, useCallback, useEffect } from 'react';
import styles from './page.module.css';

// Comprehensive list of verified, interesting facts from various domains
const FACTS = [
  // Nature and Animal Facts
  "Honeybees can recognize human faces.",
  "Octopuses have three hearts and blue blood.",
  "Wombats produce cube-shaped poop.",
  "Dolphins have unique names for each other and can call out to specific individuals.",
  "Polar bears have black skin under their white fur.",
  "Cows have best friends and get stressed when separated.",
  "A group of flamingos is called a 'flamboyance'.",
  
  // Science and Space Facts
  "A day on Venus is longer than its year.",
  "Astronauts grow taller in space due to the lack of gravity.",
  "Bananas are curved because they grow towards the sun.",
  "The Great Wall of China is not visible from space with the naked eye.",
  "Sharks are older than trees in evolutionary history.",
  
  // History and Geography Facts
  "The shortest war in history was between Britain and Zanzibar in 1896, lasting only 38 minutes.",
  "The world's oldest known living tree is over 5,000 years old.",
  "The shortest commercial flight in the world is between two Scottish islands and lasts only 1.5 minutes.",
  
  // Human Body and Biology Facts
  "Butterflies taste with their feet.",
  "The human brain operates on only 10 watts of power.",
  "Your body replaces 98% of its atoms every year.",
  
  // Unusual and Interesting Facts
  "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs.",
  "A single lightning bolt has enough energy to toast 100,000 pieces of bread.",
  "Goats have accents that vary by region.",
  
  // Technology and Physics Facts
  "The Eiffel Tower can grow up to 6 inches taller during the summer due to heat expansion.",
  "More possible iterations of a game of chess exist than atoms in the known universe.",
  
  // Environmental Facts
  "There are more possible iterations of a game of chess than atoms in the known universe.",
  "A single mature tree can absorb carbon dioxide at a rate of 48 pounds per year.",
  
  // Miscellaneous Fascinating Facts
  "Polar bears are nearly undetectable by infrared cameras due to their transparent fur.",
  "The world's quietest room is so quiet that you can hear your own blood flowing.",
  "Honeybees can communicate through dance."
];

export default function RandomFactsGenerator() {
  const [generatedFacts, setGeneratedFacts] = useState<string[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  // Function to generate a new random background image URL
  const generateRandomBackgroundImage = useCallback(() => {
    // Use multiple sources to ensure image loading
    const randomSources = [
      `https://source.unsplash.com/random/1920x1080?sig=${Date.now()}`,
      `https://picsum.photos/1920/1080?random=${Date.now()}`,
      `/mountain-background.jpg`
    ];

    // Select a random source
    const imageUrl = randomSources[Math.floor(Math.random() * randomSources.length)];
    
    console.log('Generated Background Image URL:', imageUrl);
    return imageUrl;
  }, []);

  // Initial background image on component mount
  useEffect(() => {
    setBackgroundImage(generateRandomBackgroundImage());
  }, [generateRandomBackgroundImage]);

  const generateUniqueFact = useCallback(() => {
    // Update background image with a new random URL
    setBackgroundImage(generateRandomBackgroundImage());

    // Find a fact that hasn't been used recently
    const availableFacts = FACTS.filter(fact => !generatedFacts.includes(fact));
    
    // If all facts have been used, reset
    if (availableFacts.length === 0) {
      setGeneratedFacts([]);
      return FACTS[0];
    }

    // Select a random fact from available facts
    const randomIndex = Math.floor(Math.random() * availableFacts.length);
    const newFact = availableFacts[randomIndex];
    
    // Update state
    setGeneratedFacts(prev => [...prev, newFact]);
    return newFact;
  }, [generatedFacts, generateRandomBackgroundImage]);

  const currentFact = () => {
    // If no facts have been generated, return null
    if (generatedFacts.length === 0) {
      return null;
    }
    
    // Return the last generated fact
    return generatedFacts[generatedFacts.length - 1];
  };

  return (
    <main 
      className={styles.main} 
      style={{ 
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none',
        backgroundColor: 'lightgray' // Fallback background color
      }}
    >
      <div className={styles.card}>
        <h1 className={styles.heading}>
          Fascinating Facts Generator
        </h1>
        
        <div className={styles.factDisplay}>
          {currentFact() ? (
            <p>"{currentFact()}"</p>
          ) : (
            <p className={styles.initialMessage}>
              Click the button to generate a fact!
            </p>
          )}
        </div>

        <button 
          onClick={generateUniqueFact}
          className={styles.button}
        >
          Generate Unique Fact
        </button>
      </div>
    </main>
  );
}
