import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "@store/admin/films/movieApi.js";
import FilmCard from "./FilmCard.jsx";

export default function FilmList({ searchKey = "" }) {
  const dispatch = useDispatch();
  const { movieData, loading, error } = useSelector(
    (state) => state.filmsAdmin
  );
  useEffect(() => {
    if (movieData.length === 0) {
      dispatch(getMovies());
    }
  }, []);

  // const filterData = useMemo(() => {
  //   let result = [...movieData];
  //   if (searchKey.trim()) {
  //     result = result.filter((movie) =>
  //       movie.tenPhim.toLowerCase().includes(searchKey.toLowerCase())
  //     );
  //   }
  // }, [movieData, searchKey]);

  return (
    <>
      {/* {loading ? (
        <MovieCardSkeleton count={10} />
      ) : ( */}
      <div className="">
        <h1 className="text-4xl font-bold text-center text-[#CDA566] tracking-widest mb-5 mt-2">
          FILM LIST
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Mã phim</th>
                <th className="px-4 py-2 text-left">Hình ảnh</th>
                <th className="px-4 py-2 text-left">Tên phim</th>
                <th className="px-4 py-2 text-left">Mô tả</th>
                <th className="px-4 py-2 text-left">Hành động</th>
              </tr>
            </thead>

            <tbody>
              {movieData?.map((movie) => (
                <FilmCard key={movie.maPhim} movie={movie} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
