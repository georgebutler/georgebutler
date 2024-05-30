import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        timestamp: z.date(),
    })
});

export const collections = {
    posts: postsCollection,
};