import { h } from 'preact';

const BasicInfoCard = ({ translations }) => 		(
	<section class="card">
		<h3>{translations.infoHeader}</h3>
		<p>
			{translations.standardPageInfo1} <strong>{translations.standardPageCount}</strong> {translations.standardPageInfo2} <i>{translations.stnNorm}</i>.
		</p>
		<p>
			{translations.standardPageUsage1}<strong>{translations.standardPageShortName}</strong> {translations.standardPageUsage2}.
		</p>
		<h4>{translations.infoRangeHeader}</h4>
		<ul>
			<li>{translations.btRange}</li>
			<li>{translations.dtRange}</li>
			<li>{translations.ditRange}</li>
		</ul>
		<i>{translations.thesisRangeCaption}.</i>
	</section>
);

export default BasicInfoCard;