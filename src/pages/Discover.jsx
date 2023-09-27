import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants"

const Discover = () => {
  const genreTitle = "Pop"

  return (
    <section className="flex flex-col">
      <div className="flex justify-center items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select onChange={() => {}} value="" className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:m-0 m-5">
          {genres.map((genre) => <option>{genre.title}</option>)}
        </select>
      </div>
    </section>
  )
}

export default Discover;
