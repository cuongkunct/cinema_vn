import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function FilmCard({ movie, onDelete }) {
  const navigate = useNavigate();
  return (
    <tr className="border-b hover:bg-gray-5 ">
      <td className="px-4 py-2 ">{movie.maPhim}</td>
      <td className="px-4 py-2">
        <img
          src={movie.hinhAnh}
          alt={movie.tenPhim}
          className="w-16 h-20 object-cover rounded"
        />
      </td>
      <td className="px-4 py-2 font-medium">{movie.tenPhim}</td>
      <td className="px-4 py-2 text-sm text-gray-600 max-w-xs truncate">
        {movie.moTa}
      </td>
      <td className="px-4 py-2 flex gap-3">
        <button
          onClick={() => navigate(`/admin/films/edit/${movie.maPhim}`)}
          className="text-blue-600 hover:text-blue-800"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onDelete(movie.maPhim)}
          className="text-red-600 hover:text-red-800"
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

export default FilmCard;
