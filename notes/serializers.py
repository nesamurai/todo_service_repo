from rest_framework.serializers import ModelSerializer

from notes.models import Project, Todo
from users.models import User
from users.serializers import UserSerializer


class ProjectSerializer(ModelSerializer):
    users = UserSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoSerializer(ModelSerializer):
    project = ProjectSerializer()
    user = UserSerializer()

    class Meta:
        model = Todo
        fields = '__all__'
