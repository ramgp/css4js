import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop } from "../../chunks/index-5ff4d373.js";
import { b as base } from "../../chunks/paths-2f3d70da.js";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  let t3;
  let ul;
  let li0;
  let a0;
  let t4;
  let t5;
  let li1;
  let a1;
  let t6;
  let t7;
  let li2;
  let a2;
  let t8;
  return {
    c() {
      h1 = element("h1");
      t0 = text("CSS 4 JS");
      t1 = space();
      p = element("p");
      t2 = text("Exercises and workshops");
      t3 = space();
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t4 = text("Progress Bar");
      t5 = space();
      li1 = element("li");
      a1 = element("a");
      t6 = text("Select");
      t7 = space();
      li2 = element("li");
      a2 = element("a");
      t8 = text("Icon Input");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "CSS 4 JS");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Exercises and workshops");
      p_nodes.forEach(detach);
      t3 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Progress Bar");
      a0_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t5 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "Select");
      a1_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      t7 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "Icon Input");
      a2_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", base + "/module3/workshop/progressbar");
      attr(a1, "href", base + "/module3/workshop/select");
      attr(a2, "href", base + "/module3/workshop/iconinput");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, ul, anchor);
      append_hydration(ul, li0);
      append_hydration(li0, a0);
      append_hydration(a0, t4);
      append_hydration(ul, t5);
      append_hydration(ul, li1);
      append_hydration(li1, a1);
      append_hydration(a1, t6);
      append_hydration(ul, t7);
      append_hydration(ul, li2);
      append_hydration(li2, a2);
      append_hydration(a2, t8);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(ul);
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
