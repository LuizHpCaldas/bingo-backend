# Bingo - Sistema de Gestão Agrícola e Agropecuária

## Descrição
Bingo é um sistema de gestão voltado para o agronegócio, proporcionando uma plataforma robusta para a administração de propriedades rurais, cultivo e inventário. O objetivo é facilitar a gestão e otimizar os processos envolvidos na produção agrícola, oferecendo funcionalidades completas que atendem às necessidades do campo.

## Funcionalidades
- Cadastro de usuários
- Gerenciamento de propriedades
- Registro de culturas
- Controle de campos
- Monitoramento de colheitas
- Gerenciamento de inventário
- Geração de relatórios

## Diagrama de Classes

```mermaid
classDiagram
    class User {
        +number id
        +string name
        +string email
        +string password
        +create()
        +findById()
        +update()
        +delete()
    }

    class Property {
        +number id
        +string name
        +string location
        +number size
        +number ownerId
        +create()
        +findById()
        +update()
        +delete()
        +listAll()
    }

    class Crop {
        +number id
        +string name
        +string type
        +number propertyId
        +create()
        +update()
        +delete()
        +getDetails()
    }

    class Field {
        +number id
        +string name
        +number size
        +number cropId
        +create()
        +update()
        +delete()
        +getDetails()
    }

    class Harvest {
        +number id
        +date date
        +number quantity
        +number cropId
        +create()
        +update()
        +delete()
        +getDetails()
    }

    class Inventory {
        +number id
        +string itemName
        +number quantity
        +number propertyId
        +addItem()
        +removeItem()
        +listItems()
    }

    class Report {
        +number id
        +string title
        +date date
        +string content
        +number propertyId
        +create()
        +update()
        +delete()
        +getDetails()
    }

    User "1" -- "n" Property : owns
    Property "1" -- "n" Crop : contains
    Crop "1" -- "n" Field : includes
    Crop "1" -- "n" Harvest : has
    Property "1" -- "n" Inventory : manages
    Property "1" -- "n" Report : generates
```
## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize
- PostgreSQL
- dotenv
- Mermaid (para diagrama de classes)

## Como Executar o Projeto
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Execute as migrações: `npx sequelize-cli db:migrate`
5. Inicie o servidor: `npm start`

## Licença
Este projeto está sob a Licença MIT.
