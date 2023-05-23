import { connectToDB } from "@utils/database";
import Employee from "@models/employee";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(400).send({ message: "Only GET requests allowed" });
    return;
  }

  try {
    await connectToDB();

    const employees = await Employee.find({})
      .populate("creator")
      .populate("requests");

    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to fetch all employees!" });
  }
}
