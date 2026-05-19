import Hero from "../components/Hero";
import SignatureMenu from "../components/SignatureMenu";
import MenuShowcase from "../components/MenuShowcase";
import OurTeam from "../components/OurTeam";
import GiftCertificates from "../components/GiftCertificates";
import HoursDirections from "../components/HoursDirections";
import Reservations from "../components/Reservations";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="page-home">
        <Hero />
        <SignatureMenu />
        <OurTeam />
        <MenuShowcase />
        <GiftCertificates />
        <HoursDirections />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
