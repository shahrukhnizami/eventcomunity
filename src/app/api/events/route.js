import { connectDB } from "@/lib/db/connectionDB";
import { SubCategoryModal } from "@/lib/models/Subcategories";
import { CategoryModal } from "@/lib/models/Category";
import { UserModal } from "@/lib/models/User";
import { EventModal } from "@/lib/models/Event";

export async function GET(request) {
    await connectDB();
  
    const category = request?.nextUrl?.searchParams?.get("category");
    const query = {};
    if (category) {
      query.category = category;
    }
    console.log("query=>", query);
    const events = await EventModal.find(query)
      .populate("category", "title")
      .populate("createdBy", "fullname email profileImg")
      .populate("subcategory", "title")
      .populate("going", "fullname email profileImg");
  
    return Response.json(
      {
        msg: "Events Fetched Successfully",
        events,
      },
      { status: 200 }
    );
  }


export async function POST(request) {
    await connectDB();
    const obj = await request.json();
    const user = await UserModal.findOne({ _id: obj.createdBy });
    if (!user)
        return Response.json(
            {
            msg: "User Not Found ",
            error: true,
            data:null
            },
            { status: 403 }
        )
    let newEvent = new EventModal(obj);
    await newEvent.save();

    return Response.json(
        {
            msg: "Event Added Successfully ",
            event: newEvent,
        },
        { status: 201 }
    );
}

export async function PUT(request) { }

export async function DELETE(request) { }