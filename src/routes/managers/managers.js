// 3 managers as an example (remove the // before each line to make it live code)
export const managers = [
  {
  "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Casey",
  "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  "location": "SC",
  "rival": {
  name: "Rival", // Can be anything (usually your rival's name)
  link: 6, // manager array number within this array, or null to link back to all managers page
  },
  "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "philosophy": "Your fantasy team's philosophy",
  "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
  "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Brandon S",
  "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  "location": "KY",
  "rival": {
  name: "Rival", // Can be anything (usually your rival's name)
  link: 6, // manager array number within this array, or null to link back to all managers page
  },
  "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "philosophy": "Your fantasy team's philosophy"
  "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
  "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
  "name": "Austin",
  "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
  "rival": {
  name: "Rival", // Can be anything (usually your rival's name)
  link: 6, // manager array number within this array, or null to link back to all managers page
  },
  "favoritePlayer": 1426, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
  "prefferedContact": "Text", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
  },
]
