
Password generator app generates a Password for a given service. On submit this app has to take in two inputs, generate password according the “sequence” and output this for user to the screen.
Sequence for generated password:
- Last character of the service name
- Character of service at index of vowels count of service (if no vowels, take first character)
- Full ‘Basic’ password
- Number of non-vowel characters of service
- Service name first character
Example for testing:passGenerator('password', 'netflix') // result: ‘xepassword5n'•Bonus: style your app and put it on GitHub
