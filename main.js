const main = document.createElement('main');
const heading = document.createElement('h1');
const leftSection = document.createElement('section');
const rightSection = document.createElement('section');
const stringButton = document.createElement('button');
const imageButton = document.createElement('button');

heading.append('-$-COIN FLIPPER-$-');
stringButton.append('Display 20 Flips');
imageButton.append('Display 20 Images');

leftSection.append(stringButton);
rightSection.append(imageButton);
main.append(leftSection);
main.append(rightSection);
document.body.prepend(main);
document.body.prepend(heading);

let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round(Math.random());
    },//end flip
    toString: function() {
        return this.state ? 'HEADS' : 'TAILS';
    },//end toString
    toHTML: function() {
        let image = document.createElement('img');
        if(this.state) {
            image.src = './images/heads.png';
            image.alt = 'heads';
        } else {
            image.src = './images/tails.png';
            image.alt = 'tails'
        }//end if/else
        return image;
    }//end toHTML
};//end coin

stringButton.addEventListener('click', () => {
    leftSection.innerHTML = '';
    leftSection.append(stringButton);
    for(let i = 0; i < 20; i++) {
        let div = document.createElement('div');
        coin.flip();
        div.append(coin.toString());
        leftSection.append(div);
    }//end for
});//end stringButton click

imageButton.addEventListener('click', () => {
    rightSection.innerHTML = '';
    rightSection.append(imageButton);
    for(let i = 0; i < 20; i++) {
        coin.flip();
        rightSection.append(coin.toHTML());
    }//end for
});//end imageButton click