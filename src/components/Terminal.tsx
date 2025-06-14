import React, { useState, useEffect, useRef } from 'react';

interface Command {
  input: string;
  output: string[];
}

const Terminal = () => {
  const [history, setHistory] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const commands = {
    help: () => [
      'Available commands:',
      '',
      '  help, h             - Show this help message',
      '  about, whoami       - Learn about me',
      '  projects, ls        - View my projects',
      '  skills              - See my technical skills',
      '  contact             - Get in touch',
      '  experience          - View work experience',
      '  education           - Academic background',
      '  clear, cls          - Clear terminal',
      '  github              - Open GitHub profile',
      '  linkedin            - Open LinkedIn profile',
      '  resume              - Download resume',
      '  jokes               - Random dev humor',
      '  exit                - Leave terminal',
      '',
    ],
    h: () => commands.help(),
    about: () => [
      'export NAME="Sankalp Prajapati"',
      'export ROLE="Computer Science Student & Developer"',
      'export LOCATION="Varanasi, UP → KIIT University, Bhubaneswar"',
      'export CGPA="9.09/10.0"',
      '',
      'A Computer Science student at KIIT University who:',
      '• Writes code that works on the first try (just kidding, that\'s impossible)',
      '• Debugs with console.log() like a true artist 🎨',
      '• Believes in "it works on my machine" philosophy',
      '• Currently pursuing B.Tech with stellar academic performance',
      '',
      'Hobbies and interests outside coding:',
      '~/interests/sports     → Volleyball, Badminton',
      '~/interests/music      → Guitar',
      '~/interests/adventure  → Trekking',
      '~/interests/games      → Chess on chess.com (handle: Sunkey107)',
      '',
      'console.log("Fun fact: I have 99 problems, but a glitch ain\'t one... wait, that\'s a lie.");',
    ],
    whoami: () => commands.about(),
    skills: () => [
      'My Technical Arsenal:',
      '',
      'Languages=("C/C++" "Java" "Python")',
      'for lang in "${Languages[@]}"; do',
      '    echo "  ✓ $lang - Where magic happens and bugs are born"',
      'done',
      '',
      'Frameworks=("Git" "OpenCV" "NumPy/Pandas" "TensorFlow" "React Native" "Linux" "SQL" "Figma")',
      'echo "Development Tools & Frameworks:"',
      'for tool in "${Frameworks[@]}"; do',
      '    echo "  → $tool"',
      'done',
      '',
      'Special mentions:',
      '• Git - Because "ctrl+z" has limits',
      '• OpenCV - Teaching computers to see',
      '• TensorFlow - Where AI dreams come true',
      '• Linux - Real developers use the terminal',
      '• SQL - Structured Query Language',
      '',
      'echo "Warning: Proficiency levels may vary depending on Stack Overflow availability"',
    ],
    projects: () => [
      '$ ls -la ~/projects/',
      '',
      'drwxr-xr-x  2 sankalp dev  4096 Jul 2024  anti-spoofing-detection/',
      'drwxr-xr-x  2 sankalp dev  4096 Dec 2024  nagrik-aur-samvidhan/',
      '',
      '$ cat ~/projects/anti-spoofing-detection/README.md',
      'Anti-Spoofing Attack Detection (May-July 2024)',
      'Built for DigiLocker & Entity Locker platforms',
      'Achieved 95% accuracy (the other 5% were really convincing fakes)',
      'Processed 10,000+ images using CNN models',
      'Technologies: OpenCV, Deep Learning, ResNet',
      'Status: Production Ready ✅',
      '',
      '$ cat ~/projects/nagrik-aur-samvidhan/README.md',
      'Nagrik Aur Samvidhan Mobile App (Nov-Dec 2024)',
      'Smart India Hackathon 2024 Runner-up 🏆',
      'Simplified Indian Constitution with AI chatbot',
      'Features: Multilingual text-to-speech, push notifications',
      'Tech Stack: React Native, Flask, MySQL',
      'Achievement: Made law accessible',
      '',
      'echo "Repository status: Public (because sharing is caring)"',
    ],
    ls: () => commands.projects(),
    experience: () => [
      'My professional journey:',
      '',
      'export CURRENT_ROLE="Teaching Assistant"',
      'export COMPANY="KIIT University"',
      'export DURATION="Nov 2024 - Apr 2025"',
      'export LOCATION="Bhubaneswar, India"',
      '',
      'Teaching 50+ first-year students C programming',
      'Mentoring in programming and math concepts',
      'Successfully converted "it doesn\'t work" into actual solutions',
      '',
      'Previous experiences:',
      '',
      'Summer Intern | Digital India Corporation (May-July 2024)',
      '├── Developed anti-spoofing measures for DigiLocker platforms',
      '├── Built CNN models with 95% accuracy',
      '├── Processed 10,000+ images',
      '└── Improved security validation systems',
      '',
      'PR/Marketing Lead | Coding Ninjas Club (June-Oct 2024)',
      '├── Secured partnerships and sponsorships',
      '├── Led marketing campaigns (50% increase in sign-ups)',
      '└── Proved that developers can actually talk to humans',
      '',
      'echo "Coffee consumed: Immeasurable ☕"',
    ],
    education: () => [
      '$ cat /etc/education/profile',
      '',
      'Academic Background:',
      '',
      'Institution: KIIT University, Bhubaneswar, Odisha',
      'Degree: B.Tech in Computer Science and Engineering',
      'Duration: Sep 2022 - Present',
      'CGPA: 9.09/10.0 (not a typo, I double-checked)',
      'Status: Active Student',
      '',
      'Core Curriculum Modules:',
      'coursework=(',
      '    "Data Structures & Algorithms"',
      '    "Database Management Systems"',
      '    "Computer Networks"',
      '    "Machine Learning"',
      '    "Software Engineering"',
      ')',
      '',
      'for course in "${coursework[@]}"; do',
      '    echo "✓ $course"',
      'done',
      '',
      'echo "GPA Translation: I attended classes AND understood them!"',
    ],
    contact: () => [
      'Reach out & let\'s debug life together:',
      '',
      'export EMAIL="meissankalp@gmail.com"',
      'export PHONE="+91-7348476177"',
      'export LOCATION="Varanasi, UP 221010"',
      '',
      'Social Network Connections:',
      'social_links=(',
      '    "GitHub: Where my code lives (and dies)"',
      '    "LinkedIn: Professional me"',
      '    "LeetCode: Where I practice failing interviews"',
      '    "Chess.com: Sunkey107"',
      ')',
      '',
      'for link in "${social_links[@]}"; do',
      '    echo "→ $link"',
      'done',
      '',
      'echo "Response time: Faster than Internet Explorer"',
    ],
    github: () => [
      '$ xdg-open https://github.com/yourusername',
      'Opening GitHub profile...',
      'Status: Redirecting to GitHub',
    ],
    linkedin: () => [
      '$ xdg-open https://linkedin.com/in/yourusername',
      'Opening LinkedIn profile...',
      'Status: Redirecting to LinkedIn',
    ],
    resume: () => [
      '$ wget https://sankalp-portfolio.dev/resume.pdf',
      '',
      'Resume Download Status:',
      'Format: PDF',
      'Size: Optimized for ATS systems',
      'Content: 100% buzzword-compliant',
      'Quality: Crafted with love and coffee',
      '',
      '[Download link will be available soon]',
      '',
      'echo "Warning: May cause spontaneous hiring 📄"',
    ],
    jokes: () => {
      const jokes = [
        'Why do programmers prefer dark mode? Because light attracts bugs! 🐛',
        'How many programmers does it take to change a light bulb? None, that\'s a hardware problem. 💡',
        'Why do Java developers wear glasses? Because they can\'t C#! 👓',
        'I would tell you a UDP joke, but you might not get it. 📡',
        'Why did the programmer quit his job? He didn\'t get arrays. 📊',
        'There are 10 types of people: those who understand binary and those who don\'t. 01010',
        'Why do programmers hate nature? It has too many bugs. 🌿',
        'A SQL query goes into a bar, walks up to two tables, and asks "Can I join you?" 🍺',
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      return [randomJoke, '', '(Ba dum tss... *cricket sounds*) 🦗'];
    },
    clear: () => [],
    cls: () => [],
    exit: () => ['Goodbye! May your code compile and your bugs be few! 👋'],
  };

  const welcomeMessage = [
    'Welcome to Sankalp\'s Terminal Portfolio v2.0.24',
    'Type \'help\' to see available commands',
    '',
  ];

  useEffect(() => {
    // Initial welcome message
    const welcomeCommand: Command = {
      input: '',
      output: welcomeMessage,
    };
    setHistory([welcomeCommand]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (input: string) => {
    const command = input.toLowerCase().trim();
    const commandFunction = commands[command as keyof typeof commands];
    
    let output: string[];
    if (command === 'clear' || command === 'cls') {
      // Keep only the welcome message when clearing
      const welcomeCommand: Command = {
        input: '',
        output: welcomeMessage,
      };
      setHistory([welcomeCommand]);
      return;
    } else if (commandFunction) {
      output = commandFunction();
    } else if (command === '') {
      return;
    } else {
      output = [
        `bash: ${input}: command not found`,
        'Type "help" for available commands.',
        '',
        'Did you mean to Google that instead? 🤔',
      ];
    }

    const newCommand: Command = {
      input: `sankalp@portfolio:~$ ${input}`,
      output,
    };

    setHistory(prev => [...prev, newCommand]);
  };

  const handleInputSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsTyping(true);
      setTimeout(() => {
        handleCommand(currentInput);
        setCurrentInput('');
        setIsTyping(false);
      }, 100);
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono p-4 overflow-hidden relative">
      {/* Live Date and Time */}
      <div className="absolute top-4 right-4 text-right">
        <div className="text-cyan-400 text-sm">{formatDate(currentTime)}</div>
        <div className="text-yellow-400 text-lg font-bold">{formatTime(currentTime)}</div>
      </div>

      <div 
        ref={terminalRef}
        className="h-screen overflow-y-auto cursor-text"
        onClick={handleTerminalClick}
      >
        <div className="space-y-2">
          {history.map((command, index) => (
            <div key={index} className="animate-fade-in">
              {command.input && (
                <div className="text-green-400">
                  {command.input}
                </div>
              )}
              {command.output.map((line, lineIndex) => (
                <div 
                  key={lineIndex} 
                  className={`${
                    line.startsWith('Available commands:') || line.startsWith('My Technical Arsenal:') || line.startsWith('Academic Background:') || line.startsWith('Reach out') ? 'text-white font-bold' :
                    line.includes('help, h') || line.includes('Show this help message') ? 'text-red-400' :
                    line.includes('about, whoami') || line.includes('Learn about me') ? 'text-green-400' :
                    line.includes('projects, ls') || line.includes('View my projects') ? 'text-blue-400' :
                    line.includes('skills') || line.includes('See my technical skills') ? 'text-yellow-400' :
                    line.includes('contact') || line.includes('Get in touch') ? 'text-red-400' :
                    line.includes('experience') || line.includes('View work experience') ? 'text-green-400' :
                    line.includes('education') || line.includes('Academic background') ? 'text-blue-400' :
                    line.includes('clear, cls') || line.includes('Clear terminal') ? 'text-yellow-400' :
                    line.includes('github') || line.includes('Open GitHub profile') ? 'text-red-400' :
                    line.includes('linkedin') || line.includes('Open LinkedIn profile') ? 'text-green-400' :
                    line.includes('resume') || line.includes('Download resume') ? 'text-blue-400' :
                    line.startsWith('export ') ? 'text-yellow-400' :
                    line.startsWith('echo ') ? 'text-cyan-400' :
                    line.startsWith('$ ') ? 'text-blue-400' :
                    line.startsWith('for ') || line.startsWith('done') || line.startsWith('do') ? 'text-purple-400' :
                    line.startsWith('├──') || line.startsWith('└──') || line.startsWith('→') ? 'text-gray-400' :
                    line.startsWith('•') ? 'text-white ml-4' :
                    line.startsWith('  ✓') || line.startsWith('✓') ? 'text-green-400' :
                    line.startsWith('drwxr-xr-x') ? 'text-blue-300' :
                    line.includes('Warning:') || line.includes('warning') ? 'text-red-400' :
                    line.includes('🏆') ? 'text-yellow-400' :
                    line.includes('Welcome to') ? 'text-white' :
                    line.includes('Type \'help\'') ? 'text-gray-300' :
                    line.includes('bash:') || line.includes('command not found') ? 'text-red-400' :
                    'text-gray-300'
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}
          
          <div className="flex items-center">
            <span className="text-green-400">sankalp@portfolio:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleInputSubmit}
              className="bg-transparent border-none outline-none text-white font-mono flex-1 ml-1"
              autoComplete="off"
              disabled={isTyping}
            />
            <span className="animate-pulse text-white">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
