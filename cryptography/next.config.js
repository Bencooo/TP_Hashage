// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://34.163.219.17:8080/:path*', // Proxy vers le serveur distant
            },
        ];
    },
};
