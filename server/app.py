from flask import request, make_response, jsonify, session, abort
from flask_restful import Resource, Api
from werkzeug.exceptions import NotFound, Unauthorized
from config import db, app, api
from models import User, Chef, Recipe

api = Api(app)

class Users(Resource):
    def get(self):
        user = User.query.filter_by(id=session['user_id']).first()
        response = make_response(
            user.to_dict(), 200
        )
        return response
api.add_resource(Users, '/user')

class Login(Resource):
    def post(self):
        try: 
            user = User.query.filter_by(name=request.get_json()['name']).first()
            if user.authenticate(request.get_json()['password']):
                session['user_id'] = user.id
                response = make_response(
                    user.to_dict(),
                    200
                )
                return response
        except:
            abort(401, "Incorrect Username or Password")
api.add_resource(Login, '/login')

class Signup(Resource):
    def post(self):
        form_json = request.get_json()
        new_user = User(name=form_json['name'], email=form_json['email'])
        new_user.password_hash = form_json['password']
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        response = make_response(
            new_user.to_dict(),
            201
        )
        return response
api.add_resource(Signup, '/signup')

class AuthorizedSession(Resource):
    def get(self):
        try: 
            user = User.query.filter_by(id=session['user_id']).first()
            response = make_response(
                user.to_dict(),
                200
            )
            return response
        except:
            abort(401, "Unauthorized")
api.add_resource(AuthorizedSession, '/authorized')

class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        response = make_response('', 204)
        return response
api.add_resource(Logout, '/logout')

@app.errorhandler(NotFound)
def handle_not_found(e):
    response = make_response(
        {"error": "Not Found: Sorry the resource you are looking for does not exist"},
        404
    )
    return response

class Chefs(Resource):
    def get(self):
        chef_list = [chef.to_dict() for chef in Chef.query.all()]
        response = make_response(
            chef_list,
            200
        )
        return response
api.add_resource(Chefs, '/chefs')

class Recipes(Resource):
    def get(self):
        recipe_list = [recipe.to_dict() for recipe in Recipe.query.all()]
        response = make_response(
            recipe_list,
            200
        )
        return response
    
api.add_resource(Recipes, '/recipes')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
