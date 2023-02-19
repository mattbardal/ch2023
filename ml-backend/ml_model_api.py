from flask import Flask
from flask import request
import joblib
import numpy as np
from flask_cors import CORS, cross_origin
from flask import jsonify

app = Flask(__name__)
cors = CORS(app, origins="*", supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

SVR_MODEL = joblib.load('models/final_svr_2.pkl')
RFR_MODEL = joblib.load('models/final_rfr_2.pkl')
SCALER = joblib.load('models/scaler_2.pkl')


@app.route("/", methods=['POST'])
@cross_origin(supports_credentials=True)
def post():
    data = request.get_json()
    return jsonify({
        'actual': getCountryStaticData(data.get('country')),
        'prediction': generatePrediction(data.get('model'), data.get('params')),
        'model_stats': getModelStats(data.get('model'))
    })

def scale(params):
    return SCALER.transform(np.array(params).reshape(1, -1))

def getCountryStaticData(country):
    if country == "NL":
        return {
            1970: 28.4,
            1971: 28.4,	
            1972: 28.4,	
            1973: 28.4,	
            1974: 28.4,	
            1975: 28.4,	
            1976: 28.4,	
            1977: 28.4,	
            1978: 28.4,	
            1979: 28.4,	
            1980: 28.4,	
            1981: 28.4,	
            1982: 28.4,	
            1983: 28.4,	
            1984: 27.6,
            1985: 28,
            1986: 27.2,
            1987: 26.8,
            1988: 28.233,
            1989: 29.667,	
            1990: 31.1,
            1991: 30.867,
            1992: 30.633,	
            1993: 30.4,
            1994: 30.017,
            1995: 29.633,
            1996: 29.25,
            1997: 28.867,	
            1998: 28.483,	
            1999: 28.1,
            2000: 28.44,	
            2001: 28.78,
            2002: 29.12,
            2003: 29.46,
            2004: 29.8,
            2005: 29,
            2006: 30,	
            2007: 29.6,
            2008: 29.3,	
            2009: 27.9,	
            2010: 27.8,	
            2011: 27.8,	
            2012: 27.6,	
            2013: 28.1
        }
    elif country == "AU":
        return {
            1970: 31.3,
            1971: 31.3,
            1972: 31.3,
            1973: 31.3,
            1974: 31.3,
            1975: 31.3,
            1976: 31.3,
            1977: 31.3,
            1978: 31.3,
            1979: 31.3,
            1980: 31.3,
            1981: 31.3,
            1982: 31.6,
            1983: 31.9,
            1984: 32.2,
            1985: 32.5,
            1986: 32.675,
            1987: 32.85,
            1988: 33.025,
            1989: 33.2,
            1990: 33.1,
            1991: 33,
            1992: 32.9,
            1993: 32.8,
            1994: 32.7,
            1995: 32.6,
            1996: 32.75,
            1997: 32.9,
            1998: 33.05,
            1999: 33.2,
            2000: 33.35,
            2001: 33.5,
            2002: 33.5,
            2003: 33.5,
            2004: 33.1,
            2005: 33.675,
            2006: 34.25,
            2007: 34.825,
            2008: 35.4,
            2009: 35.05,
            2010: 34.7,
            2011: 34.7,
            2012: 34.7,
            2013: 34.7
        }
    else:
        return {
            1975: 33.3, 
            1981: 32.4,
            1987: 31.5,
            1991: 31.0,
            1994: 31.3,
            1997: 31.6,
            1998: 33.2,
            2000: 33.3,
            2004: 33.7,
            2007: 33.8,
            2010: 33.6,
            2012: 33.5,
            2013: 33.8,
            2014: 33.2,
            2015: 33.7,
            2016: 32.7,
            2017: 33.3
        }

def getModelStats(model):
    if model == 'svr':
        return {
            'MSE': 0.475,
            'RMSE': 0.689,
            'STD': 0.811,
        }
    else:
        return {
            'MSE': 0.138,
            'RMSE': 0.372,
            'STD': 0.247,
        }


def generatePrediction(model, params):
    if model == 'svr':
        current_model = SVR_MODEL
    else:
        current_model = RFR_MODEL
    print(current_model.predict(scale(params))[0])
    return current_model.predict(scale(params))[0]

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
