import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [chartData, setChartData] = useState([65, 78, 82, 88, 92, 95, 98]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 20) + 80];
        return newData;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: 'BarChart3',
      title: 'Интерактивные дашборды',
      description: 'Создавайте кастомные дашборды с перетаскиванием виджетов и настройкой метрик'
    },
    {
      icon: 'TrendingUp',
      title: 'Анализ в реальном времени',
      description: 'Получайте данные мгновенно с автоматическим обновлением показателей'
    },
    {
      icon: 'Zap',
      title: 'Предиктивная аналитика',
      description: 'AI-алгоритмы предсказывают тренды и аномалии в ваших данных'
    },
    {
      icon: 'Shield',
      title: 'Безопасность данных',
      description: 'Шифрование на уровне банков и соответствие GDPR/ISO стандартам'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '2 990',
      period: 'месяц',
      features: ['До 10 000 событий', '3 дашборда', 'Базовые отчёты', 'Email поддержка']
    },
    {
      name: 'Professional',
      price: '9 990',
      period: 'месяц',
      popular: true,
      features: ['До 100 000 событий', 'Безлимит дашбордов', 'AI-анализ', 'Приоритетная поддержка', 'API доступ']
    },
    {
      name: 'Enterprise',
      price: 'По запросу',
      period: '',
      features: ['Безлимит событий', 'Выделенный сервер', 'Персональный менеджер', 'SLA 99.9%', 'Кастомные интеграции']
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Google Analytics', logo: '📊' },
    { name: 'Slack', logo: '💬' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '🔶' },
    { name: 'Stripe', logo: '💳' }
  ];

  const maxValue = Math.max(...chartData);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="BarChart3" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Analytics System</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
              <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors">Интеграции</a>
              <Button size="sm" className="bg-primary hover:bg-primary/90">Начать</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="secondary" className="w-fit">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Визуализация данных в реальном времени
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
              Принимайте решения на основе данных
            </h1>
            <p className="text-lg text-muted-foreground">
              Мощная система аналитики с интерактивными дашбордами, AI-анализом и интеграциями с вашими инструментами
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Rocket" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <Card className="p-6 bg-card border-border animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-card-foreground">Активность пользователей</h3>
                <Badge variant="secondary" className="animate-pulse-slow bg-accent text-accent-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent-foreground mr-2"></div>
                  Live
                </Badge>
              </div>
              
              <div className="h-64 flex items-end gap-2 justify-between">
                {chartData.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary to-primary/60 transition-all duration-500 ease-out"
                      style={{ height: `${(value / maxValue) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground">{index + 1}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Активные</p>
                  <p className="text-2xl font-bold text-foreground">{chartData[chartData.length - 1]}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Рост</p>
                  <p className="text-2xl font-bold text-accent flex items-center">
                    +12%
                    <Icon name="TrendingUp" size={16} className="ml-1" />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Конверсия</p>
                  <p className="text-2xl font-bold text-foreground">4.2%</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-20 border-t border-border">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Возможности системы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всё необходимое для глубокого анализа данных и принятия обоснованных решений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-20 border-t border-border">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Тарифные планы</h2>
          <p className="text-lg text-muted-foreground">Выберите подходящий план для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative ${plan.popular ? 'border-primary border-2 shadow-lg scale-105' : 'border-border'} bg-card`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Популярный
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== 'По запросу' && <span className="text-4xl font-bold text-foreground">{plan.price}</span>}
                  {plan.price === 'По запросу' && <span className="text-3xl font-bold text-foreground">{plan.price}</span>}
                  {plan.period && <span className="text-muted-foreground">/ {plan.period}</span>}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-muted-foreground">
                    <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Выбрать план
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section id="integrations" className="container mx-auto px-4 py-20 border-t border-border">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Интеграции</h2>
          <p className="text-lg text-muted-foreground">Подключайте любимые инструменты за пару кликов</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <Card 
              key={index}
              className="p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer bg-card border-border"
            >
              <div className="text-4xl mb-3">{integration.logo}</div>
              <p className="text-sm font-medium text-center text-card-foreground">{integration.name}</p>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="BarChart3" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Analytics System</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Analytics System. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
