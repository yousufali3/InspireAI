import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userId, prompts } = await request.json(); // Expecting { userId: '...', prompts: [...] }
  if (!Array.isArray(prompts) || prompts.length === 0) {
    return new Response("No prompts provided", { status: 400 });
  }
  try {
    await connectToDB();
    // Map through the prompts and create an array of Prompt instances
    const newPrompts = prompts.map(
      ({ prompt, tag }) => new Prompt({ creator: userId, prompt, tag })
    );
    // Insert all prompts into the database
    await Prompt.insertMany(newPrompts);
    return new Response(JSON.stringify(newPrompts), { status: 201 });
  } catch (error) {
    console.error("Error creating prompts:", error);
    return new Response("Failed to create prompts", { status: 500 });
  }
};
