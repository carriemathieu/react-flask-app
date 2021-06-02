from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }

@app.route('/api', methods=['GET'])
def index():
    # * unpacks object into array
    return jsonify([*map(todo_serializer, Todo.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    # translates content to python dictionary
    request_data = json.loads(request.data)
    # creates instance of Todo model
    todo = Todo(content=request_data['content'])
    
    db.session.add(todo)
    db.session.commit()

    return {'201' : 'todo created successfully'}

@app.route('/api/<int:id>', methods=['GET'])
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])

if __name__ == '__main__':
    app.run(debug=True)