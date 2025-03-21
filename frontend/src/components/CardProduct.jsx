import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function CardProduct() {
  return (
    <>
      <div className="flex gap-10 flex-wrap">
        {/* ================= CARD 1 ================= */}
        <div className="card bg-base-100 w-72 shadow-sm">
          <figure>
            <img
              src="https://media.coveliving.io/1212/conversions/450F7126-5946-48E1-A8F9-23F2727E8581-small.jpeg"
              alt="foto"
              className="w-full h-44"
            />
          </figure>
          <div className="card-body p-2">
            <div className="flex gap-1 items-center text-gray-700">
              <FaLocationDot />
              <span>Kebayoran Baru, Jakarta Selatan</span>
            </div>
            <h2 className="card-title">
              Rp.<span>12,000,000,000</span>
              <div className="badge badge-xs badge-success">
                <FaCheckCircle />
                AVAILABLE
              </div>
            </h2>
            <p className="font-semibold">
              A card component has a figure, a body part A card figure, a body
              part
            </p>
            <div className="card-actions justify-start pt-2 pb-2">
              <div className="badge badge-outline">Rumah</div>
            </div>
          </div>
        </div>
        {/* ================= CARD 1 ================= */}
      </div>
    </>
  );
}
