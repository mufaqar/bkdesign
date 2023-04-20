export const partnersQuery = `*[_type == "partners"] | order(_createdAt asc) {
     image{
          asset->{
               url
          },
          link
     }
     ,
     partner_url
}`;

export const projectsQuery = `*[_type == "projects"] | order(_createdAt asc) {
     title,
     content,
     image{
          asset->{
               url
             },
          alt

     },
     video_production_url,
     buttons[]{
          title,
          link
     }
}`;

export const uberUnsQuery = `*[_type == "uber_uns"] | order(_createdAt asc) {
     title,
     content,
     social[]{
          icon{
               asset->{
                    url
               }
          },   
          link
     },
     image{
          asset->{
               url
          },
          alt
     },
     tag
}`;

export const userAngebotQuery = `*[_type == "unserAngebot"] | order(_createdAt asc) {
     title,
     content,
     image{
          asset->{
               url
          },
          alt

     },
}`;
