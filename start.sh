#!/bin/bash
(trap 'kill 0' SIGINT; npm run dev & python3 manage.py runserver)