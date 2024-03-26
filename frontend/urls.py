from django.urls import path
from .views import *

urlpatterns = [
    path('', indexView),
    # path('api/route1', route1),
    path('google', google),
    path('login', login)
]