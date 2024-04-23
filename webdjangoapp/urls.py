from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),

    path('aboutus', views.aboutus, name='aboutus'),
    path('contactus', views.contactus, name='contactus'),
    
    path('otherhotels', views.otherhotels, name='otherhotels'),


    path('ballyfinhotel', views.ballyfinhotel, name='ballyfinhotel'),



    path('havenhotel', views.havenhotel, name='havenhotel'),
    path('opulenthotel', views.opulenthotel, name='opulenthotel'),
    path('hotelfacilities', views.hotelfacilities, name='hotelfacilities'),

    path('hotelservices', views.hotelservices, name='hotelservices'),

    path('bookahotel', views.bookahotel, name='bookahotel'),

    path('termsandconditions', views.termsandconditions, name='termsandconditions'), 
    
    
    

      ]