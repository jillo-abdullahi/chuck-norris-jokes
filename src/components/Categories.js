import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughWink } from '@fortawesome/free-solid-svg-icons';

class Categories extends Component {

    handleCategory = (category) => {
        this.props.history.push(`/${category}/random`);
    }

    render() {
        return (
            <main>
                <h2>Choose Your poison <FontAwesomeIcon icon={faLaughWink }/></h2>
                <div className="container">
                <div className="row">
                        <div className="col s12 l4">
                            <div className="category">
                                <div className="category-inner nerdy"  onClick={() => this.handleCategory('nerdy')}>
                                    <div className="category-image">
                                        <img src="nerdy.png" alt="chuck-norris-cartoon"/>
                                    </div>
                                    <div className="category-text">
                                        <h3>Nerdy</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 l4">
                        <div className="category">
                            <div className="category-inner explicit" onClick={() => { this.handleCategory('explicit') }}>
                                <div className="category-image">
                                    <img src="explicit.png" alt="chuck-norris-cartoon"/>
                                </div>
                                <div className="category-text">
                                    <h3>Explicit</h3>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col s12 l4">
                        <div className="category">
                            <div className="category-inner random" onClick={() => { this.handleCategory('random')  }}>
                                <div className="category-image">
                                    <img src="random.png" alt="chuck-norris-cartoon"/>
                                </div>
                                <div className="category-text">
                                    <h3>Random</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}

export default Categories;