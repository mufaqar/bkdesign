export default {
  title: 'Partners',
  name: 'partners',
  type: 'documents',
  fields: [
    {
      title: "Partner Title",
      name: "title",
      type: "string",
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'link',
          type: 'string',
          title: 'alt',
        },
      ],
    },
    {
      title: 'Partner Link',
      name: 'partner_url',
      type: 'string',
    },
  ],
};
