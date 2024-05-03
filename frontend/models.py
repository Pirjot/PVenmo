from django.db import models
from .config import DEFAULT_CONFIG

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

def insert_doc(docs: list[dict], collection='default'):
    coll = get_col(collection)
    return coll.insert_many(docs)

def find_doc(query, collection='default'):
    coll = get_col(collection)
    return coll.find(query)

def update_doc(query, update, collection='default'):
    coll = get_col(collection)
    return coll.update_many(query, update)

# GridFS specific methods
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
    id = ""
    curs = get_col('fs.files', 'gridfs').find({'filename': filename or ""})
    for obj in curs:
        id = obj.get('_id')
    
    if not id:
        return False

    fs = get_grid()
    file = fs.get(id)
    return file

# App specific methods
def get_config(clientid):
    print(f'Client id {clientid}')
    
    config = None
    for obj in find_doc({"clientid": clientid or ""}):
        config = obj
        del config["clientid"]
        del config["_id"]
        break
    
    print(f'Got config ${config or False}')
    return config or False

def create_config(client_id):
    from copy import deepcopy
    new_config = deepcopy(DEFAULT_CONFIG)
    new_config["clientid"] = client_id
    insert_doc([new_config])

def update_config(config):
    print("Updating config")
    print(config)
    print(update_doc({"clientid": config["clientid"]}, {"$set": config}))