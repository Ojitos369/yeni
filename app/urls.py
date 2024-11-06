from django.urls import path, include

urlpatterns = [
    path('', include('views.urls')),
    path('api/', include('apis.urls')),
]