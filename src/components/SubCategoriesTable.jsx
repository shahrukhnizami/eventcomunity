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




export default function SubCategoriesTable(){
  const subcategories = [
    {
      title: "Cricket",
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "All Community Members will be have cycling Race",
    },
    {
      title: "Footbal",
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "All Community Members will be have cycling Race",
    },
    {
      title: "Tennis",
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1470920456752-d50214d7ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "All Community Members will be have cycling Race",
    },
  ];
    return(
      <Table>
      <TableCaption>A list of your subcategories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Thumbnail</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subcategories.map((category) => (
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
            <TableCell className="font-medium">{category.category}</TableCell>
            <TableCell className="font-medium">{category.title}</TableCell>
            <TableCell className="font-medium">
              {category.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>)
    
}
