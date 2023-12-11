/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images:{
        domains: [
            "files.stripe.com"
        ]
    },
}

module.exports = nextConfig
