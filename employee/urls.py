# -*- coding:utf-8 -*-
from django.conf.urls import url


urlpatterns = (
    url(r'^$', 'employee.views.employee_list', name='employee_list'),
    url(r'^create$', 'employee.views.create', name='employee_create'),
    url(r'^(?P<pk>[0-9]+)$', 'employee.views.detail', name='employee_detail'),
)
