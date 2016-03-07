# -*- coding:utf-8 -*-
from django.core.urlresolvers import reverse


def site_info(request):
    return {'brand_logo': 'DemoSite',  # show in navbar
            'nav_list': (
                ),
            }
