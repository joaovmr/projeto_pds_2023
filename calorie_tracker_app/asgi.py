import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'calorie_tracker_app.settings')

application = get_asgi_application()
