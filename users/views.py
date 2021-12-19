from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet  # ModelViewSet
from rest_framework.mixins import UpdateModelMixin

from users.models import User
from users.serializers import UserSerializer


class UserModelViewSet(ReadOnlyModelViewSet, UpdateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer
