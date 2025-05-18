const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }

const myObject = new MyEmitter();

myObject.on('event', () => console.log('Event Fired'));

myObject.emit('event');