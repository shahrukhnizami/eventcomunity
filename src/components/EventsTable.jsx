import { getEvents } from "@/actions/events";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";




export default async function EvevtsTable(){
 const events = await getEvents()
    return(
      <Table>
      <TableCaption>A list of your recent events.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Address</TableHead>
          <TableHead className="text-right">Start Date</TableHead>
          <TableHead className="text-right">End Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events?.events?.map((event) => (
          <TableRow key={event._id}>
            <TableCell className="text-right">
              <Image
                src={event.thumbnail}
                style={{ objectFit: "cover" }}
                height={40}
                width={40}
                alt={event.title}
                              />
            </TableCell>
            <TableCell className="font-medium">{event.title}</TableCell>
            <TableCell>{event.description}</TableCell>
            <TableCell>{event.address}</TableCell>
            <TableCell>{event.startDate}</TableCell>
            <TableCell>{event.endDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>)
    
}
