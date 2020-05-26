import {useTranslations} from '../TranslationsProvider';
import ContentCard from "../../components/ContentCard";
import CollapsibleTile from "../../components/CollapsibleTile";

const Faqs = () => {
  const {translations} = useTranslations();

  return (
    <ContentCard title={translations.faqTitle} hasNotH1>
      <CollapsibleTile title={translations.faqQuestion5}>
        <ul>
          <li>{translations.btRange}</li>
          <li>{translations.dtRange}</li>
          <li>{translations.ditRange}</li>
        </ul>
        <i>{translations.thesisRangeCaption}.</i>
      </CollapsibleTile>
      <CollapsibleTile title={translations.faqQuestion1}>
        {translations.faqAnswer1}
      </CollapsibleTile>
      <CollapsibleTile title={translations.faqQuestion2}>
        {translations.faqAnswer2}
      </CollapsibleTile>
      <CollapsibleTile title={translations.faqQuestion3}>
        {translations.faqAnswer3}
      </CollapsibleTile>
      <CollapsibleTile title={translations.faqQuestion4}>
        {translations.faqAnswer4}
      </CollapsibleTile>
    </ContentCard>
  );
};

export default Faqs;
