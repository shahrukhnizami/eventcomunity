"use server";

import { revalidatePath } from "next/cache";

export const addEvents= async (obj) => {
  const added = await fetch(`${process.env.BASE_URL}api/events`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
  if (added.ok) {
    console.log("Event added successfully");
    revalidatePath("/admin/events");
  }
};

export const getEvents = async () => {
  let events = await fetch(`${process.env.BASE_URL}api/events`);
  events = await events.json();
  console.log("Category Fetched successfully");
  return events;
  revalidatePath("/admin/events");
};