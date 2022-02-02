// odoo.define("tree_view.TreeViewController", function (require) {
//   "use strict";

//   var AbstractController = require("web.AbstractController");

//   var TreeViewController = AbstractController.extend({
//     custom_events: _.extend({}, AbstractController.prototype.custom_events, {}),

//     /**
//      * @override
//      * @param parent
//      * @param model
//      * @param renderer
//      * @param {Object} params
//      */
//     init: function (parent, model, renderer, params) {
//       this._super.apply(this, arguments);
//     },
//   });

//   return TreeViewController;
// });

odoo.define("tree_view.TreeViewController", function (require) {
  "use strict";

  var AbstractController = require("web.AbstractController");

  var OWLTreeController = AbstractController.extend({
    // We register the custom_events here
    custom_events: _.extend({}, AbstractController.prototype.custom_events, {
      // The TreeItem event we triggered
      tree_item_clicked: "_onTreeItemClicked",
    }),

    /**
     * @override
     * @param parent
     * @param model
     * @param renderer
     * @param {Object} params
     */
    init: function (parent, model, renderer, params) {
      this._super.apply(this, arguments);
    },

    /**
     * When an item is clicked the controller call the Model to fetch
     * the item's children and display them in the tree via the call
     * to the update() function.
     *
     * @param {Object} ev
     * @param {Object} ev.data contains the payload
     */
    _onTreeItemClicked: async function (ev) {
      ev.stopPropagation();
      await this.model.expandChildrenOf(
        ev.data.data.id,
        ev.data.data.parent_path
      );
      this.update({}, { reload: false });
    },
  });

  return OWLTreeController;
});
