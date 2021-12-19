from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet

from notes.models import Project, Todo
from notes.serializers import ProjectSerializer, TodoSerializer


class ProjectPagination(LimitOffsetPagination):
    default_limit = 10


class TodoPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectPagination


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    pagination_class = TodoPagination
