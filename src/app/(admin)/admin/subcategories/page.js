import { getCategories } from "@/actions/categories";
import { getSubCategories } from "@/actions/subcategories";
import CategoryDropdown from "@/components/CategoryDropdown/CategoryDropdown";
import SubCategoriesTable from "@/components/SubCategoriesTable";
import { Button } from "@/components/ui/button";


export default async function Subcategories() {
  const categories = (await getCategories()).categories;
 
    return (
      // <div className="min-h-screen mx-10">
      // <div className="flex justify-between items-center my-4">
      //   <h1 className="font-bold text-xl text-center">Sub Categories</h1>
      //   <Button variant="outline">Add SubCategory</Button>
      // </div>
      <div className="min-h-screen mx-10 px-1">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl">SubCategories</h1>
        <div className="flex gap-3">
          <CategoryDropdown categories={categories} />
          {/* <AddSubCategory categories = {categories} /> */}
        </div>
      </div>
      <SubCategoriesTable categories={categories}/>
    </div>
    );
  }
  