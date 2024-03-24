document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById('user-table-body');
    const spinner = document.getElementById('spinner');
    const table = document.getElementById('user-table');

    // Show spinner
    spinner.style.display = 'block';

    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Iterate over users and populate table
            data.data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.email}</td>
                    <td>${user.first_name} ${user.last_name}</td>
                    <td><img src="${user.avatar}" alt="User Avatar" style="width: 50px;"></td>
                `;
                tableBody.appendChild(row);
            });
            
            // Hide spinner
            spinner.style.display = 'none';
            
            // Show table
            table.style.display = 'table';
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            // Handle error (e.g., display error message)
        });
});
