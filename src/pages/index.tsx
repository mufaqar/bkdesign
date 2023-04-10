import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Home_Module } from "../modules/imports";
import { sanityClient } from "../config/client";
import {
  partnersQuery,
  projectsQuery,
  uberUnsQuery,
  userAngebotQuery,
} from "../config/query";

export default function Index(props: any) {
  return <Home_Module data={props}/>;
}

export async function getStaticProps() {
  const partners = await sanityClient.fetch(partnersQuery);
  const projects = await sanityClient.fetch(projectsQuery);
  const uberUns = await sanityClient.fetch(uberUnsQuery);
  const userAngebot = await sanityClient.fetch(userAngebotQuery);

  return {
    props: {
      userAngebot,
      projects,
      uberUns,
      partners,
    },
  };
}
