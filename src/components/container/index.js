/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Wrapper from '../body/wrapper';
import Nav from '../navbar';
import Host from '../body/playHost';
import Play from '../body/playWindow';
import Images from '../../images.json';

class Container extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        status: "Click An Image To Begin!",
        picsRandom: [],
        clicked: [],
        redId: ""
    };

componentDidMount() {
    this.randomizeImages();
}

randomizeImages = () => {
    this.setState({ redId: "" });
     
    var currentIndex = Images.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = Images[currentIndex];
        Images[currentIndex] = Images[randomIndex];
        Images[randomIndex] = temporaryValue;
    }

    this.setState({ picsRandom: Images }, () => {
        console.log(this.state.picsRandom);
    });
    
}

scoreInitialize = event => {
    const {id, name} = event.target;

    console.log(name);
    console.log(id);
    
    this.setState({ [name]: this.state.clicked.concat([id]) }, this.scoreChecker);
    
}

scoreChecker = () => {
    console.log(this.state.clicked);
    const check = this.state.clicked;
if(this.scoreCallback(check)) {
    if(this.state.topScore < this.state.score) {
        this.setState({ topScore: this.state.score });
    }
    this.setState({ 
        score: 0,
        clicked: [],
        status: "Incorrect Guess! You Lose!",
        redId:"status-host"
        });
    } else {
        this.setState({ 
            score: this.state.score + 1,
            status: "Correct Guess!"
            });
        this.randomizeImages();
    }
}

scoreCallback = check => {
    var counts = [];
    for(var i = 0; i <= check.length; i++) {
        if(counts[check[i]] === undefined) {
            counts[check[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

    render() {
        return (
            <Wrapper>
                <Nav 
                score={this.state.score}
                topScore={this.state.topScore}
                status={this.state.status}
                id={this.state.redId}
                />
                <Host>
                    {this.state.picsRandom.map(pic => {
                    return (
                      <Play 
                      key={pic.id}
                      id={pic.id}
                      src={pic.image}
                      name="clicked"
                      onClick={this.scoreInitialize}
                      />  
                    );   
                    })}
                </Host>
            </Wrapper>
        );
    }
}

export default Container;