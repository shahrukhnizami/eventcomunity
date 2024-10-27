import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogIn } from "lucide-react";
import Image from "next/image";




export default async function CategoriesTable(){
 let res = await fetch("http://localhost:3000/api/categories")
  res = await res.json();
  console.log(res.category);
  
    return(
      <Table>
      <TableCaption>A list of your categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Thumbnail</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {res.categories.map((category) => (
          <TableRow key={category.title}>
            <TableCell className="text-right">
              <Image
                src={category.thumbnail}
                style={{ objectFit: "cover" }}
                height={40}
                width={40}
                alt={category.title}
              />
            </TableCell>
            <TableCell className="font-medium">{category.title}</TableCell>
            <TableCell className="font-medium">
              {category.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>)
    
}
