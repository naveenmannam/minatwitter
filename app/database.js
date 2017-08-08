var loki = require('lokijs');

var db = new loki('db.json');

db.addCollection('top').insert([
    { term: 'Javascript', style: 'warning' },
    { term: 'Angular 2', style: 'warning' },
    { term: 'NodeJS', style: 'warning' },
    { term: 'ios', style: 'warning' },
    { term: 'ReactJS', style: 'warning' },
    { term: 'Ionic', style: 'warning' },
    { term: 'REST', style: 'warning' },
    { term: 'Authentication', style: 'warning' },
    { term: 'Android', style: 'warning' }
]);

db.addCollection('searches');

db.saveDatabase();