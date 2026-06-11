// html_3_lessons.js
const html3_lessons = {
  version: "HTML3",
  released: "1995-1997",
  definition: "HTML 3.0 was a proposed standard that introduced many new features but was never officially adopted. HTML 3.2 was the actual W3C recommendation that standardized tables, applets, and text flow around images.",
  what_it_introduced: "Tables, applets, subscript, superscript, and improved text alignment.",
  note: "HTML 3.0 was abandoned in favor of HTML 3.2 which became the first W3C HTML recommendation in January 1997.",
  tip: "HTML 3.2 standardized tables which became the primary layout tool before CSS was widely adopted.",
  topics: [
    {
      topic: "Tables",
      elements: [
        {
          element: "<table>",
          definition: "Defines an HTML table. A table is structured with rows (<tr>), header cells (<th>), and data cells (<td>).",
          syntax: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>30</td>\n  </tr>\n</table>",
          default_attribute: "N/A",
          tip: "Use tables for tabular data only, not for page layout. Use CSS Grid or Flexbox for layout.",
          note: "Tables were heavily used for layout before CSS became widespread.",
          attributes: [
            { attribute: "border", description: "Deprecated. Sets the border width around the table.", syntax_example: "<table border=\"1\">" },
            { attribute: "cellpadding", description: "Deprecated. Sets the space between cell content and cell border.", syntax_example: "<table cellpadding=\"5\">" },
            { attribute: "cellspacing", description: "Deprecated. Sets the space between cells.", syntax_example: "<table cellspacing=\"0\">" },
            { attribute: "width", description: "Deprecated. Sets the width of the table.", syntax_example: "<table width=\"100%\">" },
            { attribute: "align", description: "Deprecated. Aligns the table: left, center, right.", syntax_example: "<table align=\"center\">" }
          ]
        },
        {
          element: "<tr>",
          definition: "Defines a row in an HTML table. Must be a child of <table>, <thead>, <tbody>, or <tfoot>.",
          syntax: "<tr>\n  <td>Cell 1</td>\n  <td>Cell 2</td>\n</tr>",
          default_attribute: "N/A",
          tip: "Group rows semantically using <thead>, <tbody>, and <tfoot> for better accessibility.",
          note: "Each <tr> contains one or more <td> or <th> elements.",
          attributes: [
            { attribute: "align", description: "Deprecated. Horizontal alignment of cell content: left, center, right.", syntax_example: "<tr align=\"center\">" },
            { attribute: "valign", description: "Deprecated. Vertical alignment: top, middle, bottom.", syntax_example: "<tr valign=\"top\">" }
          ]
        },
        {
          element: "<td>",
          definition: "Defines a standard data cell in an HTML table.",
          syntax: "<td>Cell content</td>",
          default_attribute: "N/A",
          tip: "Use colspan and rowspan to merge cells across columns or rows.",
          note: "<td> content is left-aligned and normal weight by default.",
          attributes: [
            { attribute: "colspan", description: "Specifies how many columns the cell should span.", syntax_example: "<td colspan=\"2\">Merged</td>" },
            { attribute: "rowspan", description: "Specifies how many rows the cell should span.", syntax_example: "<td rowspan=\"3\">Tall cell</td>" },
            { attribute: "align", description: "Deprecated. Horizontal alignment of cell content.", syntax_example: "<td align=\"center\">" },
            { attribute: "valign", description: "Deprecated. Vertical alignment of cell content.", syntax_example: "<td valign=\"top\">" },
            { attribute: "width", description: "Deprecated. Sets the width of the cell.", syntax_example: "<td width=\"200\">" }
          ]
        },
        {
          element: "<th>",
          definition: "Defines a header cell in an HTML table. Rendered bold and centered by default.",
          syntax: "<th>Column Header</th>",
          default_attribute: "N/A",
          tip: "Use the scope attribute on <th> to improve accessibility for screen readers.",
          note: "<th> cells are bold and center-aligned by default unlike <td>.",
          attributes: [
            { attribute: "colspan", description: "Specifies how many columns the header should span.", syntax_example: "<th colspan=\"3\">Full Name</th>" },
            { attribute: "rowspan", description: "Specifies how many rows the header should span.", syntax_example: "<th rowspan=\"2\">" },
            { attribute: "scope", description: "Specifies whether the header is for a row, col, rowgroup, or colgroup.", syntax_example: "<th scope=\"col\">Name</th>" }
          ]
        },
        {
          element: "<caption>",
          definition: "Defines a table caption. Must be inserted immediately after the <table> tag.",
          syntax: "<table>\n  <caption>Monthly Sales</caption>\n  ...\n</table>",
          default_attribute: "N/A",
          tip: "Always include a caption for complex tables to improve accessibility.",
          note: "The caption is displayed above the table by default.",
          attributes: [
            { attribute: "align", description: "Deprecated. Positions the caption: top, bottom, left, right.", syntax_example: "<caption align=\"bottom\">" }
          ]
        },
        {
          element: "<thead>",
          definition: "Groups the header rows of a table. Used with <tbody> and <tfoot> for semantic structure.",
          syntax: "<thead>\n  <tr><th>Name</th><th>Score</th></tr>\n</thead>",
          default_attribute: "N/A",
          tip: "Using <thead>, <tbody>, and <tfoot> allows browsers to scroll the body independently of headers.",
          note: "<thead> must appear before <tbody> and <tfoot> in the table.",
          attributes: []
        },
        {
          element: "<tbody>",
          definition: "Groups the body rows of a table. Contains the main data rows.",
          syntax: "<tbody>\n  <tr><td>Alice</td><td>95</td></tr>\n</tbody>",
          default_attribute: "N/A",
          tip: "Browsers implicitly add <tbody> even if not written. It is best practice to include it explicitly.",
          note: "A table can have multiple <tbody> elements to group rows.",
          attributes: []
        },
        {
          element: "<tfoot>",
          definition: "Groups the footer rows of a table. Often used for totals or summary rows.",
          syntax: "<tfoot>\n  <tr><td>Total</td><td>190</td></tr>\n</tfoot>",
          default_attribute: "N/A",
          tip: "Place <tfoot> before <tbody> in source code — browsers will still render it at the bottom.",
          note: "Some browsers render <tfoot> at the bottom of the table even when defined before <tbody>.",
          attributes: []
        },
        {
          element: "<col>",
          definition: "Specifies column properties for each column within a <colgroup> element.",
          syntax: "<colgroup>\n  <col style=\"background-color:yellow\">\n  <col style=\"background-color:cyan\">\n</colgroup>",
          default_attribute: "N/A",
          tip: "Use <col> with the span attribute to apply styles to multiple columns at once.",
          note: "<col> is a void element with no closing tag.",
          attributes: [
            { attribute: "span", description: "Specifies the number of columns the <col> element spans.", syntax_example: "<col span=\"2\">" }
          ]
        },
        {
          element: "<colgroup>",
          definition: "Specifies a group of one or more columns in a table for formatting.",
          syntax: "<colgroup>\n  <col span=\"2\" style=\"background-color:lightblue\">\n</colgroup>",
          default_attribute: "N/A",
          tip: "Use <colgroup> to apply consistent styling to entire columns without styling each cell.",
          note: "<colgroup> must be a child of <table> and appear before <thead>, <tbody>, and <tfoot>.",
          attributes: [
            { attribute: "span", description: "Sets the number of columns the colgroup spans.", syntax_example: "<colgroup span=\"3\">" }
          ]
        }
      ]
    },
    {
      topic: "Text & Formatting",
      elements: [
        {
          element: "<sup>",
          definition: "Defines superscript text. Appears half a character above the normal line.",
          syntax: "E = mc<sup>2</sup>",
          default_attribute: "N/A",
          tip: "Use <sup> for mathematical exponents and footnote references.",
          note: "Superscript text is displayed with a smaller font size by default.",
          attributes: []
        },
        {
          element: "<sub>",
          definition: "Defines subscript text. Appears half a character below the normal line.",
          syntax: "H<sub>2</sub>O",
          default_attribute: "N/A",
          tip: "Use <sub> for chemical formulas and mathematical notation.",
          note: "Subscript text is displayed with a smaller font size by default.",
          attributes: []
        },
        {
          element: "<font>",
          definition: "Deprecated. Defined font size, color, and typeface for text.",
          syntax: "<font size=\"4\" color=\"red\">Text</font>",
          default_attribute: "N/A",
          tip: "Never use <font> in modern HTML. Use CSS font properties instead.",
          note: "The <font> element was deprecated in HTML 4 and removed in HTML5.",
          attributes: [
            { attribute: "size", description: "Deprecated. Sets font size 1-7.", syntax_example: "<font size=\"3\">" },
            { attribute: "color", description: "Deprecated. Sets the font color.", syntax_example: "<font color=\"blue\">" },
            { attribute: "face", description: "Deprecated. Sets the font family.", syntax_example: "<font face=\"Arial\">" }
          ]
        },
        {
          element: "<big>",
          definition: "Deprecated. Renders text in a larger font size than surrounding text.",
          syntax: "<big>Larger text</big>",
          default_attribute: "N/A",
          tip: "Use CSS font-size instead of <big>.",
          note: "Deprecated in HTML5. Use CSS for font sizing.",
          attributes: []
        },
        {
          element: "<small>",
          definition: "Renders text in a smaller font. In HTML5 it represents side comments or fine print.",
          syntax: "<small>Fine print text</small>",
          default_attribute: "N/A",
          tip: "Use <small> for legal disclaimers, copyright notices, and fine print.",
          note: "Unlike <big>, <small> was retained in HTML5 with semantic meaning.",
          attributes: []
        },
        {
          element: "<s>",
          definition: "Renders text with a strikethrough. Indicates content that is no longer accurate or relevant.",
          syntax: "<s>Old price: $20</s>",
          default_attribute: "N/A",
          tip: "Use <s> for content that is outdated but retained for reference. Use <del> for edits.",
          note: "<s> is different from <del>. Use <del> to mark deleted content in edits.",
          attributes: []
        },
        {
          element: "<u>",
          definition: "Renders text with an underline. In HTML5 represents unarticulated annotation.",
          syntax: "<u>Underlined text</u>",
          default_attribute: "N/A",
          tip: "Avoid using <u> for styling — it can be confused with hyperlinks. Use CSS text-decoration instead.",
          note: "In HTML5, <u> was redefined to represent text with a non-textual annotation.",
          attributes: []
        },
        {
          element: "<center>",
          definition: "Deprecated. Centers block-level content horizontally.",
          syntax: "<center>Centered content</center>",
          default_attribute: "N/A",
          tip: "Use CSS text-align: center or margin: 0 auto instead.",
          note: "Deprecated in HTML 4.01 and removed in HTML5.",
          attributes: []
        }
      ]
    },
    {
      topic: "Scripting",
      elements: [
        {
          element: "<script>",
          definition: "Embeds or references executable JavaScript code in an HTML document.",
          syntax: "<script>\n  alert('Hello!');\n</script>",
          default_attribute: "type=\"text/javascript\"",
          tip: "Place <script> tags before </body> to avoid blocking page rendering.",
          note: "The type attribute defaults to text/javascript and can usually be omitted in HTML5.",
          attributes: [
            { attribute: "src", description: "Specifies the URL of an external script file.", syntax_example: "<script src=\"app.js\"></script>" },
            { attribute: "type", description: "Specifies the MIME type of the script.", syntax_example: "<script type=\"text/javascript\">" },
            { attribute: "async", description: "Loads the script asynchronously without blocking HTML parsing.", syntax_example: "<script async src=\"analytics.js\">" },
            { attribute: "defer", description: "Defers script execution until the document has been fully parsed.", syntax_example: "<script defer src=\"app.js\">" }
          ]
        },
        {
          element: "<noscript>",
          definition: "Defines content to be displayed when the browser does not support JavaScript or has it disabled.",
          syntax: "<noscript>Please enable JavaScript.</noscript>",
          default_attribute: "N/A",
          tip: "Always provide a <noscript> fallback for critical functionality that relies on JavaScript.",
          note: "<noscript> can contain any HTML elements that are valid in the body.",
          attributes: []
        }
      ]
    },
    {
      topic: "Document Structure",
      elements: [
        {
          element: "<div>",
          definition: "Defines a generic block-level container for grouping and styling content.",
          syntax: "<div class=\"container\">\n  <p>Content here</p>\n</div>",
          default_attribute: "N/A",
          tip: "Use semantic HTML5 elements like <section>, <article>, and <nav> instead of divs where appropriate.",
          note: "<div> has no semantic meaning. It is purely a structural container.",
          attributes: [
            { attribute: "id", description: "Assigns a unique identifier to the element.", syntax_example: "<div id=\"main-content\">" },
            { attribute: "class", description: "Assigns one or more CSS class names to the element.", syntax_example: "<div class=\"card highlight\">" },
            { attribute: "style", description: "Applies inline CSS styles directly to the element.", syntax_example: "<div style=\"color:red\">" }
          ]
        },
        {
          element: "<span>",
          definition: "Defines a generic inline container for text or other inline elements.",
          syntax: "<p>This is <span class=\"highlight\">important</span> text.</p>",
          default_attribute: "N/A",
          tip: "Use <span> to style or script specific words or phrases within a block of text.",
          note: "<span> has no semantic meaning. Use semantic elements where applicable.",
          attributes: [
            { attribute: "id", description: "Assigns a unique identifier.", syntax_example: "<span id=\"label\">" },
            { attribute: "class", description: "Assigns one or more class names.", syntax_example: "<span class=\"highlight\">" },
            { attribute: "style", description: "Applies inline CSS styles.", syntax_example: "<span style=\"color:blue\">" }
          ]
        }
      ]
    }
  ]
};
