import React, { useState } from 'react';
import { Copy, Download, RefreshCw, BookOpen, Lightbulb, MessageSquare, Menu, X } from 'lucide-react';

const PromptBuilder = () => {
  const [prompt, setPrompt] = useState({
    role: '',
    task: '',
    context: '',
    reasoning: '',
    outputFormat: '',
    stopConditions: ''
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [activeTab, setActiveTab] = useState('builder');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setPrompt(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePrompt = () => {
    let result = '';
    
    if (prompt.role.trim()) {
      result += `${prompt.role.trim()}\n\n`;
    }
    
    if (prompt.task.trim()) {
      result += `${prompt.task.trim()}\n\n`;
    }
    
    if (prompt.context.trim()) {
      result += `${prompt.context.trim()}\n\n`;
    }
    
    if (prompt.reasoning.trim()) {
      result += `${prompt.reasoning.trim()}\n\n`;
    }
    
    if (prompt.outputFormat.trim()) {
      result += `${prompt.outputFormat.trim()}\n\n`;
    }
    
    if (prompt.stopConditions.trim()) {
      result += `${prompt.stopConditions.trim()}`;
    }
    
    setGeneratedPrompt(result.trim());
    setActiveTab('output');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const downloadPrompt = () => {
    const blob = new Blob([generatedPrompt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-prompt.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateLLMTemplate = () => {
    return `# AI Prompt Building Assistant

You are an expert prompt engineer who helps users create highly effective, structured prompts using a proven 6-component framework. Your role is to guide users through an interactive process to build professional-quality prompts.

## Your Process:

1. **Start with Discovery**: Ask the user what they want to accomplish with AI. Get a clear understanding of their goal, target domain, and desired outcome.

2. **Guide Through Each Component**: Work through each section systematically, asking clarifying questions and providing examples:

### Role Component
- Ask: "What type of expert or specialist should the AI act as?"
- Help them define the AI's expertise, perspective, and background
- Example: "Act as an expert data scientist with 10 years of experience in machine learning..."

### Task Component  
- Ask: "What specific actions do you want the AI to take?"
- Break down complex requests into clear, actionable steps
- Encourage bullet points for multi-step tasks
- Example: "- Analyze the dataset for patterns\n- Identify key correlations\n- Provide actionable insights"

### Context Component
- Ask: "What background information, constraints, or requirements should the AI know?"
- Include relevant details, limitations, exclusions
- Example: "- Focus on data from the last 2 years\n- Exclude personally identifiable information\n- Prioritize statistical significance"

### Reasoning Component
- Ask: "How should the AI approach this problem and validate its work?"
- Guide thinking process, quality checks, verification steps
- Example: "- Cross-reference findings with industry benchmarks\n- Validate statistical methods used\n- Explain reasoning for each conclusion"

### Output Format Component
- Ask: "How do you want the results presented?"
- Be specific about structure, format, length
- Include examples of desired formatting
- Example: "Present as a markdown report with: Executive Summary, Key Findings (bullet points), Data Visualizations, Recommendations"

### Stop Conditions Component
- Ask: "How will you know the task is complete and successful?"
- Define clear completion criteria and success metrics
- Example: "Task complete when report includes 5+ key insights, 3+ actionable recommendations, and statistical validation for all claims"

3. **Review and Refine**: After gathering all components, present the complete prompt and ask if they'd like to modify any sections.

4. **Final Delivery**: Provide the final structured prompt in a clean, copy-ready format.

## Guidelines:
- Ask one section at a time, don't overwhelm with all questions at once
- Provide examples relevant to their domain when helpful
- Encourage specificity and clarity
- If they seem uncertain, offer multiple-choice options or examples
- Keep the conversation focused and productive

## Start the Process:
Begin by asking: "What would you like to create an AI prompt for? Tell me about the task or problem you want AI help with."

Then guide them through building each component systematically.`;
  };

  const copyLLMTemplate = () => {
    copyToClipboard(generateLLMTemplate());
  };

  const clearAll = () => {
    setPrompt({
      role: '',
      task: '',
      context: '',
      reasoning: '',
      outputFormat: '',
      stopConditions: ''
    });
    setGeneratedPrompt('');
  };

  const loadExample = () => {
    setPrompt({
      role: 'Act as an expert travel guide focused on recommending lesser-known, unique outdoor hikes within two hours of San Francisco.',
      task: `- Begin with a concise checklist (3-7 bullets) of steps you will follow to complete this task, focusing on conceptual planning rather than details.
- Identify and present the top 3 medium-length hikes (not among the most popular) within a two-hour drive from San Francisco.
- Ensure each hike selected offers a unique adventure due to its scenery, remoteness, or distinctive qualities.`,
      context: `- Exclude extremely popular hikes such as Mount Tam, Golden Gate Park, the Presidio, and other top-tier tourist mainstays in the San Francisco area.

- Prioritize accuracy: Hike names must match official listings (e.g., AllTrails), and all time and distance estimates should be realistic and reliable.
- Highlight what makes each hike an outstanding adventure in a concise summary.`,
      reasoning: `- Internally vet all suggested hikes to guarantee they are real, under-the-radar, and fit the specified parameters before responding.
- Cross-check hike names and details with reliable outdoor hiking sources.
- Optimize for clarity, concise presentation, and practical value.`,
      outputFormat: `- Return the results as a properly formatted Markdown table with these columns:
| --- | --- | --- | --- | --- | --- |
| [Hike 1 name] | [Address] | [X.X] | [XX] | [X:XX] | [Summary] |
| [Hike 2 name] | [Address] | [X.X] | [XX] | [X:XX] | [Summary] |
| [Hike 3 name] | [Address] | [X.X] | [XX] | [X:XX] | [Summary] |`,
      stopConditions: 'Task is complete when three verified, unique medium-length hikes, excluding overly popular options, are returned in the specified format, and validation has confirmed full compliance with all requirements.'
    });
  };

  const sections = [
    {
      key: 'role',
      title: 'Role',
      color: 'border-l-blue-500',
      placeholder: 'Define the AI\'s expertise and perspective (e.g., "Act as an expert data scientist...")',
      description: 'Set the context for who the AI should be and what expertise it should bring.',
      tip: 'Define AI expertise'
    },
    {
      key: 'task',
      title: 'Task',
      color: 'border-l-red-500',
      placeholder: 'Clearly outline what you want the AI to do, step by step...',
      description: 'Define specific actions and deliverables you want from the AI.',
      tip: 'Clear action steps'
    },
    {
      key: 'context',
      title: 'Context',
      color: 'border-l-green-500',
      placeholder: 'Provide background information, constraints, and requirements...',
      description: 'Give necessary background and set boundaries for the task.',
      tip: 'Background & limits'
    },
    {
      key: 'reasoning',
      title: 'Reasoning',
      color: 'border-l-purple-500',
      placeholder: 'Explain how the AI should approach the problem and validate its work...',
      description: 'Guide the AI\'s thinking process and quality control measures.',
      tip: 'Guide thinking'
    },
    {
      key: 'outputFormat',
      title: 'Output Format',
      color: 'border-l-gray-600',
      placeholder: 'Specify exactly how you want the results presented (tables, lists, etc.)...',
      description: 'Define the structure and format of the desired output.',
      tip: 'Structure output'
    },
    {
      key: 'stopConditions',
      title: 'Stop Conditions',
      color: 'border-l-cyan-500',
      placeholder: 'Define when the task is complete and what constitutes success...',
      description: 'Set clear completion criteria and success metrics.',
      tip: 'Success criteria'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="px-4 py-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Prompt Builder
              </h1>
              <p className="text-gray-300 text-sm hidden sm:block">Create structured, effective prompts</p>
            </div>
            
            {/* Desktop buttons - ALWAYS VISIBLE FOR TESTING */}
            <div className="flex gap-2">
              <button
                onClick={loadExample}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 text-sm"
              >
                <BookOpen size={14} />
                Example
              </button>
              <button
                onClick={clearAll}
                className="flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
              >
                <RefreshCw size={14} />
                Clear
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="sm:hidden mt-4 space-y-2">
              <button
                onClick={() => {
                  loadExample();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 text-sm"
              >
                <BookOpen size={14} />
                Load Example
              </button>
              <button
                onClick={() => {
                  clearAll();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm"
              >
                <RefreshCw size={14} />
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('builder')}
                  className={`px-6 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                    activeTab === 'builder' 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Builder
                </button>
                <button
                  onClick={() => setActiveTab('output')}
                  className={`px-6 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                    activeTab === 'output' 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Output
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pb-6 max-w-7xl mx-auto w-full">
        {/* Builder Tab */}
        {activeTab === 'builder' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-yellow-400" size={20} />
              <h2 className="text-xl font-semibold">Prompt Components</h2>
            </div>
            
            {sections.map((section) => (
              <div key={section.key} className={`border-l-4 ${section.color} bg-white/5 backdrop-blur-sm p-3 rounded-r-lg border border-white/10`}>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-white">{section.title}</h3>
                  <span className="text-xs px-2 py-1 bg-black/30 rounded text-gray-300">{section.tip}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{section.description}</p>
                <textarea
                  value={prompt[section.key]}
                  onChange={(e) => handleInputChange(section.key, e.target.value)}
                  placeholder={section.placeholder}
                  className="w-full p-2 bg-black/30 border border-white/20 rounded-lg resize-none text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  rows="3"
                />
              </div>
            ))}

            <button
              onClick={generatePrompt}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 shadow-lg text-lg"
            >
              Generate Prompt
            </button>
          </div>
        )}

        {/* Output Tab */}
        {activeTab === 'output' && (
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Generated Prompt</h2>
              {generatedPrompt && (
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(generatedPrompt)}
                    className="flex items-center gap-1 px-2 py-1 bg-green-600 hover:bg-green-700 rounded text-xs"
                  >
                    <Copy size={12} />
                    Copy
                  </button>
                  <button
                    onClick={downloadPrompt}
                    className="flex items-center gap-1 px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs"
                  >
                    <Download size={12} />
                    Save
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-black/30 rounded-lg p-3 min-h-96 border border-white/10">
              {generatedPrompt ? (
                <pre className="whitespace-pre-wrap text-gray-200 font-mono text-sm leading-relaxed">
                  {generatedPrompt}
                </pre>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  <div className="text-center">
                    <Lightbulb size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Build your prompt in the Builder tab</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer - LLM Assistant Template */}
      <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30 backdrop-blur-sm border-t border-white/20 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">🤖 LLM Assistant Template</h3>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Transform any LLM into your personal prompt-building assistant. This template creates an interactive session 
                that guides you through each component with questions, examples, and expert advice.
              </p>
            </div>
            <button
              onClick={copyLLMTemplate}
              className="py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto text-lg"
            >
              <MessageSquare size={20} />
              Copy LLM Assistant Template
            </button>
            <p className="text-sm text-gray-400 mt-4">
              Paste into ChatGPT, Claude, Gemini, or any AI chat to start building prompts interactively
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBuilder;