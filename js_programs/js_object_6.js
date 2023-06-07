/*Sorting object arrays in js */

/*let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
]; 

> Sort employees by firstName , age and joinedDate
*/

// Sorting employees by firstName

let employees1 =[
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

// sort in ascending
employees1.sort((emp1, emp2) => emp1.firstName.localeCompare(emp2.firstName))
console.log(employees1)

// sort in descending
employees1.sort((emp1, emp2) => emp2.firstName.localeCompare(emp1.firstName))
console.log(employees1)

//sort by age in ascending
employees1.sort((emp1,emp2) => emp1.age-emp2.age)
console.log(employees1)

//sort by joinedDate
employees1.sort((emp1,emp2) => {
    let emp1Date = new Date(emp1.joinedDate)
    let emp2Date = new Date(emp2.joinedDate)
    return emp1Date - emp2Date; 
})
console.log(employees1)