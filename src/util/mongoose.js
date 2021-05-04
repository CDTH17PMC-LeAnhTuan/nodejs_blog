module.exports = {
    mutilpleMongooseToObject: (mongoose) => {
        return mongoose.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
