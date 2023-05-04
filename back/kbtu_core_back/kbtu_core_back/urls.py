from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from django.contrib import admin
from django.urls import path, include, re_path
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    # path('api/v1/token/', include('rest_framework.urls')),

    # path('api/v1/faculty/', FacultyClass.as_view()),
    # path('api-auth/category/<int:id>/', CategoryClass.as_view()),
    # path('api-auth/tutorial/', TutorialClass.as_view()),
    # path('api-auth/tutorial/<int:id>/', TutorialClass.as_view()),
    # path('api-auth/tutorial/filter/<int:id>', a1),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    # re_path(r'^auth/', include('rest_framework.urls')),
]
