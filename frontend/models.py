from django.db import models

# Create your models here.



# Mongo Abstractions
from pymongo import MongoClient
import gridfs

connection_string = "mongodb+srv://pvenmo:H9Om9My78Rrcq7PP@pvenmo.3v7rs5d.mongodb.net/?retryWrites=true&w=majority&appName=PVenmo"

def count(cursor):
    x = 0
    for _ in cursor:
        x += 1
    return x

def get_col(collection='default', db='default'):
    client = MongoClient(connection_string)
    return client[db][collection]

def get_grid(db='gridfs'):
    client = MongoClient(connection_string)
    return gridfs.GridFS(client[db])

def put_file(file, filename):
    """
    Return an id if the file could be uploaded.
    Return false otherwise.

    file = request.FILES.get('file')
    """
    if count(get_col('fs.files', 'gridfs').find({"filename": filename})) != 0:
        return False

    fs = get_grid()
    id = fs.put(file, filename=filename)
    return id

def get_grid_file(filename):
    """
    Return the file with the provided filename.
    """
    # Get an id first
    name = ""
    id = ""
    curs = get_col('fs.files', 'gridfs').find({'filename': filename or ""})
    for obj in curs:
        id = obj.get('_id')
    
    if not id:
        return False

    fs = get_grid()
    file = fs.get(id)
    return file

def insert_doc(docs: list[dict], collection='default'):
    coll = get_col(collection)
    return coll.insert_many(docs)

def find_doc(query, collection='default'):
    coll = get_col(collection)
    return coll.find(query)

def update_doc(query, update, collection='default'):
    coll = get_col(collection)
    return coll.update_many(query, update)