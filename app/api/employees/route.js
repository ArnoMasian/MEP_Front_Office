import { connectToDB } from "@utils/database";
import Employee from "@models/employee";

export const GET = async (request) => {
  try {
    await connectToDB();

    const employees = await Employee.find({})
      .populate("creator")
      .populate({
        path: "requests",
        match: { _id: { $exists: true } },
      });

    return new Response(JSON.stringify(employees), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch all employees!", { status: 500 });
  }
};
