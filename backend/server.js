const io = require("socket.io")();
const uuidv1 = require("uuid/v1");
const messageHandler = require("./handlers/massage.handler")

const users = {};

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random()*200 + 100);
    const rand2 = Math.round(Math.random()*200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}

function createUserOnline() {
    const values = Object.values(users);
    const onlyWithUsernames = values.filter(u => u.username !== undefined);
    return onlyWithUsernames   
}

io.on("connection", socket => {
    console.log("a user connected!");
    console.log(socket.id);
    users[socket.id] = { userId:uuidv1()}; 
    socket.on("join", username =>{
        users[socket.id].username = username;
        users[socket.id].avatar = createUserAvatarUrl();
        messageHandler.handleMessage(socket, users);
    });
    socket.on("disconnect", ()=>{
        delete users[socket.io];
        io.emit("action",{ type :"users_online", data: createUserOnline()})
    });
    socket.on("action", action =>{
        switch(action.type){
            case "server/hello":
                console.log("got hello event", action.data);
                socket.emit("action", { type: "message", data: "Good Day"});
                break;
            case "server/join":
                console.log("got join event", action.data); 
                users[socket.id].username = action.data;
                users[socket.id].avatar = createUserAvatarUrl();
                socket.emit("action", {
                    type: "user_online", 
                    data: createUserOnline()
                });
                break;
        }
    });
});

io.listen(3000)