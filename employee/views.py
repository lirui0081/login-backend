# -*- coding:utf-8 -*-
from django.template import RequestContext
from django.shortcuts import render_to_response, get_object_or_404

from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

from django.core.exceptions import PermissionDenied
from django.contrib.auth.decorators import permission_required, login_required

from django.contrib.auth.models import User
from employee.forms import EmployeeForm
from employee.models import Employee
from employee.filters import EmployeeFilter


@login_required()
def employee_list(request):
    queryset = Employee.objects.all()

    content = {
        'employee': EmployeeFilter(request.GET, queryset=queryset),
        'selected': request.GET.get('is_active') or '1',
        'filters': (
            ('1', '全部'),
            ('2', '在职'),
            ('3', '离职'),
            ),
        'search_fields': (
            ('name__contains', u'姓名',
                request.GET.get('name__contains') or ''),
            ('phone__contains', u'手机号',
                request.GET.get('phone__contains') or ''),
            ),
        }
    return render_to_response('employee-manage.html',
                              RequestContext(request, content))


@permission_required('employee.can_create_employee', raise_exception=True)
def create(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST)
        if form.is_valid():
            obj = form.save(commit=False)

            # create user and set permissions
            obj.user = User.objects.create_user(
                username=form.cleaned_data['phone'],
                password=form.cleaned_data['password1'])
            obj.user.groups.add(*form.cleaned_data['roles'].all())

            # set default info of work profile
            obj.is_active = True
            obj.is_group_admin = False

            # save employee and many_to_many relationships
            obj.save()
            form.save_m2m()
            return HttpResponseRedirect(reverse('employee_list'))
    else:
        form = EmployeeForm()

    # print form.errors
    return render_to_response('employee-add.html',
                              RequestContext(request, {
                                  'form': form,
                                  }))


@login_required()
def detail(request, pk):
    p = get_object_or_404(Employee, pk=pk)

    return render_to_response('employee-detail.html',
                              RequestContext(request, {
                                  'employee': p,
                                  }))
