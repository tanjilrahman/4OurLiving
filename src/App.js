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
        header="Planet"
        display="For our planet"
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
        display="For ourselves"
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
      <InfoSection
        left={true}
        image="/images/6.png"
        header="Valet Service"
        display="Trash Valet"
        body="Experience convenience with 4 Our Living's Trash Valet service. Effortlessly manage your waste disposal, as our dedicated team ensures prompt and hassle-free collection, making daily living a breeze."
      />
      <InfoSection
        left={false}
        image="/images/7.png"
        header="HTD residential"
        display="Package Delivery Valet"
        body="On-site delivery management service that eliminates all the stress of package management and brings packages from your mailroom straight to your residents homes at a fraction of the price and a marketable amenity."
      />
      <InfoSection
        left={true}
        image="/images/8.png"
        header="Cleaning"
        display="Cleaning Service"
        body="Elevate your home vibes with 4 Our Living's Cleaning Magic! Our skilled crew turns chores into charm, leaving your space sparkling and your living experience extraordinary."
      />
      <InfoSection
        left={false}
        image="/images/9.png"
        header="Furry Friends"
        display="Dog Walking"
        body="Keep your furry friend happy and healthy with our reliable dog walking service. Our experienced and insured walkers will take your dog for a refreshing walk, tailored to their individual needs and preferences. We offer a variety of walk lengths and times to fit your schedule and budget."
      />
      <Footer />
    </div>
  );
}

export default App;
