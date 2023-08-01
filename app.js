const express = require("express");

const sqlite3 = require("sqlite3").verbose();



const app = express();

const db = new sqlite3.Database("./cricketTeam.db");

app.use(express.json());

app.get("/players/", (req, res) => {

  const query = "SELECT * FROM cricket_team";

  db.all(query, [], (err, rows) => {

    if (err) {

      res.status(500).send("Internal Server Error");

    } else {

      res.send(rows);

    }

  });

});

app.post("/players/", (req, res) => {

  const { playerName, jerseyNumber, role } = req.body;

  const query =

    "INSERT INTO cricket_team (player_name, jersey_number, role) VALUES (?, ?, ?)";

  db.run(query, [playerName, jerseyNumber, role], (err) => {

    if (err) {

      res.status(500).send("Internal Server Error");

    } else {

      res.send("Player Added to Team");

    }

  });

});

app.get("/players/:playerId/", (req, res) => {

  const playerId = req.params.playerId;

  const query = "SELECT * FROM cricket_team WHERE player_id = ?";

  db.get(query, [playerId], (err, row) => {

    if (err) {

      res.status(500).send("Internal Server Error");

    } else if (!row) {

      res.status(404).send("Player not found");

    } else {

      res.send(row);

    }

  });

});



app.put("/players/:playerId/", (req, res) => {

  const playerId = req.params.playerId;

  const { playerName, jerseyNumber, role } = req.body;

  const query =

    "UPDATE cricket_team SET player_name = ?, jersey_number = ?, role = ? WHERE player_id = ?";

  db.run(query, [playerName, jerseyNumber, role, playerId], (err) => {

    if (err) {

      res.status(500).send("Internal Server Error");

    } else {

      res.send("Player Details Updated");

    }

  });

});

app.delete("/players/:playerId/", (req, res) => {

  const playerId = req.params.playerId;

  const query = "DELETE FROM cricket_team WHERE player_id = ?";

  db.run(query, [playerId], (err) => {

    if (err) {

      res.status(500).send("Internal Server Error");

    } else {

      res.send("Player Removed");

    }

  });

});

module.exports = app;

app.http file:

ccbp submit NJSCPXTWMS# API 1: Get all players

GET http://localhost:3000/players/



# API 2: Add a new player

POST http://localhost:3000/players/

Content-Type: application/json



{

  "playerName": "Vishal",

  "jerseyNumber": 17,

  "role": "Bowler"

}



# API 3: Get a player by player ID

GET http://localhost:3000/players/1/



# API 4: Update a player by player ID

PUT http://localhost:3000/players/1/

Content-Type: application/json



{

  "playerName": "Maneesh",

  "jerseyNumber": 54,

  "role": "All-rounder"

}



# API 5: Delete a player by player ID

DELETE http://localhost:3000/players/1/ 

