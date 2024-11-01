import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "../../auth";

export default async function Home() {
  const session = await auth()
  return (


<div className="min-h-screen ">
    <div className="flex justify-around items-center my-4">
        <h1 className="font-bold text-3xl text-center">Wellcome Event Comunity</h1>
        {
          session?
          <div className="flex gap-5">
            <Image src={session.user?.image}
                height={30}
                width={30}
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
          </div>:
          <div className="text-right py-2">
           <form
                action={async () => {
                  "use server"
                  await signIn("google")
                }}
              >
                <button type="submit">Signin with Google</button>
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
