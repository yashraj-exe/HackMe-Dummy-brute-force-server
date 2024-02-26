const fs = require('fs');

// Function to generate 4-digit numeric passwords and append them to a file
function generatePasswords() {
    const start = 1000;
    const end = 9999;
    let passwords = '';

    for (let i = start; i <= end; i++) {
        passwords += i.toString() + ',';
    }

    fs.appendFile('passwords.txt', passwords, (err) => {
        if (err) throw err;
        console.log('Passwords have been appended to passwords.txt');
    });
}

// Call the function to generate passwords
// generatePasswords();
