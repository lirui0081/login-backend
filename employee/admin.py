# -*- coding: utf-8-*-
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from employee.models import Employee


class EmployeeInline(admin.StackedInline):
    model = Employee
    can_delete = False


admin.site.unregister(User)


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    inlines = (EmployeeInline, )
