export default {
  title: "Unser Angebot",
  name: "unserAngebot",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        
      ]
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    },
  ],
};
