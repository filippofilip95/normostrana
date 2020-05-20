import {Fragment} from 'preact';
import Faqs from "../features/Faqs";
import Footer from "../features/Footer";
import MainCalculator from "../features/Calculator";

const Calculator = () => {
  return (
    <Fragment>
      <MainCalculator/>
      <Faqs/>
      <Footer/>
    </Fragment>
  );
};

export default Calculator;
