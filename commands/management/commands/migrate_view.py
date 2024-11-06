import os
import re

from app.core.bases.commands import MyBaseCommand, pj, pln, TF, get_d
from app.settings import BASE_DIR

class Command(MyBaseCommand):

    def add_arguments(self, parser):

        parser.add_argument('-n', '--name', type=str, help='app name')
        parser.add_argument('-o', '--origin', type=str,
                            help='react build app path')
        parser.add_argument('-s', '--static', type=str,
                            help='django static path')
        parser.add_argument('-t', '--template', type=str,
                            help='django templates path')
        parser.add_argument('-rl', '--rl_localhost', type=str,
                            help='replace endpoint localhost with / default: true')

    def main(self, *args, **options):
        pwd = os.getcwd()
        name = options['name'] if options['name'] else 'main'

        react_build = options['origin'] if options['origin'] else os.path.join(
            BASE_DIR, 'front', 'dist')
        templates_dir = f"templates/{options['template']}" if options['template'] else os.path.join(
            BASE_DIR, 'templates')
        # os.path.join(BASE_DIR, 'static')
        static_dir = f"static/{options['static']}" if options['static'] else 'static/'
        replace_localhost = str(options['rl_localhost']) if str(
            options['rl_localhost']) != 'None' else 'T'
        replace_localhost = True if replace_localhost[0].lower() in (
            'y', 't', 's',) else False

        pln(f'react_build: {react_build}')
        pln(f'templates_dir: {templates_dir}')
        pln(f'static_dir: {static_dir}')

        os.chdir(pwd)

        loader = "{% load static %}"

        # copy build to static main
        try:
            os.system(f'rm -rf {static_dir}{name}/')
        except Exception as e:
            pass

        try:
            os.system(f'mkdir -p {static_dir}{name}/')
        except Exception as e:
            pass

        try:
            os.system(f'cp -rf {react_build}/* {static_dir}{name}')
            # pln('copy build to static/main')
        except Exception as e:
            pass
            # pln('error en')
            # pln(str(e))

        # mv index.html to templates main

        try:
            os.system(f'mkdir -p {templates_dir}/{name}')
        except Exception as e:
            pass

        try:
            os.system(f'touch {templates_dir}/{name}/index.html')
            os.system(f'rm {templates_dir}/{name}/index.html')
            # pln('reset templates/main/index.html')
        except Exception as e:
            os.system(f'rm {templates_dir}/{name}/index.html')
            # pln('reset templates/main/index.html')

        try:
            os.system(
                f'cp {static_dir}{name}/index.html {templates_dir}/{name}/')
            # pln('move index.html to templates/main/index.html')
        except Exception as e:
            pass
            # pln('error en')
            # pln(str(e))

        # add loader to index.html
        html = open(f'{templates_dir}/{name}/index.html', 'r').read()
        # pln(html)
        html = loader + html
        # pln(html)

        # replace all script and link like
        # <script src="./index.js"></script> -> <script src="{% static 'main/index.js' %}"></script>

        structure = '''((href|src)=")(?!http)(.?/)?(.+?..{2,5})(")'''
        for match in re.finditer(structure, html):
            #     print()
            #     print()
            #     pln(match.group(0))
            changes = match.group(1)+"{% static '" + str(
                f"{options['static']}/" if options['static'] else '') + name+"/"+match.group(4) + "' %}"+match.group(5)
            # pln(changes)
            changes = changes.replace('//', '/')
            html = html.replace(match.group(0), changes)
            # print()
            # print()
        
        # ---------------------------   ADD OPTION TO SHARE DATA FROM DJANGO TO REACT AT INIT WITH CONTEXT   --------------------------- #
        replaces = '''replaceAll('&#x27;', '"').replaceAll('True', 'true').replaceAll('False', 'false').replaceAll('None', 'null')'''
        to_add = '''<script>let from_init = {};try {from_init = "{{ data }}".''' + replaces + ''';from_init = from_init.toString();from_init = JSON.parse(`${from_init}`);} catch (error) {from_init = {};}</script>'''
        structure_for_script = '''(<title>.+?</title>)'''
        for match in re.finditer(structure_for_script, html):
            changes = match.group(1) + '\n' + to_add
            html = html.replace(match.group(0), changes)

        open(f'{templates_dir}/{name}/index.html', 'w').write(html)

        # ---------------------------------   FOR BUILD (like build with default)   --------------------------------- #
        if react_build.endswith('build') or react_build.endswith('build/'):
            # get js name
            files = os.listdir(f'{static_dir}{name}/static/js')
            # pln(files)
            file_name = ''
            js_files = []
            for file in files:
                if file.endswith('.js'):
                    js_files.append(file)
            # pln(file_name)

            for file_name in js_files:
                pln(file_name)
                # open js file
                js = open(
                    f'{static_dir}{name}/static/js/{file_name}', 'r').read()

                structure = '''(\w=)\w.\w\+"(static/)'''
                for match in re.finditer(structure, js):
                    new_name = f'{match.group(1)}"/{static_dir}{name}/{match.group(2)}'
                    new_name = new_name.replace('//', '/')
                    pln(match.group(0))
                    pln(new_name)
                    js = js.replace(match.group(0), new_name)
                open(f'{static_dir}{name}/static/js/{file_name}', 'w').write(js)

            if replace_localhost:
                js = open(
                    f'{static_dir}{name}/static/js/{file_name}', 'r').read()
                structure = '''https?://localhost(:\d+)?'''
                for match in re.finditer(structure, js):
                    pln(match.group(0))
                    js = js.replace(match.group(0), '')

                open(f'{static_dir}{name}/static/js/{file_name}', 'w').write(js)

        # ---------------------------------   FOR DIST (like build with Vite)   --------------------------------- #
        elif react_build.endswith('dist') or react_build.endswith('dist/'):
            # get js name
            files = os.listdir(f'{static_dir}{name}/assets')
            # pln(files)
            file_name = ''
            js_files = []
            for file in files:
                if file.endswith('.js'):
                    js_files.append(file)
            # pln(file_name)

            for file_name in js_files:
                pln(file_name)
                # open js file
                js = open(f'{static_dir}{name}/assets/{file_name}', 'r').read()

                structure = '''(")(/assets/.+?")'''
                for match in re.finditer(structure, js):
                    new_name = f'{match.group(1)}/{static_dir}{name}/{match.group(2)}'
                    new_name = new_name.replace('//', '/')
                    pln(match.group(0))
                    pln(new_name)
                    js = js.replace(match.group(0), new_name)

                open(f'{static_dir}{name}/assets/{file_name}', 'w').write(js)

                if replace_localhost:
                    js = open(
                        f'{static_dir}{name}/assets/{file_name}', 'r').read()
                    structure = '''https?://localhost(:\d+)?'''
                    for match in re.finditer(structure, js):
                        pln(match.group(0))
                        js = js.replace(match.group(0), '')

                    open(f'{static_dir}{name}/assets/{file_name}', 'w').write(js)

            # --------------------------------   css   -----------------
            file_name = ''
            css_files = []
            for file in files:
                if file.endswith('.css'):
                    css_files.append(file)
            # pln(file_name)

            for file_name in css_files:
                pln(file_name)
                # open js file
                css = open(
                    f'{static_dir}{name}/assets/{file_name}', 'r').read()

                structure = '''(url\(["|']?)(/assets/.+?["|']?\))'''
                for match in re.finditer(structure, css):
                    new_name = f'{match.group(1)}/{static_dir}{name}/{match.group(2)}'
                    new_name = new_name.replace('//', '/')
                    pln(match.group(0))
                    pln(new_name)
                    css = css.replace(match.group(0), new_name)
                open(f'{static_dir}{name}/assets/{file_name}', 'w').write(css)

        pln('Done')