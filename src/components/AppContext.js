import React from 'react';
import ContextState from './ContextState';
import LanguageAdder from './LanguageAdder';

export default class AppContext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'en',
            languages: ['en'],
            addLanguage: this.addLanguage,
            selectLanguage: this.selectLanguage
        }

        this.addLanguage = this.addLanguage.bind(this);
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    addLanguage = (language) => {
        console.log(language);
        if (!this.state.languages.includes(language)) {
            const updatedLanguages = [...this.state.languages];
            updatedLanguages.push(language);

            this.setState({
                languages: [...updatedLanguages]
            })
        } else {
            return 'exists';
        }
    }

    selectLanguage = (language) => {
        this.setState({
            selectedLanguage : language
        })
    }

    render() {
        return (
            <ContextState.Provider value={this.state}>
                <LanguageAdder />
                {this.state.languages}
            </ContextState.Provider>
        );
    }
}