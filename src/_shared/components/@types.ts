export interface TextEditorProps {
  data?: string | null | undefined;
  onChange?: (data: string) => void;
  onFocus?: (section?: string, index?: number) => void;
  placeholder?: string;
  big?: boolean;
}
