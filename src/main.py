from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from application.employee.employee_use_case import EmployeeUseCase
from domain.employee.employees import Employee
from infrastructure.employee.employee_repository import EmployeeRepository

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

credential = credentials.Certificate("key.json")
firebase_admin.initialize_app(credential)
db_reference = firestore.client()

# Employee service
employee_repository = EmployeeRepository(db_reference)
employee_service = EmployeeUseCase(EmployeeRepository(db_reference))

@app.get("/")
async def home():
    return {"Hello": "World"}


@app.get("/create_employees/")
async def create_employee(id:str, full_name:str, email:str, nationality:str):
    employee = Employee(id, full_name, email, nationality)
    response = await employee_service.create_employee(employee)
    return {"Data": "save"}

@app.get("/get_employees/")
async def create_employee():
    response = await employee_service.get_employees()
    print(response)
    return response