import React, { Component } from 'react';

export default class Work extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="work work--index">
                <h1 className="title">Work</h1>
                <nav className="module">
                    <ul className="pagination">
                        <li className="pagination__item pagination__item--disabled">
                            <a className="icon-angle-left"></a>
                        </li>

                        <li className="pagination__item pagination__item--active">
                            <a>1</a>
                        </li>
                        <li className="pagination__item">
                            <a href="#work?page=2">2</a>
                        </li>

                        <li className="pagination__item">
                            <a href="#work?page=2" className="icon-angle-right"></a>
                        </li>
                    </ul>
                </nav>
            </main>
        )
    }
}