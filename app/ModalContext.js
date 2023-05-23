"use client";

import { createContext, useState } from "react";
import ReactDOM from "react-dom";
import ConfirmModal from "@components/confirmModal";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const handleModalOpen = (content) => {
    setModalContent(content);
  };

  const handleModalClose = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ handleModalOpen, handleModalClose }}>
      {children}
      {modalContent &&
        ReactDOM.createPortal(
          <ConfirmModal
            isOpen={!!modalContent}
            onConfirm={() => {
              modalContent.onConfirm();
              handleModalClose();
            }}
            onCancel={handleModalClose}
          >
            {modalContent.text}
          </ConfirmModal>,
          document.getElementById("modal-root")
        )}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
