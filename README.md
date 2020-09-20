# What is this?

You can create responsive css grid cards and layouts with minimum effort. 
Also with this package you can set the perfect shadows for your html elements.

# Installation

`npm i csslayouts`



***

You can use these modules easily with importing them.

import { shadowmaker, cardsContainerMaker, cardMaker } from 'shadowoptions';

cardsContainerMaker({
    cards_size: 'small'
});

cardMaker({
    card_shadow: true
});

***

When you are creating the html elements you can just add the class names to them.
For example:

<div class="cards">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
</div>
***

# Options 

At the moment, there are 3 supported sizes.
*cards_size* - small, medium and large 

And you are also able to add cool shadows to them with cardMaker.
*card_shadow* - boolean (Defaults to false).

![](assets/example.png)


