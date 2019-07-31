# react-game

## About 

This React.js project is a Looney Tunes themed point and click game. The challenge for the user is to remember the characters which they have already selected, and to accrue as many points as they can without double clicking on a character. 

## How It Works!

Upon visiting the site the user will begin with a score and top score of 0. They will also be prompted to begin by selecting a character.

![page load pic](https://github.com/jvalentine1/react-game/blob/master/images/landing-screenshot.png)

They will then begin selecting characters. Each time a character that has not been selected already, is clicked, the application will shuffle the characters into random order and render them to the page. This makes it challenging for the user to remember which charecters have been selected.

![character select gif](https://github.com/jvalentine1/react-game/blob/master/images/clicky-game-select-gif.gif)

The random character generation is accomplished by importing a json folder of images. Upon load of the page via componentDidMount, and upon click of an image via an event listener, the images are added to an empty stateful array using this function.   *index.js located in src/components/container*

```javascript 
    var currentIndex = Images.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = Images[currentIndex];
            Images[currentIndex] = Images[randomIndex];
            Images[randomIndex] = temporaryValue;
        }

        this.setState({ picsRandom: Images });
```

If the user selects a character more than once, they will be notified that they have lost. Their current score will be reset and a new top score will be set, provided the current score exceeds their last top score. 

![game loss gif](https://github.com/jvalentine1/react-game/blob/master/images/clicky-loss-gif.gif)

The application determines whether or not a character has already been clicked by first setting an empty stateful array. Every image has a corresponding id within the json folder that is set as an attribute upon render. When an image is clicked, the specific id for that image is pushed to the array, then a callback function is initialized within a conditional statemant to determine whether or not there are any matching id's within the array.   *index.js located in src/components/container*

```javascript 
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
```

### Enjoy!
