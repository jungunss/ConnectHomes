import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

export default function ButtonModalFormEmployee() {
  const [date, setDate] = useState("");
  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <IoMdAddCircle className="size-[2em] text-blue-400" />
        Add Employee
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="w-full max-w-md mx-auto py-4 px-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white px-4 py-3">
                <h2 className="text-xl font-semibold">Application Form</h2>
                <p className="text-sm text-blue-100">
                  Please fill out all the required information
                </p>
              </div>

              <form className="p-4 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nik"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    NIK (National Identity Number)
                  </label>
                  <input
                    type="text"
                    id="nik"
                    placeholder="Enter your NIK"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Profile Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    placeholder="https://example.com/your-image.jpg"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Position
                  </label>
                  <select
                    id="position"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="" disabled selected>
                      Select a position
                    </option>
                    <option value="software-engineer">Software Engineer</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="ux-designer">UX Designer</option>
                    <option value="data-scientist">Data Scientist</option>
                    <option value="marketing-specialist">
                      Marketing Specialist
                    </option>
                  </select>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t">
                  <div className="modal-action">
                    <form method="dialog" className="flex gap-2">
                      <button className="px-4 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
