export default {
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "string",
    },
    {
      title: "Icon",
      name: "icon",
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
    {
      title: "Video Production URL",
      name: "video_production_url",
      type: "string",
    },
    {
     title: "Buttons",
     type: "array",
     name: "buttons",
     of: [
       {
         type: "object",
         name: "inline",
         fields: [
           { type: "string", name: "title" },
           { type: "string", name: "link" }
         ]
       }
     ],
   }
  ],
};
