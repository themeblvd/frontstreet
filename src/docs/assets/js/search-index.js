const searchIndex = [
  //
  // About
  //

  {
    title: 'Installation',
    url: 'install.html',
    tags: ['install', 'start']
  },
  {
    title: 'Customization',
    url: 'customize.html',
    tags: ['customize', 'override']
  },
  {
    title: 'Plugins',
    url: 'plugins.html',
    tags: [
      'third-party',
      'scripts',
      'owl-carousel',
      'font-awesome',
      'magnific-popup',
      'icons',
      'modal',
      'slider'
    ]
  },
  {
    title: 'JavaScript',
    url: 'javascript.html',
    tags: ['script', 'js', 'install', 'start']
  },

  //
  // Core > Colors
  //

  {
    title: 'Colors',
    url: 'colors.html',
    tags: ['branding', 'contextual', 'color']
  },
  {
    title: 'Colors: Branding Colors',
    url: 'colors.html#branding',
    tags: ['primary', 'secondary']
  },
  {
    title: 'Colors: Contextual Colors',
    url: 'colors.html#contextual',
    tags: ['info', 'warning', 'danger', 'success']
  },

  //
  // Core > Typography
  //

  {
    title: 'Typography',
    url: 'type.html',
    tags: ['text', 'font', 'headings', 'basic']
  },
  {
    title: 'Typography: Headings',
    url: 'type.html#headings',
    tags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'underline']
  },
  {
    title: 'Typography: Lead Text',
    url: 'type.html#lead',
    tags: ['big', 'large', 'bold']
  },
  {
    title: 'Typography: Inline Text Elements',
    url: 'type.html#inline-text-elem',
    tags: [
      '<del>',
      'strike-through',
      '<s>',
      '<ins>',
      'underline',
      '<u>',
      '<small>',
      '<strong>',
      '<b>',
      'bold',
      '<em>',
      'italic'
    ]
  },
  {
    title: 'Typography: Misc Elements',
    url: 'type.html#misc',
    tags: ['abbreviations', 'address', '<abbr>']
  },
  {
    title: 'Typography: Code Elements',
    url: 'type.html#code-elements',
    tags: ['<pre>', '<code>', 'user-input', '<kbd>', 'variables', '<var>', '<samp>']
  },

  //
  // Core > Grid
  //

  {
    title: 'Grid System',
    url: 'grid.html',
    tags: ['grid', 'columns', 'rows', 'flexbox']
  },
  {
    title: 'Grid System: Responsiveness',
    url: 'grid.html#responsiveness',
    tags: ['breakpoint', 'viewport', 'mobile', 'collapse']
  },
  {
    title: 'Grid System: Column Widths',
    url: 'grid.html#widths',
    tags: ['10', '12', 'fraction', 'percent']
  },
  {
    title: 'Grid System: Row Containers',
    url: 'grid.html#row-container',
    tags: ['padding', 'margin']
  },
  {
    title: 'Grid System: No Gutters',
    url: 'grid.html#no-gutters',
    tags: ['padding', 'margin']
  },
  {
    title: 'Grid System: Nested Columns',
    url: 'grid.html#nested',
    tags: ['within', 'inside']
  },
  {
    title: 'Grid System: Columns With Backgrounds',
    url: 'grid.html#has-bg',
    tags: ['bg']
  },
  {
    title: 'Grid System: Column Alignment',
    url: 'grid.html#alignment',
    tags: ['vertical', 'horizontal', 'left', 'right', 'top', 'bottom', 'middle', 'center']
  },
  {
    title: 'Grid System: Column Ordering',
    url: 'grid.html#order',
    tags: ['reverse', 'first', 'last']
  },
  {
    title: 'Grid System: Column Offsetting',
    url: 'grid.html#offset',
    tags: ['shift', 'move', 'space']
  },

  //
  // Core > Media
  //

  {
    title: 'Media',
    url: 'media.html',
    tags: ['photo', 'picture', 'movie', 'iframe']
  },
  {
    title: 'Media: Responsive Images',
    url: 'media.html#responsive-images',
    tags: ['fluid', 'mobile', 'photo', 'picture']
  },
  {
    title: 'Media: Responsive Videos',
    url: 'media.html#responsive-video',
    tags: ['fluid', 'mobile', 'movie', 'iframe', 'youtube', 'vimeo']
  },
  {
    title: 'Media: Image and Video Captions',
    url: 'media.html#media-captions',
    tags: ['description', 'explain']
  },
  {
    title: 'Media: Image Alignment',
    url: 'media.html#image-alignment',
    tags: ['left', 'right', 'top', 'bottom', 'middle', 'center']
  },
  {
    title: 'Media: Galleries',
    url: 'media.html#gallery',
    tags: ['gallery', 'photo', 'picture', 'grid']
  },

  //
  // Core > Forms
  //

  {
    title: 'Forms',
    url: 'forms.html',
    tags: []
  },
  {
    title: 'Forms: Text Inputs',
    url: 'forms.html#text-inputs',
    tags: []
  },
  {
    title: 'Forms: Number Inputs',
    url: 'forms.html#number-inputs',
    tags: ['int']
  },
  {
    title: 'Forms: Text Areas',
    url: 'forms.html#textarea',
    tags: []
  },
  {
    title: 'Forms: Select Menus',
    url: 'forms.html#select',
    tags: ['jump', 'menu']
  },
  {
    title: 'Forms: Checkboxes',
    url: 'forms.html#checkboxes',
    tags: ['group', 'multiple']
  },
  {
    title: 'Forms: Radio Buttons',
    url: 'forms.html#radios',
    tags: ['group']
  },
  {
    title: 'Forms: Field Sizing',
    url: 'forms.html#radios',
    tags: ['big', 'small', 'size', 'input', 'select']
  },
  {
    title: 'Forms: Field Groups',
    url: 'forms.html#field-groups',
    tags: ['input', 'button']
  },
  {
    title: 'Forms: Field Icons',
    url: 'forms.html#field-icons',
    tags: ['font-awesome', 'input', 'select']
  },
  {
    title: 'Forms: Required Fields',
    url: 'forms.html#required',
    tags: ['asterix', 'label']
  },
  {
    title: 'Forms: Help Text',
    url: 'forms.html#help-text',
    tags: ['label']
  },
  {
    title: 'Forms: Fieldsets and Legends',
    url: 'forms.html#fieldset',
    tags: []
  },
  {
    title: 'Forms: Form Layout',
    url: 'forms.html#fieldset',
    tags: ['example', 'grid']
  },

  //
  // Core > Buttons
  //

  {
    title: 'Buttons',
    url: 'buttons.html',
    tags: ['submit', 'btn']
  },
  {
    title: 'Buttons: Transparent Buttons',
    url: 'buttons.html#transparent',
    tags: ['outline']
  },
  {
    title: 'Buttons: Button Sizes',
    url: 'buttons.html#sizes',
    tags: ['small', 'large']
  },
  {
    title: 'Buttons: Button Colors',
    url: 'buttons.html#colors',
    tags: []
  },
  {
    title: 'Buttons: Block-Level Buttons',
    url: 'buttons.html#block',
    tags: ['full-width', '100%']
  },
  {
    title: 'Buttons: Buttons With Icons',
    url: 'buttons.html#icons',
    tags: ['font-awesome']
  },
  {
    title: 'Buttons: Button Groups',
    url: 'buttons.html#groups',
    tags: []
  },

  //
  // Core > Lists
  //

  {
    title: 'Lists',
    url: 'buttons.html#menu-buttons',
    tags: []
  },
  {
    title: 'Lists: Unordered List',
    url: 'buttons.html#list-unordered',
    tags: []
  },
  {
    title: 'Lists: Ordered List',
    url: 'buttons.html#list-ordered',
    tags: []
  },
  {
    title: 'Lists: Unstyled List',
    url: 'buttons.html#list-unstyled',
    tags: []
  },
  {
    title: 'Lists: Icon List',
    url: 'buttons.html#list-icon',
    tags: ['font-awesome']
  },
  {
    title: 'Lists: Inline List',
    url: 'buttons.html#list-inline',
    tags: []
  },
  {
    title: 'Lists: Inline List With Icons',
    url: 'buttons.html#list-inline-icon',
    tags: ['font-awesome']
  },

  //
  // Core > Quotes
  //

  {
    title: 'Quotes',
    url: 'quotes.html',
    tags: ['blockquote']
  },
  {
    title: 'Quotes: Blockquote With Paragraphs',
    url: 'quotes.html#paragraphs',
    tags: []
  },
  {
    title: 'Quotes: Blockquote With Citations',
    url: 'quotes.html#cite',
    tags: ['cite', 'footer']
  },
  {
    title: 'Quotes: Quotes Aligned Left',
    url: 'quotes.html#quote-align-left',
    tags: ['float', 'pull']
  },
  {
    title: 'Quotes: Quotes Aligned Right',
    url: 'quotes.html#quote-align-right',
    tags: ['float', 'pull']
  },

  //
  // Core > Tables
  //

  {
    title: 'Tables',
    url: 'tables.html',
    tags: ['table', 'row', 'tr', 'td']
  },
  {
    title: 'Tables: Striped Tables',
    url: 'tables.html#striped',
    tags: []
  },
  {
    title: 'Tables: Bordered Tables',
    url: 'tables.html#bordered',
    tags: []
  },
  {
    title: 'Tables: Hover Rows',
    url: 'tables.html#table-hover',
    tags: []
  },
  {
    title: 'Tables: Condensed Tables',
    url: 'tables.html#condensed',
    tags: ['small']
  },
  {
    title: 'Tables: Contextual Classes',
    url: 'tables.html#contextual',
    tags: ['colors']
  },
  {
    title: 'Tables: Color Library',
    url: 'tables.html#color-library',
    tags: []
  },
  {
    title: 'Tables: Inverse Tables',
    url: 'tables.html#inverse',
    tags: ['inverted', 'dark']
  },
  {
    title: 'Tables: Responsive Tables',
    url: 'tables.html#responsive',
    tags: ['fluid', 'mobile']
  },

  //
  // Utilities > Core Utilities
  //

  {
    title: 'Core Utilities',
    url: 'utilities.html',
    tags: []
  },
  {
    title: 'Core Utilities: Center Blocks',
    url: 'utilities.html#align-center',
    tags: []
  },
  {
    title: 'Core Utilities: Floats',
    url: 'utilities.html#floats',
    tags: ['pull', 'align', 'left', 'right']
  },
  {
    title: 'Core Utilities: Clear Fix',
    url: 'utilities.html#clearfix',
    tags: ['float']
  },
  {
    title: 'Core Utilities: Toggle Display',
    url: 'utilities.html#display',
    tags: ['show', 'hide']
  },
  {
    title: 'Core Utilities: Toggle Visibility',
    url: 'utilities.html#visibility',
    tags: ['visible', 'invisible', 'show', 'hide']
  },
  {
    title: 'Core Utilities: Text Alignment',
    url: 'utilities.html#text-align',
    tags: ['align', 'left', 'right', 'center', 'justify', 'wrap']
  },
  {
    title: 'Core Utilities: Text Transformation',
    url: 'utilities.html#text-transform',
    tags: ['uppercase', 'lowercase', 'capitalize']
  },
  {
    title: 'Core Utilities: Image Replacement',
    url: 'utilities.html#text-hide',
    tags: ['hide', 'text', 'logo']
  },
  {
    title: 'Core Utilities: Screen Reader Text',
    url: 'utilities.html#sr-only',
    tags: ['accessibility']
  },
  {
    title: 'Core Utilities: Responsive Display',
    url: 'utilities.html#responsive-utilities',
    tags: ['fluid', 'mobile', 'display', 'hide', 'show']
  },

  //
  // Blocks > Alert
  //

  {
    title: 'Alert',
    url: 'alert.html',
    tags: ['contextual', 'info', 'warning', 'danger', 'success', 'message']
  },

  //
  // Blocks > Backgrounds
  //

  {
    title: 'Backgrounds',
    url: 'backgrounds.html',
    tags: ['sections', 'hero', 'jumbotron']
  },
  {
    title: 'Backgrounds: Background Shade',
    url: 'backgrounds.html#bg-shade',
    tags: ['sections', 'overlay', 'color', 'transparent', 'opacity', 'hero', 'jumbotron']
  },
  {
    title: 'Backgrounds: Background Slider',
    url: 'backgrounds.html#bg-slider',
    tags: ['sections', 'slideshow', 'carousel', 'image', 'photo', 'picture', 'hero', 'jumbotron']
  },
  {
    title: 'Backgrounds: Background Parallax',
    url: 'backgrounds.html#bg-parallax',
    tags: ['sections', 'image', 'photo', 'picture', 'hero', 'jumbotron']
  },

  //
  // Blocks > Breadcrumbs
  //

  {
    title: 'Breadcrumbs',
    url: 'breadcrumb.html',
    tags: ['navigation', 'menu']
  },

  //
  // Blocks > Button
  //

  {
    title: 'Button: Close Buttons',
    url: 'button.html#close-buttons',
    tags: ['vector', 'x']
  },
  {
    title: 'Buttons: Play Button',
    url: 'button.html#play-buttons',
    tags: ['vector', 'video', 'movie']
  },
  {
    title: 'Buttons: Menu Toggle Buttons',
    url: 'button.html#menu-buttons',
    tags: ['hamburger']
  },

  //
  // Blocks > Dividers
  //

  {
    title: 'Divider',
    url: 'divider.html',
    tags: ['<hr>', 'border']
  },

  //
  // Blocks > Labels
  //

  {
    title: 'Label',
    url: 'label.html',
    tags: ['label', 'inline', 'info']
  },

  //
  // Blocks > Loader
  //

  {
    title: 'Loader',
    url: 'loader.html',
    tags: ['gif', 'spinner', 'animate', 'preload']
  },

  //
  // Blocks > Modals
  //

  {
    title: 'Modal',
    url: 'modal.html',
    tags: ['lightbox', 'popup']
  },
  {
    title: 'Modal: Content Modals',
    url: 'modal.html#content-modals',
    tags: ['lightbox', 'popup', 'inline']
  },
  {
    title: 'Modal: Image Modals',
    url: 'modal.html#image-modals',
    tags: ['lightbox', 'popup', 'photo', 'picture']
  },
  {
    title: 'Modal: Video Modals',
    url: 'modal.html#iframe-modals',
    tags: ['lightbox', 'popup', 'iframe', 'youtube', 'vimeo']
  },
  {
    title: 'Modal: Gallery Modals',
    url: 'modal.html#gallery-modals',
    tags: ['lightbox', 'popup']
  },
  {
    title: 'Modal: Search Modal',
    url: 'modal.html#search-modal',
    tags: ['lightbox', 'popup']
  },

  //
  // Blocks > Menu
  //

  {
    title: 'Menu',
    url: 'menu.html',
    tags: ['menu', 'button', 'dropdown', 'flyout', 'mega']
  },
  {
    title: 'Menu: Primary Menu',
    url: 'menu.html#menu-bar',
    tags: ['menu', 'button', 'mega', 'dropdown', 'flyout']
  },
  {
    title: 'Menu: Secondary Menu',
    url: 'menu.html#submenu',
    tags: ['menu', 'button', 'mega', 'dropdown', 'flyout']
  },
  {
    title: 'Menu: Tabs',
    url: 'menu.html#submenu-tabs',
    tags: ['menu', 'button', 'dropdown', 'flyout']
  },
  {
    title: 'Menu: Pills',
    url: 'menu.html#submenu-pills',
    tags: ['menu', 'button', 'dropdown', 'flyout']
  },
  {
    title: 'Menu: Responsiveness',
    url: 'menu.html#responsiveness',
    tags: ['menu', 'button', 'mobile']
  },

  //
  // Blocks > Mobile Menu
  //

  {
    title: 'Mobile Menu',
    url: 'mobile-menu.html',
    tags: ['menu', 'button', 'responsive']
  },

  //
  // Blocks > Progress Bars
  //

  {
    title: 'Progress Bar',
    url: 'progress-bar.html',
    tags: ['resume', 'status', 'feedback']
  },

  //
  // Blocks > Sliders
  //

  {
    title: 'Slider',
    url: 'slider.html',
    tags: ['owl-carousel', 'slideshow', 'carousel', 'image', 'photo', 'picture']
  },
  {
    title: 'Slider: Slider Data Attributes',
    url: 'slider.html#data-atts',
    tags: ['slideshow', 'carousel', 'options', 'atts']
  },
  {
    title: 'Slider: Simple Slider',
    url: 'slider.html#simple-slider',
    tags: ['owl-carousel', 'slideshow', 'carousel', 'image', 'photo', 'picture']
  },
  {
    title: 'Slider: Gallery Slider',
    url: 'slider.html#gallery-slider',
    tags: ['owl-carousel', 'slideshow', 'carousel', 'image', 'photo', 'picture']
  },
  {
    title: 'Slider: Block Slider',
    url: 'slider.html#block-slider',
    tags: ['owl-carousel', 'slideshow', 'carousel', 'image', 'photo', 'picture']
  },

  //
  // Blocks > Tabbed Content
  //

  {
    title: 'Tabbed Content',
    url: 'tabbed.html',
    tags: ['toggle', 'tabs']
  },

  //
  // Blocks > Testimonials
  //

  {
    title: 'Testimonial',
    url: 'testimonial.html',
    tags: ['quote', 'promote']
  },
  {
    title: 'Testimonial: Small Testimonials',
    url: 'testimonial.html#testimonial-sm',
    tags: ['quote', 'promote']
  },
  {
    title: 'Testimonial: Medium Testimonials',
    url: 'testimonial.html#testimonial-md',
    tags: ['quote', 'promote']
  },
  {
    title: 'Testimonial: Large Testimonials',
    url: 'testimonial.html#testimonial-lg',
    tags: ['quote', 'promote', 'hero', 'sections']
  },

  //
  // Blocks > Toggles
  //

  {
    title: 'Toggle',
    url: 'toggle.html',
    tags: ['toggles', 'tabs', 'accordion']
  },
  {
    title: 'Toggle: Grouped Toggles',
    url: 'toggle.html#toggle-group',
    tags: ['toggles', 'tabs', 'accordion']
  },

  //
  // Blocks > Tooltips
  //

  {
    title: 'Tooltip',
    url: 'tooltip.html',
    tags: ['label', 'help', 'title']
  },

  //
  // Blocks > Widgets
  //

  {
    title: 'Widget',
    url: 'widget.html',
    tags: ['panel', 'card', 'box', 'aside']
  },
  {
    title: 'Widget: Default Widgets',
    url: 'widget.html#default',
    tags: ['panel', 'card', 'box', 'aside']
  },
  {
    title: 'Widget: Classic Panel',
    url: 'widget.html#panel-classic',
    tags: ['panel', 'card', 'box', 'aside']
  },
  {
    title: 'Widget: Color Panel',
    url: 'widget.html#panel-color',
    tags: ['panel', 'card', 'box', 'aside']
  },
  {
    title: 'Widget: Modern Panel',
    url: 'widget.html#panel-modern',
    tags: ['panel', 'card', 'box', 'aside']
  },

  //
  // Extras > Color Library
  //

  {
    title: 'Color Library',
    url: 'color-library.html',
    tags: ['colors']
  },

  //
  // Extras > Helpers
  //

  {
    title: 'Helpers: Background Color (Light and Dark)',
    url: 'helpers.html#background-color',
    tags: []
  },
  {
    title: 'Helpers: Text Color (Light and Dark)',
    url: 'helpers.html#text-color',
    tags: []
  },
  {
    title: 'Helpers: Borders',
    url: 'helpers.html#borders',
    tags: []
  }
];

export default searchIndex;
