const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:lang/robots.txt',
                destination: '/robots.txt',
                permanent: true,
            },
        ];
    }
};

module.exports = withNextIntl(nextConfig);