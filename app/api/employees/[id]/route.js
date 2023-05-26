import Employee from "@models/employee";
import { connectToDB } from "@utils/database";
import cron from "node-cron";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const employee = await Employee.findById(params.id)
      .populate("creator")
      .populate("requests");

    if (!employee) return new Response("Employee not found", { status: 404 });

    return new Response(JSON.stringify(employee), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all employees!", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const {
    name,
    designation,
    joinedDate,
    employeeId,
    idCardNumber,
    off,
    annual,
    medical,
    emergency,
  } = await request.json();

  try {
    await connectToDB();

    // Find the existing employee by ID
    const existingEmployee = await Employee.findById(params.id);

    if (!existingEmployee) {
      return new Response("Employee not found", { status: 404 });
    }

    // Update the employee with new data
    existingEmployee.name = name;
    existingEmployee.designation = designation;
    existingEmployee.joinedDate = joinedDate;
    existingEmployee.employeeId = employeeId;
    existingEmployee.idCardNumber = idCardNumber;
    existingEmployee.off = off;
    existingEmployee.annual = annual;
    existingEmployee.medical = medical;
    existingEmployee.emergency = emergency;

    await existingEmployee.save();

    return new Response("Successfully updated the Employee", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Employee", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the employee by ID and remove it
    await Employee.findByIdAndRemove(params.id);

    return new Response("Employee deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting employee", { status: 500 });
  }
};
