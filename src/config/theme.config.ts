import { z } from 'zod';

// Схема валидации для конфигурации темы
export const themeConfigSchema = z.object({
  // Настройки темы
  theme: z.object({
    // Поддержка темной темы
    darkMode: z.boolean().default(true),
    // Стандартная тема (light/dark/system)
    defaultTheme: z.enum(['light', 'dark', 'system']).default('system'),
  }),
  // Цветовая палитра
  colors: z.object({
    // Возможность определения кастомных цветовых схем
    custom: z.record(z.string(), z.string()).optional(),
  }),
  // Настройки анимаций
  animations: z.object({
    // Глобальное включение/отключение анимаций
    enabled: z.boolean().default(true),
  }),
  // Настройки шрифтов
  fonts: z.object({
    // Основной шрифт
    sans: z.string().default('Inter, system-ui, sans-serif'),
    // Шрифт для заголовков
    heading: z.string().default('Inter, system-ui, sans-serif'),
  }),
});

// Тип конфигурации темы
export type ThemeConfig = z.infer<typeof themeConfigSchema>;

// Дефолтная конфигурация темы
export const defaultThemeConfig: ThemeConfig = {
  theme: {
    darkMode: true,
    defaultTheme: 'system',
  },
  colors: {
    custom: {},
  },
  animations: {
    enabled: true,
  },
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
  },
};

// Функция для объединения пользовательской конфигурации с дефолтной
export function createThemeConfig(config?: Partial<ThemeConfig>): ThemeConfig {
  return {
    ...defaultThemeConfig,
    ...config,
    theme: {
      ...defaultThemeConfig.theme,
      ...config?.theme,
    },
    colors: {
      ...defaultThemeConfig.colors,
      ...config?.colors,
    },
    animations: {
      ...defaultThemeConfig.animations,
      ...config?.animations,
    },
    fonts: {
      ...defaultThemeConfig.fonts,
      ...config?.fonts,
    },
  };
}
