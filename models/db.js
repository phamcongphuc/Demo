const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Connect to mongoDB success!') }
else{
    console.log('Error connect to mongoDB!' + err);
}
});

require('./employee.model');