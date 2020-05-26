import {useTranslations} from '../TranslationsProvider';
import './CalculatorResults.scss'

const CalculatorResults = ({standardPagesCount, charCount, charCountWithoutSpace}) => {
  const {translations} = useTranslations();

  if (!standardPagesCount) {
    return null;
  }

  return (
    <section className='results'>
      <h3 className='results-header'>{translations.resultHeader}</h3>
      <ul>
        <li>
          <strong>
            {standardPagesCount.toLocaleString()}
          </strong>{' '}
          {translations.standardPages}
        </li>
        <li>
          <strong>
            {charCount.toLocaleString()}
          </strong>{' '}
          {translations.charsWithSpaces}
        </li>
        <li>
          <strong>
            {charCountWithoutSpace.toLocaleString()}
          </strong>{' '}
          {translations.charsWithoutSpaces}
        </li>
      </ul>
    </section>
  );
};


export default CalculatorResults;