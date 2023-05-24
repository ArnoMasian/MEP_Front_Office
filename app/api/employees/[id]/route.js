import Employee from "@models/employee";
import { connectToDB } from "@utils/database";

// UPDATE OFF DAYS EVERY 7 DAYS
const updateOffDays = async () => {
  try {
    await connectToDB();

    // Update all employees by adding 1 to their "off" days
    await Employee.updateMany({}, { $inc: { off: 1 } });

    console.log("Database updated successfully");
  } catch (error) {
    console.error("Error updating the database:", error);
  }
};

// Schedule the update every 7 days
setInterval(updateOffDays, 7 * 24 * 60 * 60 * 1000);

// UPDATE ANNUAL LEAVE EVERY MONTH
const updateAnnualLeave = async () => {
  try {
    await connectToDB();

    // Update all employees by adding 2.5 to their "annual" leave
    await Employee.updateMany({}, { $inc: { annual: 2.5 } });

    console.log("Database updated successfully");
  } catch (error) {
    console.error("Error updating the database:", error);
  }
};

// Schedule the update every month
setInterval(updateAnnualLeave, 30 * 24 * 60 * 60 * 1000);

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
