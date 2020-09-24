exports.clean = (msg) => {
    const manager = msg.channel.messages;
    manager.fetch({limit: 30})
    .then(messages => {
        console.log(`Received messages`); 
    }, err => {
        console.log(`ERREUR: ${err.message}`);
    });
}