export interface IEmployee {
    id: number,
    employee_name: string,
    employee_salary: number,
    employee_age: number,
    profile_image: any
}

export interface IEmployeeData {
    status: string,
    data: IEmployee[],
    message: string
}