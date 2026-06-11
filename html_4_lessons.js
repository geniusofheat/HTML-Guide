// html_4_lessons.js
const html4_lessons = {
  version: "HTML4",
  released: "1997-1999",
  definition: "HTML 4.01 was published by the W3C in 1999 and became the dominant HTML version for over a decade. It introduced better separation of structure and presentation, frames, and improved accessibility support.",
  what_it_introduced: "Frames, iframes, improved forms, fieldset, legend, label, accesskey, tabindex, and strict separation of style from structure.",
  note: "HTML 4.01 had three variants: Strict, Transitional, and Frameset. Strict discouraged deprecated elements.",
  tip: "HTML 4.01 introduced the id and class attributes as standard on all elements, enabling CSS targeting.",
  topics: [
    {
      topic: "Forms & Inputs",
      elements: [
        {
          element: "<label>",
          definition: "Defines a label for an <input>, <select>, <textarea>, or other form element.",
          syntax: "<label for=\"email\">Email:</label>\n<input type=\"email\" id=\"email\">",
          default_attribute: "N/A",
          tip: "Clicking a label focuses or activates its associated control — a major usability and accessibility benefit.",
          note: "Use the for attribute on <label> matching the id of the associated input.",
          attributes: [
            { attribute: "for", description: "Specifies which form element the label is bound to, using the element's id.", syntax_example: "<label for=\"username\">Username</label>" }
          ]
        },
        {
          element: "<fieldset>",
          definition: "Groups related form elements together and draws a box around them.",
          syntax: "<fieldset>\n  <legend>Personal Info</legend>\n  <label>Name: <input type=\"text\"></label>\n</fieldset>",
          default_attribute: "N/A",
          tip: "Use <fieldset> with <legend> to group related fields for better accessibility.",
          note: "The <legend> element must be the first child of <fieldset>.",
          attributes: [
            { attribute: "disabled", description: "Disables all form elements inside the fieldset.", syntax_example: "<fieldset disabled>" },
            { attribute: "name", description: "Assigns a name to the fieldset for scripting.", syntax_example: "<fieldset name=\"personal\">" }
          ]
        },
        {
          element: "<legend>",
          definition: "Defines a caption for a <fieldset> element.",
          syntax: "<fieldset>\n  <legend>Contact Details</legend>\n  ...\n</fieldset>",
          default_attribute: "N/A",
          tip: "Keep legend text short and descriptive — it is read by screen readers as the group label.",
          note: "<legend> must be the first child element of <fieldset>.",
          attributes: []
        },
        {
          element: "<button>",
          definition: "Defines a clickable button. More flexible than <input type='button'> as it can contain HTML content.",
          syntax: "<button type=\"submit\">Submit Form</button>",
          default_attribute: "type=\"submit\"",
          tip: "Always specify the type attribute. Without it, a button inside a form defaults to type='submit'.",
          note: "Unlike <input type='button'>, a <button> element can contain HTML markup including images.",
          attributes: [
            { attribute: "type", description: "Specifies button behavior: submit, reset, or button.", syntax_example: "<button type=\"button\">Click Me</button>" },
            { attribute: "disabled", description: "Disables the button.", syntax_example: "<button disabled>Unavailable</button>" },
            { attribute: "name", description: "Assigns a name to the button for form submission.", syntax_example: "<button name=\"action\">Go</button>" },
            { attribute: "value", description: "Defines the value submitted with the form.", syntax_example: "<button value=\"confirm\">Confirm</button>" },
            { attribute: "form", description: "Associates the button with a specific form by its id.", syntax_example: "<button form=\"myForm\">Submit</button>" }
          ]
        },
        {
          element: "<optgroup>",
          definition: "Groups related <option> elements inside a <select> drop-down list.",
          syntax: "<select>\n  <optgroup label=\"Fruits\">\n    <option>Apple</option>\n    <option>Banana</option>\n  </optgroup>\n</select>",
          default_attribute: "N/A",
          tip: "Use <optgroup> to organize long select lists into logical categories.",
          note: "<optgroup> is not selectable itself — only the <option> items inside it are.",
          attributes: [
            { attribute: "label", description: "Required. Specifies the label for the group.", syntax_example: "<optgroup label=\"Vegetables\">" },
            { attribute: "disabled", description: "Disables all options in the group.", syntax_example: "<optgroup disabled>" }
          ]
        }
      ]
    },
    {
      topic: "Embedded Content",
      elements: [
        {
          element: "<iframe>",
          definition: "Defines an inline frame that embeds another HTML document within the current page.",
          syntax: "<iframe src=\"https://example.com\" width=\"600\" height=\"400\"></iframe>",
          default_attribute: "N/A",
          tip: "Use the sandbox attribute to restrict the capabilities of embedded content for security.",
          note: "Many sites prevent embedding via iframes using the X-Frame-Options HTTP header.",
          attributes: [
            { attribute: "src", description: "Specifies the URL of the document to embed.", syntax_example: "<iframe src=\"page.html\">" },
            { attribute: "width", description: "Sets the width of the iframe in pixels or percent.", syntax_example: "<iframe width=\"100%\">" },
            { attribute: "height", description: "Sets the height of the iframe.", syntax_example: "<iframe height=\"400\">" },
            { attribute: "name", description: "Specifies a name for the iframe used as a link target.", syntax_example: "<iframe name=\"preview\">" },
            { attribute: "sandbox", description: "Applies restrictions to the iframe content for security.", syntax_example: "<iframe sandbox=\"allow-scripts\">" },
            { attribute: "allow", description: "Specifies a feature policy for the iframe.", syntax_example: "<iframe allow=\"camera; microphone\">" },
            { attribute: "loading", description: "Specifies lazy or eager loading: lazy, eager.", syntax_example: "<iframe loading=\"lazy\">" }
          ]
        },
        {
          element: "<object>",
          definition: "Embeds an external resource such as an image, video, PDF, or plugin.",
          syntax: "<object data=\"file.pdf\" type=\"application/pdf\" width=\"600\" height=\"400\"></object>",
          default_attribute: "N/A",
          tip: "Use <object> for embedding PDFs. For audio and video prefer HTML5 <audio> and <video> elements.",
          note: "<object> was intended to replace <embed> and <applet> but all three coexisted for years.",
          attributes: [
            { attribute: "data", description: "Specifies the URL of the resource to embed.", syntax_example: "<object data=\"presentation.pdf\">" },
            { attribute: "type", description: "Specifies the MIME type of the embedded resource.", syntax_example: "<object type=\"application/pdf\">" },
            { attribute: "width", description: "Sets the width of the object.", syntax_example: "<object width=\"800\">" },
            { attribute: "height", description: "Sets the height of the object.", syntax_example: "<object height=\"600\">" }
          ]
        },
        {
          element: "<param>",
          definition: "Defines parameters for an <object> element.",
          syntax: "<object>\n  <param name=\"autoplay\" value=\"true\">\n</object>",
          default_attribute: "N/A",
          tip: "Use <param> to pass configuration values to embedded objects or plugins.",
          note: "<param> is a void element with no closing tag.",
          attributes: [
            { attribute: "name", description: "Specifies the name of the parameter.", syntax_example: "<param name=\"loop\">" },
            { attribute: "value", description: "Specifies the value of the parameter.", syntax_example: "<param value=\"true\">" }
          ]
        }
      ]
    },
    {
      topic: "Head & Metadata",
      elements: [
        {
          element: "<meta>",
          definition: "Defines metadata about the HTML document. Metadata is not displayed on the page but is used by browsers and search engines.",
          syntax: "<meta charset=\"UTF-8\">\n<meta name=\"description\" content=\"Page description\">",
          default_attribute: "N/A",
          tip: "Always include charset, viewport, and description meta tags for every page.",
          note: "<meta> is a void element placed inside <head>.",
          attributes: [
            { attribute: "charset", description: "Specifies the character encoding for the document.", syntax_example: "<meta charset=\"UTF-8\">" },
            { attribute: "name", description: "Specifies the name of the metadata: description, keywords, author, viewport.", syntax_example: "<meta name=\"description\" content=\"...\">" },
            { attribute: "content", description: "Specifies the value associated with the name or http-equiv attribute.", syntax_example: "<meta name=\"author\" content=\"Jane\">" },
            { attribute: "http-equiv", description: "Provides an HTTP header for the content attribute.", syntax_example: "<meta http-equiv=\"refresh\" content=\"30\">" },
            { attribute: "viewport", description: "Controls how the page is displayed on mobile devices.", syntax_example: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" }
          ]
        },
        {
          element: "<link>",
          definition: "Defines a relationship between the current document and an external resource. Most commonly used to link CSS stylesheets.",
          syntax: "<link rel=\"stylesheet\" href=\"styles.css\">",
          default_attribute: "N/A",
          tip: "Use <link rel='preconnect'> for external font providers to improve loading speed.",
          note: "<link> is a void element that must be placed inside <head>.",
          attributes: [
            { attribute: "rel", description: "Required. Specifies the relationship: stylesheet, icon, preconnect, canonical.", syntax_example: "<link rel=\"stylesheet\" href=\"style.css\">" },
            { attribute: "href", description: "Specifies the URL of the linked resource.", syntax_example: "<link href=\"style.css\">" },
            { attribute: "type", description: "Specifies the MIME type of the linked resource.", syntax_example: "<link type=\"text/css\">" },
            { attribute: "media", description: "Specifies what media the linked resource is optimized for.", syntax_example: "<link media=\"print\" href=\"print.css\">" }
          ]
        },
        {
          element: "<style>",
          definition: "Contains CSS style rules for the current document. Placed inside <head>.",
          syntax: "<style>\n  body { background: white; }\n  p { color: black; }\n</style>",
          default_attribute: "type=\"text/css\"",
          tip: "Prefer external stylesheets via <link> over inline <style> blocks for maintainability.",
          note: "The type attribute defaults to text/css and can be omitted in HTML5.",
          attributes: [
            { attribute: "media", description: "Specifies which media the styles apply to.", syntax_example: "<style media=\"screen\">" }
          ]
        },
        {
          element: "<base>",
          definition: "Specifies the base URL and/or target for all relative URLs in the document.",
          syntax: "<base href=\"https://example.com/\" target=\"_blank\">",
          default_attribute: "N/A",
          tip: "Use <base> carefully — it affects all relative links and form actions on the page.",
          note: "There can only be one <base> element per document. It must be inside <head>.",
          attributes: [
            { attribute: "href", description: "Specifies the base URL for all relative URLs.", syntax_example: "<base href=\"https://example.com/\">" },
            { attribute: "target", description: "Specifies the default target for all links: _blank, _self, _parent, _top.", syntax_example: "<base target=\"_blank\">" }
          ]
        }
      ]
    },
    {
      topic: "Lists",
      elements: [
        {
          element: "<dl>",
          definition: "Defines a description list. Used with <dt> for terms and <dd> for descriptions.",
          syntax: "<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>",
          default_attribute: "N/A",
          tip: "Use <dl> for glossaries, metadata, and key-value pairs.",
          note: "<dl> is semantically meaningful for term-definition pairs.",
          attributes: []
        },
        {
          element: "<dt>",
          definition: "Defines a term in a description list (<dl>).",
          syntax: "<dt>CSS</dt>",
          default_attribute: "N/A",
          tip: "A single <dt> can have multiple <dd> elements following it.",
          note: "<dt> renders in bold by default in most browsers.",
          attributes: []
        },
        {
          element: "<dd>",
          definition: "Defines the description or definition for a term in a description list (<dl>).",
          syntax: "<dd>Cascading Style Sheets — used for styling HTML.</dd>",
          default_attribute: "N/A",
          tip: "Multiple <dd> elements can follow a single <dt> for multiple definitions.",
          note: "<dd> is indented by default in most browsers.",
          attributes: []
        }
      ]
    },
    {
      topic: "Text & Formatting",
      elements: [
        {
          element: "<abbr>",
          definition: "Defines an abbreviation or acronym. The full form can be provided in the title attribute.",
          syntax: "<abbr title=\"HyperText Markup Language\">HTML</abbr>",
          default_attribute: "N/A",
          tip: "Always provide the title attribute so users can see the full expansion on hover.",
          note: "Screen readers may announce the full form from the title attribute.",
          attributes: [
            { attribute: "title", description: "Provides the full expansion of the abbreviation on hover.", syntax_example: "<abbr title=\"World Health Organization\">WHO</abbr>" }
          ]
        },
        {
          element: "<ins>",
          definition: "Defines text that has been inserted into the document. Renders with underline by default.",
          syntax: "<ins>New content added</ins>",
          default_attribute: "N/A",
          tip: "Use <ins> and <del> together when showing document revisions.",
          note: "Often used alongside <del> to show changes in text.",
          attributes: [
            { attribute: "cite", description: "Specifies a URL explaining why the change was made.", syntax_example: "<ins cite=\"reason.html\">" },
            { attribute: "datetime", description: "Specifies the date and time of the insertion.", syntax_example: "<ins datetime=\"2024-01-01\">" }
          ]
        },
        {
          element: "<del>",
          definition: "Defines text that has been deleted from the document. Renders with strikethrough by default.",
          syntax: "<del>Removed content</del>",
          default_attribute: "N/A",
          tip: "Use <del> for content removed in edits. Use <s> for content no longer accurate.",
          note: "<del> carries semantic meaning about document revisions.",
          attributes: [
            { attribute: "cite", description: "Specifies a URL explaining why the deletion was made.", syntax_example: "<del cite=\"reason.html\">" },
            { attribute: "datetime", description: "Specifies the date and time of the deletion.", syntax_example: "<del datetime=\"2024-01-01\">" }
          ]
        },
        {
          element: "<q>",
          definition: "Defines a short inline quotation. Browsers typically add quotation marks automatically.",
          syntax: "<q>To be or not to be.</q>",
          default_attribute: "N/A",
          tip: "Use <blockquote> for longer block-level quotations.",
          note: "Browsers add quotation marks around <q> content by default.",
          attributes: [
            { attribute: "cite", description: "Specifies the URL of the quote source.", syntax_example: "<q cite=\"https://source.com\">Quote</q>" }
          ]
        }
      ]
    }
  ]
};
