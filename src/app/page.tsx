import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center">Шаблон лендинга</h1>

        <div className="bg-card p-6 rounded-lg shadow-md mb-8 max-w-md w-full">
          <h2 className="mb-4">Проверка темы</h2>
          <p className="text-body-base mb-4">
            Этот текст должен адаптироваться к светлой и тёмной теме
            автоматически. Фон и текст изменят цвет при переключении темы.
          </p>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="bg-primary text-primary-foreground p-4 rounded-md">
            Primary цвет
          </div>
          <div className="bg-secondary text-secondary-foreground p-4 rounded-md">
            Secondary цвет
          </div>
          <div className="bg-accent text-accent-foreground p-4 rounded-md">
            Accent цвет
          </div>
          <div className="bg-muted text-muted-foreground p-4 rounded-md">
            Muted цвет
          </div>
        </div>
      </div>
    </main>
  );
}
