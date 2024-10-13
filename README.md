
# Bingo - Sistema de Gestão Agrícola e Agropecuária

## Descrição

Bingo é um Sistema de Gestão Agrícola e Agropecuária que visa facilitar a administração e o monitoramento de propriedades rurais. Com uma interface intuitiva e recursos robustos, o Bingo permite que os usuários gerenciem suas operações de maneira eficaz, otimizando recursos e aumentando a produtividade.

## Funcionalidades

- **Gerenciamento de Propriedades**: Adicione e gerencie várias propriedades agrícolas e agropecuárias.
- **Controle de Produção**: Monitore a produção de culturas e crie relatórios detalhados.
- **Gestão Financeira**: Acompanhe receitas e despesas relacionadas à sua propriedade.
- **Autenticação de Usuários**: Sistema de autenticação seguro utilizando JSON Web Tokens (JWT).
- **API RESTful**: Acesso a dados através de uma API RESTful, facilitando a integração com outros sistemas.

## Tecnologias Utilizadas

- **Backend**: Node.js com Express
- **Banco de Dados**: PostgreSQL
- **ORM**: Sequelize
- **Autenticação**: JSON Web Tokens (JWT)

## Configuração

### Pré-requisitos

- Node.js (>= 14.x)
- PostgreSQL (>= 12.x)
- NPM ou Yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/bingo.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd bingo-backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente no arquivo `.env`:
   ```plaintext
   DATABASE_NAME=bingo
   DATABASE_USER=postgres
   DATABASE_PASSWORD=@Agenciaif2017
   DATABASE_HOST=127.0.0.1
   JWT_SECRET=sua_chave_secreta
   ```

5. Execute as migrações do banco de dados:
   ```bash
   npx sequelize db:migrate
   ```

6. Inicie o servidor:
   ```bash
   node index.js
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com [luizhpcaldas@gmail.com](mailto:luizhpcaldas@gmail.com).
