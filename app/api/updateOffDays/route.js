import { connectToDB } from "@utils/database";
import Employee from "@models/employee";

export const updateOffDays = async (req) => {
  try {
    await connectToDB();

    const count = await Employee.countDocuments();

    if (count > 0) {
      await Employee.updateMany({}, { $inc: { off: 1 } });
      return new Response("Off days updated successfully", { status: 200 });
    } else {
      return new Response(
        "No employees in the database, skipping off days update",
        { status: 200 }
      );
    }
  } catch (error) {
    return new Response("Error updating the database", { status: 500 });
  }
};
