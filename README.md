# Web Assistant Chrome Extension

A Chromium extension that provides AI-powered assistance for web browsing developed by Ontology Studio - Samsung Research.

## Installation

### Method 1: Direct Installation from Build

1. Download or clone this repository:

```bash
git clone https://github.com/mahim-samsung/Web-Assistant.git
```

2. Open Chrome/Chromium browser
3. Go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in the top right corner)
5. Click "Load unpacked"
6. Navigate to and select the `build/chrome-mv3-prod` folder from the downloaded repository

### Method 2: Build from Source

1. Clone the repository:

```bash
git clone https://github.com/mahim-samsung/Web-Assistant.git
cd Web-Assistant
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Build the extension:

```bash
npm run build
# or
pnpm build
```

## Requirements

- Chromium browser

## Use Cases

Here are some practical scenarios where Samsung Web Assistant can help you:

1. **Email Communication**

   - Draft professional email replies with appropriate tone and context
   - Summarize long email threads to quickly understand the key points
   - Get suggestions for better email phrasing and structure

2. **Academic Research**

   - Extract key findings and methodologies from research papers
   - Generate concise summaries of complex academic content

3. **Form Filling and Data Entry**

   - Get assistance in filling out online forms
   - Understand form requirements and instructions
   - Provide guidance for required documentation

4. **Multilingual Support**

   - Translate and understand content in multiple languages
   - Get assistance in your preferred language
   - Cross-language content analysis and comparison
   - Language-specific context understanding

5. **Business and Work**

   - Analyze competitor websites and market trends
   - Summarize lengthy business reports and documents
   - Extract action items from meeting notes and documents
   - Get quick insights from financial reports and data

6. **Learning and Education**

   - Break down complex topics into simpler explanations
   - Create study notes from online educational content

7. **Content Creation**

   - Research and gather information for blog posts
   - Analyze trending topics and content ideas

8. **Technical Documentation**

   - Understand complex technical documentation
   - Get simplified explanations of code and technical concepts

9. **Legal Document Analysis**

   - Summarize lengthy legal documents and contracts
   - Extract key terms and conditions
   - Understand complex legal language in simple terms
   - Identify important clauses and obligations

10. **Medical and Health Information**

    - Get simplified explanations of medical research
    - Understand complex medical terms and procedures
    - Summarize health-related articles and studies
    - Compare different treatment options and their outcomes

11. **Product Research and Reviews**

    - Summarize user reviews and ratings
    - Extract key features and benefits
    - Get unbiased product Analysis

12. **News and Current Events**

    - Get balanced summaries of news articles
    - Extract key facts and figures from news reports

13. **Travel Planning**

    - Summarize travel guides and reviews
    - Compare hotel and accommodation options
    - Extract key information from travel blogs
    - Get quick insights about destinations and attractions

14. **Job Search and Career Development**
    - Analyze job descriptions and requirements
    - Summarize company profiles and reviews
    - Extract key skills and qualifications needed
    - Compare different career paths and opportunities

## Project Methodology

### Technology Stack

1. **Core Technologies**

   - Vue.js for the frontend framework
   - Plasmo Framework for Chrome extension development
   - LLMs

2. **Key Dependencies**
   - @mozilla/readability for web content extraction
   - @plasmohq/messaging for extension messaging
   - @plasmohq/storage for data persistence

### Workflow Methodology

1. **Content Extraction**

   - Uses Mozilla's Readability to extract main content from web pages
   - Removes ads, navigation, and other non-essential elements
   - Preserves the semantic structure of the content
   - Handles different types of web pages (articles, documentation, etc.)

2. **Content Processing**

   - Tokenizes content using js-tiktoken for efficient processing
   - Maintains context by preserving document structure
   - Extracts key metadata (title, headings, links)
   - Handles multiple languages and formats

3. **LLM Integration**

   - Sends processed content to LLM with specific context
   - Includes relevant metadata and user preferences
   - Maintains conversation history for context

4. **Response Generation**
   - Processes LLM responses for accuracy
   - Formats output based on content type
5. **User Interaction**
   - Presents results in a user-friendly format
   - Allows for follow-up questions and refinements
   - Maintains conversation context
   - Provides real-time feedback
