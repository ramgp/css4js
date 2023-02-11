import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, p as set_style, n as attr, b as insert_hydration, C as noop, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, a as space, q as text, c as claim_space, r as claim_text, J as add_render_callback, H as append_hydration, K as set_input_value, L as select_option, M as listen, N as to_number, O as run_all, P as select_value } from "../../../../../chunks/index-5ff4d373.js";
const Bar_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true, class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      set_style(
        div,
        "--width",
        /*value*/
        ctx[0] + "%"
      );
      set_style(
        div,
        "--height",
        /*height*/
        ctx[1] + "px"
      );
      attr(div, "class", "svelte-r4ltpr");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*value*/
      1) {
        set_style(
          div,
          "--width",
          /*value*/
          ctx2[0] + "%"
        );
      }
      if (dirty & /*height*/
      2) {
        set_style(
          div,
          "--height",
          /*height*/
          ctx2[1] + "px"
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { value } = $$props;
  let { height } = $$props;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
  };
  return [value, height];
}
class Bar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$3, safe_not_equal, { value: 0, height: 1 });
  }
}
const BarWrapper_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  let bar;
  let current;
  bar = new Bar({
    props: {
      value: (
        /*value*/
        ctx[0]
      ),
      height: (
        /*height*/
        ctx[1]
      )
    }
  });
  return {
    c() {
      div = element("div");
      create_component(bar.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(bar.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-eisfww");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(bar, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const bar_changes = {};
      if (dirty & /*value*/
      1)
        bar_changes.value = /*value*/
        ctx2[0];
      if (dirty & /*height*/
      2)
        bar_changes.height = /*height*/
        ctx2[1];
      bar.$set(bar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(bar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(bar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(bar);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { value } = $$props;
  let { height } = $$props;
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
  };
  return [value, height];
}
class BarWrapper extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, { value: 0, height: 1 });
  }
}
const ProgressBar_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  let barwrapper;
  let t0;
  let p;
  let input;
  let t1;
  let select;
  let option0;
  let t2;
  let option1;
  let t3;
  let option2;
  let t4;
  let current;
  let mounted;
  let dispose;
  barwrapper = new BarWrapper({
    props: {
      value: (
        /*value*/
        ctx[1]
      ),
      height: (
        /*currentStyle*/
        ctx[2].height
      )
    }
  });
  return {
    c() {
      div = element("div");
      create_component(barwrapper.$$.fragment);
      t0 = space();
      p = element("p");
      input = element("input");
      t1 = space();
      select = element("select");
      option0 = element("option");
      t2 = text("Small");
      option1 = element("option");
      t3 = text("Medium");
      option2 = element("option");
      t4 = text("Large");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {
        style: true,
        role: true,
        "aria-valuenow": true,
        "aria-valuemin": true,
        "aria-valuemax": true,
        class: true
      });
      var div_nodes = children(div);
      claim_component(barwrapper.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      t0 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      input = claim_element(p_nodes, "INPUT", { type: true });
      t1 = claim_space(p_nodes);
      select = claim_element(p_nodes, "SELECT", {});
      var select_nodes = children(select);
      option0 = claim_element(select_nodes, "OPTION", {});
      var option0_nodes = children(option0);
      t2 = claim_text(option0_nodes, "Small");
      option0_nodes.forEach(detach);
      option1 = claim_element(select_nodes, "OPTION", {});
      var option1_nodes = children(option1);
      t3 = claim_text(option1_nodes, "Medium");
      option1_nodes.forEach(detach);
      option2 = claim_element(select_nodes, "OPTION", {});
      var option2_nodes = children(option2);
      t4 = claim_text(option2_nodes, "Large");
      option2_nodes.forEach(detach);
      select_nodes.forEach(detach);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(
        div,
        "--radius",
        /*currentStyle*/
        ctx[2].radius + "px"
      );
      set_style(
        div,
        "--padding",
        /*currentStyle*/
        ctx[2].padding + "px"
      );
      attr(div, "role", "progressbar");
      attr(
        div,
        "aria-valuenow",
        /*value*/
        ctx[1]
      );
      attr(div, "aria-valuemin", "0");
      attr(div, "aria-valuemax", "100");
      attr(div, "class", "svelte-feykao");
      attr(input, "type", "number");
      option0.__value = "small";
      option0.value = option0.__value;
      option1.__value = "medium";
      option1.value = option1.__value;
      option2.__value = "large";
      option2.value = option2.__value;
      if (
        /*size*/
        ctx[0] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[4].call(select)
        ));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(barwrapper, div, null);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, input);
      set_input_value(
        input,
        /*value*/
        ctx[1]
      );
      append_hydration(p, t1);
      append_hydration(p, select);
      append_hydration(select, option0);
      append_hydration(option0, t2);
      append_hydration(select, option1);
      append_hydration(option1, t3);
      append_hydration(select, option2);
      append_hydration(option2, t4);
      select_option(
        select,
        /*size*/
        ctx[0]
      );
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[3]
          ),
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[4]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const barwrapper_changes = {};
      if (dirty & /*value*/
      2)
        barwrapper_changes.value = /*value*/
        ctx2[1];
      if (dirty & /*currentStyle*/
      4)
        barwrapper_changes.height = /*currentStyle*/
        ctx2[2].height;
      barwrapper.$set(barwrapper_changes);
      if (!current || dirty & /*currentStyle*/
      4) {
        set_style(
          div,
          "--radius",
          /*currentStyle*/
          ctx2[2].radius + "px"
        );
      }
      if (!current || dirty & /*currentStyle*/
      4) {
        set_style(
          div,
          "--padding",
          /*currentStyle*/
          ctx2[2].padding + "px"
        );
      }
      if (!current || dirty & /*value*/
      2) {
        attr(
          div,
          "aria-valuenow",
          /*value*/
          ctx2[1]
        );
      }
      if (dirty & /*value*/
      2 && to_number(input.value) !== /*value*/
      ctx2[1]) {
        set_input_value(
          input,
          /*value*/
          ctx2[1]
        );
      }
      if (dirty & /*size*/
      1) {
        select_option(
          select,
          /*size*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(barwrapper.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(barwrapper.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(barwrapper);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(p);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let currentStyle;
  let value = 52;
  let size = "large";
  const styleFor = {
    small: { height: 8, padding: 0, radius: 4 },
    medium: { height: 12, padding: 0, radius: 4 },
    large: { height: 16, padding: 4, radius: 8 }
  };
  function input_input_handler() {
    value = to_number(this.value);
    $$invalidate(1, value);
  }
  function select_change_handler() {
    size = select_value(this);
    $$invalidate(0, size);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*size*/
    1) {
      $$invalidate(2, currentStyle = styleFor[size] || styleFor.medium);
    }
  };
  return [size, value, currentStyle, input_input_handler, select_change_handler];
}
class ProgressBar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let h2;
  let t0;
  let t1;
  let div;
  let progressbar;
  let current;
  progressbar = new ProgressBar({});
  return {
    c() {
      h2 = element("h2");
      t0 = text("Progress Bar");
      t1 = space();
      div = element("div");
      create_component(progressbar.$$.fragment);
      this.h();
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", {});
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Progress Bar");
      h2_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(progressbar.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-1b7omty");
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
      append_hydration(h2, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      mount_component(progressbar, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(progressbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progressbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h2);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      destroy_component(progressbar);
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
