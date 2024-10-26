import SubCategoriesTable from "@/components/SubCategoriesTable";
import { Button } from "@/components/ui/button";


export default function Subcategories() {
    return (
      <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl text-center">Sub Categories</h1>
        <Button variant="outline">Add SubCategory</Button>
      </div>
      <SubCategoriesTable/>
    </div>
    );
  }
  