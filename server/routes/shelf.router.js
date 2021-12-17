const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')
/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('req.user', req.user);
    pool
    .query (`SELECT * FROM "item";`) 
    .then ((results) => res.send(results.rows))
    .catch ((error) => {
      console.log ('ERROR SELECTING FROM "ITEM"', error)
      res.sendStatus(500)
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  
  console.log(req.user);
  console.log(req.body);
  //build INSERT INTO query
  const postQuery = `
    INSERT INTO "item" ("description", "image_url", "user_id")
      VALUES ($1, $2, $3)
  `;
  //reference the POSTed values
  const postValues = [req.body.description, req.body.image_url, req.user.id]
  
  //pool.query
  pool.query(postQuery, postValues)
  .then(() => res.sendStatus(201))
  .catch((error) => {
    console.log('error POSTing new item', error);
    res.sendStatus(500);
  });
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  //req.params as "id" value of the item
  // console.log(req.params.id);
  // //req.user.id as value of "user_id"
  // console.log(req.user.id);

  //check and see if the "user_id" value of the row "id" matches req.user.id
  //query SELECT * FROM "item" WHERE "id" = req.params
  pool.query(`SELECT * FROM "item" WHERE "id"=$1`, [req.params.id])
    .then((result) => {
      console.log(result.rows);
        //access the "user_id" in .then(result) 
      const authID = result.rows[0].user_id;
      console.log(authID);
      
      const query2 = `DELETE FROM "item" WHERE "id"=$1 AND "user_id"=$2`;
      const values2 = [req.params.id, authID]
      pool.query(query2, values2)
      .then(() => res.sendStatus(202))
      .catch((error) => {
        console.log('joe you shortsighted fool', error);
        //catch and send_status(4XX) don't have authentication
        res.sendStatus(400);
      })
    })
    //first query catch
    .catch((error) => {
      console.log(error);
    })
  
  
    //IF the user_id returned from query matchs req.user.id
    //.then we fire off the delete query
    //DELETE FROM "item" WHERE "id" = req.params "user_id" = req.user.id

  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
//STRETCH GOAL
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
//STRETCH GOAL
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
//STRETCH GOAL
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
