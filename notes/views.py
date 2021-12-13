from rest_framework.viewsets import ModelViewSet

from notes.models import Project, Todo
from notes.serializers import ProjectSerializer, TodoSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
