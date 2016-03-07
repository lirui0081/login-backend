# -*- coding:utf-8 -*-
from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings

urlpatterns = patterns('',  # noqa
    url(r'^$', 'base.views.home', name='home'),
    url(r'^vivian/(.*)', 'base.views.vivian', name='vivian'),
    url('^accounts/', include('django.contrib.auth.urls')),
    url('^employee/', include('employee.urls')),
    url(r'^admin/', include(admin.site.urls)),
)


if settings.DEBUG:
    urlpatterns += patterns('',  # noqa
        url(r'^%s(?P<path>.*)$' % settings.MEDIA_URL.lstrip('/'),
            'django.views.static.serve',
            {'document_root': settings.MEDIA_ROOT,
             }
            ),
        url(r'^%s(?P<path>.*)$' % settings.STATIC_URL.lstrip('/'),
            'django.views.static.serve',
            {'document_root': settings.STATIC_ROOT,
             }
            ),
    )
