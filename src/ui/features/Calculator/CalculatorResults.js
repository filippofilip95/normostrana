import {useTranslations} from '../TranslationsProvider';
import {useEffect, useState} from "preact/hooks";
import classNames from 'classnames';
import './CalculatorResults.scss';

const CalculatorResults = ({standardPagesCount, charCount, charCountWithoutSpace}) => {
  const {translations} = useTranslations();
  const [animating, setAnimating] = useState(false);

  if (!standardPagesCount) {
    return null;
  }

  useEffect(() => {
    setAnimating(true)
  }, [charCount]);

  return (
    <section
      className={classNames('results', animating && 'animating-result')}
      onTransitionEnd={() => setAnimating(false)}
    >
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