// mongoose.connect(<mongodb://localhost:27017/>, { useNewUrlParser : true, useUnifiedTopology : true });

require('dotenv').config();

// CREATION DE SCHEMA DE PERSON
import { Schema } from 'mongoose';

const personSchema = new Schema ({
    name: String,
    age:Number,
    favoriteFoods:[String]
});

export const PersonModel= mongoose.model("Person",personSchema)




