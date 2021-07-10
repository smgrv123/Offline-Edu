import base64
import cv2
import flask
from flask import Flask, request, render_template, redirect, url_for
from flask_cors import CORS
import json
from ibm_watson import SpeechToTextV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import io
import os
import numpy as np
from PIL import Image
from werkzeug.utils import secure_filename

##################### AUTH ##########################################
apikey = 'rBzgSxh8n35Dlc7-hTC5UkzydJoXmgsEpfy7_apcGiDQ'
url = 'https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/c2d65dda-b9cf-4270-97f8-0ac9c7af013a'
#####################################################################


app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'yipeee'
app.config['UPLOAD_PATH'] = './uploads' 
@app.route('/audio', methods = ['POST'])
def speech_to_text():  
  f = request.files['mp3']
  filename = secure_filename(f.filename)
  f.save(os.path.join(app.config['UPLOAD_PATH'], filename))
  path = os.path.join(app.config['UPLOAD_PATH'], filename)

  authenticator = IAMAuthenticator(apikey)
  stt = SpeechToTextV1(authenticator=authenticator)
  stt.set_service_url(url)
  with open(path, 'rb') as f:
      res = stt.recognize(audio=f, content_type='audio/mp3', model='en-US_NarrowbandModel', continuous=True).get_result()
  return res


@app.route('/image', methods=['POST'])
def image_to_String():
    inter = cv2.INTER_AREA
    og_img_path  = request.files['image'].read()
    npimg = np.fromstring(og_img_path, np.uint8)
    img = cv2.imdecode(npimg,cv2.IMREAD_COLOR)
    img = Image.fromarray(img.astype("uint8"))
    img = img.resize((round(img.size[0]*0.1), round(img.size[1]*0.1)))
    rawBytes = io.BytesIO()
    img.save(rawBytes, "JPEG")
    rawBytes.seek(0)
    img_base64 = base64.b64encode(rawBytes.read())
    return img_base64

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)