import React from 'react';
import { IoClose } from 'react-icons/io5';

const JazzCashModal = ({ onClose, onSubmit, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl transition"
        >
          <IoClose />
        </button>

        <h2 className="text-3xl font-bold text-[#ec1c24] text-center mb-6">
          JazzCash Payment
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92-3001234567"
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ec1c24] focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#ec1c24] focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#ec1c24] to-red-600 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            Confirm & Pay with JazzCash
          </button>
        </form>
      </div>
    </div>
  );
};

export default JazzCashModal;
