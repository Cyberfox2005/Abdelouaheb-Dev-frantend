from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    RegisterView,
    MeView,
    ServiceListView,
    OrderCreateView,
    MyOrdersListView,
    OrderStatusUpdateView
)

urlpatterns = [
    # Auth endpoints
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/me/', MeView.as_view(), name='user_me'),

    # Services endpoints
    path('services/', ServiceListView.as_view(), name='service_list'),

    # Orders endpoints
    path('orders/', OrderCreateView.as_view(), name='order_create'),
    path('orders/my-orders/', MyOrdersListView.as_view(), name='my_orders'),
    path('orders/<int:id>/status/', OrderStatusUpdateView.as_view(), name='order_status_update'),
]
