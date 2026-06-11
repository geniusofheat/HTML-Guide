// html_guide_engine.js
// Builds a nested inline toggle list:
// HTML Versions → Lesson Topics → Elements → Element Lesson → Attributes

// ─── § 1  VERSION ORDER ──────────────────────────────────────────────────────
const version_order = ["HTML1", "HTML2", "HTML3", "HTML4", "HTML5"];

// ─── § 2  TOPIC ORDER ────────────────────────────────────────────────────────
const topic_order = [
  "Document Structure",
  "Text & Formatting",
  "Headings",
  "Lists",
  "Links & Navigation",
  "Images & Media",
  "Tables",
  "Forms & Inputs",
  "Semantic Elements",
  "Scripting",
  "Head & Metadata",
  "Embedded Content",
  "Canvas & Graphics",
  "Audio & Video",
  "Interactive Elements",
  "Miscellaneous"
];

// ─── § 3  GET VERSION DATA ───────────────────────────────────────────────────
function get_version_data(version_name) {
  if (version_name === "HTML1") return html1_lessons;
  if (version_name === "HTML2") return html2_lessons;
  if (version_name === "HTML3") return html3_lessons;
  if (version_name === "HTML4") return html4_lessons;
  if (version_name === "HTML5") return html5_lessons;
  return null;
}

