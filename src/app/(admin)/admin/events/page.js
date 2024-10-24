import EvevtsTable from "@/components/EventsTable";
import { Button } from "@/components/ui/button";


export default function Events() {
  return (
    <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl text-center">Events</h1>
        <Button>Add Event</Button>
      </div>
     <EvevtsTable/>
    </div>
  );
}