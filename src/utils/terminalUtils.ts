
export const getLineColorClass = (line: string): string => {
  if (line.startsWith('Available commands:') || line.startsWith('My Technical Arsenal:') || line.startsWith('Academic Background:') || line.startsWith('Reach out')) return 'text-white font-bold';
  if (line.includes('help, h') || line.includes('Show this help message')) return 'text-red-400';
  if (line.includes('about, whoami') || line.includes('Learn about me')) return 'text-green-400';
  if (line.includes('projects, ls') || line.includes('View my projects')) return 'text-blue-400';
  if (line.includes('skills') || line.includes('See my technical skills')) return 'text-yellow-400';
  if (line.includes('contact') || line.includes('Get in touch')) return 'text-red-400';
  if (line.includes('experience') || line.includes('View work experience')) return 'text-green-400';
  if (line.includes('education') || line.includes('Academic background')) return 'text-blue-400';
  if (line.includes('clear, cls') || line.includes('Clear terminal')) return 'text-yellow-400';
  if (line.includes('github') || line.includes('Open GitHub profile')) return 'text-red-400';
  if (line.includes('linkedin') || line.includes('Open LinkedIn profile')) return 'text-green-400';
  if (line.includes('resume') || line.includes('Download resume')) return 'text-blue-400';
  if (line.startsWith('export ')) return 'text-yellow-400';
  if (line.startsWith('echo ')) return 'text-cyan-400';
  if (line.startsWith('$ ')) return 'text-blue-400';
  if (line.startsWith('for ') || line.startsWith('done') || line.startsWith('do')) return 'text-purple-400';
  if (line.startsWith('├──') || line.startsWith('└──') || line.startsWith('→')) return 'text-gray-400';
  if (line.startsWith('•')) return 'text-white ml-4';
  if (line.startsWith('  ✓') || line.startsWith('✓')) return 'text-green-400';
  if (line.startsWith('drwxr-xr-x')) return 'text-blue-300';
  if (line.includes('Warning:') || line.includes('warning')) return 'text-red-400';
  if (line.includes('🏆')) return 'text-yellow-400';
  if (line.includes('Welcome to')) return 'text-white';
  if (line.includes('Type \'help\'')) return 'text-gray-300';
  if (line.includes('bash:') || line.includes('command not found')) return 'text-red-400';
  return 'text-gray-300';
};

export const getWelcomeMessage = (): string[] => [
  'Welcome to Sankalp\'s Terminal Portfolio v2.0.24',
  'Type \'help\' to see available commands',
  '',
];
