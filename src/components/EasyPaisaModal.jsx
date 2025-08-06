import React from 'react';
import { IoClose } from 'react-icons/io5';

const EasyPaisaModal = ({ onClose, onSubmit, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl transition"
        >
          <IoClose />
        </button>

        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
          EasyPaisa Payment
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 font-semibold mb-2">
              Mobile Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+92xxxxxxxxxx"
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-2">
              Email (optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            Confirm & Pay with EasyPaisa
          </button>
        </form>
      </div>
    </div>
  );
};

export default EasyPaisaModal;
