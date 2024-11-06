# Python
import os
import json
import datetime
from pathlib import Path

# Django
from django.utils import timezone
from django.core.management.base import BaseCommand

# Ojitos369
from ojitos369.utils import get_d, print_line_center, printwln as pln, print_json as pj
from ojitos369.text_format import TextFormat as TF

# User
from app.settings import MYE, prod_mode, ce

class MyBaseCommand(BaseCommand):
    def __init__(self):
        self.MYE = MYE
        self.response_mode = 'json'
        self.raise_error = True
        self.ce = ce

    def errors(self, e):
        try:
            raise e
        except MYE as e:
            error = self.ce.show_error(e)
            print_line_center(error)
        except Exception as e:
            error = self.ce.show_error(e, send_email=prod_mode)
            print_line_center(error)


    def handle(self, *args, **options):
        try:
            self.main(*args, **options)
        except Exception as e:
            self.errors(e)