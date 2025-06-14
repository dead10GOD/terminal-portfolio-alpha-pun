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
      '  cd ~ #           - Navigate to about section',
      '  whoami #         - Learn about me (spoiler: I debug in production)',
      '  ls -la #         - List my technical skills and projects',
      '  history #        - My professional journey through code mines',
      '  ping #           - Contact information and social links',
      '  cat education #  - Academic background (where I learned to Google)',
      '  resume --download - Download my resume (PDF warning: may cause hiring)',
      '  sudo jokes       - Random dev humor (undefined behavior ahead)',
      '  clear            - Clear terminal (keeps welcome message)',
      '  exit             - Leave (but why would you want to?)',
      '',
      '# Use --verbose flag for detailed output on most commands',
    ],
    about: () => [
      '# Initializing developer profile...',
      '',
      'export NAME="Sankalp Prajapati"',
      'export ROLE="Computer Science Student & Developer"',
      'export LOCATION="Varanasi, UP → KIIT University, Bhubaneswar"',
      'export CGPA="9.09/10.0"',
      '',
      '# Personal README.md',
      'A Computer Science student at KIIT University who:',
      '• Writes code that works on the first try (just kidding, that\'s impossible)',
      '• Debugs with console.log() like a true artist 🎨',
      '• Believes in "it works on my machine" philosophy',
      '• Currently pursuing B.Tech with stellar academic performance',
      '',
      '# Hobbies and interests outside coding:',
      '~/interests/sports     → Volleyball, Badminton (better reflexes = better debugging)',
      '~/interests/music      → Guitar (making music instead of syntax errors)',
      '~/interests/adventure  → Trekking (escaping from bugs literally)',
      '~/interests/games      → Chess on chess.com (handle: Sunkey107)',
      '',
      'console.log("Fun fact: I have 99 problems, but a glitch ain\'t one... wait, that\'s a lie.");',
    ],
    skills: () => [
      '# My Technical Arsenal (Languages I pretend to master):',
      '',
      'Languages=("C/C++" "Java" "Python")',
      'for lang in "${Languages[@]}"; do',
      '    echo "  ✓ $lang - Where magic happens and bugs are born"',
      'done',
      '',
      'Frameworks=("Git" "OpenCV" "NumPy/Pandas" "TensorFlow" "React Native" "Linux" "SQL" "Figma")',
      'echo "# Development Tools & Frameworks:"',
      'for tool in "${Frameworks[@]}"; do',
      '    echo "  → $tool"',
      'done',
      '',
      '# Special mentions:',
      '• Git - Because "ctrl+z" has limits',
      '• OpenCV - Teaching computers to see (better than most humans)',
      '• TensorFlow - Where AI dreams come true',
      '• Linux - Real developers use the terminal',
      '• SQL - Structured Query Language (Structured Questioning Life)',
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
      '# Anti-Spoofing Attack Detection (May-July 2024)',
      'Built for DigiLocker & Entity Locker platforms',
      'Achieved 95% accuracy (the other 5% were really convincing fakes)',
      'Processed 10,000+ images using CNN models',
      'Technologies: OpenCV, Deep Learning, ResNet',
      'Status: Production Ready ✅',
      '',
      '$ cat ~/projects/nagrik-aur-samvidhan/README.md',
      '# Nagrik Aur Samvidhan Mobile App (Nov-Dec 2024)',
      'Smart India Hackathon 2024 Runner-up 🏆',
      'Simplified Indian Constitution with AI chatbot',
      'Features: Multilingual text-to-speech, push notifications',
      'Tech Stack: React Native, Flask, MySQL',
      'Achievement: Made law accessible (lawyers hate this trick)',
      '',
      'echo "Repository status: Public (because sharing is caring)"',
      'echo "Bug count: Classified information 🤐"',
    ],
    experience: () => [
      '# My professional journey through the code mines and corporate dungeons...',
      '',
      'export CURRENT_ROLE="Teaching Assistant"',
      'export COMPANY="KIIT University"',
      'export DURATION="Nov 2024 - Apr 2025"',
      'export LOCATION="Bhubaneswar, India"',
      '',
      'Teaching 50+ first-year students the art of C programming and why their code doesn\'t',
      'compile (spoiler: missing semicolons)',
      'Mentoring in programming and math concepts',
      'Successfully converted "it doesn\'t work" into actual solutions',
      '',
      '# Previous experiences:',
      '',
      'Summer Intern | Digital India Corporation (May-July 2024)',
      '├── Developed anti-spoofing measures for DigiLocker platforms',
      '├── Built CNN models with 95% accuracy',
      '├── Processed 10,000+ images (my laptop survived somehow)',
      '└── Improved security validation systems',
      '',
      'PR/Marketing Lead | Coding Ninjas Club (June-Oct 2024)',
      '├── Secured partnerships and sponsorships',
      '├── Led marketing campaigns (50% increase in sign-ups)',
      '└── Proved that developers can actually talk to humans',
      '',
      'echo "Coffee consumed: Immeasurable ☕"',
      'echo "Sleep schedule: What\'s that? 😴"',
    ],
    education: () => [
      '$ cat /etc/education/profile',
      '',
      '# Academic Background (Where I learned to Google efficiently):',
      '',
      'Institution: KIIT University, Bhubaneswar, Odisha',
      'Degree: B.Tech in Computer Science and Engineering',
      'Duration: Sep 2022 - Present',
      'CGPA: 9.09/10.0 (not a typo, I double-checked)',
      'Status: Active Student',
      '',
      '# Core Curriculum Modules:',
      'coursework=(',
      '    "Data Structures & Algorithms  # where nightmares are born"',
      '    "Database Management Systems   # SQL your way to success"',
      '    "Computer Networks            # why internet works... sometimes"',
      '    "Machine Learning             # teaching computers to outsmart us"',
      '    "Software Engineering         # because spaghetti code isn\'t sustainable"',
      ')',
      '',
      'for course in "${coursework[@]}"; do',
      '    echo "✓ $course"',
      'done',
      '',
      'echo "GPA Translation: I attended classes AND understood them!"',
    ],
    contact: () => [
      '# Reach out & let\'s debug life together:',
      '',
      'export EMAIL="meissankalp@gmail.com"',
      'export PHONE="+91-7348476177"',
      'export LOCATION="Varanasi, UP 221010"',
      '',
      '# Social Network Connections:',
      'social_links=(',
      '    "GitHub: Where my code lives (and dies)"',
      '    "LinkedIn: Professional me (suit not included)"',
      '    "LeetCode: Where I practice failing interviews"',
      '    "Chess.com: Sunkey107 (I\'ll checkmate your algorithms)"',
      ')',
      '',
      'for link in "${social_links[@]}"; do',
      '    echo "→ $link"',
      'done',
      '',
      'echo "Response time: Faster than Internet Explorer (that\'s not saying much)"',
      'echo "Remote work preferred - pajamas are productive 👔"',
    ],
    resume: () => [
      '$ wget https://sankalp-portfolio.dev/resume.pdf',
      '',
      '# Resume Download Status:',
      'Format: PDF (because .txt files don\'t get you hired)',
      'Size: Optimized for ATS systems',
      'Content: 100% buzzword-compliant',
      'Quality: Crafted with love, coffee, and Stack Overflow',
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
    exit: () => ['Goodbye! May your code compile and your bugs be few! 👋'],
  };

  const welcomeMessage = [
    'Welcome to Sankalp\'s Interactive Terminal Portfolio v2.0.24',
    'Type "help" for available commands.',
    'Warning: This terminal may cause excessive hiring.',
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
    if (command === 'clear') {
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
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-hidden relative">
      {/* Live Date and Time */}
      <div className="absolute top-4 right-4 text-right">
        <div className="text-cyan-400 text-sm">{formatDate(currentTime)}</div>
        <div className="text-yellow-400 text-lg font-bold">{formatTime(currentTime)}</div>
      </div>

      {/* Top navigation bar like in the image */}
      <div className="flex space-x-8 mb-4 text-sm">
        <span className="text-green-400">user@portfolio:~$</span>
        <span className="text-yellow-400">cd ~ #</span>
        <span className="text-cyan-400">whoami #</span>
        <span className="text-blue-400">ls -la #</span>
        <span className="text-purple-400">history #</span>
        <span className="text-orange-400">ping #</span>
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
                <div className="text-green-300">
                  {command.input}
                </div>
              )}
              {command.output.map((line, lineIndex) => (
                <div 
                  key={lineIndex} 
                  className={`${
                    line.startsWith('# ') ? 'text-purple-400' :
                    line.startsWith('export ') ? 'text-yellow-400' :
                    line.startsWith('echo ') ? 'text-cyan-400' :
                    line.startsWith('$ ') ? 'text-blue-400' :
                    line.startsWith('for ') || line.startsWith('done') || line.startsWith('do') ? 'text-orange-400' :
                    line.startsWith('├──') || line.startsWith('└──') || line.startsWith('→') ? 'text-gray-400' :
                    line.startsWith('•') ? 'text-gray-300 ml-4' :
                    line.startsWith('  ✓') || line.startsWith('✓') ? 'text-green-300' :
                    line.startsWith('drwxr-xr-x') ? 'text-blue-300' :
                    line.includes('Warning:') || line.includes('warning') ? 'text-red-400' :
                    line.includes('🏆') ? 'text-yellow-400' :
                    line.includes('Available commands:') ? 'text-cyan-400' :
                    'text-green-400'
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}
          
          <div className="flex items-center">
            <span className="text-green-300">sankalp@portfolio:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleInputSubmit}
              className="bg-transparent border-none outline-none text-green-400 font-mono flex-1 ml-1"
              autoComplete="off"
              disabled={isTyping}
            />
            <span className="animate-pulse">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
