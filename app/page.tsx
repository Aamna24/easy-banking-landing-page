import Box from "@mui/material/Box";
import TopHeader from "../components/TopHeader";
import Typography from "@mui/material/Typography";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopHeader />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
}
