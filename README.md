[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3GK8eW1r)

# SIMERCE APP 🛒

![](/assets/simerce-app.png)

Simerce is an acronym from Simple E-commerce App. This app was inspired from one of Mr.Dandi's friends that has a smalll groceries shop. He is wondering if his products he is selling can be put into an app like e-commerce but with much smaller scope.

## Team Member 🤝

---

|          Name           |         Roles         |                                    Tasks                                    |
| :---------------------: | :-------------------: | :-------------------------------------------------------------------------: |
| Dandi Rizky Eko Saputro | Lead Backend Engineer | Auth, Products Service, Admin Service, 3rd Party Integration and Deployment |
|      Immanuel Arya      |   Backend Engineer    |             Users Service, Wishlists Service and Documentation              |

## Deployment 🚀

---

- Deployment (Dandi)

  - GCP Link: https://simerce-app-v1.dandirizky.site/
  - Railway Link: https://w17-our-backend-group-c-production.up.railway.app

- Deployment (Arya)

  - GCP Link: https://simerce-app-v1.colorfulworldghibli.site/docs
  - Railway Link: https://w17-our-backend-group-c.up.railway.app/docs

- Docker

  - https://hub.docker.com/r/dandirizkyy/simerce-app-v1/tags

  - https://us-east1-docker.pkg.dev/complete-stock-387402/docker/simerce-app-v1

## Website Status 🕒

---

BetterUptime : https://simerce-app.dandirizky.site/

## Documentation 📷

---

### Database Diagram

![Diagram Database](assets/diagram.png)

In our database diagram, we have established a one-to-many relationship between the User and Wishlist models, indicating that a user can have multiple wishlists. Additionally, we have implemented a many-to-many relationship between the Wishlist and Product models, allowing for the storage of multiple products within a wishlist and the ability to associate products with multiple wishlists. This design provides users with the flexibility to create and manage multiple wishlists while enabling products to be saved in and associated with various wishlists seamlessly.

### Infrastructure Diagram

![Infra Diagram](assets/simerce-app-v1.png)

### API Documentation With Swagger

- https://simerce-app-v1.dandirizky.site/docs

- https://simerce-app-v1.colorfulworldghibli.site/docs

## Endpoints 🔗

---

|  HTTP  |           Endpoint            |          Description           |             Auth             | Status |
| :----: | :---------------------------: | :----------------------------: | :--------------------------: | :----: |
|  POST  |      /auth/register/user      |         Register User          |     Everyone can access      |
|  POST  |       /auth/login/user        |           Login User           |  User and Admin can access   |   🔒   |
|  POST  |     /auth/register/admin      |         Register Admin         | Endpoint only given to Admin |
|  POST  |       /auth/login/admin       |          Login Admin           | Endpoint only given to Admin |   🔒   |
|  GET   |       /auth/profileuser       |       Show User Profile        |  User and Admin can access   |   🔒   |
|  GET   |      /auth/profileadmin       |       Show Admin Profile       |    Only Admin can access     |   🔒   |
|  GET   |            /users             |         Show All Users         |  User and Admin can access   |   🔒   |
|  GET   |          /users/{id}          |        Show User by Id         |  User and Admin can access   |   🔒   |
| DELETE |          /users/{id}          |       Delete Users by Id       |    Only Admin can access     |   🔒   |
|  PUT   |  /users/deletewishlists/{id}  |     Delete Wishlist by Id      |  User and Admin can access   |   🔒   |
|  GET   |         /products/all         |       Show All Products        |     Everyone can access      |
|  GET   |        /products/{id}         |      Show Products by Id       |  User and Admin can access   |   🔒   |
|  PUT   |        /products/{id}         |     Update Products by Id      |    Only Admin can access     |   🔒   |
| PATCH  |        /products/{id}         |      Patch Products by Id      |    Only Admin can access     |   🔒   |
| DELETE |        /products/{id}         |     Delete Products by Id      |    Only Admin can access     |   🔒   |
|  GET   |           /products           |        Search Products         |  User and Admin can access   |   🔒   |
|  POST  |           /products           |          Add Products          |    Only Admin can access     |   🔒   |
|  GET   |          /wishlists           |        Search Wishlist         |  User and Admin can access   |   🔒   |
|  POST  |          /wishlists           |        Create Wishlist         |  User and Admin can access   |   🔒   |
|  GET   |        /wishlists/{id}        |      Show Wishlist by Id       |  User and Admin can access   |   🔒   |
| PATCH  |        /wishlists/{id}        |    To Update Wishlist Name     |  User and Admin can access   |   🔒   |
| DELETE |        /wishlists/{id}        |     Delete Wishlists by Id     |  User and Admin can access   |   🔒   |
|  PUT   |  /wishlists/addproduct/{id}   |   Add Products to Wishlists    |  User and Admin can access   |   🔒   |
|  PUT   | /wishlists/deleteproduct/{id} | Delete Prodcuts from Wishlists |  User and Admin can access   |   🔒   |
|  GET   |            /admins            |          Show Admins           |    Only Admin can access     |   🔒   |
| DELETE |         /admins/{id}          |       Show Admins by Id        |    Only Admin can access     |   🔒   |

## Installation 🔨

---

In order to run this project locally, you need to clone this repository first using git clone

```bash
$ https://github.com/revou-fsse-1/w17-our-backend-group-c.git
```

then run `pnpm install` in your terminal to download all dependencies

```bash
$ pnpm install
```

create `docker-compose.yaml` on root folder (where the package.json installed) and fill with these commands to install postgresql database locally on your computer

```
version: "3"
services:
  postgres:
    image: postgres:14
    ports:
    - 5432:5432
    environment:
    - POSTGRES_DB=revou
    - POSTGRES_USER=revou
    - POSTGRES_PASSWORD=password
    volumes:
    - ./postgres-data:/var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    environment:
      - PGADMIN_DEFAULT_EMAIL=dandi@gmail.com
      - PGADMIN_DEFAULT_PASSWORD=password
    ports:
      - 15432:80
```

don't forget to create `.env` files on root folder same like before with these command:

```
DATABASE_URL="postgresql://revou:password@database:5432/revou?schema=public"
```

and run docker with these command:

```
docker-compose up -d
```

after that you can start the server using these following command :

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

if you want to stop docker, you can use these command

```
docker-compose stop
```

## Technologies 💻

---

- NestJS
- Swagger
- Typescript
- PrismaORM
- PostgreSQL
- Docker
- Railway
- GCP

## Social Link 👋

---

- https://www.linkedin.com/in/dandirizkyy/

- https://www.linkedin.com/in/aryaimmanuel/

## Support 🙌

---

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
