from django.urls import path
from . import views

urlpatterns = [
    path('images/', views.getImages, name="images" ),
    path('images/<str:pk>', views.getImage, name="image" ),
]