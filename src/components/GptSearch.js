import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBars from "./GptSearchBars";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" alt="background" className=""/>
      </div>
      <GptSearchBars/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;