"use client";
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
import { getSubCategories } from "@/actions/subcategories";

export default async function SubCategoriesTable({searchParams }) {
  const subCategories = await getSubCategories(searchParams?.category);
  console.log("subCategories",subCategories);
  
  

  return (
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
        {subCategories?.subCategories?.length > 0 ? (
          subCategories.subCategories.map((subCat) => (
            <TableRow key={subCat.id || subCat.title}>
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
          ))
        ) : (
          <TableRow>
            <TableCell colSpan="4" className="text-center">
              No subcategories found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
