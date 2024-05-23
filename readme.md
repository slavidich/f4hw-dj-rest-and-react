Копируем репозиторий


Переходим в папку с Backend'ом, запускаем powershell

Создаем виртуальное окружение (требуется Python 3.12.3)
python -m venv venv

Активируем его 
.\venv\Scripts\activate

Устанавливаем все необходимые модули 
pip install -r .\req.txt

Запускаем django 
python .\djr\manage.py runserver


Переходим в папку с Frontend'ом, запускаем powershell

Устанавливаем все пакеты npm командой
npm install

Запускаем webpack-dev-server 


Если висит статус "Загрузка", попробуйте перезапустить бекенд и фронтенд 
python .\djr\manage.py runserver (находясь в папке backend)
npm start (находясь в папке frontend)
