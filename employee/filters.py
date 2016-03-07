# -*- coding:utf-8 -*-
import django_filters

from employee.models import Employee


class EmployeeFilter(django_filters.FilterSet):
    class Meta:
        model = Employee
        fields = {'is_active': ['exact'],
                  'name': ['contains'],
                  'phone': ['contains'],
                  }
