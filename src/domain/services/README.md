## Service(Domain Service)
The domain service layer has method to query itself.
Someone may be troubled by the difference between tha behavior of a value-object and domain service.
The behavior of value-object is to query about only yourself, such as the method to get the length of the string that UserName(value-object) constitutes length.
On the other hand, the domain service queries all entities as targets, such as the method to verify that UserName already exist or not.
The value-object has not behavior to query via persistent layer like database, however the domain service has it.