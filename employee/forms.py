# -*- coding:utf-8 -*-
from django import forms
from django.forms import ModelForm

from django.contrib.auth.models import User, Group
from employee.models import Employee


class EmployeeForm(ModelForm):
    password1 = forms.CharField(label=u'密码', max_length=100)
    password2 = forms.CharField(label=u'确认密码', max_length=100)
    roles = forms.ModelMultipleChoiceField(queryset=Group.objects.all())

    def clean(self):
        if self.cleaned_data.get('password1', None) \
                != self.cleaned_data.get('password2', None):
            raise forms.ValidationError(u'两次密码不一致')

    def clean_phone(self):
        phone = self.cleaned_data.get('phone', '')
        try:
            User.objects.get(username=phone)
        except User.DoesNotExist:
            pass
        else:
            raise forms.ValidationError(u'该手机号已被使用')
        return phone

    class Meta:
        model = Employee
        exclude = ('user', )
