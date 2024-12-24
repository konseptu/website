import { useEffect } from 'react';

interface RotatingWordsProps {
  verbPairs: string[][];
}

export default function RotatingWords({ verbPairs }: RotatingWordsProps) {
  useEffect(() => {
    const words = document.querySelectorAll('.rotating-word');
    let currentPairIndex = 0;

    const rotateText = () => {
      const currentWords = words;
      const nextPair = verbPairs[(currentPairIndex + 1) % verbPairs.length];

      // Rotate out current words
      currentWords.forEach((word) => {
        const letters = Array.from(word.children);
        letters.forEach((letter: Element, j) => {
          setTimeout(() => {
            letter.className = 'letter out';
          }, j * 50);
        });
      });

      // Update words after rotation out
      setTimeout(() => {
        currentWords.forEach((word, i) => {
          // Clear current word
          word.textContent = '';

          // Add new letters
          const newWord = nextPair[i];
          newWord.split('').forEach((letter) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.className = 'letter behind';
            word.appendChild(span);
          });

          // Rotate in new letters
          Array.from(word.children).forEach((letter, j) => {
            setTimeout(() => {
              letter.className = 'letter in';
            }, j * 50);
          });
        });
      }, 1000);

      currentPairIndex = (currentPairIndex + 1) % verbPairs.length;
    };

    const interval = setInterval(rotateText, 4000);
    return () => clearInterval(interval);
  }, [verbPairs]);

  return (
    <span className="rotating-text">
      <span className="rotating-word highlight font-mono text-primary">{verbPairs[0][0]}</span> and{' '}
      <span className="rotating-word highlight font-mono text-secondary">{verbPairs[0][1]}</span>
    </span>
  );
}
