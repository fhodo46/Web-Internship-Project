from django.db import models

class Contact(models.Model):
    contactname= models.CharField(max_length=150, null=False, blank=False)
    contactsurname= models.CharField(max_length=150, null=False, blank=False)

    contactage= models.IntegerField(null=False, blank=False)
    contactcitizenship = models.CharField(max_length=150, null=False, blank=False)

    contactdescription = models.TextField()


    def __str__(self):
        return self.contactname
    


class BookHotel(models.Model):
    bookahotelname = models.CharField(max_length=150, null=False, blank=False)
    
    bookahotelage= models.IntegerField(null=False, blank=False)
    bookahotelcitizenship= models.CharField(max_length=150, null=False, blank=False)
    bookachosenhotel = models.CharField(max_length=150, null=False, blank=False)
    
    bookahoteldescription = models.TextField()

    def __str__(self):
        return self.bookahotelname