import json
import json_stream
from domain.employee.employees import Employee
from domain.employee.i_employee_repository import IEmployeeRepository


class EmployeeRepository(IEmployeeRepository):

    def __init__(self, firebase_reference:object) -> None:
        super().__init__()
        self.firebase_reference = firebase_reference.collection(u'employee')
    
    async def create_employee(self, employee: Employee):
        return self.firebase_reference.document().set({'id': employee.id, 
                                            'full_name':employee.full_name, 
                                            'email': employee.email,
                                            'nationality': employee.nationality})   

    async def get_employees(self):
        employees = self.firebase_reference.stream()
        response = []
        for employee in employees:
            data = employee.to_dict()
            data = { 'id': data['id'], 'full_name': data['full_name'], 'email': data['email'], 'nationality': data['nationality'] }
            response.append(data)
        return response