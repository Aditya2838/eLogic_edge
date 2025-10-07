import Slider from "../components/_home/Slider";
import ClientsPartners from "../components/_home/ClientsPartners";
import OurApplications from "../components/_home/OurApplications";
import OurValue from "../components/_home/OurValue";
import IndustryTopology from "../components/_home/IndustryTopology";
import EngineeringServices from "../components/_home/EngineeringServices";
import ProductEngineeringCapabilities from "../components/_home/ProductEngineeringCapabilities";
import Testimonials from "../components/_home/Testimonials";
import TalkToExpert from "../common/TalkToExpert";

export default function Home() {
  return (
    <>
      <Slider />
      <ClientsPartners />
      <OurApplications />
      <OurValue />
      <IndustryTopology />
      <EngineeringServices />
      <ProductEngineeringCapabilities />
      <Testimonials />
      <TalkToExpert/>
    </>
  );
}
