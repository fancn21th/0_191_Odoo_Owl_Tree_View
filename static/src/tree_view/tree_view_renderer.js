odoo.define("tree_view.TreeViewRenderer", function (require) {
  "use strict";

  const AbstractRendererOwl = require("web.AbstractRendererOwl");
  const patchMixin = require("web.patchMixin");
  const QWeb = require("web.QWeb");
  const session = require("web.session");

  const { useState } = owl.hooks;

  class TreeViewRenderer extends AbstractRendererOwl {
    constructor(parent, props) {
      super(...arguments);
      this.qweb = new QWeb(this.env.isDebug(), { _s: session.origin });
      this.state = useState({
        localItems: props.items || [],
      });
    }

    willUpdateProps(nextProps) {
      Object.assign(this.state, {
        localItems: nextProps.items,
      });
    }
  }

  const components = {
    TreeItem: require("tree_view/static/src/components/tree_item/TreeItem.js"),
  };
  Object.assign(TreeViewRenderer, {
    components,
    defaultProps: {
      items: [],
    },
    props: {
      arch: {
        type: Object,
        optional: true,
      },
      items: {
        type: Array,
      },
      isEmbedded: {
        type: Boolean,
        optional: true,
      },
      noContentHelp: {
        type: String,
        optional: true,
      },
    },
    template: "tree_view.TreeViewRenderer",
  });

  return patchMixin(TreeViewRenderer);
});
