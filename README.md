[![Front Street Banner](https://s3-us-west-2.amazonaws.com/themeblvd-projects/frontstreet/banner.png)](http://frontstreet.io)

[Front Street](http://frontstreet.io) is a customizable front-end web framework by [Jason Bobich](https://jasonbobich.com). It can be used as a lightweight framework for base CSS styling or as a more full-featured front-end framework.

[View Demos and Docs](http://frontstreet.io)

## Getting Started

There are few ways to include Front Street in your project.

1. Include pre-compiled Front Street core only, for a lightweight base framework to build on.
2. Include the full, pre-compiled Front Street framework, including core styles and all blocks.
3. Create a custom build with NPM to include.

### Method 1: Core Styles Only

Download the [latest release](https://github.com/themeblvd/frontstreet/releases/latest) with pre-built assets.
Copy `/dist/css/frontstreet-core.min.css` to your project and include it within the `<head>` of your website.

```html
<link rel="stylesheet" href="/path/to/file/frontstreet-core.min.css" />
```

### Method 2: Full Framework

Download the [latest release](https://github.com/themeblvd/frontstreet/releases/latest) with pre-built assets.

Copy `/dist/css/frontstreet.min.css` to your project and include it within the `<head>` of your website.

```html
<link rel="stylesheet" href="/path/to/file/frontstreet.min.css" />
```

Copy `/dist/css/frontstreet.min.js` to your project and include at the bottom of your website before the closing `</body>` tag. This script does require jQuery.

```html
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<script src="/path/to/file/frontstreet.min.js"></script>
```

*Note: We're aware that Front Street will be used often with WordPress. And so we're using an old version of jQuery in our testing and examples because that's what WordPress is bundling.*

Optional step. If you plan to use the model and slider blocks, you'll need to include Magnific Popup and Owl Carousel. Also, if you're planning to use with Font Awesome, we suggest using the JavaScript version of Font Awesome 5. Below is an example that expands on the previous step, to incorporate all of this.

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

### Method 3: Custom Build With NPM

In your project, install the NPM package.

```
npm install frontstreet --save-dev
```

#### Full Default JavaScript Build

If you're looking to just include the full Front Street distributed JavaScript into your bundle, that's the NPM package's main file.

```javascript
import 'frontstreet';
```

#### Custom JavaScript Build

Or, using the Front Street API, you can include only the blocks you need to build a custom version. Here's an example:

```javascript
import $ from 'jquery';

import FrontStreet from 'frontstreet/src/js/FrontStreet';
import Background from 'frontstreet/src/js/blocks/Background';
import Tooltip from 'frontstreet/src/js/blocks/Tooltip';

import 'frontstreet/src/scss/frontstreet-core.scss';
import 'frontstreet/src/scss/blocks/_background.scss';
import 'frontstreet/src/scss/blocks/_tooltip.scss';

const frontstreet = new FrontStreet();

frontstreet.add('background', Background);
frontstreet.add('tooltip', Tooltip);
frontstreet.init(); // Add blocks to "frontstreet" jQuery namespace.

$(document).ready(function() {
  $('.my-background').frontstreet('background');
  $('.my-tooltip').frontstreet('tooltip');
});
```

*Note: Front Street's JavaScript source files utilize ES modules (ESM). So, for custom bundling, you'll need to make sure to use a bundling tool that supports this, like [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/guide/en).*

#### Custom CSS Build

The previous example incorporated the styling by importing through the JavaScript. This is a common approach if you're using a tool like Webpack, where you'd have a loader set up to handle those files. But what if you're working with Sass in some other way to compile out a custom build of the Front Street's CSS?

Start by creating an `.scss` file for your custom variables, which can override any variables in Front Street.

```scss
$fs-font-family-base: "My Font";
$fs-font-size-base: 18px;

$fs-link-color: #000;
$fs-link-color-hover: #000;

$fs-branding-colors: (
  primary: (
    base: #000,
    contrast: #fff
  ),
  secondary: (
    base: #000,
    contrast: #fff
  )
);
```

And then the following is an example of implementing the full Front Street framework into a custom `.scss` file.

```scss
// Variable Overrides
@import 'path/to/my-variables.scss';

// Include Framework
@import '~frontstreet/src/scss/frontstreet.scss';
```

The above example can be modified to also build out a CSS file with only what you need. Instead of including the entire framework, you can include the framework core and then add only the blocks you need.

```scss
// Variable Overrides
@import 'path/to/my-variables.scss';

// Include Framework
@import '~frontstreet/src/scss/frontstreet-core.scss';
@import '~frontstreet/src/scss/blocks/alert';
@import '~frontstreet/src/scss/blocks/breadcrumb';
// ...
```

*Note: In the sample code above, we're using the `~` to reference a package from `node_modules`. Check out [node-sass-tilde-importer](https://www.npmjs.com/package/node-sass-tilde-importer).*


## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 11+ ✔ | 9.1+ ✔ | Latest ✔ |

## Creator

**Jason Bobich**

* <http://jasonbobich.com>
* <https://twitter.com/jasonbobich>
* <http://themeblvd.com>
* <http://wpjumpstart.com>
