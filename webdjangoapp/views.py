from django.shortcuts import render, redirect
from .models import Contact
from .models import BookHotel

def contactus(request):

    if request.method == 'POST':
        contactname = request.POST['contactusname']

        contactsurname = request.POST['contactussurname']


        contactage = request.POST['contactusage']
        contactcitizenship = request.POST['contactuscitizenship']



        contactdescription = request.POST['contactusdescription']
        newcontact= Contact(contactname=contactname, contactsurname= contactsurname, contactage=contactage, contactcitizenship= contactcitizenship, contactdescription= contactdescription)

        newcontact.save()
    return render(request, 'contactus.html', {})


def bookahotel(request):

    if request.method == 'POST':
        bookahotelname = request.POST['bookahotelname']
        bookahotelage = request.POST['bookahotelage']
        bookahotelcitizenship = request.POST['bookahotelcitizenship']
        bookachosenhotel = request.POST['bookachosenhotel']
        bookahoteldescription = request.POST['bookahoteldescription']
       
        newhotelbooked= BookHotel(bookahotelname=bookahotelname, bookahotelage= bookahotelage, bookahotelcitizenship=bookahotelcitizenship, bookachosenhotel= bookachosenhotel, bookahoteldescription= bookahoteldescription)
        newhotelbooked.save()

    return render(request, "bookahotel.html", {})



def home(request):
    return render(request, "home.html", {})


def aboutus(request):
    return render(request, "aboutus.html", {})






def ballyfinhotel(request):
    return render(request, "ballyfinhotel.html", {})



def havenhotel(request):
    return render(request, "havenhotel.html", {})
def opulenthotel(request):
    return render(request, "opulenthotel.html", {})





def hotelfacilities(request):
    return render(request, "hotelfacilities.html", {})

def hotelservices(request):
    return render(request, "hotelservices.html", {})
def otherhotels(request):
    return render(request, "otherhotels.html", {})







def termsandconditions(request):
    return render(request, "termsandconditions.html", {})