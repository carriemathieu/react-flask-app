from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"

@app.route('/api', methods=['GET'])
def index():
    return {
        'name': 'Hello World'
    }

if __name__ == '__main__':
    app.run(debug=True)