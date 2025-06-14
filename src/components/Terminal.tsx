
import React, { useState, useEffect, useRef } from 'react';

interface Command {
  input: string;
  output: string[];
}

const Terminal = () => {
  const [history, setHistory] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  about      - Learn about me (spoiler: I debug in production)',
      '  skills     - My technical arsenal (no SQL injection included)',
      '  projects   - Things I\'ve built (that actually compile)',
      '  experience - My professional journey (featuring coffee and bugs)',
      '  education  - Academic background (where I learned to Google)',
      '  contact    - Reach out (I promise to respond faster than Internet Explorer)',
      '  resume     - Download my resume (PDF warning: may cause hiring)',
      '  jokes      - Random dev humor (undefined behavior ahead)',
      '  clear      - Clear terminal (Ctrl+Z for life)',
      '  exit       - Leave (but why would you want to?)',
    ],
    about: () => [
      'Hey there! I\'m Sankalp Prajapati 👨‍💻',
      '',
      'A Computer Science student at KIIT University who:',
      '• Writes code that works on the first try (just kidding, that\'s impossible)',
      '• Debugs with console.log() like a true artist',
      '• Believes in "it works on my machine" philosophy',
      '• Currently pursuing B.Tech with a CGPA of 9.09',
      '• Based in Varanasi, UP (where the Ganges flows and code compiles)',
      '',
      'When I\'m not staring at semicolons, you\'ll find me:',
      '• Trekking (escaping from bugs literally)',
      '• Playing Volleyball/Badminton (better reflexes = better debugging)',
      '• Playing Guitar (making music instead of syntax errors)',
      '• Playing Chess on chess.com (handle: Sunkey107)',
      '',
      'Fun fact: I have 99 problems, but a glitch ain\'t one... wait, that\'s a lie.',
    ],
    skills: () => [
      'My Tech Stack (AKA "Languages I pretend to know"):',
      '',
      '💻 Programming Languages:',
      '  • C/C++ - Where pointers go to make developers cry',
      '  • Java - Write once, debug everywhere',
      '  • Python - Life\'s too short for semicolons',
      '',
      '🛠️ Frameworks & Tools:',
      '  • Git - Because "ctrl+z" has limits',
      '  • OpenCV - Teaching computers to see (better than most humans)',
      '  • NumPy/Pandas - Making data scientists out of mortals',
      '  • TensorFlow - Where AI dreams come true',
      '  • React Native - One codebase to rule them all',
      '  • Linux - Real developers use the terminal',
      '  • SQL - Structured Query Language (Structured Questioning Life)',
      '  • Figma - Making things pretty before they break',
      '',
      'Warning: Proficiency levels may vary depending on Stack Overflow availability.',
    ],
    projects: () => [
      'Projects I\'ve Built (And Actually Work):',
      '',
      '🔐 Anti-Spoofing Attack Detection (May-July 2024)',
      '  • Built for DigiLocker & Entity Locker platforms',
      '  • Achieved 95% accuracy (the other 5% were really convincing fakes)',
      '  • Used CNN models to analyze 10,000+ images',
      '  • Technologies: OpenCV, Deep Learning, ResNet',
      '  • Fun fact: Trained AI to spot lies better than my mom',
      '',
      '📱 Nagrik Aur Samvidhan App (Nov-Dec 2024)',
      '  • Smart India Hackathon 2024 Runner-up',
      '  • Simplified Indian Constitution with AI chatbot',
      '  • Features: Multilingual text-to-speech, notifications',
      '  • Tech Stack: React Native, Flask, MySQL',
      '  • Achievement: Made law accessible (lawyers hate this trick)',
      '',
      'Repository status: Public (because sharing is caring)',
      'Bug count: Classified information 🤐',
    ],
    experience: () => [
      'Professional Journey (AKA "How I Got Paid to Code"):',
      '',
      '👨‍🏫 Teaching Assistant - KIIT University (Nov 2024 - Apr 2025)',
      '  • Teaching C programming to 50+ students',
      '  • Explaining why their code doesn\'t compile',
      '  • Mentoring in programming and math concepts',
      '  • Successfully converted "it doesn\'t work" into actual solutions',
      '',
      '💼 Summer Intern - Digital India Corporation (May-July 2024)',
      '  • Developed anti-spoofing measures',
      '  • Built CNN models with 95% accuracy',
      '  • Processed 10,000+ images (my laptop survived somehow)',
      '  • Improved security validation systems',
      '',
      '📢 PR/Marketing Lead - Coding Ninjas Club (June-Oct 2024)',
      '  • Secured partnerships and sponsorships',
      '  • Led marketing campaigns (50% increase in sign-ups)',
      '  • Proved that developers can actually talk to humans',
      '',
      'Coffee consumed: Immeasurable',
      'Sleep schedule: What\'s that?',
    ],
    education: () => [
      'Academic Background (Where I Learned to Google Efficiently):',
      '',
      '🎓 KIIT University, Bhubaneswar, Odisha',
      '  • B.Tech in Computer Science and Engineering',
      '  • Duration: Sep 2022 - Present',
      '  • CGPA: 9.09/10.0 (not a typo, I double-checked)',
      '  • Location: Bhubaneswar (Silicon Valley of East India)',
      '',
      'Courses that actually mattered:',
      '• Data Structures & Algorithms (where nightmares are born)',
      '• Database Management Systems (SQL your way to success)',
      '• Computer Networks (why the internet works... sometimes)',
      '• Machine Learning (teaching computers to be smarter than us)',
      '• Software Engineering (because spaghetti code isn\'t sustainable)',
      '',
      'GPA Translation: I attended classes AND understood them!',
    ],
    contact: () => [
      'Reach Out & Let\'s Debug Life Together:',
      '',
      '📧 Email: meissankalp@gmail.com',
      '   (I check this more often than my git commits)',
      '',
      '📱 Phone: +91-7348476177',
      '   (Available 24/7 for emergencies and job offers)',
      '',
      '🌐 Social Links:',
      '  • GitHub: Where my code lives (and dies)',
      '  • LinkedIn: Professional me (suit not included)',
      '  • LeetCode: Where I practice failing interviews',
      '  • Chess.com: Sunkey107 (I\'ll checkmate your algorithms)',
      '',
      '📍 Location: Varanasi, UP 221010',
      '   (Remote work preferred - pajamas are productive)',
      '',
      'Response time: Faster than Internet Explorer (that\'s not saying much)',
    ],
    resume: () => [
      'Resume Download:',
      '',
      '📄 My resume is available for download!',
      '   (Warning: May cause spontaneous hiring)',
      '',
      'Format: PDF (because .txt files don\'t get you hired)',
      'Size: Optimized for ATS systems',
      'Content: 100% buzzword-compliant',
      '',
      'Click here to download: [Resume will be available soon]',
      '',
      'Note: Resume crafted with love, coffee, and stack overflow.',
    ],
    jokes: () => {
      const jokes = [
        'Why do programmers prefer dark mode? Because light attracts bugs!',
        'How many programmers does it take to change a light bulb? None, that\'s a hardware problem.',
        'Why do Java developers wear glasses? Because they can\'t C#!',
        'I would tell you a UDP joke, but you might not get it.',
        'Why did the programmer quit his job? He didn\'t get arrays.',
        'There are 10 types of people: those who understand binary and those who don\'t.',
        'Why do programmers hate nature? It has too many bugs.',
        'A SQL query goes into a bar, walks up to two tables, and asks "Can I join you?"',
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      return [randomJoke, '', '(Ba dum tss... *cricket sounds*)'];
    },
    clear: () => [],
    exit: () => ['Goodbye! May your code compile and your bugs be few! 👋'],
  };

  const achievements = [
    '🏆 Smart India Hackathon Runner Up (SIH\'24) - Top 5 in country',
    '🏆 Relaython GFG KIIT Chapter 2023 - 7th Rank out of 25 teams',  
    '🏆 Hostel Badminton League Runner Up',
  ];

  useEffect(() => {
    // Initial welcome message
    const welcomeCommand: Command = {
      input: '',
      output: [
        '██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ ',
        '██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗',
        '██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║',
        '██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║',
        '██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝',
        '╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ',
        '',
        'Welcome to Sankalp\'s Interactive Terminal Portfolio v2.0.24',
        'Type "help" for available commands.',
        'Warning: This terminal may cause excessive hiring.',
        '',
        '🌟 Recent Achievements:',
        ...achievements,
        '',
      ],
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
      setHistory([]);
      return;
    } else if (commandFunction) {
      output = commandFunction();
    } else if (command === '') {
      return;
    } else {
      output = [
        `Command not found: ${input}`,
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

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-hidden">
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
                  className={`${line.startsWith('🏆') ? 'text-yellow-400' : 
                             line.startsWith('💻') || line.startsWith('🛠️') || line.startsWith('🔐') || line.startsWith('📱') || line.startsWith('👨‍🏫') || line.startsWith('💼') || line.startsWith('📢') || line.startsWith('🎓') ? 'text-blue-400' : 
                             line.startsWith('•') ? 'text-gray-300 ml-4' : 
                             line.includes('█') ? 'text-cyan-400' : 
                             'text-green-400'}`}
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
