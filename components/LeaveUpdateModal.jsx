// ConfirmModal.jsx
import React from "react";

const LeaveUpdateModal = ({ operation, onConfirm, onCancel }) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-semibold text-gray-900 font-satoshi"
                id="modal-title"
              >
                Confirm Update
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500 font-satoshi">
                  Are you sure you want to update {operation}?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-4 flex justify-center sm:justify-end items-center sm:space-x-0">
            <button
              type="button"
              onClick={onCancel}
              className="cancel_btn mr-4"
            >
              No
            </button>
            <button type="button" onClick={onConfirm} className="update2_btn">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveUpdateModal;
