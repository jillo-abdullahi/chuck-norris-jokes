import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import getJoke from '../actions';


class Jokes extends React.Component {

    componentDidMount(){
        this.fetchJoke()
    }

    fetchJoke = () => {
        const { match } = this.props;
        const category = match.params.category;
        this.props.getJoke(category);
    }

    escapeHTML = (unsafeText) =>{
        return unsafeText
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace( /&gt;/g, ">" )
            .replace(/&quot;/g,'"' )
            .replace(/&#039;/g, "'");
    }

    render(){
        const { randomJoke } = this.props;

        let content;
        let decodedJoke;

        if(randomJoke.loading || !randomJoke.joke || !randomJoke.joke.value){
            content = (
                <div className="loader">
                <Loader
                    type="Puff"
                    color="#000"
                    height={80}
                    width={80}
                    />
                </div>
            );
        } else {
            const { joke } = randomJoke.joke.value;
            decodedJoke = this.escapeHTML(joke);
            content = (
                <span className="joke-content">
                    { decodedJoke }
                </span>
            )
        }

        return (
            <div className="joke">
                <div className="joke-inner">
                    <div className="joke-container row">
                        <div className="col s12 m8">
                            <div className="joke-description">
                                { content }
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="btn-container">
                                <button className="joke-button random-btn" onClick={this.fetchJoke}><FontAwesomeIcon icon={ faRandom }/>&nbsp;Random</button>
                                <div className="share"><span>Share:</span></div>
                                <button
                                    onClick={() => {window.open(`https://twitter.com/intent/tweet?text=${decodedJoke}`, "_blank")}}
                                    className="joke-button tweet-btn"><FontAwesomeIcon icon={ faTwitter }/>&nbsp;Twitter</button>
                                <button
                                    onClick={() => {window.open(`https://web.whatsapp.com/send?text=${decodedJoke}`, "_blank")}}
                                    className="joke-button whatsapp-btn"><FontAwesomeIcon icon={ faWhatsapp }/> WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    randomJoke: state
});

const mapDispatchToprops = (dispatch) => ({
    getJoke: (category) => dispatch(getJoke(category))
});

export default connect(mapStateToProps, mapDispatchToprops)(Jokes)
