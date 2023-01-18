import React, { useState } from 'react';

import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)


    }

    const filteredExpenses = props.items.filter(exp => exp.date.getFullYear() === parseInt(filteredYear))



    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterChange={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    )
}

export default Expenses

