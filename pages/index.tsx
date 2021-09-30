import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home(props: any) {

  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results results={props.results} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const genre = context.query.genre;
  const base_url = "https://api.themoviedb.org/3";

  const res = await fetch(
    `${base_url}${requests[genre]?.url || requests?.fetchTrending.url}`
  );

  const data = await res.json();

  return {
    props: { results: data.results },
  };
}
