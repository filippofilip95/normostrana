import { h, Component } from 'preact';

// components
import BasicInfoCard from './basicInfoCard';

class Home extends Component {
	textareaRef;

	state = {
		standartPages: null,
		charCount: null,
		charCountNoWhitespaces: null
	};

	onHandleClick = () => {
		const value = this.textareaRef.value;
		const charCount = value.length;
		const charCountNoWhitespaces = value.replace(/\s/g,'').length;
		const standartPages = parseFloat(charCount/1800).toFixed(2);

		this.setState({
			standartPages,
			charCount,
			charCountNoWhitespaces
		 });
	};

	render(){

		const { standartPages, charCount, charCountNoWhitespaces } = this.state;
		return (
			<div>
				<section class="card">
					<h1>Výpočet Rozsahu textu</h1>
					<label for="thesis-text">
						<h4>Vlož text a klikni na Vypočítaj. Počet normostrán a znakov sa zobrazí nižšie.</h4>
					</label>
					<div class="textarea-wrapper">
						<textarea
							id="thesis-text"
							label="Text práce"
							class="textarea-input"
							ref={ref => {
								this.textareaRef = ref;
							}}
						/>
					</div>
					<div
						class="button"
						onClick={this.onHandleClick}
					>
						Vypočítaj
					</div>
				</section>
				{ standartPages &&
					<section class="card">
						<h3>
							Výsledok výpočtu
						</h3>
						<p class="results">
							<strong>{standartPages.toLocaleString('sk-SK')}</strong> normostrán<br />
							<strong>{charCount.toLocaleString('sk-SK')}</strong> znakov vrátane medzier<br />
							<strong>{charCountNoWhitespaces.toLocaleString('sk-SK')}</strong> znakov okrem medzier
						</p>
					</section>
				}
				<BasicInfoCard />
			</div>
		);
	}
}

export default Home;
