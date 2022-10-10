"""
    Entity class of type Employee
"""

class Employee():  

    def __init__(self, 
        id: str,
        full_name: str,
        email: str,
        nationality: str,
    ):
        self.id = id
        self.full_name = full_name
        self.email = email
        self.nationality = nationality
    
    def __eq__(self, object: object) -> bool:
        if isinstance(object, Employee):
            return self.id == object.id