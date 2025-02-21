import { FaEye, FaEdit, FaCheckCircle, FaDollarSign } from "react-icons/fa";
import { RiDeleteBinLine, RiDeleteBack2Fill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

export default function TableProduct() {
  return (
    <div className="overflow-x-auto max-h-screen">
      <table className="table table-xs table-pin-rows">
        {/* ========== header  ========== */}
        <thead>
          <tr>
            <th>NO.</th>
            <th>NAME</th>
            <th>STATUS</th>
            <th>PRICE</th>
            <th>TYPE</th>
            <th>LOCATION</th>
            <th>EMPLOYEE</th>
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
                      src="https://cdn-icons-png.flaticon.com/512/6676/6676691.png"
                      alt="{employee}ProfilePicture"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Rumah DI Lingkungan ....
                  </div>
                  <div className="text-xs opacity-50">B1XA223SD</div>
                </div>
              </div>
            </td>
            {/* col STATUS */}
            <td className="text-sm">
              01/01/2025
              <br />
              <div className="badge badge-sm badge-warning font-bold">
                <FaDollarSign className="size-[1em]" />
                SOLD
              </div>
            </td>
            {/* col PRICE */}
            <td className="text-xs">
              Rp. <span className="text-sm font-semibold">12,000,000,000</span>
            </td>
            {/* col TYPE */}
            <td className="text-sm font-bold">Rumah</td>
            {/* col LOCATION */}
            <td className="text-sm">
              <div className="badge badge-dash badge-neutral">
                <FaLocationDot className="size-[1em]" />
                Kebayoran Baru, Jakarta Selatan
              </div>
            </td>
            {/* col EMPLOYEE */}
            <th className="text-sm">
              <div>
                <div className="text-xs font-semibold">
                  Jungun Posma Sitompul
                </div>
                <div className="text-xs opacity-50">A0VX113SJ</div>
              </div>
            </th>
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
                      src="https://cdn-icons-png.flaticon.com/512/6676/6676691.png"
                      alt="{employee}ProfilePicture"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Rumah DI Lingkungan ....
                  </div>
                  <div className="text-xs opacity-50">B1XA223SD</div>
                </div>
              </div>
            </td>
            {/* col STATUS */}
            <td className="text-sm">
              01/01/2025
              <br />
              <div className="badge badge-sm badge-success font-bold">
                <FaCheckCircle className="size-[1em]" />
                AVAILABLE
              </div>
            </td>
            {/* col PRICE */}
            <td className="text-xs">
              Rp. <span className="text-sm font-semibold">12,000,000,000</span>
            </td>
            {/* col TYPE */}
            <td className="text-sm font-bold">Rumah</td>
            {/* col LOCATION */}
            <td className="text-sm">
              <div className="badge badge-dash badge-neutral">
                <FaLocationDot className="size-[1em]" />
                Kebayoran Baru, Jakarta Selatan
              </div>
            </td>
            {/* col EMPLOYEE */}
            <th className="text-sm">
              <div>
                <div className="text-xs font-semibold">
                  Jungun Posma Sitompul
                </div>
                <div className="text-xs opacity-50">A0VX113SJ</div>
              </div>
            </th>
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
          {/* ========== row 3 ========== */}
          <tr>
            {/* col NUMBER */}
            <th>
              <kbd className="kbd">3</kbd>
            </th>
            {/* col NAME */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6676/6676691.png"
                      alt="{employee}ProfilePicture"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    Rumah DI Lingkungan ....
                  </div>
                  <div className="text-xs opacity-50">B1XA223SD</div>
                </div>
              </div>
            </td>
            {/* col STATUS */}
            <td className="text-sm">
              01/01/2025
              <br />
              <div className="badge badge-sm badge-error font-bold">
                <RiDeleteBack2Fill className="size-[1em]" />
                RESERVED
              </div>
            </td>
            {/* col PRICE */}
            <td className="text-xs">
              Rp. <span className="text-sm font-semibold">12,000,000,000</span>
            </td>
            {/* col TYPE */}
            <td className="text-sm font-bold">Rumah</td>
            {/* col LOCATION */}
            <td className="text-sm">
              <div className="badge badge-dash badge-neutral">
                <FaLocationDot className="size-[1em]" />
                Kebayoran Baru, Jakarta Selatan
              </div>
            </td>
            {/* col EMPLOYEE */}
            <th className="text-sm">
              <div>
                <div className="text-xs font-semibold">
                  Peterson Laciano Irawan
                </div>
                <div className="text-xs opacity-50">A0VX113SJ</div>
              </div>
            </th>
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
          {/* ========== row 3 ========== */}
        </tbody>
      </table>
    </div>
  );
}
