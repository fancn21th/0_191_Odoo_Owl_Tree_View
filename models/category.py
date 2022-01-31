from odoo import models, fields
from odoo.exceptions import UserError, ValidationError


class Category(models.Model):
    _name = 'tree_view.category'
    _description = "分类"
    _parent_name = "parent_id"

    name = fields.Char('Title', required=True)
    parent_id = fields.Many2one(
        'tree_view.category', '父类', index=True, ondelete='cascade')
    child_id = fields.One2many(
        'tree_view.category', 'parent_id', '子类')
