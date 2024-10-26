import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (


<div className="min-h-screen ">
    <div className="flex justify-around items-center my-4">
        <h1 className="font-bold text-3xl text-center">Wellcome Event Comunity</h1>
        
      </div>
      <div className="text-center py-2">
      <Link href="admin/dashboard"><Button variant="outline">Admin Dashboard</Button></Link>
      </div>
      </div>
    // <div className="min-h-screen ">
    //  <h1 className="text-3xl font-bold text-center p-20">Event Home</h1>
    //  <Link href="admin/dashboard"><Button  >Admin Dashboard</Button></Link>
    // </div>
  );
}
