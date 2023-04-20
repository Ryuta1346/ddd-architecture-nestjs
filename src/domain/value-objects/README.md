## ValueObject
the value-object layer define object of system-specific but we don't need to define all object to value-object.
If I were to define a value object, I would make the decision based on the value tha came up as the domain model/ubiquitous language and 'are there rules out there' or 'are there cases where I want to treat it by itself'.
For example, User(entity) has name property.
If this name property have only rules to based on String(primitive value), I would not define by the value-object probably.
However, if there are rules for this name property, such as it must be only characters with no symbols, shorter than 30 characters in length, and larger than 2 characters, I would define it as a value-object.