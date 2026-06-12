// html_guide_engine.js
// Single shared content divider model.
// Navigation stack replaces nested DOM building.
// HTML Versions → Topics → Elements → Element Lesson → Attributes

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

// ─── § 3  STATE ──────────────────────────────────────────────────────────────
const state = {
  current_version: null,
  history_stack: []
};

// ─── § 4  GET VERSION DATA ───────────────────────────────────────────────────
function get_version_data(version_name) {
  if (version_name === "HTML1") return html1_lessons;
  if (version_name === "HTML2") return html2_lessons;
  if (version_name === "HTML3") return html3_lessons;
  if (version_name === "HTML4") return html4_lessons;
  if (version_name === "HTML5") return html5_lessons;
  return null;
}

// ─── § 5  UPDATE NAV PATH ────────────────────────────────────────────────────
function update_nav_path(crumbs) {
  const nav_el = document.getElementById("nav-path");
  if (!nav_el) return;

  let html = '<span onclick="go_to_crumb(0)">HTML Guide</span>';
  crumbs.forEach(function(crumb, i) {
    html += '<span class="separator"> › </span>';
    html += '<span onclick="go_to_crumb(' + (i + 1) + ')">' + crumb + '</span>';
  });
  nav_el.innerHTML = html;
}

// ─── § 6  CRUMB NAVIGATION ───────────────────────────────────────────────────
function go_to_crumb(index) {
  if (index === 0) {
    state.history_stack = [];
    state.current_version = null;
    set_active_version_btn(null);
    render_welcome();
    update_nav_path([]);
    hide_back_btn();
    return;
  }

  const target = state.history_stack[index - 1];
  if (!target) return;
  state.history_stack = state.history_stack.slice(0, index);
  render_view(target);
}

// ─── § 7  PUSH AND RENDER ────────────────────────────────────────────────────
function push_and_render(view) {
  state.history_stack.push(view);
  render_view(view);
}

// ─── § 8  RENDER VIEW ────────────────────────────────────────────────────────
function render_view(view) {
  const scroll_area = document.getElementById("scroll-area");
  const heading = document.getElementById("content-heading");
  if (!scroll_area || !heading) return;

  scroll_area.innerHTML = "";
  heading.classList.remove("hidden");

  if (view.type === "topics") {
    render_topics_view(view, scroll_area, heading);
  } else if (view.type === "elements") {
    render_elements_view(view, scroll_area, heading);
  } else if (view.type === "lesson") {
    render_lesson_view(view, scroll_area, heading);
  }
}

// ─── § 9  VERSION BUTTON CLICK ───────────────────────────────────────────────
function on_version_click(version_name) {
  const version_obj = get_version_data(version_name);
  if (!version_obj) return;

  state.current_version = version_name;
  state.history_stack = [];

  set_active_version_btn(version_name);
  show_back_btn();

  const view = { type: "topics", version_obj: version_obj };
  push_and_render(view);
  update_nav_path([version_name]);
}

// ─── § 10  TOPICS VIEW ───────────────────────────────────────────────────────
function render_topics_view(view, scroll_area, heading) {
  const version_obj = view.version_obj;

  heading.textContent = "Lesson Topics";

  const sorted_topics = version_obj.topics
    ? version_obj.topics.slice().sort(function(a, b) {
        const ai = topic_order.indexOf(a.topic);
        const bi = topic_order.indexOf(b.topic);
        return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
      })
    : [];

  const ul = document.createElement("ul");
  ul.id = "lesson-topics-list";

  sorted_topics.forEach(function(topic_obj) {
    const li = document.createElement("li");
    li.textContent = topic_obj.topic;
    li.onclick = function() {
      on_topic_click(topic_obj, version_obj);
    };
    ul.appendChild(li);
  });

  scroll_area.appendChild(ul);
}

// ─── § 11  TOPIC CLICK ───────────────────────────────────────────────────────
function on_topic_click(topic_obj, version_obj) {
  const view = { type: "elements", topic_obj: topic_obj, version_obj: version_obj };
  push_and_render(view);
  update_nav_path([version_obj.version, topic_obj.topic]);
}

