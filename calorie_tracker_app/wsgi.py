import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'calorie_tracker_app.settings')

application = get_wsgi_application()
