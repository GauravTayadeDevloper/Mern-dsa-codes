import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
];

export default function MovieList()
{
    const {movieid} =useParams();
    const movie = movies.find(m=>m.id == (movieid))
    return(
        <div>
            {movie ?(
                <>
                <h2>Movie Detail</h2>
                <h4>Title: {movie.title}</h4>
                <h4>Year :{movie.year}</h4>
                </>
                
            ):(
                <>
                <h1>Movie Not found</h1>
                </>
            )}
             <Link to="/" >Home</Link>
        </div>
        
    )

}