import { Button } from "@/components/ui/button";
import UsersTable from "@/components/UsersTable";



export default function Users() {
  
    return (
      <div className="min-h-screen mx-10">
        <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">Users</h1>
        <Button variant="outline">Add User</Button>
      </div>
      <UsersTable/>
    </div>
    );
  }
  
  