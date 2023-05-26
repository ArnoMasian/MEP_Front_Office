import { connectToDB } from "@utils/database";
import Employee from "@models/employee";

export default async (req, res) => {
  try {
    await connectToDB();

    const count = await Employee.countDocuments();

    if (count > 0) {
      await Employee.updateMany({}, { $inc: { off: 1 } });

      console.log("off days updated successfully");
      res.status(200).send("off days updated successfully");
    } else {
      console.log("No employees in the database, skipping off days update");
      res
        .status(200)
        .send("No employees in the database, skipping off days update");
    }
  } catch (error) {
    console.error("Error updating the database:", error);
    res.status(500).send("Error updating the database");
  }
};
