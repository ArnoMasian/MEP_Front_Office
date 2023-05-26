import Employee from "@models/employee";
import { connectToDB } from "@utils/database";

export default async (req, res) => {
  try {
    await connectToDB();

    const count = await Employee.countDocuments();

    if (count > 0) {
      await Employee.updateMany({}, { $inc: { off: 1 } });

      console.log("Off days updated successfully");
      res.status(200).send("Off days updated successfully");
    } else {
      console.log("No employees in the database, skipping off days update");
      res
        .status(200)
        .send("No employees in the database, skipping off days update");
    }
  } catch (error) {
    console.error("Error updating the database:", error);
    res.status(500).send("Error updating the database: " + error);
  }
};
