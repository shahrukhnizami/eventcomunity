import Image from "next/image";
import { auth, signIn, signOut } from "../../../auth"
import { redirect } from "next/dist/server/api-utils";
import Admin from "../(admin)/admin/page";

export default async function Signin(){
const session = await auth();
console.log("session",session);

    return (
    <div className="flex items-center container mx-auto justify-center min-h-screen">
        {
            session?
            <div className="flex flex-col rounded">
                
                <Image src={session.user?.image}
                height={100}
                width={100}
                alt={session?.user?.name}
                className="rounded-full" />
                <h1 className="font-bold py-3">{session?.user?.name}</h1>
                <h1 className="py-2">{session.user?.email}</h1>
                <form
                action={async () => {
                  "use server"
                  await signOut()
                }}
              >
                <button type="submit">Sign Out</button>
              </form>
                </div>:
                <form
                action={async () => {
                  "use server"
                  await signIn("google")
                }}
              >
                <button type="submit">Signin with Google</button>
              </form>
        }
        
    </div>
        )
    
}