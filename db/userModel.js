
const mongoose = require('mongoose');

// CONNECTION A MA BASE DE DONNEE 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser : true, useUnifiedTopology : true })



// CREATION ET ENREGISTREMENT DE MODEL 

const Person = mongoose.model('Person', personSchema);

const newPerson = new Person({
    name: String,
    age:Number,
    favoriteFoods:[String]
   });

   newPerson.save((err, person) => {
    if (err){
        return console.error(err);
    }
    console.log('Person saved successfully:', person);
   });

// Création d'un tableau d'instances de document
const arrayOfPeople = [
    {
       name: 'John patcheko',
       age: 25,
       favoriteFoods: ['Placali', 'foutou']
    },
    {
       name: 'Jane latigresse',
       age: 30,
       favoriteFoods: ['Sushi', 'Noodles']
    }
   ];
   
   // Enregistrement de toutes les instances de document
   Person.create(arrayOfPeople, (err, people) => {
    if (err) {
        return console.error(err);
    }
    console.log('People saved successfully:', people);
   });




console.log(import.meta.env.MONGO_URI);