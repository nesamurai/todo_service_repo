from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from notes.filters import ProjectFilter
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
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    pagination_class = TodoPagination

    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

    def get_queryset(self):
        project = self.request.query_params.get('project', '')
        todos = Todo.objects.all()
        if project:
            todos = Todo.objects.filter(project=project)
        return todos
