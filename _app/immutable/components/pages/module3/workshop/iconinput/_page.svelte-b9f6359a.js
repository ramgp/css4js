import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, b as insert_hydration, H as append_hydration, C as noop } from "../../../../../chunks/index-5ff4d373.js";
function create_fragment(ctx) {
  let h2;
  let t;
  return {
    c() {
      h2 = element("h2");
      t = text("Icon Input");
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", {});
      var h2_nodes = children(h2);
      t = claim_text(h2_nodes, "Icon Input");
      h2_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
      append_hydration(h2, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h2);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
