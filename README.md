# Next.js + MongoDB Starter for GadoHost

A production-ready **Next.js 15 + MongoDB 7** starter template optimized for zero-downtime deployment on [GadoHost Cloud](https://gadohost.com).

## Features

- Next.js 15 App Router with TypeScript
- Official MongoDB Node.js driver with connection pooling (`src/lib/mongodb.ts`)
- Built-in `/api/health` endpoint verifying MongoDB connectivity
- Zero-config `PORT` binding compatible with GadoHost PM2 clusters

## Quick Deploy on GadoHost (Under 60 Seconds)

1. Create a **Node.js App** inside [gadohost.com/dashboard](https://gadohost.com/dashboard) (Node.js 20 or 22 LTS).
2. Create a **MongoDB 7 Cluster** in 1 click and copy your connection URI.
3. Add your `MONGODB_URI` inside the app's `.env` file via the Web File Manager or SFTP.
4. Connect this GitHub repository (or upload as a `.zip`) and click **Re-launch**.
5. Your app goes live automatically with Let's Encrypt HTTPS!

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app and `/api/health` to verify your database connection.

## Resources

- [GadoHost Node.js Hosting](https://gadohost.com/nodejs-hosting)
- [GadoHost Documentation](https://gadohost.com/docs)
- [Managed MongoDB Clusters](https://gadohost.com/database-hosting)
