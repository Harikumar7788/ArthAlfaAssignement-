import React, { useState } from 'react';

const Homepage = () => {
  const [text, setText] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [replaceWord, setReplaceWord] = useState('');
  const [replacedText, setReplacedText] = useState('');

  const getUniqueWordCount = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    if (!words) return 0;
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  const getCharacterCount = () => {
    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    return characters.length;
  };


  const handleReplace = () => {
    const replaced = text.split(searchWord).join(replaceWord);
    setReplacedText(replaced);
    setText(replaced);
  };

  return (
    <div className='bg-emerald-300 min-h-screen flex flex-col items-center p-6'>
      <div className='w-full max-w-4xl'>
        <h1 className='font-roboto font-extrabold text-4xl text-sky-600 text-center mb-8'>
          Real-Time Text Analysis
        </h1>

        <textarea
          rows={12}
          cols={85}
          className='rounded-2xl p-6 mt-7 border-white text-xl font-bold w-full shadow-lg font-roboto'
          placeholder='Start typing or pasting text here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className='mt-6 bg-white rounded-lg shadow p-4 text-lg'>
          <h2 className='text-xl font-bold mb-2 font-roboto'>Text Statistics:</h2>
          <p className='font-roboto'>Unique Words: <span className='font-bold'> {getUniqueWordCount()} </span></p>
          <p className='font-roboto'> Character Count (Excluding Spaces and Punctuation): <span className='font-bold'> {getCharacterCount()} </span></p>
        </div>

        <div className='mt-6 bg-white rounded-lg shadow p-4 text-lg'>
          <h2 className='text-xl font-bold mb-4 font-roboto'>String Replacement</h2>
          <input
            type='text'
            placeholder='Search word'
            className='p-2 border rounded-lg mr-4 font-roboto'
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <input
            type='text'
            placeholder='Replace with'
            className='p-2 border rounded-lg mr-4  mt-2 font-roboto'
            value={replaceWord}
            onChange={(e) => setReplaceWord(e.target.value)}
          />
          <button
            className='p-2 bg-blue-600 text-white mt-2 rounded-lg hover:bg-blue-700 transition duration-300 font-roboto'
            onClick={handleReplace}
          >
            Replace All
          </button>
        </div>

        {replacedText && (
          <div className='mt-6 bg-yellow-100 rounded-lg shadow p-4 text-lg'>
            <h2 className='text-xl font-bold mb-2 font-roboto'>Replaced Text:</h2>
            <p className='whitespace-pre-wrap'>{replacedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
