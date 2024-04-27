from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/get_data', methods=['GET'])
def get_data():
    conn = sqlite3.connect('membersdatabase.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Members')
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)