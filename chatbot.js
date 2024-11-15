const readline = require('readline')

const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    });

    const responses = 
    {
        hello: 'Hi there',
        howareyou: 'I am just a bot, but I am doing great!',
        bye: "Goodbye!"
    }

    rl.setPrompt('You: ')
    rl.prompt()

    rl.on('line', (input) =>
    {
        const message = input.trim().toLowerCase();
        if (responses[message])
            console.log(`Bot: ${responses[message]}`);
        else    
            console.log('Bot: I do not understand')
        rl.prompt();
    }).on('close', ()=>
    {
        console.log('Bot: Have a great day!')
        process.exit(0)
    })