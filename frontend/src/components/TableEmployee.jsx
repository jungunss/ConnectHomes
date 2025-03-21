import { FaEye, FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineUserDelete } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import ButtonModalFormEmployee from "./ButtonModalFormEmployee";

export default function TableProperty() {
  return (
    <div className="overflow-x-auto max-h-screen">
      <div className="pb-5">
        <ButtonModalFormEmployee />
      </div>
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
                <MdWorkOutline className="size-[1em]" />
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
                <AiOutlineUserDelete className="size-[1em]" />
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
