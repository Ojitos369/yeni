from django.urls import path

from .views import Index

app_name = 'views'
urlpatterns = [
    path('', Index.as_view(), name=f'{app_name}_index'),
]