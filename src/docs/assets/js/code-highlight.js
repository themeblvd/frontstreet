import hljs from 'highlight.js/lib/highlight';

// Register language syntaxes
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));

// Render code blocks with syntax highlighting.
document.querySelectorAll('pre.highlight').forEach(function(codeBlock) {
  codeBlock.innerHTML = escape(codeBlock.innerHTML);
  hljs.highlightBlock(codeBlock);
  codeBlock.classList.add('show');
});

/**
 * Escape HTML.
 *
 * @param {string} html HTML code.
 * @return {string} Escaped html.
 */
function escape(html) {
  const replace = {
    // '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
  };

  return html.replace(/[<>]/g, tag => replace[tag]);
}
