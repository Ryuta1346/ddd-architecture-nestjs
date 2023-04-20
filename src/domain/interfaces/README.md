## Interface
The interface layer define abstract class to encapsulate details of persistent layer because we would to implement that the application layer(orchestration/usecase) has independent of non-domain layer.
All repository implementation have to extend this interface layer and the application layer must inject this layer via dependency injection of NestJS.