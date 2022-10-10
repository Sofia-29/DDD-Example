from abc import ABC, abstractmethod
from domain.employee.employees import Employee

class IEmployeeRepository(ABC):

    def __init__(self) -> None:
        super().__init__()
    
    @abstractmethod
    async def create_employee(self, employee: Employee):
        raise NotImplementedError
    
    @abstractmethod
    async def get_employees(self):
        raise NotImplementedError
        
        
