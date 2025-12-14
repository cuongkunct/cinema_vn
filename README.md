SETUP:
Color: #CDA566
Text: white

1. Install material UI
   npm install @mui/material @emotion/react @emotion/styled
   npm install @mui/icons-material

2. Install react dom/ Tailwind CSS / Redux /axios
   npm i react-router-dom @reduxjs/toolkit react-redux axios tailwindcss @tailwindcss/vite

3. Form
   npm install formik yup

git init
git add README.md
git commit -m "Setup source code / Define navbar"
git branch -M main
git remote add origin https://github.com/cuongkunct/cinema-booking.git
git push -u origin main

  <div>
            {movies.map((movie) => (
              <div key={movie.maPhim} className="mb-6 border-b pb-4">
                {/* TÊN PHIM */}
                <h2 className="text-xl font-bold text-white">
                  {movie.tenPhim}
                </h2>

                {/* INFO */}
                <div className="text-gray-300 text-sm mb-2">
                  2D - 100 phút - {movie.hot ? "HOT" : ""}
                </div>

                {/* GIỜ CHIẾU */}
                <div className="flex flex-wrap gap-3">
                  {movie.lstLichChieuTheoPhim.map((lc) => (
                    <span
                      key={lc.maLichChieu}
                      className="px-3 py-1 bg-gray-700 text-white rounded-md"
                    >
                      {new Date(lc.ngayChieuGioChieu).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
