import asyncio
from domain.employee.employees import Employee
from domain.employee.i_employee_repository import IEmployeeRepository

class EmployeeUseCase():

    def __init__(self, employee_repository:IEmployeeRepository) -> None:
        super().__init__()
        self.employee_repository = employee_repository
    
    async def create_employee(self, employee: Employee):
        return await self.employee_repository.create_employee(employee)
    
    async def get_employees(self):
        return await self.employee_repository.get_employees()