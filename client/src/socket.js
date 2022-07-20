import io from 'socket.io-client';

const sockets = io(process.env.REACT_APP_VIDEO_SERVER_URL, {
    autoConnect: true,
    forceNew: true
});

export default sockets;