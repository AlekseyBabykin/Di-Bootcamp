from rest_framework import permissions



class IsOwnerPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in ['GET', 'POST']:
            return request.user.is_authenticated
        elif request.method in ['PUT', 'DELETE']:
            if request.user.is_authenticated:
                return request.user.is_staff
    
    # def has_object_permission(self, request, view, obj):
    #     if request.method in ['PUT', 'DELETE']:
    #         return obj.department==request.user