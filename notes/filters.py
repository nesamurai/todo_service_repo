from django_filters import rest_framework as filters

from notes.models import Project

# GET /api/projects/?filter=React не знаю как задасть поиск в строке по части
class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['title']
