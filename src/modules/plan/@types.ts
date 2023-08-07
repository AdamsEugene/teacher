export interface LessonData {
  name: string;
  week_id: number;
  order: number;
  performance_indicators: {
    learning_outcomes: string[];
    skills: string[];
  };
  keywords: string[];
  references: {
    textbooks: TextbooksData[];
    online_resources: OnlineResourcesData[];
  };
  diff_instruct_scalfold: string;
  warm_up: string;
  concept_devt: string;
  assessment: string;
  wrap_up: string;
  going_further: string;
  teacher_notes: string;
}

export interface TextbooksData {
  title: string;
  author: string;
  pages: string;
}

export interface OnlineResourcesData {
  url: string;
  description: string;
}
