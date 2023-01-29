const API_URL = process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : false || "http://localhost:3000"

export {
    API_URL
}