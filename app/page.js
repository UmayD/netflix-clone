import React from "react";
import "./globals.css";
import MainContent from "@/components/MainContent";
import Row from "@/components/Row";
import movieRequest from "@/src/utils/MovieRequests";

export default function Home() {

  return (
    <>
      <MainContent />
      <Row rowID={1} title={"Popular"} fetchURL={movieRequest.requestPopular} />
      <Row rowID={2} title={"Top Rated"} fetchURL={movieRequest.requestTopRated} />
    </>
  )
}