// ─── § 4  REMOVE ELEMENT BY ID (SAFE HIDE) ───────────────────────────────────
function remove_by_id(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

// ─── § 5  UPDATE NAV PATH ────────────────────────────────────────────────────
function update_nav_path(crumbs) {
  const nav_el = document.getElementById("nav-path");
  if (!nav_el) return;
  let html = "<span>HTML Quick Reference Guide</span>";
  crumbs.forEach(function(crumb) {
    html += '<span class="separator"> › </span><span>' + crumb + "</span>";
  });
  nav_el.innerHTML = html;
}

// ─── § 6  RENDER VERSION TOPICS LIST ─────────────────────────────────────────
function render_version_topics_list() {
  const main_el = document.querySelector("main");
  if (!main_el) return;

  const ul = document.getElementById("versions-topics-list");
  if (!ul) return;

  version_order.forEach(function(version_name) {
    const version_obj = get_version_data(version_name);
    if (!version_obj) return;

    const li = document.createElement("li");
    li.textContent = version_name;

    li.onclick = function() {
      li.classList.toggle("open");
      on_version_click(version_obj, li);
    };

    ul.appendChild(li);
  });

  update_nav_path([]);
}

// ─── § 7  VERSION CLICK ──────────────────────────────────────────────────────
function on_version_click(version_obj, clicked_li) {
  set_hidden("element-lesson", true);

  const existing = clicked_li.querySelector("#lesson-topics-list");
  if (!existing) {
    render_lesson_topics_list(version_obj, clicked_li);
  } else {
    existing.classList.toggle("hidden");
  }

  update_nav_path([version_obj.version]);
  document.getElementById("back-btn").classList.remove("hidden");
}

// ─── SAFE VISIBILITY ────────────────────────────────────────────────────────
function set_hidden(id, state) {
  const el = document.getElementById(id);
  if (!el) return;
  if (state) el.classList.add("hidden");
  else el.classList.remove("hidden");
}

// ─── § 8  LESSON TOPICS LIST ─────────────────────────────────────────────────
function render_lesson_topics_list(version_obj, clicked_li) {
  const ul = document.createElement("ul");
  ul.id = "lesson-topics-list";

  const header_li = document.createElement("li");
  header_li.textContent = "Lesson Topics";

  const elements_ol = document.createElement("ol");
  elements_ol.id = "elements-list";

  header_li.onclick = function(e) {
    e.stopPropagation();
    header_li.classList.toggle("open");
    elements_ol.classList.toggle("hidden");
  };

  elements_ol.classList.remove("hidden");

  const sorted_topics = version_obj.topics
    ? version_obj.topics.slice().sort(function(a, b) {
        const ai = topic_order.indexOf(a.topic);
        const bi = topic_order.indexOf(b.topic);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      })
    : [];

  sorted_topics.forEach(function(topic_obj) {
    const li = document.createElement("li");
    li.textContent = topic_obj.topic;

    li.onclick = function(e) {
      e.stopPropagation();
      li.classList.toggle("open");
      on_topic_click(topic_obj, version_obj, li);
    };

    elements_ol.appendChild(li);
  });

  header_li.appendChild(elements_ol);
  ul.appendChild(header_li);

  const static_items = [
    "version",
    "released",
    "definition",
    "what_it_introduced",
    "note",
    "tip"
  ];

  static_items.forEach(function(name) {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });

  clicked_li.appendChild(ul);
  update_nav_path([]);
}

// ─── § 9  TOPIC CLICK ────────────────────────────────────────────────────────
function on_topic_click(topic_obj, version_obj, clicked_li) {
  let elements_ol = clicked_li.querySelector("#element-lessons");

  if (!elements_ol) {
    render_elements(topic_obj, version_obj, clicked_li);
  } else {
    elements_ol.classList.toggle("hidden");
  }

  update_nav_path([version_obj.version, topic_obj.topic]);
}

// ─── § 10  ELEMENTS ──────────────────────────────────────────────────────────
function render_elements(topic_obj, version_obj, clicked_li) {
  let existing = clicked_li.querySelector("#element-lessons");

  if (existing) {
    existing.classList.remove("hidden");
    return;
  }

  const ol = document.createElement("ol");
  ol.id = "element-lessons";

  topic_obj.elements.forEach(function(element_obj) {
    const li = document.createElement("li");
    li.textContent = element_obj.element;
    li.onclick = function(e) {
      e.stopPropagation();
      li.classList.toggle("open");
      on_element_click(element_obj, version_obj, topic_obj.topic, li);
    };
    ol.appendChild(li);
  });

  clicked_li.appendChild(ol);
}

// ─── § 11  ELEMENT CLICK ─────────────────────────────────────────────────────
function on_element_click(element_obj, version_obj, topic_name, clicked_li) {
  const existing = clicked_li.querySelector("#element-lesson");
  if (existing) {
    existing.remove();
    return;
  }

  const other = document.getElementById("element-lesson");
  if (other) other.remove();

  render_element_lesson(element_obj, clicked_li);
  update_nav_path([version_obj.version, topic_name, element_obj.element]);
}

// ─── § 12  ELEMENT LESSON ────────────────────────────────────────────────────
function render_element_lesson(element_obj, container) {
  if (!container) return;

  const existing = document.getElementById("element-lesson");
  if (existing) existing.remove();

  const div = document.createElement("div");
  div.id = "element-lesson";

  div.addEventListener("click", function(e) {
    e.stopPropagation();
  });

  const ul = document.createElement("ul");
  ul.id = "element-lesson-titles";

  const titles = [
    { label: "Definition", key: "definition", type: "p" },
    { label: "Attributes", key: "attributes", type: "attributes" },
    { label: "Syntax", key: "syntax", type: "code" },
    { label: "Default Value", key: "default_value", type: "code" },
    { label: "Tip", key: "tip", type: "p" },
    { label: "Note", key: "note", type: "p" }
  ];

  titles.forEach(function(title) {
    const li = document.createElement("li");
    li.textContent = title.label;

    if (title.type === "attributes") {
      li.appendChild(render_attributes_list(element_obj));
    } else {
      li.onclick = function() {
        li.classList.toggle("open");
        toggle_lesson_content(li, element_obj[title.key], title.type);
      };
    }

    ul.appendChild(li);
  });

  div.appendChild(ul);
  container.appendChild(div);
}

// ─── § 13  ATTRIBUTES LIST ───────────────────────────────────────────────────
function render_attributes_list(element_obj) {
  const ul = document.createElement("ul");
  ul.id = "attributes-list";

  ul.addEventListener("click", function(e) {
    e.stopPropagation();
  });

  if (element_obj.attributes) {
    element_obj.attributes.forEach(function(a) {
      const li = document.createElement("li");
      li.textContent = a.attribute;

      li.onclick = function() {
        li.classList.toggle("open");
        toggle_attribute_content(li, a);
      };

      ul.appendChild(li);
    });
  }

  return ul;
}

// ─── § 14  TOGGLES ───────────────────────────────────────────────────────────
function toggle_lesson_content(li_el, content, type) {
  const existing = li_el.querySelector("p, code");
  if (existing) {
    existing.remove();
    return;
  }
  if (!content) return;

  const el = document.createElement(type === "code" ? "code" : "p");
  el.textContent = content;
  li_el.appendChild(el);
}

function toggle_attribute_content(li_el, attr_obj) {
  const existing = li_el.querySelector("p, code");
  if (existing) {
    existing.remove();
    return;
  }

  if (attr_obj.description) {
    const p = document.createElement("p");
    p.textContent = attr_obj.description;
    li_el.appendChild(p);
  }

  if (attr_obj.syntax_example) {
    const code = document.createElement("code");
    code.textContent = attr_obj.syntax_example;
    li_el.appendChild(code);
  }
}

// ─── § 15  BACK BUTTON ───────────────────────────────────────────────────────
function show_previous() {
  update_nav_path([]);
  document.getElementById("back-btn").classList.add("hidden");
}

// ─── § 16  INIT ──────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  render_version_topics_list();
});
