import React, { useRef } from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import openAI from '../utils/openai';

const GptSearchBars = () => {

  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const handleGptSearchClick = async()=>{
    console.log(searchText.current.value);

    //make an API call to get movie results
    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults.choices);
    
    
  };

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-2 m-2 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 p-2 m-2 text-white bg-red-700' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBars;