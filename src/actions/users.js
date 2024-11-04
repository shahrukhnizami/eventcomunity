"use server";

import { revalidatePath } from "next/cache";

export const addCategory = async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/categories`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("Category added successfully");
    revalidatePath("/admin/categories");
  }
};

export const getUsers = async () => {
  let users = await fetch(`${process.env.BASE_URL}api/users`);
  users = await users.json();
  console.log("Category Fetched successfully");
  return users;
  revalidatePath("/admin/categories");
};