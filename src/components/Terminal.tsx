
import React, { useState, useEffect, useRef } from 'react';
import { commands, Command } from '../utils/terminalCommands';
import { getLineColorClass, getWelcomeMessage } from '../utils/terminalUtils';
import TimeDisplay from './TimeDisplay';

const Terminal = () => {
  const [history, setHistory] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const welcomeMessage = getWelcomeMessage();

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

  // Focus input after each command
  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

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

  return (
    <div className="min-h-screen bg-black text-white font-mono p-2 sm:p-4 overflow-hidden relative">
      <TimeDisplay />

      <div 
        ref={terminalRef}
        className="h-screen overflow-y-auto cursor-text pb-20"
        onClick={handleTerminalClick}
      >
        <div className="space-y-1 sm:space-y-2 max-w-full">
          {history.map((command, index) => (
            <div key={index} className="animate-fade-in">
              {command.input && (
                <div className="text-green-400 break-words text-sm sm:text-base">
                  {command.input}
                </div>
              )}
              {command.output.map((line, lineIndex) => (
                <div 
                  key={lineIndex} 
                  className={`${getLineColorClass(line)} break-words text-sm sm:text-base leading-relaxed`}
                >
                  {line}
                </div>
              ))}
            </div>
          ))}
          
          <div className="flex items-center flex-wrap">
            <span className="text-green-400 text-sm sm:text-base">sankalp@portfolio:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleInputSubmit}
              className="bg-transparent border-none outline-none text-white font-mono flex-1 ml-1 text-sm sm:text-base min-w-0"
              autoComplete="off"
              disabled={isTyping}
            />
            <span className="animate-pulse text-white text-sm sm:text-base">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
