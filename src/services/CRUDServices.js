const connectDatabase = require("../config/connectDatabase");

class CRUDServices {
  getListCourses = async () => {
    let [results, fields] = await connectDatabase.query(
      `SELECT * FROM Courses`
    );
    return results;
  };
  getCourse = async (courseID) => {
    let [results, fields] = await connectDatabase.query(
      `SELECT * FROM Courses WHERE id= ?`,
      [courseID]
    );
    return results;
  };
  createCourse = async (name, description, image, video) => {
    let [results, fields] = await connectDatabase.query(
      `INSERT INTO Courses (name, description, image, videoID)
      VALUES (?, ?, ?, ?)`,
      [name, description, image, video]
    );
  };
}

module.exports = new CRUDServices();
