# -*- coding:utf-8 -*-
from django import forms


class AuthForm(forms.Form):
    username = forms.CharField(label=u'用户名', max_length=100)
    password = forms.CharField(label=u'密码', max_length=100)
