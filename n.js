var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/medical_hall')

var patientSchema = mongoose.Schema({
  name:String,
  age:Number,
  sex:String,
  mobile:Number,
  doctorId:Number,
  ailment:String,
  drugs:[id:String]
  createdDate:{
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('Patient',patientSchema,'patients');

var familySchema = mongoose.Schema({
  familyName:String,
  phone:Number,
  email:String,
  address:{
    doorNo.:Number,
    area:String,
    city:String,
    state:String,
    pincode:Number
  },
  patients:[{
    id:String,
    relation:String
  }]
})

module.exports = mongoose.model('Family',familySchema,'families');

var drugSchema = mongoose.Schema({
  ailment:String,
  drug:String,
  drugQty:Number,
  dosage:
  renewalDate:String,
  patientReminder:String
})

module.exports = mongoose.model('Drug',drugSchema,'drugs');

var doctorSchema = mongoose.Schema({
  doctor:String,
  specialization:String,
  address:{
    doorNo.:Number,
    area:String,
    city:String,
    state:String,
    pincode:Number
  },
  timings:{
    from:Number,
    to:Number

  }
  mobileNo.:Number
})

module.exports = mongoose.model('Doctor',doctorSchema,'doctors');
