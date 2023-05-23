"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import RequestForm from "@components/RequestForm";

const CreateRequest = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const employeeId = searchParams.get("id");
  const { data: session } = useSession();

  const [request, setRequest] = useState({
    name: "",
    designation: "",
    employeeId: "",
    idCardNumber: "",
    off: "",
    annual: "",
    medical: "",
    emergency: "",
    leaveStartDate: "",
    leaveEndDate: "",
  });

  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    employeeId: "",
    idCardNumber: "",
    off: "",
    annual: "",
    medical: "",
    emergency: "",
    leaveStartDate: "",
    leaveEndDate: "",
  });

  useEffect(() => {
    const getEmployeeDetails = async () => {
      const respone = await fetch(`/api/employees/${employeeId}`);

      const data = await respone.json();

      setEmployee({
        name: data.name,
        designation: data.designation,
        joinedDate: data.joinedDate,
        employeeId: data.employeeId,
        idCardNumber: data.idCardNumber,
        off: data.off,
        annual: data.annual,
        medical: data.medical,
        emergency: data.emergency,
      });
    };

    if (employeeId) getEmployeeDetails();
  }, [employeeId]);

  const CreateRequests = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!employeeId) return alert("Missing employee ID");

    try {
      const response = await fetch("/api/requests/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee: employeeId,
          name: employee.name,
          designation: employee.designation,
          idCardNumber: employee.idCardNumber,
          employeeId: employee.employeeId,
          off: request.off,
          annual: request.annual,
          medical: request.medical,
          emergency: request.emergency,
          leaveStartDate: request.leaveStartDate,
          leaveEndDate: request.leaveEndDate,
        }),
      });

      if (response.ok) {
        router.push(`/employee-details?id=${employeeId}`);
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <RequestForm
      type="Request"
      employee={employee}
      request={request}
      setEmployee={setEmployee}
      setRequest={setRequest}
      submiting={submitting}
      handleSubmit={CreateRequests}
    />
  );
};

export default CreateRequest;
