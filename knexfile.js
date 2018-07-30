// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/nyeResolution'
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};


//Just need dev and productiuon for now, get rid of other shit
//client is pg for now, peep connection
