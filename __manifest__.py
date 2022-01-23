# -*- coding: utf-8 -*-
{
    'name': "tree_view",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'my_library'],

    "qweb": [
        "static/src/components/tree_item/TreeItem.xml",
        "static/src/xml/owl_tree_view.xml",
    ],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        "views/assets.xml",
        "views/my_library_views.xml",
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
