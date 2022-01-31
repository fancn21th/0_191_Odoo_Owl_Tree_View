odoo.define(
  "tree_view/static/src/components/tree_item/TreeItem.js",
  function (require) {
    "use strict";
    const { Component } = owl;
    const patchMixin = require("web.patchMixin");

    const { useState } = owl.hooks;

    class TreeItem extends Component {
      /**
       * @override
       */
      constructor(...args) {
        super(...args);
        this.state = useState({});
      }
    }

    Object.assign(TreeItem, {
      components: { TreeItem },
      props: {
        item: {},
      },
      template: "tree_view.TreeItem",
    });

    return patchMixin(TreeItem);
  }
);
