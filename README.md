# Randomballs
An animated area where different sizes of balls are playing randomly.

## Installation

1. Download the plugin and unzip
2. Put the css & js file in your project
3. Link the file with your page by

#### Putting at header

```
<link rel="stylesheet" href="css/randomballs.min.css">
```
#### Putting at footer
```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/randomballs.min.js"></script>
```

```
<script>
  $(document).ready(function(){
    $('.randomballs').randomballs();
  });
</script>
```

#### Default options
```
{
  colors: ["#eb4d4b", "#6ab04c", "#130f40", "#4834d4", "#f0932b", "#be2edd", "#353b48"], // list of colors
  balls: 50, // number of balls to be played
  speed: 2000, // miliseconds
}
```

## License

MIT

**Free Software**

Inspired from https://codepen.io/nashvail/pen/wpGgXO
