import Echo from 'laravel-echo-fix-with-peer-deps';

import Pusher from 'pusher-js';
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: import.meta.env.VITE_ECHO_ADDRESS,
    forceTLS: true,
    withCredentials: true,
    transports: ['websocket'],
    enabledTransports: ['wss'],
});
