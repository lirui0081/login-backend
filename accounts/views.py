# -*- coding:utf-8 -*-
from django.http import JsonResponse
from django.contrib.auth.models import User

from rest_framework.decorators import api_view

from accounts.forms import AuthForm


err_codes = {
    0: u'login success',
    400: u'bad request. required: username, password',
    4031: u'user not exists',
    4032: u'username / password error',
    }


def _api_auth_response(err_code, user=None):
    msg = err_codes.get(err_code, 'Error')

    # get mission list
    if not user:
        missions = []
    else:
        missions = [{
            'task_type': m.get_task_type_display(),
            'locations': m.locations,
            'required': m.required,
            'desc': m.desc,
            } for m in user.stock_check_missions.all()]

    return JsonResponse({
        'err_code': err_code,
        'message': msg,
        'missions': missions,
        }, safe=False, charset='utf8')


@api_view(['GET', 'POST'])
def api_auth(request):
    raw_data = request.POST if request.method == "POST" \
        else request.GET

    form = AuthForm(raw_data)
    if not form.is_valid():
        return _api_auth_response(400)

    data = form.cleaned_data
    username, password = data['username'], data['password']

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return _api_auth_response(4031)
    else:
        if user.check_password(password):
            return _api_auth_response(0, user)
    return _api_auth_response(4032)
