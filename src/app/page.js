

import Image from "next/image";
import { auth, signIn, signOut } from "../../auth";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/actions/events";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import { getCategories } from "@/actions/categories";

export default async function Home(searchParams ) {
  // console.log("searchparams=>", searchParams);
  const { category } = searchParams;
  const session = await auth();
  const { events } = await getEvents(category);
  const { categories } = await getCategories();
  return (



    <div className="  py-2 items-center my-4">
     
      <h1 className="font-bold text-3xl text-center">Wellcome Event Comunity</h1>
   
    

       
    <UpcomingEvents
    chosenCategory={category}
    events={events}
    session={session}
    categories={categories}
    />
      </div>
   
                
                 
        
     
     
   
  );
}
