import { Form, redirect, type ActionFunctionArgs } from "react-router";
import { supabase } from "~/supabase-client";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as String;
  const description = formData.get("description") as String;

  if (!title || !description) {
    return { success: false, error: "Title and description are required." };
  }

  const { error } = await supabase.from("items").insert({ title, description });

  if (error) {
    console.error("Error creating new item:", error);
    return { success: false, error: "Failed to create new item." };
  }

  console.log("New item created successfully:", { title, description });
  return redirect("/"); // Redirect to the items page after successful creation
}

export default function NewItem() {
  return (
    <div>
      <h1>Create New Item</h1>
      <Form method="post">
        <div className="mb-4">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="border border-gray-300 rounded p-2"
          />
        </div>

        <button type="submit">Create Item</button>
      </Form>
    </div>
  );
}
