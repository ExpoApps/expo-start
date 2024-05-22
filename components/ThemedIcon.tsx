import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedIconProps = {
  name: string;
  size: number;
  style?: object;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedIcon({ name, size, style, lightColor, darkColor }: ThemedIconProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <Feather name={name as any} size={size} style={[{ color }, style]} />;
}