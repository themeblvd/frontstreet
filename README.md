[![Front Street Banner](https://s3-us-west-2.amazonaws.com/themeblvd-projects/frontstreet/banner.png)](http://frontstreet.io)

[Front Street](https://frontstreet.io) is a customizable front-end web framework by [Jason Bobich](https://jasonbobich.com). It can be used as a lightweight framework for base CSS styling or as a more full-featured front-end framework.

[View Demos and Docs](https://frontstreet.io)

## Getting Started

There are two basic ways to include Front Street in your project.

1. Include Front Street core only, for a lightweight base framework to build on.
2. Include the full Front Street framework, including core styles and all blocks.

### Core Styles Only

1. Download the [latest release](https://github.com/themeblvd/frontstreet/releases/latest) with pre-built assets.
2. Copy `/dist/css/frontstreet-core.min.css` to your project and include it within the `<head>` of your website.

```html
<link rel="stylesheet" href="/path/to/file/frontstreet-core.min.css" />
```

### Full Framework

1. Download the [latest release](https://github.com/themeblvd/frontstreet/releases/latest) with pre-built assets.
2. Copy `/dist/css/frontstreet.min.css` to your project and include it within the `<head>` of your website.

```html
<link rel="stylesheet" href="/path/to/file/frontstreet.min.css" />
```

3. Copy `/dist/css/frontstreet.min.js` to your project and include at the bottom of your website before the closing `</body>` tag. This script does require jQuery.

```html
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<script src="/path/to/file/frontstreet.min.js"></script>
```

4. Optional step. If you plan to use the model and slider blocks, you'll need to include Magnific Popup and Owl Carousel. Also, if you're planning to use with Font Awesome, we suggest using the JavaScript version of Font Awesome 5. Below is an example that expands on the previous step, to incorporate all of this.

```html
<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/solid.js" integrity="sha384-Z7p3uC4xXkxbK7/4keZjny0hTCWPXWfXl/mJ36+pW7ffAGnXzO7P+iCZ0mZv5Zt0" crossorigin="anonymous"></script>
<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/brands.js" integrity="sha384-ZqDZAkGUHrXxm3bvcTCmQWz4lt7QGLxzlqauKOyLwg8U0wYcYPDIIVTbZZXjbfsM" crossorigin="anonymous"></script>
<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/fontawesome.js" integrity="sha384-juNb2Ils/YfoXkciRFz//Bi34FN+KKL2AN4R/COdBOMD9/sV/UsxI6++NqifNitM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
<script src="/path/to/file/frontstreet.min.js"></script>
```

*Note: You don't need to include any CSS files for Magnific Popup or Owl Carousel; Front Street takes care of styling these, within its integration to provide a unique look to using these scripts.*

*Note: We're aware that Front Street will be used often with WordPress. And so we're using an old version of jQuery in our testing and examples because that's what WordPress is bundling.*
