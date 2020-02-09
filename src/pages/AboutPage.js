import React from "react";
import Hero from "../components/Hero";
import Info from "../components/AboutPage/Info";
import aboutBcg from '../images/aboutBcg.jpeg';

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg} title="about page"/>
      <Info/>
    </>
  );
}
