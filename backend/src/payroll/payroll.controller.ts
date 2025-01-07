import { Body, Controller, Post } from '@nestjs/common'
import { PayrollService } from './payroll.service'

@Controller('payroll')
export class PayrollController {
    constructor(private readonly payrollService: PayrollService) {}

    @Post('calculate')
    calculate(@Body() payload: { salary: number; taxRate: number; extraHours?: number; hourRate?: number }) {
        const { salary, taxRate, extraHours = 0, hourRate = 0 } = payload
        return {
            netSalary: this.payrollService.calculatePayroll(salary, taxRate, extraHours, hourRate),
        }
    }
}
