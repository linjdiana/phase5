#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Chef, Review, Recipe

if __name__ == '__main__':
    fake = Faker()

    with app.app_context():
        users = []
        user1=User(name='12', email='di@blah.com', _password_hash='$2b$12$htA7zkYMHNiigaNWShm53.2rJiMX0HkjN8/2xYZTrROX2HxVrYF.G')
        users.append(user1)
        db.session.add_all(users)
        db.session.commit()


        # chefs = []
        # chef1 = Chef(name='Diana', image='', bio='pastries & chinese food')
        # chef2 = Chef(name='Gordon', image='', bio='yelling at you')
        # chef3 = Chef(name='Katya', image='', bio='italian')
        # chef4 = Chef(name='Tony', image='', bio='traveled extensively so lots of variety.')
        # chef5 = Chef(name='Amina', image='', bio='indian food & fresh californian cuisine, raised by a multicultural family')
        # chefs.append(chef1)
        # chefs.append(chef2)
        # chefs.append(chef3)
        # chefs.append(chef4)
        # chefs.append(chef5)
        # db.session.add_all(trainers)
        # db.session.commit()
