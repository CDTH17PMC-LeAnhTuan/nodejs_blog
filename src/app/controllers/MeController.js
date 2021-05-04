const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] /me/stored/course
    storedCourses(req, res, next) {

        Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) => res.render('me/stored-course', {
                deletedCount,
                courses: mutilpleMongooseToObject(courses)
            }))
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount);
        //     })
        //     .catch(() => {});

        // Course.find({ })
        // .then(courses => res.render('me/stored-course', {
        //     courses: mutilpleMongooseToObject(courses)
        // }))
        // .catch(next);

    }

    // [GET] /me/stored/course
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-course', {
                courses: mutilpleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
