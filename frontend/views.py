from django.http import HttpResponse
from django.shortcuts import render

def http_method_list(methods):
    def http_methods_decorator(func):
        def function_wrapper(request, **kwargs):
            upper_methods = [method.upper() for method in methods]
            if not request.method.upper() in upper_methods:
                return HttpResponse(status=405)

            return func(request, **kwargs)
        return function_wrapper
    return http_methods_decorator

# Main Page
def indexView(request, *args, **kwargs):
    return render(request, "frontend/index.html") 

# API Routes
@http_method_list(["GET"])
def route1(request, **kwargs):
    return HttpResponse('GET request')