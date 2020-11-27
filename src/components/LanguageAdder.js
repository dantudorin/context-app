import React from 'react';
import ContextState from './ContextState';

export default class LanguageAdder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: '',
            error: false
        }

        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    onFormSubmit = (addLanguage) => {
        addLanguage(this.state.language) === 'exists' && this.setState({
            error: true
        })
    }

    render() {

        return (
            <ContextState.Consumer>
                {({ addLanguage }) => {
                    return (
                        <React.Fragment>
                            <form onSubmit={() => this.onFormSubmit(addLanguage)}>
                                <input type='text' name='language' value={this.state.language} onChange={this.onChange} />
                                <button type='submit'>Submit</button>
                            </form>
                            { this.state.error && <p>Language already there</p>}
                        </React.Fragment>
                    )
                }
            }
            </ContextState.Consumer>
        );
    }
}