import { createClient } from "next-sanity";
  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET
  const apiVersion = process.env.SANITY_API_VERSION
  const config = {
      projectId,
      dataset,
      apiVersion,
      useCdn: false
  }
  export const sanityClient = createClient(config);
