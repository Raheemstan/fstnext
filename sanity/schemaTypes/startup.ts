import { defineField, defineType } from "sanity"

export const startup = defineType({
    name: "startup",
    title: "Startup",
    type: "document",
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'views',
            type: 'number',
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.required().error("Please enter category").min(2).max(20)
        }),
        defineField({
            name: 'image',
            type: 'url',
            validation: (Rule) => Rule.required().error("Image is required"),
        }),
        defineField({
            name: 'pitch',
            type: 'markdown',
        })
    ],
})