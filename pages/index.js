import React from "react";
import PageDescription from "@/components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "@/constants/page-description";
import Footer from "@/components/baseComponents/gui/footer/Footer";
import Intro from "@/components/intro/Intro";
import Cards from "@/components/cards/Cards";
import Facts from "@/components/facts/Facts";
import Rules from "@/components/rules/Rules";
import Video from "@/components/video/Video";

export default function Home() {
  return (
    <>
      <PageDescription {...defaultPage} />
      <Intro/>
      <Cards/>
      <Facts/>
      <Rules/>
      <Video/>
      <Footer/>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
