# NewsProject
Стэк: react, redux, saga, react-router, SCSS
Дополнительно:

-axios - для запросов на newsapi.org

-react-loading-skeleton - для UI во вреия загрузки новостей

-redux-devtools-extension - для отладки, тестирования работы приложения.

Реализовано:

  -Страница Main:
   Название проекта с ссылкой на гит.

  -Страница Login.
    Если пользователь зарегистрирован в системе, то он вводит логин\пароль. Если пользователь ввел верные данные, его автоматически перебрасывает на страницу Profile.
    Если пользователь не зарегистрирован, он может зарегистрироваться, кликнув по кнопке Register, его переведет на страницу с формой.
    Информация об авторизации пишется в localstorage, в зависимости от статуса авторизации страницы login\profile не показываются.

  -Страница News.
    Получает данные с сервера newsapi и выводит их на страницу. Карточки новостей адаптивны, сверстаны на rem, vw, % с помощью scss modules. 
    Во вреия загрузки для лучшего UI показывается React-Skeleton.

  -Страница Profile.
    В зависимости от статуса авторизации показывает данные пользователя, либо сообщение с просьбой зарегистрироваться и кнопкой, для перехода на страницу логина.
  
    





