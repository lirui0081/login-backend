# -*- coding:utf-8 -*-
from django.db import models

import base.choices as CHOICES

from django.contrib.auth.models import User, Group


class Employee(models.Model):
    user = models.OneToOneField(User, related_name='work_profile')
    is_active = models.BooleanField(u'在职', default=True)

    is_group_admin = models.BooleanField(u'集团管理员', default=False)
    phone = models.CharField(u'电话', max_length=20,
                             help_text=u'登录系统的用户名，不能重复')
    name = models.CharField(u'姓名', max_length=100)

    title = models.CharField(max_length=100, verbose_name=u"职位")
    gender = models.IntegerField(u'性别', choices=CHOICES.C_GENDER, default=1)

    class Meta:
        verbose_name = u'员工资料'
        verbose_name_plural = verbose_name

        permissions = (
            ("can_create_employee", u'可新建员工'),
            )
