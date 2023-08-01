// Create a new file named 'db.js'

// In-memory database for demonstration purposes
const cricketTeam = [
  {
    playerId: 1,
    playerName: "Lakshman",
    jerseyNumber: 5,
    role: "All-rounder",
  },
];

// Function to get all players from the team
function getAllPlayers() {
  return cricketTeam;
}

// Function to add a new player to the team
function addPlayer(player) {
  cricketTeam.push(player);
}

// Function to get a player by player ID
function getPlayerById(playerId) {
  return cricketTeam.find((p) => p.playerId === playerId);
}

// Function to update a player by player ID
function updatePlayer(playerId, updatedPlayer) {
  const playerIndex = cricketTeam.findIndex((p) => p.playerId === playerId);
  if (playerIndex !== -1) {
    cricketTeam[playerIndex] = updatedPlayer;
  }
}

// Function to remove a player by player ID
function removePlayer(playerId) {
  const playerIndex = cricketTeam.findIndex((p) => p.playerId === playerId);
  if (playerIndex !== -1) {
    cricketTeam.splice(playerIndex, 1);
  }
}

module.exports = {
  getAllPlayers,
  addPlayer,
  getPlayerById,
  updatePlayer,
  removePlayer,
};
