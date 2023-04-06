import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {Home_Module} from '../modules/imports';
import { SanityClient } from 'sanity';


export default function Index() {
  return (
   <Home_Module/>
  )
}




export async function getStaticProps() {
  const blog = await SanityClient.fetch(``);

  return {
    props: {
      blog
    }
  };
}
