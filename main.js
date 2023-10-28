function markAttendance() {
    // You can add logic here to handle attendance marking.
    // For simplicity, let's assume you have a static list of students.
    const students = [
        { id: 'ENM221-0060/2020', name: 'FELIX RONOH' },
        //{ id: 2, name: 'Student 2' },
        //{ id: 3, name: 'Student 3' },
        // Add more students as needed
    ];

    const classSelect = document.getElementById('class');
    const dateInput = document.getElementById('date');
    const tableBody = document.querySelector('#attendanceTable tbody');

    // Clear existing rows in the table
    tableBody.innerHTML = '';

    // Populate the table with student data
    students.forEach(student => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = student.id;
        cell2.textContent = student.name;
        cell3.textContent = 'Present'; // You can dynamically set the attendance status
    });
}
/*function markAttendance() {
    // Get the code entered by the student
    const codeInput = prompt('Enter the attendance code provided by your instructor:');

    // Perform code verification (replace 'yourSecretCode' with the actual code provided by the instructor)
    if (codeInput === '123') {
        // Code is correct, continue with attendance marking
        const classSelect = document.getElementById('class');
        const selectedClass = classSelect.options[classSelect.selectedIndex].value;

        const dateInput = document.getElementById('date');
        const selectedDate = dateInput.value;

        // Get the table body
        const tableBody = document.querySelector('#attendanceTable tbody');

        // Clear existing rows in the table
        tableBody.innerHTML = '';

        // Populate the table with student data and input fields for attendance
        students.forEach(student => {
            const row = tableBody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.textContent = student.id;
            cell2.textContent = student.name;

            // Create an input field for attendance status
            const attendanceInput = document.createElement('input');
            attendanceInput.type = 'checkbox';
            attendanceInput.name = `attendance_${selectedClass}_${selectedDate}_${student.id}`;
            attendanceInput.value = 'present';

            cell3.appendChild(attendanceInput);
        });
    } else {
        // Incorrect code entered, show an error message
        alert('Invalid attendance code. Please try again.');
    }
}*/
