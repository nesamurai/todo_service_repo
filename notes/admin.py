from django.contrib import admin

from notes.models import Project, Todo


admin.site.register(Project)
admin.site.register(Todo)
