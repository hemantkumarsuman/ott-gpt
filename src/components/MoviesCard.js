import { IMG_CDN_URL } from "../utils/Constants"

const MoviesCard = ({posterPath}) => {
  return (
    <div className="w-44">
        <img className="pr-3" alt='movies card' src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MoviesCard;