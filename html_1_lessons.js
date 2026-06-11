// html_1_lessons.js
const html1_lessons = {
  version: "HTML1",
  released: "1991",
  definition: "The original version of HTML proposed by Tim Berners-Lee. It was a simple markup language with a small set of tags for creating basic hypertext documents on the web.",
  what_it_introduced: "Basic document structure, headings, paragraphs, links, and lists.",
  note: "HTML 1.0 was never formally standardized. It existed as a loose specification used by early browsers.",
  tip: "HTML1 is largely historical. All its elements are still valid in modern HTML with broader support.",
  topics: [
    {
      topic: "Document Structure",
      elements: [
        {
          element: "<html>",
          definition: "The root element of an HTML page. All other elements are descendants of this element.",
          syntax: "<html>\n  ...\n</html>",
          default_attribute: "N/A",
          tip: "Always include the lang attribute on the html element for accessibility and SEO.",
          note: "In HTML1 there was no doctype declaration requirement.",
          attributes: [
            { attribute: "lang", description: "Specifies the language of the document content.", syntax_example: "<html lang=\"en\">" }
          ]
        },
        {
          element: "<head>",
          definition: "Contains meta-information about the document such as its title, scripts, and stylesheets.",
          syntax: "<head>\n  <title>Page Title</title>\n</head>",
          default_attribute: "N/A",
          tip: "The head element is not displayed in the browser. It holds document metadata.",
          note: "Content inside <head> is not visible on the page.",
          attributes: []
        },
        {
          element: "<body>",
          definition: "Contains the visible page content — everything the user sees in the browser window.",
          syntax: "<body>\n  <p>Hello World</p>\n</body>",
          default_attribute: "N/A",
          tip: "There should only be one <body> element per HTML document.",
          note: "Background and text color attributes on body are deprecated in favor of CSS.",
          attributes: [
            { attribute: "bgcolor", description: "Deprecated. Sets background color of the page.", syntax_example: "<body bgcolor=\"#ffffff\">" },
            { attribute: "text", description: "Deprecated. Sets default text color.", syntax_example: "<body text=\"#000000\">" }
          ]
        },
        {
          element: "<title>",
          definition: "Defines the title of the document shown in the browser tab and used by search engines.",
          syntax: "<title>My Page Title</title>",
          default_attribute: "N/A",
          tip: "Keep titles concise and descriptive — under 60 characters for SEO.",
          note: "There should be only one <title> element per document, placed inside <head>.",
          attributes: []
        }
      ]
    },
    {
      topic: "Text & Formatting",
      elements: [
        {
          element: "<p>",
          definition: "Defines a paragraph of text. Browsers automatically add spacing before and after paragraphs.",
          syntax: "<p>This is a paragraph.</p>",
          default_attribute: "N/A",
          tip: "Do not use <p> tags just for spacing — use CSS margin instead.",
          note: "Paragraphs are block-level elements.",
          attributes: [
            { attribute: "align", description: "Deprecated. Aligns text: left, right, center, justify.", syntax_example: "<p align=\"center\">Text</p>" }
          ]
        },
        {
          element: "<b>",
          definition: "Makes text bold. Used for stylistic purposes without implying extra importance.",
          syntax: "<b>Bold text</b>",
          default_attribute: "N/A",
          tip: "Use <strong> instead of <b> when the text has semantic importance.",
          note: "<b> is a presentational element. <strong> carries meaning.",
          attributes: []
        },
        {
          element: "<i>",
          definition: "Renders text in italic style. Used for stylistic offset without implying emphasis.",
          syntax: "<i>Italic text</i>",
          default_attribute: "N/A",
          tip: "Use <em> instead of <i> when you want to indicate emphasis.",
          note: "<i> is presentational. <em> carries semantic emphasis.",
          attributes: []
        },
        {
          element: "<br>",
          definition: "Inserts a single line break. It is a void element with no closing tag.",
          syntax: "Line one<br>Line two",
          default_attribute: "N/A",
          tip: "Do not use <br> for spacing between elements. Use CSS margin or padding.",
          note: "<br> is a void element — it has no closing tag.",
          attributes: []
        },
        {
          element: "<hr>",
          definition: "Represents a thematic break between content. Renders as a horizontal rule.",
          syntax: "<hr>",
          default_attribute: "N/A",
          tip: "Use <hr> to separate sections of content, not just for visual decoration.",
          note: "In HTML5, <hr> is defined as a thematic break, not just a visual line.",
          attributes: [
            { attribute: "size", description: "Deprecated. Specifies the height of the line in pixels.", syntax_example: "<hr size=\"2\">" },
            { attribute: "width", description: "Deprecated. Specifies the width of the line.", syntax_example: "<hr width=\"50%\">" }
          ]
        },
        {
          element: "<pre>",
          definition: "Defines preformatted text. Text in a <pre> element is displayed in a fixed-width font and preserves spaces and line breaks.",
          syntax: "<pre>\n  Hello\n  World\n</pre>",
          default_attribute: "N/A",
          tip: "Useful for displaying code or ASCII art where whitespace matters.",
          note: "Text inside <pre> is rendered exactly as written in the HTML source.",
          attributes: []
        },
        {
          element: "<blockquote>",
          definition: "Defines a section that is quoted from another source. Browsers usually indent blockquote elements.",
          syntax: "<blockquote>This is a quote.</blockquote>",
          default_attribute: "N/A",
          tip: "Use the cite attribute to indicate the source URL of the quotation.",
          note: "For inline quotes use the <q> element instead.",
          attributes: [
            { attribute: "cite", description: "Specifies the source URL of the quotation.", syntax_example: "<blockquote cite=\"https://example.com\">Quote</blockquote>" }
          ]
        }
      ]
    },
    {
      topic: "Headings",
      elements: [
        {
          element: "<h1>",
          definition: "Defines the most important heading. There should typically be only one <h1> per page.",
          syntax: "<h1>Main Page Heading</h1>",
          default_attribute: "N/A",
          tip: "Use <h1> for the main page title. Use it only once per page for best SEO practice.",
          note: "Search engines use headings to understand the structure and content of a page.",
          attributes: []
        },
        {
          element: "<h2>",
          definition: "Defines a second-level heading. Used for major section titles under the h1.",
          syntax: "<h2>Section Heading</h2>",
          default_attribute: "N/A",
          tip: "Use h2 for major sections of the page content.",
          note: "Headings h1 through h6 follow a hierarchy. Do not skip levels.",
          attributes: []
        },
        {
          element: "<h3>",
          definition: "Defines a third-level heading. Used for subsections under h2.",
          syntax: "<h3>Subsection Heading</h3>",
          default_attribute: "N/A",
          tip: "Use h3 for subsections within h2 sections.",
          note: "Heading hierarchy improves accessibility for screen readers.",
          attributes: []
        },
        {
          element: "<h4>",
          definition: "Defines a fourth-level heading.",
          syntax: "<h4>Sub-subsection</h4>",
          default_attribute: "N/A",
          tip: "Deep heading levels (h4-h6) are less common. Reconsider page structure if using them frequently.",
          note: "All six heading levels were present from the earliest versions of HTML.",
          attributes: []
        },
        {
          element: "<h5>",
          definition: "Defines a fifth-level heading.",
          syntax: "<h5>Minor Heading</h5>",
          default_attribute: "N/A",
          tip: "h5 and h6 are rarely needed. Simplify your document structure when possible.",
          note: "Heading font sizes decrease from h1 to h6 by default.",
          attributes: []
        },
        {
          element: "<h6>",
          definition: "Defines the least important heading.",
          syntax: "<h6>Smallest Heading</h6>",
          default_attribute: "N/A",
          tip: "If you are using h6 frequently, consider simplifying your content hierarchy.",
          note: "h6 renders smaller than default paragraph text in most browsers.",
          attributes: []
        }
      ]
    },
    {
      topic: "Lists",
      elements: [
        {
          element: "<ul>",
          definition: "Defines an unordered (bulleted) list. Each list item is defined with <li>.",
          syntax: "<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n</ul>",
          default_attribute: "N/A",
          tip: "Use unordered lists when the order of items does not matter.",
          note: "Default bullet style is a filled circle but can be changed with CSS list-style-type.",
          attributes: [
            { attribute: "type", description: "Deprecated. Sets bullet style: disc, circle, square.", syntax_example: "<ul type=\"square\">" }
          ]
        },
        {
          element: "<ol>",
          definition: "Defines an ordered (numbered) list. Each list item is defined with <li>.",
          syntax: "<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>",
          default_attribute: "N/A",
          tip: "Use ordered lists when the sequence of items matters.",
          note: "Default numbering starts at 1. Use the start attribute to change the starting number.",
          attributes: [
            { attribute: "type", description: "Sets the numbering type: 1, A, a, I, i.", syntax_example: "<ol type=\"A\">" },
            { attribute: "start", description: "Sets the start value of the list.", syntax_example: "<ol start=\"5\">" }
          ]
        },
        {
          element: "<li>",
          definition: "Defines a list item inside <ul>, <ol>, or <menu>.",
          syntax: "<li>List item text</li>",
          default_attribute: "N/A",
          tip: "List items can contain other lists to create nested structures.",
          note: "<li> can only be a direct child of <ul>, <ol>, or <menu>.",
          attributes: [
            { attribute: "value", description: "Sets the value of the list item in an ordered list. Subsequent items increment from this value.", syntax_example: "<li value=\"3\">Item</li>" }
          ]
        }
      ]
    },
    {
      topic: "Links & Navigation",
      elements: [
        {
          element: "<a>",
          definition: "The anchor element. Creates a hyperlink to other pages, files, email addresses, locations on the same page, or any other URL.",
          syntax: "<a href=\"https://example.com\">Click here</a>",
          default_attribute: "N/A",
          tip: "Always use descriptive link text. Avoid generic text like 'click here' for accessibility.",
          note: "The href attribute is required for a functional link. Without it, the element is a placeholder.",
          attributes: [
            { attribute: "href", description: "Specifies the URL of the page the link goes to.", syntax_example: "<a href=\"https://example.com\">Link</a>" },
            { attribute: "target", description: "Specifies where to open the linked document. _blank opens in a new tab.", syntax_example: "<a href=\"url\" target=\"_blank\">Link</a>" },
            { attribute: "name", description: "Deprecated. Used to create a named anchor for in-page navigation. Use id instead.", syntax_example: "<a name=\"section1\">Section</a>" }
          ]
        }
      ]
    },
    {
      topic: "Images & Media",
      elements: [
        {
          element: "<img>",
          definition: "Embeds an image into the document. It is a void element with no closing tag.",
          syntax: "<img src=\"image.jpg\" alt=\"Description\">",
          default_attribute: "N/A",
          tip: "Always include the alt attribute for accessibility and SEO.",
          note: "<img> is a void element. It does not have a closing tag.",
          attributes: [
            { attribute: "src", description: "Specifies the path to the image file. Required.", syntax_example: "<img src=\"photo.jpg\">" },
            { attribute: "alt", description: "Provides alternative text for the image. Required for accessibility.", syntax_example: "<img src=\"photo.jpg\" alt=\"A sunset\">" },
            { attribute: "width", description: "Sets the width of the image in pixels or percent.", syntax_example: "<img src=\"photo.jpg\" width=\"300\">" },
            { attribute: "height", description: "Sets the height of the image in pixels or percent.", syntax_example: "<img src=\"photo.jpg\" height=\"200\">" }
          ]
        }
      ]
    }
  ]
};
