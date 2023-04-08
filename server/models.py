from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from config import db, bcrypt

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String)
    _password_hash = db.Column(db.String)

    @validates('name')
    def validates_name(self, key, value):
        names_list = User.query.all()
        names = [name.name for name in names_list]
        if value in names:
            raise ValueError('Name already exists') 
        return value

    @validates('email')
    def validates_email(self, key, value):
        emails_list = User.query.all()
        emails = [email.email for email in emails_list]
        if value in emails:
            raise ValueError('Email already exists') 
        return value

    @hybrid_property 
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))
    
    # reviews = db.relationship('Review', backref='user')

class Chef(db.Model, SerializerMixin):
    __tablename__ = 'chefs'
    id = db.Column(db.Integer, primary_key=True)

    name=db.Column(db.String)
    image=db.Column(db.String)
    bio=db.Column(db.String)

    review = db.relationship('Review', backref='chef')

    def validates_chef_id(self, key, value):
        chefs = Chef.query.all()
        chef_ids = [chef.id for chef in chefs]
        if not value in chef_ids:
            raise ValueError("Not a chef... yet!")
        return value

class Recipe(db.Model, SerializerMixin):
    __tablename__ = 'recipes'
    id = db.Column(db.Integer, primary_key=True)

    title=db.Column(db.String)
    image=db.Column(db.String)
    description=db.Column(db.String)
    chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'))

    chef = db.relationship('Chef', backref='recipe')

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)

    user = db.Column(db.String)
    chef_id = db.Column(db.Integer, db.ForeignKey('chefs.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    rating = db.Column(db.Integer)
    text = db.Column(db.String)