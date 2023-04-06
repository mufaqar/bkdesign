export default {
     title: "Über Uns",
     name: "uber_uns",
     type: "document",
     fields: [
       {
         title: "Title",
         name: "title",
         type: "string",
       },
       {
          title: "Tag",
          name: "tag",
          type: "string",
        },
       {
         title: "Content",
         name: "content",
         type: "string",
       },
       
       {
        title: "Social",
        type: "array",
        name: "social",
        of: [
          {
            type: "object",
            name: "inline",
            fields: [
               {
                    title: "Icon",
                    name: "icon",
                    type: "image",
                    options: {
                      hotspot: true, // <-- Defaults to false
                    },
                  },
                  
              { type: "string", name: "link" }
            ]
          }
        ],
      }
     ],
   };
   