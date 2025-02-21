import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function CardProduct() {
  return (
    <>
      <div className="card bg-base-100 w-72 shadow-sm">
        <figure>
          <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yTPYnP18dd01BjwbyB6cyeSJ1QqJzFLCZw&s"
                class="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                class="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                class="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                class="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
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
          <div className="card-actions justify-start pt-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            <div className="badge badge-outline">Products</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
}
