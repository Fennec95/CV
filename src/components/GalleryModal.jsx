import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

console.log("Dialog component:", Dialog);
console.log("X component:", X);

export const GalleryModal = ({ isOpen, setIsOpen, data, title }) => (
  <Dialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    className="fixed z-50 inset-0 overflow-y-auto"
  >
    <div className="flex items-center justify-center min-h-screen px-4">
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm" />
      <div className="relative bg-gray-900 text-white rounded-2xl p-6 w-full max-w-4xl shadow-2xl z-50">
        <div className="flex justify-between items-center mb-4">
          <Dialog.Title className="text-2xl font-bold text-indigo-400">
            {title}
          </Dialog.Title>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-red-500"
          >
            <X size={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((quest) => (
            <div
              key={quest.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              {quest && quest.image && quest.title ? (
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div>Image non disponible</div>
              )}

              <div className="p-3">
                <h4 className="font-semibold text-lg text-indigo-300">
                  {quest.title}
                </h4>
                <p className="text-sm text-gray-300">{quest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Dialog>
);

export default GalleryModal;
