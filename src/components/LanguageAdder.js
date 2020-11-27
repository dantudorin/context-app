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
            language: event.target.value,
        })
    }

    onFormSubmit = (event, addLanguage) => {
        event.preventDefault();
        addLanguage(this.state.language) === 'exists' 
        ? this.setState({
            error: true
        })
        : this.setState({
            error : false
        })
    }

    render() {

        return (
            <ContextState.Consumer>
                {({ addLanguage }) => {
                    return (
                        <React.Fragment>
                            <form onSubmit={(event) => this.onFormSubmit(event, addLanguage)}>
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