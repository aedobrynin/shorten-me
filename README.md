# Shorten me
Shorten me is a Flask application to short URLs.
![Shorten me homepage](https://user-images.githubusercontent.com/43320720/91744110-9dfc6200-ebc1-11ea-8989-88207ac26867.png)

## Installation

1. Install requirements
```
python3 -mvenv dev
source dev/bin/activate
pip3 install -r requirements.txt
```

2. Create database
```
source dev/bin/activate
python3
from main import app, db
with app.app_context():
    db.create_all()
```

3. Run
```
python3 main.py
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for deta
