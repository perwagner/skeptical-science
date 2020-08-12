import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json


app_json = json.load(open('app.json', 'r'))

project_id = app_json['expo']['extra']['projectId']

# Use a service account
cred = credentials.Certificate('firebase_service_account.json')
firebase_admin.initialize_app(cred)
db = firestore.client()



articles = dict()


base_url = 'https://skepticalscience.com/'
url = 'https://skepticalscience.com/argument.php'
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
rows = soup.findAll("tr", {"class": "footnote"})




for row in rows:
    tds = row.findAll("td")
    id = tds[0].text
    title = tds[1].text.replace('"', '')

    url = tds[2].find('a', href=True)
    url_text = url.text
    url_href = url['href']

    articles[id] = {
        "title": title,
        "url_text": url_text,
        "href": base_url + url_href,
    }


for key, values in articles.items():
    title = values['title']
    url_text = values['url_text']
    url = values['href']

    doc_ref = db.collection('articles').document(key)
    doc_ref.set({
        'title': title,
        'url_text': url_text,
        'url': url
    })
