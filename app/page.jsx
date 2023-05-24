"use client";

// import { useState, useEffect } from "react";

const Home = () => {
  // const [employeesOnLeave, setEmployeesOnLeave] = useState([]);

  // useEffect(() => {
  //   const fetchOnLeave = async () => {
  //     const response = await fetch("/api/onLeave");
  //     const data = await response.json();
  //     setEmployeesOnLeave(data);
  //   };

  //   fetchOnLeave();
  // }, []);

  return (
    <section className="w-full h-screen flex flex-col">
      <h1 className="head_text2 text-center orange_gradient mb-10">
        MEP FRONT OFFICE
      </h1>

      {/* <div className="flex justify-center">
        <div className="w-full max-w-screen-lg bg-white rounded-xl shadow-lg p-5 mt-5 border-2 border-blue-200">
          <h2 className="text-3xl font-bold mb-4 text-center blue_gradient font-satoshi">
            Employees on Leave
          </h2>
          {employeesOnLeave.length === 0 && (
            <p className="text-center font-satoshi">
              No employees on leave at the moment.
            </p>
          )}

          <div className="flex overflow-x-auto pb-2 ">
            <ul className="flex flex-no-wrap justify-start">
              {employeesOnLeave.map((employee) => {
                const leaveStartDate = new Date(employee.leaveStartDate);
                const formattedLeaveStartDate =
                  leaveStartDate.toLocaleDateString("en-GB");

                const leaveEndDate = new Date(employee.leaveEndDate);
                const formattedLeaveEndDate =
                  leaveEndDate.toLocaleDateString("en-GB");

                return (
                  <li
                    key={employee._id}
                    className="p-4 m-2 bg-white rounded shadow-lg w-60 glassmorphism border-blue-400 border-2"
                  >
                    <h2 className="font-bold text-xl mb-2 text-center font-satoshi text-blue-600">
                      {employee.name}
                    </h2>
                    <p className="text-gray-700 mb-2 text-center font-satoshi">
                      {employee.designation}
                    </p>
                    <div className="flex flex-between mt-5">
                      <p className="text-sm text-gray-500 text-center font-satoshi">
                        Start Date
                      </p>
                      <p className="text-sm text-gray-500 text-center font-satoshi">
                        {formattedLeaveStartDate}
                      </p>
                    </div>
                    <div className="flex flex-between">
                      <p className="text-sm text-gray-500 text-center font-satoshi">
                        End Date
                      </p>
                      <p className="text-sm text-gray-500 text-center font-satoshi">
                        {formattedLeaveEndDate}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Home;
