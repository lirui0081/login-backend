#!/bin/bash

rm -f db.sqlite3

python manage.py migrate
python manage.py createsuperuser --username=jackon --email=jiekunyang@gmail.com
