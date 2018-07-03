import $ from 'jquery';
import { isMobile, dom } from './utils';

/**
 * This file includes the functionality for section
 * parallax background image effects and background
 * sliders.
 *
 * By default all HTML elements with class `fs-bg-slider`
 * and `fs-bg-parallax` are automatically binded
 * with their respective effects.
 *
 * @summary  Background Effects
 *
 * @author   Jason Bobich
 * @link     http://frontstreet.io
 * @since    1.0.0
 * @module   background.js
 */
class Background {
  /**
   * Initialize the `background` component on a DOM element,
   * when binded through jQuery.
   *
   * @since 1.0.0
   *
   * @param {Object} element jQuery DOM element.
   * @param {Object} options Component options.
   */
  constructor(element, options) {
    const $element = $(element);
    const settings = $.extend({}, this.defaults, options);
    const $section = $element.closest(settings.section);

    this.slider = this.slider.bind(this);
    this.parallax = this.parallax.bind(this);
    this.parallaxCalc = this.parallaxCalc.bind(this);

    switch (settings.type) {
      case 'slider':
        this.slider($element, $section, settings);
        break;
      case 'parallax':
      default:
        this.parallax($element, $section, settings);
    }
  }

  /**
   * Default background options.
   *
   * @since 1.0.0
   *
   * @return {Object}
   */
  get defaults() {
    return {
      type: 'parallax',
      autoplay: 4000,
      section: '.fs-section, .has-bg-slider, .has-bg-parallax, .has-bg-video'
    };
  }

  /**
   * Setup a background slider.
   *
   * @since 1.0.0
   *
   * @param {Object} $element The background slider element.
   * @param {Object} $section Section containing element.
   * @param {Object} settings Current settings.
   */
  slider($slider, $section, settings) {
    var { autoplay } = settings;

    if ($slider.data('autoplay') && $slider.data('autoplay') >= 1000) {
      autoplay = $slider.data('autoplay');
    }

    /*
     * Reverse order of images so the top of stack
     * will be the first image.
     */
    $slider.find('img').each(function() {
      const $img = $(this);
      $img.addClass('fade in');
      $slider.prepend($img);
    });

    $slider.addClass('in');

    $section.find('.fs-loader').fadeOut();

    setInterval(function() {
      const $lastImg = $slider.find('img:last-child');

      $lastImg.removeClass('in');

      setTimeout(function() {
        $lastImg.prependTo($slider).addClass('in');
      }, autoplay);
    }, autoplay);
  }

  /**
   * Setup a background image parallax effect.
   *
   * @since 1.0.0
   *
   * @param {Object} $element The background element.
   * @param {Object} $section Section containing element.
   * @param {Object} settings Current settings.
   */
  parallax($figure, $section, settings) {
    const { $window } = dom;
    const { parallaxCalc } = this;
    const $img = $figure.find('img, .img');
    var parallax = null;

    /*
     * Will only calculate if all are true:
     *
     * 1. Not a true mobile device (looking at user agent).
     * 2. Window is taller than 500px.
     * 3. Window is wider than 992px.
     */
    if (!isMobile(true)) {
      // Passing `true` denotes checking viewport size.
      parallax = parallaxCalc($figure, $img);

      if (parallax) {
        $img.css('transform', 'translate3D(-50%,' + parallax + 'px, 0)');
      }
    }

    $figure.addClass('in');

    $section.find('.fs-loader').fadeOut();

    // Adjust parallax positioning if window is resized.
    $window.on('scroll resize', function() {
      /*
       * Will only calculate if all are true:
       *
       * 1. Not a true mobile device (looking at user agent).
       * 2. Window is taller than 500px.
       * 3. Window is wider than 992px.
       *
       * @see isMobile() function in init.js
       */
      if (!isMobile(true)) {
        // Passing `true` denotes checking viewport size.
        parallax = parallaxCalc($figure, $img);

        if (parallax) {
          $img.css('transform', 'translate3D(-50%,' + parallax + 'px, 0)');
        }
      }
    });
  }

  /**
   * Calculate parallax position of element.
   *
   * @since 1.0.0
   *
   * @param {Object} $figure The background element.
   * @param {Object} $img    Image to position within element.
   */
  parallaxCalc($figure, $img) {
    const { $window } = dom;

    var imgHeight = $img.height(),
      containerHeight = $figure.height() > 0 ? $figure.height() : 500,
      parallaxDist = imgHeight - containerHeight,
      bottom = $figure.offset().top + containerHeight,
      top = $figure.offset().top,
      scrollTop = $window.scrollTop(),
      windowHeight = window.innerHeight, // Using `window`, NOT `$window`; we need a fresh calculation here.
      windowBottom = scrollTop + windowHeight,
      percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);

    if (bottom > scrollTop && top < scrollTop + windowHeight) {
      return Math.round(parallaxDist * percentScrolled);
    }

    return null;
  }
}

export default Background;
