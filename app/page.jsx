"use client";

import { useSession } from "next-auth/react";
import LeaveUpdateModal from "@components/LeaveUpdateModal";
import { useState } from "react";

const Home = () => {
  const { data: session } = useSession();

  const [isModalOpen, setModalOpen] = useState(false);
  const [operation, setOperation] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleOffUpdate = () => {
    setOperation("OFF DAYS");
    setModalOpen(true);
  };

  const handleAnnualUpdate = () => {
    setOperation("ANNUAL LEAVE");
    setModalOpen(true);
  };

  const confirmUpdate = async () => {
    setModalOpen(false);
    try {
      let response;

      if (operation === "OFF DAYS") {
        response = await fetch("/api/updateOffDays", { method: "POST" });
      } else if (operation === "ANNUAL LEAVE") {
        response = await fetch("/api/updateAnnualDays", { method: "POST" });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const message = await response.json();
      console.log(message);
      setSuccessMessage(`Successfully updated ${operation}`);
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelUpdate = () => {
    setModalOpen(false);
  };

  return (
    <section className="w-full h-screen flex flex-col">
      <h1 className="head_text2 text-center orange_gradient mb-20">
        MEP FRONT OFFICE
      </h1>

      {session?.user ? (
        <div className="flex flex-center justify-center items-center gap-3">
          <button type="button" onClick={handleOffUpdate} className="blue_btn">
            <p className="font-satoshi font-medium">UPDATE OFF</p>
          </button>

          <button
            type="button"
            onClick={handleAnnualUpdate}
            className="blue_btn"
          >
            <p className="font-satoshi font-medium">UPDATE ANNUAL</p>
          </button>
        </div>
      ) : (
        <></>
      )}
      {isModalOpen && (
        <LeaveUpdateModal
          operation={operation}
          onConfirm={confirmUpdate}
          onCancel={cancelUpdate}
        />
      )}

      {successMessage && (
        <div className="border-2 border-green-400 flex justify-center items-center mt-10 glassmorphism w-[350px] mx-auto">
          <div className="alert alert-success text-center font-satoshi font-semibold text-green-600">
            {successMessage}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
