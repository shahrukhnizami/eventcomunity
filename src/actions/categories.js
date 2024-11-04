"use server";

export const getCategories = async () => {
    let categories = await fetch(`${process.env.BASE_URL}api/categories`);
    categories = await categories.json();
    console.log("Category Fetched successfully");
    return categories;
    revalidatePath("/admin/categories");
  };