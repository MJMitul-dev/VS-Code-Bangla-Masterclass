
export interface CourseSection {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  recap: string;
  icon: string;
}

export interface Shortcut {
  key: string;
  action: string;
  category: 'Beginner' | 'Productivity' | 'Navigation';
}

export interface Extension {
  name: string;
  description: string;
  category: string;
}
