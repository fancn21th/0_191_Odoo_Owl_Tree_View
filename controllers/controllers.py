# -*- coding: utf-8 -*-
# from odoo import http


# class TreeView(http.Controller):
#     @http.route('/tree_view/tree_view/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/tree_view/tree_view/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('tree_view.listing', {
#             'root': '/tree_view/tree_view',
#             'objects': http.request.env['tree_view.tree_view'].search([]),
#         })

#     @http.route('/tree_view/tree_view/objects/<model("tree_view.tree_view"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('tree_view.object', {
#             'object': obj
#         })
