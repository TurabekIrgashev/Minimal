import { Box } from "@mui/material";
import { Html } from "next/document";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Banking</title>
        <meta
          name="description"
          content="Ultimate landing page with an amazing UI"
        />
        <link rel="icon" href="https://minimals.cc/favicon/favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box sx={{ height: "200vh", width: "100%" }}></Box>
    </div>
  );
}
