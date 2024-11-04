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
import { getCategories } from "@/actions/categories";
import { getSubCategories } from "@/actions/subcategories";




export default async function SubCategoriesTable(searchParams){
  const subcategories = await getSubCategories(searchParams?.category);
 
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
          {subcategories?.subCategories?.map((subCat) => (
            <TableRow key={subCat.title}>
              <TableCell className="text-right">
                <Image
                  src={subCat.thumbnail}
                  style={{ objectFit: "cover" }}
                  height={40}
                  width={40}
                  alt={subCat.title}
                />
              </TableCell>
              <TableCell className="font-medium">
                {subCat.category?.title}
              </TableCell>
              <TableCell className="font-medium">{subCat.title}</TableCell>
              <TableCell className="font-medium">
                {subCat.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>)
    
}
