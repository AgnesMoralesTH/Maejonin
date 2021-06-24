from django.db import models

# Create your models here.
class Image(models.Model):
    image = models.ImageField(null=True, blank=False)
    name = models.CharField(max_length=200)
    description = models.TextField()
    created = models.CharField(max_length=200)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name