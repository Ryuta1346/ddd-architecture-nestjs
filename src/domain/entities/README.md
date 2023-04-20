## Entity

## Entity
Entities are placed in this directory.
In some opinions, entity should/must not have any library resources. But in this example, it uses class-validator to validate.
This reason is to keep readable code and implement quickly.
In addition, most of the validation logic for individual entities is basically simple rules(e.g. first_name must be shorter than 30 characters).
Therefor, if we wanted to implementation that did not use class-validator, we would be able to accommodate that implementation small cost.
