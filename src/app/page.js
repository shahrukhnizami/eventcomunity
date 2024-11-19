

import Image from "next/image";
import { auth, signIn, signOut } from "../../auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth()
  return (



    <div className="py-2 items-center my-4">
     
      <h1 className="font-bold text-3xl text-center">Wellcome Event Comunity</h1>
      
    

       
        
                
                 
        
      </div>
      
     
   
  );
}
