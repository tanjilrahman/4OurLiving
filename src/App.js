import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <div className="font-body">
      <Header />
      <Hero />
      <Cards />
      <InfoSection
        left={true}
        image="/images/2.jpg"
        header="Plannet"
        display="For our plannet"
        body="If you are on the lookout for a fully compliant waste collection and management service, Four Our Living can assist you at every step of the removal and disposal process for multi-family residential homes such as apartment buildings, jointly owned dwellings, retirement communities and student accommodation."
      />
      <InfoSection
        left={false}
        image="/images/3.jpg"
        header="Community"
        display="For our community"
        body="The principal aim of our services is to aid the owners and administration in regulating waste management on their properties. Providing a supplemental revenue source leading to an increase in net operating income through Four Our Living."
      />
      <InfoSection
        left={true}
        image="/images/4.jpg"
        header="Ourselves"
        display="For our ourselves"
        body="Our services are designed to include the processes and actions required to manage waste from its inception to its final disposal.
        Functioning with the communities’ welfare in mind, the residents will be satisfied with our services from the very beginning till the end."
      />
      <InfoSection
        left={false}
        image="/images/5.jpg"
        header="Future"
        display="For our future"
        body="While the residents are unquestionably happy with our performance, the management is equally content as our services keep their properties presentable and organized during leases. Our waste collection & rubbish removal team do the hard work, so you don't have to."
      />
      <Footer />
    </div>
  );
}

export default App;
