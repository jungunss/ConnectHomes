import { FaEye, FaEdit, FaCheckCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TableProperty() {
  return (
    <div className="overflow-x-auto max-h-screen">
      <table className="table table-xs table-pin-rows">
        {/* ========== header  ========== */}
        <thead>
          <tr>
            <th>NO.</th>
            <th>NAME</th>
            <th>POSITION</th>
            <th>TOTAL UNITS</th>
            <th>TOTAL SALES</th>
            <th>TENURE</th>
            <th>COMISSION EARNED</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        {/* ========== header  ========== */}
        <tbody>
          {/* ========== row 1 ========== */}
          <tr>
            {/* col NUMBER */}
            <th>
              <kbd className="kbd">1</kbd>
            </th>
            {/* col NAME */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg"
                      alt="{employee}ProfilePicture"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Peterson Laciano Irawan
                  </div>
                  <div className="text-xs opacity-50">B1XA223SD</div>
                </div>
              </div>
            </td>
            {/* col POSITION */}
            <td className="text-sm">
              Real Estate Agent
              <br />
              <div className="badge badge-sm badge-success">
                <svg
                  className="size-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></circle>
                    <polyline
                      points="7 13 10 16 17 8"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="square"
                      stroke-miterlimit="10"
                      strokeWidth="2"
                    ></polyline>
                  </g>
                </svg>
                active
              </div>
            </td>
            {/* col TOTAL SALES */}
            <th className="text-sm">120</th>
            {/* col TOTAL SALES */}
            <th className="text-sm">25</th>
            {/* col TENURE */}
            <th className="text-sm">
              5 <span className="text-xs font-semibold">mos</span>
            </th>
            {/* col TENURE */}
            <td className="text-xs">
              Rp. <span className="text-sm font-semibold">12,000,000</span>
            </td>
            {/* col ACTIONS */}
            <th>
              <div className="flex gap-1">
                <button className="btn btn-circle btn-sm">
                  <FaEye className="size-[1.2em]" />
                </button>
                <button className="btn btn-circle btn-sm">
                  <FaEdit className="size-[1.2em]" />
                </button>
                <button className="btn btn-circle btn-sm">
                  <RiDeleteBinLine className="size-[1.2em]" />
                </button>
              </div>
            </th>
          </tr>
          {/* ========== row 1 ========== */}
          {/* ========== row 2 ========== */}
          <tr>
            {/* col NUMBER */}
            <th>
              <kbd className="kbd">2</kbd>
            </th>
            {/* col NAME */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg"
                      alt="{employee}ProfilePicture"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Jungun Posma Sitompul
                  </div>
                  <div className="text-xs opacity-50">A0VX113SJ</div>
                </div>
              </div>
            </td>
            {/* col POSITION */}
            <td className="text-sm">
              Real Estate Agent
              <br />
              <div className="badge badge-sm badge-error">
                <svg
                  className="size-[1em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <rect
                      x="1.972"
                      y="11"
                      width="20.056"
                      height="2"
                      transform="translate(-4.971 12) rotate(-45)"
                      fill="currentColor"
                      strokeWidth={0}
                    ></rect>
                    <path
                      d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                resign
              </div>
            </td>
            {/* col TOTAL SALES */}
            <th className="text-sm">15</th>
            {/* col TOTAL SALES */}
            <th className="text-sm">15</th>
            {/* col TENURE */}
            <th className="text-sm">
              2 <span className="text-xs font-semibold">mos</span>
            </th>
            {/* col TENURE */}
            <td className="text-xs">
              Rp. <span className="text-sm font-semibold">870,000,000</span>
            </td>
            {/* col ACTIONS */}
            <th>
              <div className="flex gap-1">
                <button className="btn btn-circle btn-sm">
                  <FaEye className="size-[1.2em]" />
                </button>
                <button className="btn btn-circle btn-sm">
                  <FaEdit className="size-[1.2em]" />
                </button>
                <button className="btn btn-circle btn-sm">
                  <RiDeleteBinLine className="size-[1.2em]" />
                </button>
              </div>
            </th>
          </tr>
          {/* ========== row 2 ========== */}
        </tbody>
      </table>
    </div>
  );
}
