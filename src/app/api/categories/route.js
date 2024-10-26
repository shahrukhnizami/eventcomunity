
import { connectDB } from "@/lib/db/connectionDB.js";
import { CategoryModal } from "@/lib/models/Category";

export async function GET(request) {
  try{await connectDB();
  const categories = await CategoryModal.find();
  return Response.json(
    {
      msg: "categories Fetched Successfully",
      categories
    },
    { status: 200 }
  );}
  catch(error){console.log(error);
  }
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newcategory = new CategoryModal(obj);
  await newcategory.save();

  return Response.json(
    {
      msg: "Category Added Successfully ",
      Categories: newcategory
    },
    { status: 201 }
  );
}

export async function PUT(request) {}

export async function DELETE(request) {}