from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Image
from .serializers import ImageSerializer
# Create your views here.

@api_view(['GET'])
def getImages(request):
    images = Image.objects.all()
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getImage(request, pk):
    image = Image.objects.all(_id=pk)
    serializer = ImageSerializer(image,many=False)
    return Response(serializer.data)