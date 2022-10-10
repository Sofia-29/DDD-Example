# DDD Example

This is a simple example of how to implement Domain Driven Design architecture on a python project. 

## Domain Driven Design (DDD)

The first objective of this clean architecture is to implement a solution independent of the technologies used, testable, with independence between each of the layers that make it up so that it is easier to implement new modules, functionalities, and technologies.

![DDD image example](https://www.hibit.dev/images/posts/2021/ddd_layers.png)

### Domain Layer

The domain layer is the innermost layer of the DDD architecture, in this layer the objects and business rules are implemented. Some typical things found in the domain layer are:

1. Entities: represent an object or concept in the domain. It has an identity.
The important thing is that they not only function to store data, but can also
have associated behavior.
2. Value object: they represent a concept of the domain, but they do not have a
own identity. They can represent the attributes of the entities, which allow to perform, for example, business validations and can also have behavior.
3. Domain services: manipulate entities and perform domain-specific operations
domain. Their main feature is that they can have domain logic and make decisions.
Using domain events, they allow parts of the domain layer to communicate and respond
to changes requested from other layers.
4. Repository interfaces: A repository is a design pattern that encapsulates the operations
of data that can be applied to entities os value objects. Repositories are how the domain
interacts with the data layer (infrastructure). In the domain layer only
we will have the interfaces, but never their implementation. implementation details
are the responsibility of the infrastructure layer.

### Application layer

The application layer defines use cases or application services, which have the functionality of the application. It is important to differentiate between application services and domains. Application services can interact with entities and other domain layer objects, but must not have domain logic. Therefore, if an application service requires this information, you will have to call an entity or a domain service that answers that question. The application layer can also interact with repositories, but it does not do so directly. To maintain independence between layers, the dependency inversion principle is used. That is, the application services depend only on the interfaces of the repositories and do not on specific implementations.

### Infraestructure layer

This is the layer responsible for interacting with technologies external to the application. the most common case is to communicate with a database or an external API. In this layer are implemented the repository interfaces defined in the domain layer. Another responsibility is to convert data understood by external services to concepts defined in the domain layer, such as entities and value objects. The infrastructure layer has dependencies on the application layer and the domain layer since the domain layer define the repository interfaces and the external service interfaces used in the application interface. In general, the infrastructure layer implements repository interfaces of the domain layer and the necessary data sources.

### Presentation layer

This is the layer that corresponds to the user interface. This is the layer that is most influenced by the choice of technology. The presentation layer has a dependency on the application layer and the domain layer. However, for the graphical interface, you should only interact directly with the application services through their interfaces, which are those that contain the functionality (use cases) of the application. In general, the presentation layer has the UIs, and it interacts with the application services through its interfaces.

## Dependencies 

To run the server you will need to have installed in your local machine the following libraries:

1. Python version 3.10.6
2. FastAPI, to install see https://fastapi.tiangolo.com/
3. vite for react

## How to use

First you need to install firebase admin, to do it, run the following command in a terminal: 

1. pip install firebase_admin

Run the following commands in a terminal to start the api server: 
1. cd src
2. python -m uvicorn main:app --reload

In another terminal, run the following commands to start the web server: 

1. cd .\src\presentation\
2. yarn dev

