# desafio

Para o este sistema funcionar corretamente será necessario:

. criar um arquio .env na raíz do projeto com as seguintes variáveis:

PG_DB_PASSWORD //seu password do banco de dados Postgres
MySQL_DB_HOST  //seu host do MySql
MySQL_DB_USER // seu usuário do MySql
MySQL_DB_PASSWORD // seu password do MySQL

. criar um banco de dados Postgres com o nome multiplier

. o usuário Postgres está como o padrão 'postgres'. Alterar se necessário

. rodar npx sequelize db:create
. rodar npx sequelize db:migrate

.Cadastre categorias, produtos e estoque por alguma ferramenta cliente de API REST (Postman, Insomnia).
.De 1 em um minuto o banco de dados multiplier do MySQL irá atualizar o banco de dados multiplier Postgres



