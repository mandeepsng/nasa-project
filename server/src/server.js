const http = require('http');

const app = require('./app');

const { loadPlanetData, path_check } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    
    // await path_check(); 
    await loadPlanetData(); 
    
}

server.listen(PORT, ()=> {
    console.log(`Listing on port ${PORT}`);
});
startServer();

