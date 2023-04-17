export default {
  title: "Partners",
  name: "partners",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "link",
          type: "string",
          title: "Link",
        },  
      ],
    },
  ],
};
