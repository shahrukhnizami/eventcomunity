"use server";

import Subcategories from "@/app/(admin)/admin/subcategories/page";

export const getSubCategories = async (category) => {
  let url;
  if (category) {
    url = `${process.env.BASE_URL}api/subcategories?category=${category}`;
  } else {
    url = `${process.env.BASE_URL}api/subcategories`;
  }
  let subcategories = await fetch(url);
  subcategories = await subcategories.json();
  console.log("Subcategories Fetched successfully");
  return subcategories;
};