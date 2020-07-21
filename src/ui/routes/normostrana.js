import Container from "../components/Container";
import AboutStandardPage from "../features/AboutStandardPage/AboutStandardPage";
import Faqs from "../features/Faqs";

const Normostrana = () => {
  return (
    <Container size='md'>
      <AboutStandardPage/>
      <Faqs/>
    </Container>
  );
};

export default Normostrana;