// ─── § 12  ELEMENTS VIEW ─────────────────────────────────────────────────────
function render_elements_view(view, scroll_area, heading) {
  const topic_obj = view.topic_obj;
  const version_obj = view.version_obj;

  heading.textContent = "Elements";

  const ol = document.createElement("ol");
  ol.id = "elements-list";

  topic_obj.elements.forEach(function(element_obj) {
    const li = document.createElement("li");
    li.textContent = element_obj.element;
    li.onclick = function() {
      on_element_click(element_obj, version_obj, topic_obj.topic);
    };
    ol.appendChild(li);
  });

  scroll_area.appendChild(ol);
}

// ─── § 13  ELEMENT CLICK ─────────────────────────────────────────────────────
function on_element_click(element_obj, version_obj, topic_name) {
  const view = {
    type: "lesson",
    element_obj: element_obj,
    version_obj: version_obj,
    topic_name: topic_name
  };
  push_and_render(view);
  update_nav_path([version_obj.version, topic_name, element_obj.element]);
}

// ─── § 14  LESSON VIEW ───────────────────────────────────────────────────────
function render_lesson_view(view, scroll_area, heading) {
  const element_obj = view.element_obj;

  heading.textContent = "Element Lesson";

  const div = document.createElement("div");
  div.id = "element-lesson";

  const ul = document.createElement("ul");
  ul.id = "element-lesson-titles";

  const titles = [
    { label: "Definition",    key: "definition",    type: "p"          },
    { label: "Attributes",    key: "attributes",    type: "attributes" },
    { label: "Syntax",        key: "syntax",        type: "code"       },
    { label: "Default Value", key: "default_value", type: "code"       },
    { label: "Tip",           key: "tip",           type: "p"          },
    { label: "Note",          key: "note",          type: "p"          }
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
  scroll_area.appendChild(div);
}

// ─── § 15  ATTRIBUTES LIST ───────────────────────────────────────────────────
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

// ─── § 16  TOGGLE LESSON CONTENT ─────────────────────────────────────────────
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

// ─── § 17  TOGGLE ATTRIBUTE CONTENT ──────────────────────────────────────────
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

// ─── § 18  BACK NAVIGATION ───────────────────────────────────────────────────
function show_previous() {
  state.history_stack.pop();

  if (state.history_stack.length === 0) {
    render_welcome();
    update_nav_path([]);
    hide_back_btn();
    set_active_version_btn(null);
    state.current_version = null;
    return;
  }

  const prev = state.history_stack[state.history_stack.length - 1];
  render_view(prev);
  rebuild_nav_path_from_stack();
}

// ─── § 19  REBUILD NAV PATH FROM STACK ───────────────────────────────────────
function rebuild_nav_path_from_stack() {
  const top = state.history_stack[state.history_stack.length - 1];
  if (!top) return;

  if (top.type === "topics") {
    update_nav_path([top.version_obj.version]);
  } else if (top.type === "elements") {
    update_nav_path([top.version_obj.version, top.topic_obj.topic]);
  } else if (top.type === "lesson") {
    update_nav_path([top.version_obj.version, top.topic_name, top.element_obj.element]);
  }
}

// ─── § 20  WELCOME / RESET ───────────────────────────────────────────────────
function render_welcome() {
  const scroll_area = document.getElementById("scroll-area");
  const heading = document.getElementById("content-heading");
  if (!scroll_area || !heading) return;

  heading.classList.add("hidden");
  heading.textContent = "";

  scroll_area.innerHTML = `
    <div id="welcome-message">
      <h3>Welcome to the HTML Guide</h3>
      <p>Tap a version button above to begin — HTML1 through HTML5.</p>
      <p>Each version contains topic categories. Tap a topic to see its elements, then tap an element to open its full lesson.</p>
      <p>Use the ← Back button or tap any link in the path above to return to a previous view.</p>
    </div>
  `;
}

// ─── § 21  VERSION BTN HELPERS ───────────────────────────────────────────────
function set_active_version_btn(version_name) {
  document.querySelectorAll(".version-btn").forEach(function(btn) {
    if (btn.dataset.version === version_name) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function show_back_btn() {
  const btn = document.getElementById("back-btn");
  if (btn) btn.classList.remove("hidden");
}

function hide_back_btn() {
  const btn = document.getElementById("back-btn");
  if (btn) btn.classList.add("hidden");
}

// ─── § 22  INIT ──────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".version-btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      on_version_click(btn.dataset.version);
    });
  });

  update_nav_path([]);
});
