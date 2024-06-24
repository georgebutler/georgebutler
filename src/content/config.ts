import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string().default('Untitled Post'),
        timestamp: z.date(),
        description: z.string(),
    })
});

export const collections = {
    posts: postsCollection,
};