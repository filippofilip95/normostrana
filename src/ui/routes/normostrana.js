import Container from "../components/Container";
import AboutStandardPage from "../features/AboutStandardPage/AboutStandardPage";
import Faqs from "../features/Faqs";
import Footer from "../features/Footer";

const Normostrana = (props) => {
  return (
    <Container size='md'>
      <AboutStandardPage/>
      <Faqs/>
      <Footer/>
    </Container>
  );
};

export default Normostrana;
