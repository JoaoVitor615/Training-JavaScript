function sendSpaceship( spaceship: {pilot: string, copilot?:string}) {

}
//evitando tipagem com "?"
sendSpaceship({pilot: 'Han Solo', copilot: 'Chewbaca'})

sendSpaceship({ pilot: 'Luke'})