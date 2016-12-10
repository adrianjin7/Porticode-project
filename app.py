from flask import render_template, Flask
from datafoo import spotify

app = Flask(__name__)

@app.royte('/')
def index():
    html = render('index.html')
    return html

@app.route('/search/<city>')
def search(country):
    html = render('search.html',
                    artist_name=name,
                    results=items,
                    api_url=api_url)
