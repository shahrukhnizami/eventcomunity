import CategoriesTable from "@/components/CategoriesTable";
import { Button } from "@/components/ui/button";


export default function Categories() {
    return (
      <div className="min-h-screen mx-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl text-center">Categories</h1>
        <Button variant="outline">Add Category</Button>
      </div>
     <CategoriesTable/>
    </div>
    );
  }
  