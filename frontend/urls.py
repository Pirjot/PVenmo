from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', indexView),
    # path('api/route1', route1),
    path('google', google),
    path('login', login),
    path('upload', upload),
    path('download', download)
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
