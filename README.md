[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">
    <img src="https://icon-library.com/images/gallery-icon/gallery-icon-5.jpg" alt="Logo" width="100" height="100">

<h3 align="center"><strong>Random Image App</strong></h3>
<p align="center">
An app that displays a bounch of random images as long as you scroll down.<br />
<a href="https://github.com/F1NH4WK/RandomImageApp"><strong>⇐ Explore the Docs ⇒</strong></a>
<br />
<br />
<a href="https://github.com/F1NH4WK/RandomImageApp/issues">Report Bug</a>
·
<a href="https://github.com/F1NH4WK/RandomImageApp/issues">Request a Feature</a>
</p>
</div>


## What's the prupose of this project?
I made this simple app by aiming to improve my mobile app development skills with React Native.

## Screenshots and GIFs
![](https://giphy.com/gifs/MRucvAKcCONhIER65L)

## How it works?
By using <a href = "https://picsum.photos">**Lorem Picsum**</a> API to provide the images, the process become easy.

I created a **state** which receives an array with random numbers between 0 and 500, these are used in **Lorem Picsum**'s url to generate random images.
You can find it in <a href = "App.js">**App.js**</a>, exactly as here:
```js
<Image 
  source={{uri: `https://picsum.photos/340/280?random=` + item}} 
  style = {{...styles.imageStyle, width: width-40}}
/>
```

To make the images appear whenever the user get in the end of Flatlist is in following code:
```js
<FlatList
 renderItem={(item) => generateImage(item.item)}
 data = {image}
 onEndReached = {() => setImage([...image, Math.random() * 500])}
 showsVerticalScrollIndicator = {false}>
/>
```


[issues-shield]: https://img.shields.io/github/issues/F1NH4WK/RandomImageApp.svg?style=for-the-badge
[issues-url]: https://github.com/F1NH4WK/RandomImageApp/issues
[license-shield]: https://img.shields.io/github/license/F1NH4WK/RandomImageApp.svg?style=for-the-badge
[license-url]: https://github.com/F1NH4WK/RandomImageApp/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/finhawk
