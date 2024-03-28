from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, FileResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from .models import *

import json

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
    identity = request.COOKIES.get('clientid')
    
    if identity is not None:
        return render(request, "frontend/venmo.html")
    return render(request, "frontend/index.html")

# API Routes
@csrf_exempt
@http_method_list(["POST"])
def login(request, **kwargs):
    req = json.loads(request.body)
    
    client_id = req.get('credential', False)

    response = HttpResponseRedirect("/")  
    client_id and response.set_cookie('clientid', client_id)
    return response

@csrf_exempt
@http_method_list(["POST"])
def google(request, **kwargs):
    client_id = request.POST['credential']

    # Create in Database all default values here
    # from pymongo import MongoClient

    # client = MongoClient(connection_string)
    # mongo_db = client['sample_medicines']
    # coll = mongo_db["medicinedetails"]

    # medicine_1 = {
    #     "medicine_id": "RR000123456",
    #     "common_name" : "Paracetamol",
    #     "scientific_name" : "",
    #     "available" : "Y",
    #     "category": "fever"
    # }

    # coll.insert_many([medicine_1])

    response = HttpResponseRedirect("/")  
    response.set_cookie('clientid', client_id) 
    return response


@csrf_exempt
@http_method_list(["POST"])
def upload(request, **kwargs):
    status = True

    if request.FILES.get('file') and request.POST.get('filename'):
        id = put_file(request.FILES.get('file'), filename=request.POST.get('filename'))
        
        if not id:
            status = False
    else:
        status = False

    return JsonResponse({'status': status})

@csrf_exempt
@http_method_list(["POST"])
def download(request, **kwargs):
    file = request.POST.get('filename') and get_grid_file(request.POST.get('filename'))

    if not file:
        return HttpResponseBadRequest()

    return FileResponse(file)