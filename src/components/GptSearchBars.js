import React from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBars = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input className='p-2 m-2 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 p-2 m-2 text-white bg-red-700'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBars;