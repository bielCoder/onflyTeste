*Sistema de controle e gestão de viagens*
Esse sistema foi criado no intuito de ajudar pessoas a fazer marcação de viagens, e facilitar o andamento e aceite para a embarcação.


1 - Instalação.

*Backend*

1 - Se não tiver o ambiente em sua maquina , vamos fazer um pull do projeto, criar e puxar a imagem via docker.
2 - Entrar na pasta backend , rodar composer install
3 - Assim que tudo tiver instalado, vamos configurar o .env, banco de dados e suas dependecias como disparadores de email.
4 - Após tudo configurado no .env, podemos rodar as migrations com o comando php artisan migrate.
5 - Logo vamos iniciar a aplicação, basta rodar o comando php artisan serve.
6 - O sistema tem um agendador de tarefas, então após sistema rodando, podemos rodar o comando de agendamento, assim irá observar a cada 15 min tokens que não foram válidados para acesso ao sistema. Comando: php artisan schedule:work.

*Frontend*
1 - Se não tiver o ambiente em sua maquina , vamos fazer um pull do projeto, criar e puxar a imagem via docker.
2 - Entrar na pasta frontend , rodar npm install.
3 - npm run serve.

Se necessário rodar testes , php artisan test.

