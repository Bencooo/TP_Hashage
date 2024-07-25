// next.config.js
module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://34.163.219.17:3000/:path*', // Proxy vers le serveur distant
            },
        ];
    },
};
