// html_5_lessons.js
const html5_lessons = {
  version: "HTML5",
  released: "2014",
  definition: "HTML5 is the current standard of HTML, published by the W3C and WHATWG. It introduced semantic elements, native audio and video, the canvas element, improved forms, and APIs for offline storage, geolocation, drag-and-drop, and more.",
  what_it_introduced: "Semantic elements, audio, video, canvas, SVG, new form input types, data attributes, local storage, and web APIs.",
  note: "HTML5 eliminated the need for plugins like Flash by providing native media and graphics support.",
  tip: "HTML5 documents should start with <!DOCTYPE html> — the simplest doctype declaration ever.",
  topics: [
    {
      topic: "Semantic Elements",
      elements: [
        {
          element: "<header>",
          definition: "Defines the header of a document or a section. Typically contains a logo, navigation, or heading.",
          syntax: "<header>\n  <h1>Site Title</h1>\n  <nav>...</nav>\n</header>",
          default_attribute: "N/A",
          tip: "A page can have multiple <header> elements — one for the page and one inside each <article> or <section>.",
          note: "<header> is not the same as <head>. <head> is for metadata; <header> is visible content.",
          attributes: []
        },
        {
          element: "<footer>",
          definition: "Defines the footer of a document or a section. Typically contains copyright, links, or contact info.",
          syntax: "<footer>\n  <p>&copy; 2024 My Site</p>\n</footer>",
          default_attribute: "N/A",
          tip: "Like <header>, a page can have multiple <footer> elements for different sections.",
          note: "Footer elements should not contain sectioning content like <article> or <section>.",
          attributes: []
        },
        {
          element: "<nav>",
          definition: "Defines a set of navigation links. Not all link groups need to be in a <nav> — only major navigation blocks.",
          syntax: "<nav>\n  <a href=\"/home\">Home</a>\n  <a href=\"/about\">About</a>\n</nav>",
          default_attribute: "N/A",
          tip: "Use ARIA labels on multiple <nav> elements to distinguish them for screen readers.",
          note: "The <nav> element is intended for major navigation blocks, not every group of links.",
          attributes: []
        },
        {
          element: "<main>",
          definition: "Defines the dominant content of the <body>. There should be only one <main> per page.",
          syntax: "<main>\n  <article>...</article>\n</main>",
          default_attribute: "N/A",
          tip: "Screen readers use <main> to jump directly to primary content. Always include it.",
          note: "The <main> element should not be nested inside <article>, <aside>, <footer>, <header>, or <nav>.",
          attributes: []
        },
        {
          element: "<article>",
          definition: "Defines a self-contained piece of content that could be distributed independently, like a blog post, news article, or comment.",
          syntax: "<article>\n  <h2>Post Title</h2>\n  <p>Post content...</p>\n</article>",
          default_attribute: "N/A",
          tip: "Ask yourself: could this content stand alone? If yes, use <article>.",
          note: "Articles can be nested — a comment inside an article is still an article.",
          attributes: []
        },
        {
          element: "<section>",
          definition: "Defines a thematic grouping of content, typically with a heading.",
          syntax: "<section>\n  <h2>Section Title</h2>\n  <p>Content...</p>\n</section>",
          default_attribute: "N/A",
          tip: "Use <section> for grouping related content with a theme. Use <div> for purely structural grouping.",
          note: "If a section doesn't have a heading, consider whether <div> is more appropriate.",
          attributes: []
        },
        {
          element: "<aside>",
          definition: "Defines content tangentially related to the surrounding content, like a sidebar or pull quote.",
          syntax: "<aside>\n  <h3>Related Links</h3>\n  <ul>...</ul>\n</aside>",
          default_attribute: "N/A",
          tip: "Use <aside> for sidebars, callout boxes, and supplementary content that is not essential to the main flow.",
          note: "<aside> content should be loosely related to the main content but not required to understand it.",
          attributes: []
        },
        {
          element: "<figure>",
          definition: "Specifies self-contained content like illustrations, diagrams, photos, or code listings.",
          syntax: "<figure>\n  <img src=\"chart.png\" alt=\"Chart\">\n  <figcaption>Figure 1: Sales data</figcaption>\n</figure>",
          default_attribute: "N/A",
          tip: "Always pair <figure> with <figcaption> to describe the content for accessibility.",
          note: "<figure> content can be moved away from the main content without affecting the document flow.",
          attributes: []
        },
        {
          element: "<figcaption>",
          definition: "Defines a caption for a <figure> element. Can be placed as the first or last child of <figure>.",
          syntax: "<figcaption>Fig. 1 — Quarterly Revenue</figcaption>",
          default_attribute: "N/A",
          tip: "Keep figcaptions concise and descriptive.",
          note: "There should be only one <figcaption> per <figure> element.",
          attributes: []
        },
        {
          element: "<mark>",
          definition: "Defines text that should be highlighted or marked for reference purposes.",
          syntax: "Search result: <mark>HTML5</mark> was released in 2014.",
          default_attribute: "N/A",
          tip: "Use <mark> to highlight search terms or relevant text within search results.",
          note: "<mark> renders with a yellow background by default.",
          attributes: []
        },
        {
          element: "<time>",
          definition: "Defines a specific time or date. The datetime attribute provides a machine-readable format.",
          syntax: "<time datetime=\"2024-06-15\">June 15, 2024</time>",
          default_attribute: "N/A",
          tip: "Always use the datetime attribute for machine readability and SEO.",
          note: "The datetime value must be a valid date, time, or date-time string.",
          attributes: [
            { attribute: "datetime", description: "Provides a machine-readable date/time value.", syntax_example: "<time datetime=\"2024-01-01T09:00\">January 1st 9am</time>" }
          ]
        },
        {
          element: "<details>",
          definition: "Creates a disclosure widget where content is only visible when toggled open by the user.",
          syntax: "<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content here.</p>\n</details>",
          default_attribute: "N/A",
          tip: "Use <details> for FAQ sections, spoilers, and optional supplementary content without JavaScript.",
          note: "The open attribute makes the details visible by default.",
          attributes: [
            { attribute: "open", description: "Makes the details content visible by default.", syntax_example: "<details open>" }
          ]
        },
        {
          element: "<summary>",
          definition: "Defines a visible heading for a <details> element. Clicking it toggles the content.",
          syntax: "<details>\n  <summary>More info</summary>\n  <p>Content</p>\n</details>",
          default_attribute: "N/A",
          tip: "Make summary text action-oriented — e.g. 'Show details' rather than just 'Details'.",
          note: "<summary> must be the first child of <details>.",
          attributes: []
        },
        {
          element: "<dialog>",
          definition: "Represents a dialog box or subwindow. Can be modal or non-modal.",
          syntax: "<dialog id=\"myDialog\">\n  <p>Dialog content</p>\n  <button onclick=\"this.closest('dialog').close()\">Close</button>\n</dialog>",
          default_attribute: "N/A",
          tip: "Use the showModal() method for accessible modal dialogs that trap focus.",
          note: "The dialog is hidden by default. Use the open attribute or JS methods to display it.",
          attributes: [
            { attribute: "open", description: "Makes the dialog visible.", syntax_example: "<dialog open>" }
          ]
        }
      ]
    },
    {
      topic: "Audio & Video",
      elements: [
        {
          element: "<video>",
          definition: "Embeds a video player in the page. Supports MP4, WebM, and Ogg formats.",
          syntax: "<video controls width=\"640\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  Your browser does not support video.\n</video>",
          default_attribute: "N/A",
          tip: "Always provide fallback text between video tags for browsers that do not support the element.",
          note: "Use multiple <source> elements to provide different formats for cross-browser support.",
          attributes: [
            { attribute: "src", description: "Specifies the URL of the video file.", syntax_example: "<video src=\"video.mp4\">" },
            { attribute: "controls", description: "Adds video controls: play, pause, volume.", syntax_example: "<video controls>" },
            { attribute: "autoplay", description: "Starts playing the video automatically when the page loads.", syntax_example: "<video autoplay muted>" },
            { attribute: "loop", description: "Replays the video when it reaches the end.", syntax_example: "<video loop>" },
            { attribute: "muted", description: "Mutes the video audio by default.", syntax_example: "<video muted>" },
            { attribute: "poster", description: "Specifies an image to show before the video plays.", syntax_example: "<video poster=\"thumbnail.jpg\">" },
            { attribute: "width", description: "Sets the width of the video player.", syntax_example: "<video width=\"720\">" },
            { attribute: "height", description: "Sets the height of the video player.", syntax_example: "<video height=\"480\">" },
            { attribute: "preload", description: "Specifies how the video should be loaded: none, metadata, auto.", syntax_example: "<video preload=\"metadata\">" }
          ]
        },
        {
          element: "<audio>",
          definition: "Embeds an audio player in the page. Supports MP3, WAV, and Ogg formats.",
          syntax: "<audio controls>\n  <source src=\"sound.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>",
          default_attribute: "N/A",
          tip: "Use multiple <source> elements to ensure cross-browser audio compatibility.",
          note: "Without the controls attribute the audio player is invisible to users.",
          attributes: [
            { attribute: "src", description: "Specifies the URL of the audio file.", syntax_example: "<audio src=\"audio.mp3\">" },
            { attribute: "controls", description: "Adds audio controls: play, pause, volume.", syntax_example: "<audio controls>" },
            { attribute: "autoplay", description: "Starts playing the audio automatically.", syntax_example: "<audio autoplay>" },
            { attribute: "loop", description: "Replays the audio when it ends.", syntax_example: "<audio loop>" },
            { attribute: "muted", description: "Mutes the audio by default.", syntax_example: "<audio muted>" },
            { attribute: "preload", description: "Specifies how the audio should be loaded: none, metadata, auto.", syntax_example: "<audio preload=\"none\">" }
          ]
        },
        {
          element: "<source>",
          definition: "Specifies multiple media resources for <video>, <audio>, or <picture> elements.",
          syntax: "<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n</video>",
          default_attribute: "N/A",
          tip: "List more efficient formats first — the browser uses the first supported format.",
          note: "<source> is a void element with no closing tag.",
          attributes: [
            { attribute: "src", description: "Specifies the URL of the media resource.", syntax_example: "<source src=\"audio.ogg\">" },
            { attribute: "type", description: "Specifies the MIME type of the resource.", syntax_example: "<source type=\"video/mp4\">" },
            { attribute: "media", description: "Specifies a media query for when the source should be used.", syntax_example: "<source media=\"(max-width: 600px)\" srcset=\"small.jpg\">" }
          ]
        },
        {
          element: "<track>",
          definition: "Defines text tracks for <video> and <audio> elements, such as subtitles or captions.",
          syntax: "<video controls>\n  <source src=\"video.mp4\">\n  <track src=\"subtitles.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\">\n</video>",
          default_attribute: "N/A",
          tip: "Always include captions for video content for accessibility compliance.",
          note: "Track files use the WebVTT format (.vtt).",
          attributes: [
            { attribute: "src", description: "Specifies the URL of the track file.", syntax_example: "<track src=\"captions.vtt\">" },
            { attribute: "kind", description: "Specifies the kind of text track: subtitles, captions, descriptions, chapters, metadata.", syntax_example: "<track kind=\"captions\">" },
            { attribute: "srclang", description: "Specifies the language of the track text.", syntax_example: "<track srclang=\"en\">" },
            { attribute: "label", description: "Specifies a user-readable title for the track.", syntax_example: "<track label=\"English\">" },
            { attribute: "default", description: "Makes this track the default if no other track is more suitable.", syntax_example: "<track default>" }
          ]
        }
      ]
    },
    {
      topic: "Canvas & Graphics",
      elements: [
        {
          element: "<canvas>",
          definition: "Defines a drawing area on the page. Graphics are drawn via JavaScript using the Canvas 2D API or WebGL.",
          syntax: "<canvas id=\"myCanvas\" width=\"400\" height=\"200\"></canvas>\n<script>\n  const ctx = document.getElementById('myCanvas').getContext('2d');\n  ctx.fillRect(10, 10, 100, 80);\n</script>",
          default_attribute: "N/A",
          tip: "Always provide fallback content between canvas tags for browsers that do not support it.",
          note: "Canvas is pixel-based and resolution-dependent. For scalable graphics use SVG instead.",
          attributes: [
            { attribute: "width", description: "Sets the width of the canvas in pixels.", syntax_example: "<canvas width=\"800\">" },
            { attribute: "height", description: "Sets the height of the canvas in pixels.", syntax_example: "<canvas height=\"400\">" },
            { attribute: "id", description: "Required to reference the canvas element from JavaScript.", syntax_example: "<canvas id=\"gameCanvas\">" }
          ]
        },
        {
          element: "<svg>",
          definition: "Defines a container for Scalable Vector Graphics. SVG images are defined in XML format and scale without losing quality.",
          syntax: "<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"gold\"/>\n</svg>",
          default_attribute: "N/A",
          tip: "Use SVG for icons, logos, and illustrations that need to scale across screen sizes.",
          note: "SVG elements can be styled with CSS and manipulated with JavaScript like regular DOM elements.",
          attributes: [
            { attribute: "width", description: "Sets the width of the SVG viewport.", syntax_example: "<svg width=\"200\">" },
            { attribute: "height", description: "Sets the height of the SVG viewport.", syntax_example: "<svg height=\"200\">" },
            { attribute: "viewBox", description: "Defines the coordinate system of the SVG content.", syntax_example: "<svg viewBox=\"0 0 100 100\">" },
            { attribute: "xmlns", description: "Required namespace declaration for SVG.", syntax_example: "<svg xmlns=\"http://www.w3.org/2000/svg\">" }
          ]
        }
      ]
    },
    {
      topic: "Forms & Inputs",
      elements: [
        {
          element: "<datalist>",
          definition: "Defines a list of pre-defined options for an <input> element, providing autocomplete suggestions.",
          syntax: "<input list=\"browsers\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n</datalist>",
          default_attribute: "N/A",
          tip: "Use <datalist> to suggest values without restricting the user to only those values.",
          note: "Unlike <select>, the user can still type any value not in the datalist.",
          attributes: [
            { attribute: "id", description: "Required. The id must match the list attribute of the associated input.", syntax_example: "<datalist id=\"suggestions\">" }
          ]
        },
        {
          element: "<output>",
          definition: "Represents the result of a calculation or user action.",
          syntax: "<form oninput=\"result.value = parseInt(a.value) + parseInt(b.value)\">\n  <input type=\"number\" id=\"a\"> +\n  <input type=\"number\" id=\"b\"> =\n  <output name=\"result\">0</output>\n</form>",
          default_attribute: "N/A",
          tip: "Use <output> to display the results of form calculations in a semantic way.",
          note: "<output> is associated with a form and participates in form submission.",
          attributes: [
            { attribute: "for", description: "Specifies which elements the output is calculated from.", syntax_example: "<output for=\"a b\">" },
            { attribute: "name", description: "Specifies the name of the output for form submission.", syntax_example: "<output name=\"total\">" }
          ]
        },
        {
          element: "<progress>",
          definition: "Displays the progress of a task such as a file upload or download.",
          syntax: "<progress value=\"70\" max=\"100\">70%</progress>",
          default_attribute: "N/A",
          tip: "Omit the value attribute to show an indeterminate progress bar for tasks with unknown duration.",
          note: "Fallback text between tags is shown in browsers that do not support <progress>.",
          attributes: [
            { attribute: "value", description: "Specifies the current progress value.", syntax_example: "<progress value=\"50\">" },
            { attribute: "max", description: "Specifies the maximum value.", syntax_example: "<progress max=\"100\">" }
          ]
        },
        {
          element: "<meter>",
          definition: "Represents a scalar measurement within a known range, such as disk usage or a quiz score.",
          syntax: "<meter value=\"0.6\">60%</meter>",
          default_attribute: "N/A",
          tip: "Use <meter> for measurements with a known min and max, not for progress of a task.",
          note: "Unlike <progress>, <meter> represents a value at a point in time, not a task in progress.",
          attributes: [
            { attribute: "value", description: "Specifies the current value.", syntax_example: "<meter value=\"75\">" },
            { attribute: "min", description: "Specifies the minimum value.", syntax_example: "<meter min=\"0\">" },
            { attribute: "max", description: "Specifies the maximum value.", syntax_example: "<meter max=\"100\">" },
            { attribute: "low", description: "Specifies the range considered low.", syntax_example: "<meter low=\"25\">" },
            { attribute: "high", description: "Specifies the range considered high.", syntax_example: "<meter high=\"75\">" },
            { attribute: "optimum", description: "Specifies the optimum value.", syntax_example: "<meter optimum=\"80\">" }
          ]
        }
      ]
    },
    {
      topic: "Images & Media",
      elements: [
        {
          element: "<picture>",
          definition: "Provides multiple source images for different display conditions. Allows responsive images with art direction.",
          syntax: "<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"small.jpg\">\n  <source media=\"(min-width: 601px)\" srcset=\"large.jpg\">\n  <img src=\"fallback.jpg\" alt=\"Description\">\n</picture>",
          default_attribute: "N/A",
          tip: "Always include an <img> as the last child of <picture> as a fallback.",
          note: "The browser selects the first matching <source> and ignores the rest.",
          attributes: []
        },
        {
          element: "<figure>",
          definition: "Specifies self-contained content like illustrations, diagrams, photos, or code listings. Often used with <figcaption>.",
          syntax: "<figure>\n  <img src=\"photo.jpg\" alt=\"Photo\">\n  <figcaption>Caption text</figcaption>\n</figure>",
          default_attribute: "N/A",
          tip: "Use <figure> to group media with its caption for semantic and accessible markup.",
          note: "The content of <figure> can be moved away from the main text without affecting the document.",
          attributes: []
        }
      ]
    },
    {
      topic: "Interactive Elements",
      elements: [
        {
          element: "<template>",
          definition: "Defines HTML content that is not rendered when the page loads but can be instantiated using JavaScript.",
          syntax: "<template id=\"row-template\">\n  <tr><td class=\"name\"></td><td class=\"score\"></td></tr>\n</template>",
          default_attribute: "N/A",
          tip: "Use <template> to define reusable HTML structures that are cloned and inserted by JavaScript.",
          note: "Content inside <template> is inert — scripts don't run, images don't load until the template is used.",
          attributes: [
            { attribute: "id", description: "Identifies the template so it can be accessed via JavaScript.", syntax_example: "<template id=\"card-tmpl\">" }
          ]
        },
        {
          element: "<slot>",
          definition: "A placeholder inside a Web Component (Shadow DOM) that can be filled with custom markup.",
          syntax: "<slot name=\"title\">Default title</slot>",
          default_attribute: "N/A",
          tip: "Use named slots to provide multiple insertion points in a Web Component.",
          note: "<slot> is part of the Web Components specification and works within Shadow DOM.",
          attributes: [
            { attribute: "name", description: "Specifies the slot's name for named slot assignment.", syntax_example: "<slot name=\"header\">" }
          ]
        }
      ]
    },
    {
      topic: "Head & Metadata",
      elements: [
        {
          element: "<!DOCTYPE html>",
          definition: "The HTML5 document type declaration. Tells the browser to render the page in standards mode.",
          syntax: "<!DOCTYPE html>\n<html lang=\"en\">\n  ...\n</html>",
          default_attribute: "N/A",
          tip: "Always place <!DOCTYPE html> as the very first line of every HTML document.",
          note: "This is the simplest doctype ever — compared to the long DOCTYPE strings required in HTML 4.",
          attributes: []
        },
        {
          element: "<noscript>",
          definition: "Defines fallback content for users who have disabled JavaScript or use a browser that does not support it.",
          syntax: "<noscript>\n  <p>Please enable JavaScript.</p>\n</noscript>",
          default_attribute: "N/A",
          tip: "In <head>, <noscript> can contain <link>, <style>, and <meta> elements for no-JS styling.",
          note: "When inside <body>, <noscript> can contain any flow content.",
          attributes: []
        }
      ]
    },
    {
      topic: "Scripting",
      elements: [
        {
          element: "data-* attributes",
          definition: "Custom data attributes that allow extra information to be stored on HTML elements without using non-standard attributes or extra DOM properties.",
          syntax: "<div data-user-id=\"42\" data-role=\"admin\">User</div>",
          default_attribute: "N/A",
          tip: "Access data attributes in JavaScript via element.dataset.userId (camelCase).",
          note: "Attribute names are case-insensitive in HTML but dataset properties are camelCase in JS.",
          attributes: [
            { attribute: "data-*", description: "Any custom name prefixed with data- stores metadata on the element.", syntax_example: "<button data-action=\"delete\">Delete</button>" }
          ]
        }
      ]
    }
  ]
};
