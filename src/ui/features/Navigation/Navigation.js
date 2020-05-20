import {useTranslations} from '../TranslationsProvider';
import Link from "../../components/Link";
import IMG_LOGO from '../../../assets/icons/android-chrome-192x192.png';
import './Navigation.css'

const Navigation = () => {
  const {translations} = useTranslations();

  return (
    <nav class="header">
      <img alt='logo' class='logo' src={IMG_LOGO}/>
      <title>
        <a href='https://pocetznakov.sk/'>
          {translations.headerTitle}
        </a>
      </title>
      <Link href="/">Výpočet Normostrán</Link>
      <Link href="/normostrana">Viac o Normostrane</Link>
    </nav>
  );
};

export default Navigation;
