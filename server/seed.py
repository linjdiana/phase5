import hashlib
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

if __name__ == '__main__':
    fake = Faker()

    with app.app_context():
        users = []
        user1=User(name='Roberto', email='CEO@bobsburgers.com', _password_hash=hashlib.sha256(b"hello1").hexdigest())
        users.append(user1)
        user2=User(name='John', email='john@applebees.com', _password_hash=hashlib.sha256(b"orangessuck").hexdigest())
        users.append(user2)
        user3=User(name='diana', email='diana', _password_hash=hashlib.sha256(b"12345").hexdigest())
        users.append(user3)
        user4=User(name='GordonRamsay', email='gordon@meditating.com', _password_hash=hashlib.sha256(b"meditatingsux").hexdigest())
        users.append(user4)
        user5=User(name='Antonio', email='tony@bourdain.com', _password_hash=hashlib.sha256(b"imstillhere").hexdigest())
        users.append(user5)
        user6=User(name='Julia', email='CEO@applebees.com', _password_hash=hashlib.sha256(b"aheadofthejohns").hexdigest())
        users.append(user6)
        user7=User(name='dianasbiggestfan', email='chef@michelin.com', _password_hash=hashlib.sha256(b"dianarocks").hexdigest())
        users.append(user7)

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
