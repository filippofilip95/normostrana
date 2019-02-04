import { h, Component } from 'preact';

import translations from '../assets/translations';

class translationsProvider extends Component {
	state = {
		translation: 'sk'
	};
  
	setTranslation = event => {
		this.setState({
			translation: event.target.value
		});
	};

	setBrowserTranslation = () => {
		const browserLang = (navigator.language || navigator.userLanguage).substring(0,2);
		if (Object.keys(translations).includes(browserLang) ){
			this.setState({
				translation: browserLang
			});
		}
	}

	componentDidMount(){
		this.setBrowserTranslation();
	}

	render() {
		const { translation } = this.state;
		return this.props.children[0]({
			translations: translations[translation],
			setTranslation: this.setTranslation
		});
	}
}

export default translationsProvider;
