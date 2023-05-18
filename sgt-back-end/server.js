// import methods
import pg from 'pg';
import express from 'express';

// set up express and pg
const app = express();
app.use(express.json());
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

// error object to grab errors
const errorObj = {
  negative: { error: 'Id must be a positive integer.' },
  noId: (id) => ({ error: `Cannot find note with id ${id}.` }),
  empty: (content) => ({ error: `Incorrect ${content}.` }),
  unknown: { error: 'An unexpected error occurred.' },
  nothing: { error: 'Nothing is here.' },
};

// check if ID is valid function
function validIdCheck(id) {
  if (id < 0 || Number.isNaN(id) || !Number.isInteger(id)) {
    return true;
  }
}

// check if content is empty
function validContentCheck(course, name, score) {
  if (!course) {
    return 'course';
  }
  if (!name) {
    return 'name';
  }
  if (!score || score < 0 || score > 101) {
    return 'score';
  }
}

// get all grades from api
app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    const grades = result.rows;
    if (grades) {
      res.status(200).json(grades);
    } else {
      res.status(404).json(errorObj.nothing);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(errorObj.unknown);
  }
});

// create new row in api
app.post('/api/grades', async (req, res) => {
  try {
    const content = req.body;
    const invalidContent = validContentCheck(
      content.course,
      content.name,
      content.score
    );
    if (invalidContent) {
      res.status(400).json(errorObj.empty(invalidContent));
      return;
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;
    const params = [content.name, content.course, content.score];
    const result = await db.query(sql, params);
    const newGrade = result.rows[0];
    if (newGrade) {
      res.status(201).json(newGrade);
    } else {
      res.status(404).json(errorObj.nothing);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(errorObj.unknown);
  }
});

// update grade row with new values
app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    const content = req.body;
    if (validIdCheck(gradeId)) {
      res.status(404).json(errorObj.negative);
      return;
    }
    const invalidContent = validContentCheck(
      content.course,
      content.name,
      content.score
    );
    if (invalidContent) {
      res.status(400).json(errorObj.empty(invalidContent));
      return;
    }
    const sql = `
    update "grades"
    set "name" = $1, "course" = $2, "score" = $3
    where "gradeId" = $4
    returning *;
  `;
    const params = [content.name, content.course, content.score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (updatedGrade) {
      res.status(200).json(updatedGrade);
    } else {
      res.status(404).json(errorObj.noId(gradeId));
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(errorObj.unknown);
  }
});

// delete gradeid row
app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (validIdCheck(gradeId)) {
      res.status(404).json(errorObj.negative);
      return;
    }
    const sql = `
    delete
      from "grades"
    where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGradeCount = result.rowCount;
    if (deletedGradeCount === 1) {
      res.sendStatus(204);
    } else {
      res.status(404).json(errorObj.noId(gradeId));
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(errorObj.unknown);
  }
});

// grade by gradeID
app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (validIdCheck(gradeId)) {
      res.status(404).json(errorObj.negative);
      return;
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.status(200).json(grade);
    } else {
      res.status(404).json(errorObj.noId(gradeId));
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(errorObj.unknown);
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
