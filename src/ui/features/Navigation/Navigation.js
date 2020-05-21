import {useTranslations} from '../TranslationsProvider';
import Link from "../../components/Link";
import IMG_LOGO from '../../../assets/pocetznakov-logo.svg';
import './Navigation.scss'

const Navigation = () => {
  const {translations} = useTranslations();

  return (
    <nav>
      <title>
        <a class='logo' href='https://pocetznakov.sk/'>
          <img alt='logo' src={IMG_LOGO}/>
        </a>
      </title>
      <Link href="/">Výpočet Normostrán</Link>
      <Link href="/normostrana">Viac o Normostrane</Link>
      <Link href="/normostrana">O Projekte</Link>
    </nav>
  );
};

export default Navigation;
