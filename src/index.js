const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,daily&appid=8bb8add819320856218e1d341b14ace6&units=metric';

const resolvers = {
  Query: {
    location: async (parent, args) => await getWeatherData(args.lat, args.lon)
  }
}

function getWeatherData(lat, lon) {
	let url = baseURL+'&lat='+lat+'&lon='+lon;
  	let weather = fetch(url).then(res => res.json());
  	return weather;
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))