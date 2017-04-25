var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = Schema(
    {
        first_name: {type: String, required: true, max: 100},
        last_name: {type: String, required: true, max: 100},
        username: {type: String, required: true, max: 100},
        dob: {type: Date},
        createdDate: {type: Date},
    }
)

PatientSchema
.virtual('name')
.get(function () {
    return this.first_name + ' ' + this.last_name;
})

module.exports = mongoose.model('Patient', PatientSchema);
