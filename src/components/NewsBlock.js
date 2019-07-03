import React from 'react';
import { ajaxRequest } from '../utils/ajaxRequest';

class NewsBlock extends React.Component {
    constructor(props) {
        super(props);
        this.printCol = this.printCol.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData(response) {
        for (const newBlock of response) {
            document.getElementsByClassName('jm-container')[0].insertAdjacentHTML('beforeend', this.printCol(newBlock));
        }
    }

    printCol(data) {
        return `
            <div class="jm-col">
                <a href="${data.url}" target="_blank">
                    <div class="news-title">
                        <h1>${data.title}</h1>
                    </div>
                    <div class="news-image">
                        <img src="${data.image}">
                    </div>
                </a>
            </div>
        `;
    }

    componentDidMount() {
        ajaxRequest('GET', 'https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2', this.getData);
    }

    render() {
        return(
            <div className="jm-container"></div>
        );
    }
}
export default NewsBlock;