import { Injectable } from '@nestjs/common'

@Injectable()
export class PayrollService {
    calculatePayroll(salary: number, taxRate: number, extraHours = 0, hourRate = 0): number {
        const grossSalary = salary + extraHours * hourRate
        const netSalary = grossSalary * (1 - taxRate)
        return netSalary
    }
}
