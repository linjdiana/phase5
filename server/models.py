from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    @hybrid_property 
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

# class Chef(db.Model, SerializerMixin):
#     __table__name = 'chefs'
#     id = db.Column(db.Integer, primary_key=True)

#     name=db.Column(db.String)
#     image=db.Column(db.String)
#     bio=db.Column(db.String)

# class Recipe(db.Model, SerializerMixin):
#     __table__name = 'recipes'
#     id = db.Column(db.Integer, primary_key=True)

#     title=db.Column(db.String)
#     image=db.Column(db.String)
#     ingredients=db.Column(db.String)
#     Recipe=db.Column(db.String)
#     chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'))

# class Review(db.Model, SerializerMixin):
#     __table__name = 'reviews'
#     id = db.Column(db.Integer, primary_key=True)

#     user = db.Column(db.String)
#     chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'))
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     rating = db.Column(db.Integer)
#     text = db.Column(db.String)