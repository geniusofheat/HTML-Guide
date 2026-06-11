// html_2_lessons.js
const html2_lessons = {
  version: "HTML2",
  released: "1995",
  definition: "HTML 2.0 was the first formal HTML standard published by the IETF. It standardized the features that were already in common use and introduced form elements.",
  what_it_introduced: "Forms, input elements, text areas, select menus, and image maps.",
  note: "HTML 2.0 was defined in RFC 1866 and became the basis for future HTML standards.",
  tip: "HTML 2.0 introduced the form elements that are still foundational to web interactivity today.",
  topics: [
    {
      topic: "Forms & Inputs",
      elements: [
        {
          element: "<form>",
          definition: "Defines an HTML form for user input. Forms collect data that is sent to a server for processing.",
          syntax: "<form action=\"/submit\" method=\"post\">\n  ...\n</form>",
          default_attribute: "N/A",
          tip: "Always specify both action and method attributes on your forms.",
          note: "The default method is GET. Use POST for sensitive or large data submissions.",
          attributes: [
            { attribute: "action", description: "Specifies where to send the form data when submitted.", syntax_example: "<form action=\"/submit\">" },
            { attribute: "method", description: "Specifies the HTTP method: get or post.", syntax_example: "<form method=\"post\">" },
            { attribute: "enctype", description: "Specifies how form data should be encoded. Use multipart/form-data for file uploads.", syntax_example: "<form enctype=\"multipart/form-data\">" },
            { attribute: "name", description: "Gives the form a name for scripting purposes.", syntax_example: "<form name=\"loginForm\">" }
          ]
        },
        {
          element: "<input>",
          definition: "Defines an input control inside a form. The type attribute determines the kind of input.",
          syntax: "<input type=\"text\" name=\"username\">",
          default_attribute: "type=\"text\"",
          tip: "Always pair inputs with a <label> element for accessibility.",
          note: "<input> is a void element and does not require a closing tag.",
          attributes: [
            { attribute: "type", description: "Specifies the input type: text, password, checkbox, radio, submit, reset, hidden.", syntax_example: "<input type=\"password\">" },
            { attribute: "name", description: "Specifies the name of the input field, used as a key in form data.", syntax_example: "<input name=\"email\">" },
            { attribute: "value", description: "Specifies the default value of the input field.", syntax_example: "<input value=\"John\">" },
            { attribute: "size", description: "Specifies the visible width of the input in characters.", syntax_example: "<input size=\"30\">" },
            { attribute: "maxlength", description: "Specifies the maximum number of characters allowed.", syntax_example: "<input maxlength=\"50\">" },
            { attribute: "checked", description: "Pre-selects a checkbox or radio button.", syntax_example: "<input type=\"checkbox\" checked>" },
            { attribute: "disabled", description: "Disables the input field.", syntax_example: "<input disabled>" }
          ]
        },
        {
          element: "<textarea>",
          definition: "Defines a multi-line text input field.",
          syntax: "<textarea name=\"message\" rows=\"4\" cols=\"50\">Default text</textarea>",
          default_attribute: "N/A",
          tip: "Use CSS to control the size of textareas rather than rows and cols for responsive designs.",
          note: "Unlike <input>, <textarea> has a closing tag and content between tags is the default text.",
          attributes: [
            { attribute: "rows", description: "Specifies the visible number of lines.", syntax_example: "<textarea rows=\"5\">" },
            { attribute: "cols", description: "Specifies the visible width in average character widths.", syntax_example: "<textarea cols=\"40\">" },
            { attribute: "name", description: "Specifies the name of the textarea.", syntax_example: "<textarea name=\"bio\">" },
            { attribute: "disabled", description: "Disables the textarea.", syntax_example: "<textarea disabled>" }
          ]
        },
        {
          element: "<select>",
          definition: "Creates a drop-down list. The options within are defined using <option> elements.",
          syntax: "<select name=\"color\">\n  <option value=\"red\">Red</option>\n  <option value=\"blue\">Blue</option>\n</select>",
          default_attribute: "N/A",
          tip: "Use the multiple attribute to allow users to select more than one option.",
          note: "The first option is selected by default unless another has the selected attribute.",
          attributes: [
            { attribute: "name", description: "Specifies the name of the select element.", syntax_example: "<select name=\"country\">" },
            { attribute: "multiple", description: "Allows multiple options to be selected.", syntax_example: "<select multiple>" },
            { attribute: "size", description: "Specifies the number of visible options.", syntax_example: "<select size=\"3\">" },
            { attribute: "disabled", description: "Disables the select element.", syntax_example: "<select disabled>" }
          ]
        },
        {
          element: "<option>",
          definition: "Defines an option in a drop-down list inside a <select> element.",
          syntax: "<option value=\"us\">United States</option>",
          default_attribute: "N/A",
          tip: "Use the value attribute so the server receives a clean value different from the display text.",
          note: "If no value attribute is set, the option's text content is submitted as the value.",
          attributes: [
            { attribute: "value", description: "Specifies the value submitted when the option is selected.", syntax_example: "<option value=\"ca\">Canada</option>" },
            { attribute: "selected", description: "Pre-selects this option when the page loads.", syntax_example: "<option selected>Default</option>" },
            { attribute: "disabled", description: "Disables this option so it cannot be selected.", syntax_example: "<option disabled>Choose one</option>" }
          ]
        }
      ]
    },
    {
      topic: "Text & Formatting",
      elements: [
        {
          element: "<address>",
          definition: "Defines contact information for the author or owner of a document or article.",
          syntax: "<address>\n  Written by <a href=\"mailto:me@example.com\">Author</a>\n</address>",
          default_attribute: "N/A",
          tip: "Use <address> for contact information only, not for physical mailing addresses in general.",
          note: "<address> typically renders in italic by default in browsers.",
          attributes: []
        },
        {
          element: "<cite>",
          definition: "Defines the title of a creative work such as a book, film, song, or painting.",
          syntax: "<cite>The Great Gatsby</cite>",
          default_attribute: "N/A",
          tip: "Use <cite> for titles of works, not for quoting text from a work.",
          note: "By default <cite> renders in italic.",
          attributes: []
        },
        {
          element: "<code>",
          definition: "Defines a piece of computer code. Displays text in a monospace font.",
          syntax: "<code>console.log('Hello');</code>",
          default_attribute: "N/A",
          tip: "For multi-line code blocks, wrap <code> inside a <pre> element.",
          note: "<code> is an inline element. Use <pre><code> for block-level code.",
          attributes: []
        },
        {
          element: "<em>",
          definition: "Marks text with stress emphasis. Browsers render it in italic by default.",
          syntax: "<em>This is important</em>",
          default_attribute: "N/A",
          tip: "Use <em> for semantic emphasis. Screen readers may change their tone for emphasized text.",
          note: "Nested <em> elements increase the level of emphasis.",
          attributes: []
        },
        {
          element: "<strong>",
          definition: "Marks text with strong importance, seriousness, or urgency. Renders in bold by default.",
          syntax: "<strong>Warning:</strong> Do not proceed.",
          default_attribute: "N/A",
          tip: "Use <strong> for content that is genuinely important, not just for visual bold styling.",
          note: "<strong> carries more semantic weight than <b>.",
          attributes: []
        },
        {
          element: "<samp>",
          definition: "Represents sample output from a computer program or system.",
          syntax: "<samp>File not found</samp>",
          default_attribute: "N/A",
          tip: "Use <samp> to display output from a program, system messages, or command-line output.",
          note: "Renders in monospace font by default.",
          attributes: []
        },
        {
          element: "<kbd>",
          definition: "Represents user keyboard input or voice input.",
          syntax: "Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.",
          default_attribute: "N/A",
          tip: "Use <kbd> to document keyboard shortcuts and commands in technical writing.",
          note: "Renders in monospace font by default.",
          attributes: []
        },
        {
          element: "<var>",
          definition: "Represents a variable in a mathematical expression or programming context.",
          syntax: "<var>x</var> = <var>y</var> + 2",
          default_attribute: "N/A",
          tip: "Use <var> when documenting code or math to semantically mark variable names.",
          note: "Renders in italic by default.",
          attributes: []
        }
      ]
    },
    {
      topic: "Images & Media",
      elements: [
        {
          element: "<map>",
          definition: "Defines a client-side image map — an image with clickable areas.",
          syntax: "<img src=\"map.jpg\" usemap=\"#mymap\">\n<map name=\"mymap\">\n  <area shape=\"rect\" coords=\"0,0,100,100\" href=\"page.html\">\n</map>",
          default_attribute: "N/A",
          tip: "Image maps are rarely used in modern development. Consider CSS and JavaScript alternatives.",
          note: "The name attribute of <map> must match the usemap attribute of the corresponding <img>.",
          attributes: [
            { attribute: "name", description: "Specifies the name of the image map, referenced by usemap on the img element.", syntax_example: "<map name=\"sitemap\">" }
          ]
        },
        {
          element: "<area>",
          definition: "Defines a clickable area inside an image map. Always nested inside a <map> element.",
          syntax: "<area shape=\"circle\" coords=\"50,50,30\" href=\"page.html\" alt=\"Link\">",
          default_attribute: "N/A",
          tip: "Always include an alt attribute on <area> for accessibility.",
          note: "<area> is a void element with no closing tag.",
          attributes: [
            { attribute: "shape", description: "Defines the shape of the area: rect, circle, poly, default.", syntax_example: "<area shape=\"rect\">" },
            { attribute: "coords", description: "Specifies the coordinates of the area shape.", syntax_example: "<area coords=\"0,0,200,100\">" },
            { attribute: "href", description: "Specifies the URL the area links to.", syntax_example: "<area href=\"page.html\">" },
            { attribute: "alt", description: "Required alternative text for the area.", syntax_example: "<area alt=\"Link to page\">" }
          ]
        }
      ]
    }
  ]
};
