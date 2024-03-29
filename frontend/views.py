from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, FileResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import json
from .models import *
from .config import DEFAULT_CONFIG

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
    
    client_id = req.get('credential')
    if not client_id:
        return HttpResponseBadRequest()
    
    create_config(client_id)
    response = HttpResponseRedirect("/")  
    client_id and response.set_cookie('clientid', client_id)
    return response

@csrf_exempt
@http_method_list(["POST"])
def google(request, **kwargs):
    client_id = request.POST['credential']

    response = HttpResponseRedirect("/")  
    response.set_cookie('clientid', client_id) 
    return response


@csrf_exempt
@http_method_list(["POST"])
def upload(request, **kwargs):
    if request.FILES.get('file') and request.POST.get('filename'):
        id = put_file(request.FILES.get('file'), filename=request.POST.get('filename'))
        
        if not id:
            return HttpResponseBadRequest()
    else:
        return HttpResponseBadRequest()

    return JsonResponse({"status": "success"})

@csrf_exempt
@http_method_list(["POST"])
def download(request, **kwargs):
    file = request.POST.get('filename') and get_grid_file(request.POST.get('filename'))

    if not file:
        return HttpResponseBadRequest()

    return FileResponse(file)

@http_method_list(["GET"])
def getconfig(request, **kwargs):
    clientid = request.COOKIES.get('clientid')
    config = get_config(clientid)

    if not config:
        return HttpResponseBadRequest()

    return JsonResponse(config)

@csrf_exempt
@http_method_list(["POST"])
def postconfig(request, **kwargs):
    # Validate the config here
    if not request.COOKIES.get('clientid'):
        return HttpResponseBadRequest()
    
    config = {}
    try:
        config = json.loads(request.POST.get('config'))
    except:
        return HttpResponseBadRequest()

    config["clientid"] = request.COOKIES.get('clientid')

    update_config(config)

    return HttpResponseRedirect("/")