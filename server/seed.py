import hashlib
from random import randint, choice as rc
from faker import Faker

from app import app
from models import db, User, Chef

if __name__ == '__main__':
    fake = Faker()

    with app.app_context():
        Chef.query.delete()

        users = []
        user1=User(name='Roberto', email='CEO@bobsburgers.com', password_hash=hashlib.sha256(b"hello1").hexdigest())
        users.append(user1)
        user2=User(name='John', email='john@applebees.com', password_hash=hashlib.sha256(b"orangessuck").hexdigest())
        users.append(user2)
        user3=User(name='diana', email='diana', password_hash=hashlib.sha256(b"12345").hexdigest())
        users.append(user3)
        user4=User(name='GordonRamsay', email='gordon@meditating.com', password_hash=hashlib.sha256(b"meditatingsux").hexdigest())
        users.append(user4)
        user5=User(name='Antonio', email='tony@bourdain.com', password_hash=hashlib.sha256(b"imstillhere").hexdigest())
        users.append(user5)
        user6=User(name='Julia', email='CEO@applebees.com', password_hash=hashlib.sha256(b"aheadofthejohns").hexdigest())
        users.append(user6)
        user7=User(name='dianasbiggestfan', email='chef@michelin.com', password_hash=hashlib.sha256(b"dianarocks").hexdigest())
        users.append(user7)

        db.session.add_all(users)
        db.session.commit()

        chefs = []
        chef1 = Chef(name='Diana', image='https://i.etsystatic.com/24621230/r/il/3ed751/4000472662/il_1588xN.4000472662_8jga.jpg', bio='Born in China and raised in the United States, and having spent most of her 20s traveling, her style of cooking is a combination of American and just a little bit Chinese. She\'s also an avid baker who can whip up any pastry you\'d like, including the protein bars that she makes in bulk for herself. Expect her to come to your house with a dish of tomato pasta with curry sauce and lots of cumin, and if you\'re lucky you may even get to try some of her home-made dumplings! ')
        chef2 = Chef(name='Gordon', image='https://i.etsystatic.com/24621230/r/il/3ed751/4000472662/il_1588xN.4000472662_8jga.jpg', bio='Gordon was named after his name-sake because his mother\'s was pregnant with him when their family restaurant in Sicily was saved by Gordon Ramsay. This was famously shown on one of the episodes of "Kitchen Nightmares," and the team here at Fuber is always glad to go to Gordon\'s family home to be embraced by their warm hospitality. I think you\'d also love the hospitality that Gordon provides (he is truly nothing like the other Gordon!) and you\'ll be even more grateful to try him family recipes. Why go to Italy when Gordon can make you and 10 of your friends the best annelletti you have ever had followed by a warm cannoli?')
        chef3 = Chef(name='Joon', image='https://i.etsystatic.com/24621230/r/il/3ed751/4000472662/il_1588xN.4000472662_8jga.jpg', bio='Joon is a data scientist by day, and a sushi chef by night. Diana and Joon met through their love of food andd started this company together. Joon sources the best ingredients from the restaurant suppliers in the city and is never unwilling to drive far for fresh fish! He\'s also a regular at the Japanese restaurant in the city, and will always pick up the best Japanese snacks after for you.')
        chef4 = Chef(name='Tony', image='https://i.etsystatic.com/24621230/r/il/3ed751/4000472662/il_1588xN.4000472662_8jga.jpg', bio='Having grown up in Texas, Tony\'s standards for barbeque are incredibly high, which you\'ll know the moment you taste his brisket. He chugs beer and eats a lot of meat, and is also the funniest guy you\'ll ever meet (meat?)!')
        chef5 = Chef(name='Anika', image='https://i.etsystatic.com/24621230/r/il/3ed751/4000472662/il_1588xN.4000472662_8jga.jpg', bio='Anika is an Indian-American who grew up in a multicultural home -- Californian father and Indian mother, so she grew up going to farmers markets on weekends and on weekdays preparing fresh naan with her mother. Her cooking style is the same -- she will source the absolute freshest ingredients for an herby salad, and while the curry is stewing on the stove top, she\'ll share all the wild stories of her travels around the world. If you\'re lucky, you may even get to go to her home and eat naan fresh out of her clay tandoor oven!')
        chefs.append(chef1)
        chefs.append(chef2)
        chefs.append(chef3)
        chefs.append(chef4)
        chefs.append(chef5)
        db.session.add_all(chefs)
        db.session.commit()

        # recipes = []
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=1)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=1)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=1)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=1)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=1)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=1)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=2)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=2)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=2)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=2)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=2)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=2)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=3)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=3)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=3)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=3)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=3)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=3)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=4)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=4)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=4)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=4)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=4)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=4)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=5)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=5)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=5)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=5)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=5)
        # recipe1 = Recipe(title='', image='', ingredients='', recipe='', chef_id=5)
        # db.session.add_all(recipes)
        # db.session.commit()

        # reviews = []
        # r1 = Review(user='', rating='', text='', chef_id=3, user_id=3)
        # db.session.add_all(reviews)
        # db.session.commit()