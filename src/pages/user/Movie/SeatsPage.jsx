import { useDispatch, useSelector } from "react-redux";
import { toggleSeat, clearSeat } from "@store/booking/movieBookingSlice.js";
import { getListCinemaTicket } from "@store/booking/movieBookingApi.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export default function SeatsPage() {
  const { id } = useParams();
  const { cyberSoftToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { moviesInfor, listSeats, selectedSeats } = useSelector(
    (state) => state.booking
  );
  console.log("listSeats", listSeats);
  let vipPrice = 0;
  let nomalPrice = 0;
  if (listSeats.length > 0) {
    vipPrice = listSeats.find((item) => item.loaiGhe === "Vip").giaVe;
    nomalPrice = listSeats.find((item) => item.loaiGhe === "Thuong").giaVe;
  }

  useEffect(() => {
    if (!id) return;
    dispatch(getListCinemaTicket({ token: cyberSoftToken, maLichChieu: id }));
    dispatch(clearSeat());
  }, [id]);

  return (
    <div className="max-w-[80%] mx-auto text-white pt-24 grid grid-cols-12 gap-8 pb-8">
      {/* Danh sách ghế */}
      <div className="col-span-8 shadow-2xl shadow-gray-400 rounded-2xl p-2">
        <div className="flex flex-row items-center justify-center gap-6 p-2">
          <div className="flex flex-col items-center gap-4 border-2 border-[#CDA566] p-4 rounded-2xl">
            <div className="flex flex-row items-center gap-4">
              <p className="w-5 h-5 bg-gray-600 border boder-white"></p>
              <p>Ordered seats</p>
            </div>
            <div>
              <p className="text-yellow-400">Price: 0đ</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 border-2 border-[#CDA566] p-4 rounded-2xl">
            <div className="flex flex-row items-center gap-4">
              <p className="w-5 h-5 bg-gray-600 border boder-white"></p>
              <p>Vip seats</p>
            </div>
            <div>
              <p className="text-yellow-400">
                Price: {vipPrice.toLocaleString()}đ
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 border-2 border-[#CDA566] p-4 rounded-2xl">
            <div className="flex flex-row items-center gap-4">
              <p className="w-5 h-5 bg-gray-600 border boder-white"></p>
              <p>Empty seats</p>
            </div>
            <div>
              <p className="text-yellow-400">
                Price: {nomalPrice.toLocaleString()}đ
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-300 text-gray-800 py-2 text-center mt-2 rounded-md font-semibold">
          SCREEN
        </div>

        {/* Danh sách ghế */}
        <div className="grid grid-cols-10 gap-3 mt-6">
          {listSeats.map((ghe) => {
            const isSelected = selectedSeats.some((g) => g.maGhe === ghe.maGhe);

            return (
              <button
                key={ghe.maGhe}
                disabled={ghe.daDat}
                onClick={() => dispatch(toggleSeat(ghe))}
                className={`
              h-10 rounded-md text-sm font-semibold
              flex items-center justify-center
              ${
                ghe.daDat
                  ? "bg-gray-600 cursor-not-allowed text-white"
                  : isSelected
                  ? "bg-yellow-400 text-black"
                  : ghe.loaiGhe === "Vip"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-300 text-black hover:bg-gray-400"
              }
            `}
              >
                {ghe.tenGhe}
              </button>
            );
          })}
        </div>
      </div>

      {/* Thông tin phim */}
      <div className="col-span-4 bg-gray-800 p-5 rounded-xl shadow-lg space-y-6">
        <img
          src={moviesInfor.hinhAnh}
          alt={moviesInfor.tenPhim}
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
        <h2 className="text-2xl font-bold mt-2">{moviesInfor.tenPhim}</h2>

        {/* Chi tiết phim */}
        <div className="text-gray-300 space-y-2">
          <p>
            <span className="font-semibold text-white">Cụm rạp:</span>{" "}
            {moviesInfor.tenCumRap}
          </p>
          <p>
            <span className="font-semibold text-white">Rạp:</span>{" "}
            {moviesInfor.tenRap}
          </p>
          <p>
            <span className="font-semibold text-white">Địa chỉ:</span>{" "}
            {moviesInfor.diaChi}
          </p>
          <p>
            <span className="font-semibold text-white">Ngày chiếu:</span>{" "}
            {moviesInfor.ngayChieu}
          </p>
          <p>
            <span className="font-semibold text-white">Giờ chiếu:</span>{" "}
            {moviesInfor.gioChieu}
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg border border-yellow-500/40">
          <div className="flex justify-between text-white text-lg font-bold">
            <span>Tổng thanh toán</span>
            <span className="text-yellow-400 text-xl">
              {selectedSeats
                .reduce((sum, ghe) => sum + ghe.giaVe, 0)
                .toLocaleString()}
              đ
            </span>
          </div>
        </div>
        <button
          onClick={() => (window.location.href = "/checkout")}
          disabled={selectedSeats.length === 0}
          className={`
      w-full py-3 rounded-lg text-lg font-bold 
      ${
        selectedSeats.length === 0
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-yellow-500 hover:bg-yellow-600 text-black"
      }
    `}
        >
          Đặt vé ngay
        </button>
        {/* Hiển thị danh sách ghế đã chọn */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-bold text-white">Ghế đã chọn</h3>

          {selectedSeats.length === 0 ? (
            <p className="text-gray-400 mt-2">Bạn chưa chọn ghế nào.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {selectedSeats.map((ghe) => (
                <li
                  key={ghe.maGhe}
                  className="flex justify-between bg-gray-600 px-3 py-2 rounded-md text-sm text-gray-200"
                >
                  <span>
                    Ghế: <b>{ghe.tenGhe}</b>
                  </span>
                  <span className="font-semibold">
                    {ghe.giaVe.toLocaleString()}đ
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
