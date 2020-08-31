from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Url(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hash = db.Column(db.String(8), unique=True, primary_key=True)
    forward_to = db.Column(db.Text(), unique=True, primary_key=True)
