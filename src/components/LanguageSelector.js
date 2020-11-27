import React from 'react';
import ContextState from './ContextState';

export default class LanguageSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: ''
        }

        this.onSelectLanguage = this.onSelectLanguage.bind(this);
    }

    onSelectLanguage = (event, selectLanguage) => {
        this.setState({
            selectedLanguage: event.target.value
        })
        selectLanguage(event.target.value);
    }

    render() {
        return (
            <> 
                <ContextState.Consumer>
                    {(data) => {
                        return (
                            <select value={data.selectedLanguage} onChange={(event) => this.onSelectLanguage(event, data.selectLanguage)}>
                                {data.languages.map((language) => <option value={language}>{language}</option>)}         
                            </select>
                        )
                    }}      
                </ContextState.Consumer>
            </>
        );
    }
}