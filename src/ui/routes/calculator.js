import {Fragment} from 'preact';
import MainCalculator from '../features/Calculator'
import Faqs from "../features/Faqs";
import Footer from "../features/Footer";

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
