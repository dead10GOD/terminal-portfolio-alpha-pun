
export const getLineColorClass = (line: string): string => {
  // Help command styling - commands in white, descriptions in colors
  if (line.includes('help, h') && line.includes('Show this help message')) return 'text-white';
  if (line.includes('about, whoami') && line.includes('Learn about me')) return 'text-white';
  if (line.includes('projects, ls') && line.includes('View my projects')) return 'text-white';
  if (line.includes('skills') && line.includes('See my technical skills')) return 'text-white';
  if (line.includes('contact') && line.includes('Get in touch')) return 'text-white';
  if (line.includes('experience') && line.includes('View work experience')) return 'text-white';
  if (line.includes('education') && line.includes('Academic background')) return 'text-white';
  if (line.includes('clear, cls') && line.includes('Clear terminal')) return 'text-white';
  if (line.includes('github') && line.includes('Open GitHub profile')) return 'text-white';
  if (line.includes('linkedin') && line.includes('Open LinkedIn profile')) return 'text-white';
  if (line.includes('resume') && line.includes('Download resume')) return 'text-white';
  if (line.includes('jokes') && line.includes('Random dev humor')) return 'text-white';
  if (line.includes('exit') && line.includes('Leave terminal')) return 'text-white';
  
  // Description colors (after the dash)
  if (line.includes('- Show this help message')) return 'text-red-400';
  if (line.includes('- Learn about me')) return 'text-green-400';
  if (line.includes('- View my projects')) return 'text-blue-400';
  if (line.includes('- See my technical skills')) return 'text-yellow-400';
  if (line.includes('- Get in touch')) return 'text-red-400';
  if (line.includes('- View work experience')) return 'text-green-400';
  if (line.includes('- Academic background')) return 'text-blue-400';
  if (line.includes('- Clear terminal')) return 'text-yellow-400';
  if (line.includes('- Open GitHub profile')) return 'text-red-400';
  if (line.includes('- Open LinkedIn profile')) return 'text-green-400';
  if (line.includes('- Download resume')) return 'text-blue-400';
  if (line.includes('- Random dev humor')) return 'text-purple-400';
  if (line.includes('- Leave terminal')) return 'text-cyan-400';
  
  // Headers and titles
  if (line.startsWith('Available commands:')) return 'text-white font-bold';
  if (line.startsWith('My Technical Arsenal:')) return 'text-white font-bold';
  if (line.startsWith('Academic Background:')) return 'text-white font-bold';
  if (line.startsWith('Reach out')) return 'text-white font-bold';
  
  // Special formatting
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
  if (line.includes('Really ? You here for the jokes ?')) return 'text-purple-400 font-bold';
  
  return 'text-gray-300';
};

export const getWelcomeMessage = (): string[] => [
  'Welcome to Sankalp\'s Terminal Portfolio v2.0.24',
  'Type \'help\' to see available commands',
  '',
];
