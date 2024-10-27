import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import Image from "next/image";


export default async function UsersTable(){
    


      let res = await fetch("http://localhost:3000/api/users");
      res = await res.json()
      
      
    return(
        <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile Image</TableHead>
            <TableHead className="w-[100px]">Fullname</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead >Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {res.users?.map((user) => (
            <TableRow key={user.fullname}>
              <TableCell className="text-right">
                {/* <Image
                  src={user.profileImage}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                  alt={user.profileImage}
                /> */}
              </TableCell>
              <TableCell className="font-medium">{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
  
    )
    
}
