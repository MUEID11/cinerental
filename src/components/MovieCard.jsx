/* eslint-disable react/prop-types */
import { useState } from "react";
import { getImageUrl } from "../assets/utils";
import Rating from "./Rating";
import MovieDetailsModal from "./Modal";
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  function handleModalClose() { 
    setSelectedMovie(null);
    setShowModal(false);
  }
  function handleMovieSelection() {
    setSelectedMovie(movie);
    setShowModal(true);
  }
  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <a onClick={() => handleMovieSelection(movie)}>
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img
            className="w-full object-cover"
            src={getImageUrl(movie?.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">Iron Man</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              Action/Adventure/Sci-fi
            </p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>{movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
      </a>
    </>
  );
};

export default MovieCard;
