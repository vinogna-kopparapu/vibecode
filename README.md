# Random Facts Generator

## Overview
A simple React-based web application that generates random, interesting facts with a clean and minimal design. Perfect for quick, fun trivia!

## Features
- 📖 10 Unique, Hardcoded Facts
- 🔄 Random Fact Generation
- 🎨 Responsive Design
- 💡 Engaging User Interface

## Technologies
- Next.js
- React
- TypeScript
- Tailwind CSS

## How It Works
The app maintains a list of 10 interesting facts. Each time you click the "Generate Random Fact" button, a new fact is randomly selected and displayed.

### Key Characteristics
- Prevents repeating the same fact consecutively
- Provides a fallback message before the first fact is generated
- Responsive design that works on all device sizes

## Setup and Running

### Prerequisites
- Node.js (v18 or later)
- npm (v9 or later)

### Installation Steps
1. Clone the repository
```bash
git clone https://github.com/yourusername/random-facts-generator.git
cd random-facts-generator
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization
To add or modify facts, edit the `FACTS` array in `app/page.tsx`.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
MIT License

## Contact
Manogna Kopparapu - VenkataManognaKopparapu@github.com

Project Link: https://github.com/VenkataManognaKopparapu/Vibe_Code

## Unsplash Random Background

This application integrates the Unsplash API to display a random scenery image as the background each time a new fact is generated.

### Prerequisites

- Node.js (v14 or later)
- Unsplash Developer Account

### Setup

1. Create an Unsplash Developer Account
   - Go to [Unsplash Developers](https://unsplash.com/developers)
   - Click "Join" or "New Application"
   - Fill out the application details
   - Once approved, go to your "Applications" section
   - Create a new application
   - Copy your "Access Key"

2. Set the Unsplash API Key
   - Create a `.env.local` file in the project root
   - Add the following line:
     ```
     NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
     ```
   - IMPORTANT: Never commit this file to version control
   - Add `.env.local` to your `.gitignore`

### Troubleshooting

- **No Images Appearing?**
  - Verify your Unsplash API Access Key is correct
  - Check browser console for any error messages
  - Ensure you have an active internet connection
  - Confirm your Unsplash application has been approved

### Features
- Fetches a random landscape/scenery image on each fact generation
- Fallback to local background image if API request fails
- Adjustable image opacity for readability

### API Usage
- Uses Unsplash's `/photos/random` endpoint
- Filters images by 'scenery', 'landscape', and 'nature' keywords
- Prefers landscape orientation

### Rate Limits
- Unsplash API has rate limits for free accounts
- Approximately 50 requests per hour
- Consider upgrading if you need more frequent image changes
