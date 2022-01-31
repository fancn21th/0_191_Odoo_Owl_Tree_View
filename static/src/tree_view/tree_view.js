odoo.define("tree_view.TreeViewView", function (require) {
  "use strict";

  // Pulling the MVC parts
  const TreeViewController = require("tree_view.TreeViewController");
  const TreeViewModel = require("tree_view.TreeViewModel");
  const TreeViewRenderer = require("tree_view.TreeViewRenderer");
  const AbstractView = require("web.AbstractView");
  const core = require("web.core");
  // Our Renderer is an OWL Component so this is needed
  const RendererWrapper = require("web.RendererWrapper");
  const view_registry = require("web.view_registry");

  const _lt = core._lt;

  const TreeViewView = AbstractView.extend({
    accesskey: "m",
    display_name: _lt("TreeViewView"),
    icon: "fa-indent",
    config: _.extend({}, AbstractView.prototype.config, {
      Controller: TreeViewController,
      Model: TreeViewModel,
      Renderer: TreeViewRenderer,
    }),
    viewType: "tree_view",
    searchMenuTypes: ["filter", "favorite"],

    /**
     * @override
     */
    init: function () {
      this._super.apply(this, arguments);
    },

    getRenderer(parent, state) {
      state = Object.assign(state || {}, this.rendererParams);
      return new RendererWrapper(parent, this.config.Renderer, state);
    },
  });

  // Make the view of type "owl_tree" actually available and valid
  // if seen in an XML or an action.
  view_registry.add("tree_view", TreeViewView);

  return TreeViewView;
});
