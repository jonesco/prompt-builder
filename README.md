# AI Prompt Builder

A modern, interactive web application for creating structured and effective AI prompts using a proven 6-component framework.

## 🚀 Features

- **6-Component Framework**: Build prompts using Role, Task, Context, Reasoning, Output Format, and Stop Conditions
- **Interactive UI**: Beautiful, responsive design with gradient backgrounds and smooth animations
- **Example Templates**: Pre-built examples to get you started quickly
- **Export Options**: Copy to clipboard or download prompts as text files
- **LLM Assistant Template**: Generate interactive prompt-building sessions for AI chatbots
- **Mobile Responsive**: Works perfectly on desktop and mobile devices

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **GitHub Pages** for deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/prompt-builder.git
cd prompt-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://[your-username].github.io/prompt-builder"
```

2. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Go to your repository settings on GitHub:
   - Navigate to Settings > Pages
   - Set Source to "Deploy from a branch"
   - Select the `gh-pages` branch
   - Save the settings

Your app will be available at: `https://[your-username].github.io/prompt-builder`

## 🎯 How to Use

### Building a Prompt

1. **Role**: Define the AI's expertise and perspective
2. **Task**: Outline specific actions and deliverables
3. **Context**: Provide background information and constraints
4. **Reasoning**: Guide the AI's thinking process
5. **Output Format**: Specify how results should be presented
6. **Stop Conditions**: Define completion criteria

### Using the LLM Assistant Template

1. Click "Copy LLM Assistant Template"
2. Paste into ChatGPT, Claude, or any AI chat
3. Follow the interactive prompts to build your prompt

## 📁 Project Structure

```
prompt-builder/
├── src/
│   ├── main.tsx          # React entry point
│   └── index.css         # Tailwind CSS imports
├── prompt_builder.tsx    # Main component
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and Vite for optimal performance
- Styled with Tailwind CSS for beautiful, responsive design
- Icons from Lucide React
