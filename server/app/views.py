from django.http import HttpResponse
import json
import requests


def index(request):
    if request.method == 'GET':
        url = "https://weatherapi-com.p.rapidapi.com/current.json"

        querystring = {"q": "Vellore"}

        headers = {
            "X-RapidAPI-Key": "9d858542d8msh47906ce0cf5beabp18a90fjsn7c4697be1939",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        return HttpResponse(response)
