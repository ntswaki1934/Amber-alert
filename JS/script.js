document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidenav a');
    const mainContent = document.getElementById('main-content');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        let content = '';
        switch (page) {
            case 'report-missing':
                content = `
                    <h2>Report Missing Person</h2>
                    <form id="report-form">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="age">Age:</label>
                        <input type="number" id="age" name="age" required>
                        
                        <label for="description">Description:</label>
                        <textarea id="description" name="description" required></textarea>
                        
                        <button type="submit">Submit</button>
                    </form>
                `;
                break;
            case 'contact-police':
                content = '<h2>Contact Local Police Station</h2><p>Police Station Contact Details Here</p>';
                break;
            case 'view-missing':
                content = '<h2>View Missing Persons by Location</h2><p>List of missing persons here...</p>';
                break;
            case 'contact-us':
                content = '<h2>Contact Us</h2><p>Contact information here...</p>';
                break;
            case 'sign-up':
                content = `
                    <h2>Sign-Up</h2>
                    <form id="signup-form">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                        
                        <button type="submit">Sign Up</button>
                    </form>
                `;
                break;
            case 'log-in':
                content = `
                    <h2>Log In</h2>
                    <form id="login-form">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                        
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                        
                        <button type="submit">Log In</button>
                    </form>
                `;
                break;
            default:
                content = '<h1>Amber Alert!!!</h1><p>This is an Amber Alert notification.</p>';
        }

        mainContent.innerHTML = content;

        // Add form submission handlers
        if (page === 'report-missing') {
            document.getElementById('report-form').addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Missing person report submitted');
            });
        } else if (page === 'sign-up') {
            document.getElementById('signup-form').addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Sign up form submitted');
            });
        } else if (page === 'log-in') {
            document.getElementById('login-form').addEventListener('submit', function (e) {
                e.preventDefault();
                alert('Log in form submitted');
            });
        }
    }

    // Initial load
    loadPage();
});
