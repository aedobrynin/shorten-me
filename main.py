from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from models import db
import bjoern

app = Flask(__name__)
app.config['SECRET_KEY'] = 'change_me_when_it_is_not_a_dev'
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./database.db'

db.init_app(app)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/shorten/', methods=['POST'])
def shorten():
    return 'kek'


@app.route('/<shortened>', methods=['GET'])
def get(shortened: str):
    return shortened


if __name__ == "__main__":
    bjoern.run(app, '127.0.0.1', 8000)
