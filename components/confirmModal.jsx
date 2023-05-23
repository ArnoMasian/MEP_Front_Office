// import ModalPortal from "@/ModalPortal";

const ConfirmModal = ({ isOpen, onConfirm, onCancel, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex items-center">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="font-satoshi font-bold text-lg leading-6 text-gray-900"
                  id="modal-title"
                >
                  Confirm Action
                </h3>
                <div className="mt-2">
                  <p className="font-satoshi text-sm text-gray-600">
                    {children}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-center mx-3 mb-5 gap-4">
            <button type="button" className="cancel_btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" className="delete_btn" onClick={onConfirm}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
