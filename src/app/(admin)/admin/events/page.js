
import { getCategories } from "@/actions/categories";
import { getEvents } from "@/actions/events";
import AddEventSheet from "@/components/AddEventSheet/AddEventSheet";
import EvevtsTable from "@/components/EventsTable";
import { Button } from "@/components/ui/button";
import { auth } from "../../../../../auth";


export default async function Events() {
  const events = await getEvents();
  const { categories } = await getCategories();
  const session = await auth();
  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl text-center">Events</h1>
        {/* <Button variant="outline"> Add Event</Button> */}
        <AddEventSheet session={session} categories={categories} />
      </div>
     <EvevtsTable/>
    </div>
  );
}