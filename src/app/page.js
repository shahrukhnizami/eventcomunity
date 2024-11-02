

import Image from "next/image";
import { auth, signIn, signOut } from "../../auth";

export default async function Home() {
  const session = await auth()
  return (


<div className=" ">
    <div className="py-2 items-center my-4">
      <div>
      <h1 className="font-bold text-3xl text-center">Wellcome Event Comunity</h1>
      </div>
       
        {
          session?
          
          <div className="container mx-auto flex gap-4 justify-end items-end">
            <Image src={session.user?.image}
                height={30}
                width={30}
                alt={session?.user?.name}
                className="rounded-full" />
            <h1 className="font-bold">{session?.user?.email}
          </h1>
          <form
          action={async () => {
            "use server"
            await signOut("google")
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
        </div>
        
          
          :
          <div className="container py-4 mx-auto flex flex-col gap-4 justify-right items-center">
           <form
        className="flex flex-col gap-3 shadow p-3"
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData, { redirect: false });
        }}
      >
        <h1 className="py-4 text-red-500">Please Login your Account!!</h1>
        <input
          className="border p-2"
          required
          name="email"
          placeholder="Enter your Email"
        />
        <input
          className="border p-2"
          required
          name="password"
          placeholder="Enter your Password"
        />
        <button className="border p-1 px-2" type="submit">
          Login
        </button>
      </form>
           <form 
                action={async () => {
                  "use server"
                  await signIn("google")
                }}
              >
                
                 
                <button className="border font-bold w-60"  type="submit">Continue with Google</button>
              </form>
          </div>
          
         
        }
      </div>
      
      </div>
    // <div className="min-h-screen ">
    //  <h1 className="text-3xl font-bold text-center p-20">Event Home</h1>
    //  <Link href="admin/dashboard"><Button  >Admin Dashboard</Button></Link>
    // </div>
  );
}
