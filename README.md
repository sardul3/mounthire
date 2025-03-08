# Mount Hire LLC

A modern website for Mount Hire LLC, providing expert IT career guidance.

## Getting Started

First, install the dependencies:

```bash
npm install --legacy-peer-deps
# or
yarn install --legacy-peer-deps
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
RESEND_API_KEY=your_resend_api_key_here
```

You can copy the `.env.example` file as a template:

```bash
cp .env.example .env.local
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern UI with Tailwind CSS and Framer Motion
- Contact form with email integration
- Responsive design for all devices
- Server-side form processing 