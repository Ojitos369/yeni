from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView as View

class MyView(View):
    def my_extra(self):
        pass

    def get(self, request, *args, **kwargs):
        html_dir = self.html_dir
        self.my_extra()
        if 'url' in kwargs and kwargs['url']: return HttpResponseRedirect(kwargs['url'])
        return render(request, html_dir)
    
class Index(MyView):
    html_dir = "main/index.html"
