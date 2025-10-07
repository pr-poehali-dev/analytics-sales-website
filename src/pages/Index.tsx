import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('days');
  const chartData = [
    45620, 52300, 48900, 51200, 49800, 74374, 68200, 71500, 69300, 
    42100, 67800, 72400, 75100, 78900, 73200, 69500, 71800, 74200, 
    76500, 72900, 68400, 70100, 73600, 75800, 77200, 74900, 71200, 69800
  ];

  const currentRevenue = 17049;
  const revenueChangePercent = -11.3;
  
  const avgCheck = 379;
  const avgCheckChange = -11.3;
  
  const checksCount = 45;
  const checksCountChange = 200.0;
  
  const dishesCount = 87;
  const dishesCountChange = -265.5;

  const tableData = [
    { date: '09.10.2021', revenue: 36373, withoutTips: 11148, totalRevenue: 47521, percent: 76.5 },
    { date: '10.10.2021', revenue: 25018, withoutTips: 6151, totalRevenue: 31169, percent: 80.3 },
    { date: '11.10.2021', revenue: 22078, withoutTips: 7904, totalRevenue: 29982, percent: 73.6 },
    { date: '12.10.2021', revenue: 27467, withoutTips: 7279, totalRevenue: 34746, percent: 79.1 },
    { date: '13.10.2021', revenue: 21439, withoutTips: 7127, totalRevenue: 28566, percent: 75.1 },
    { date: '14.10.2021', revenue: 27705, withoutTips: 9167, totalRevenue: 36872, percent: 75.1 },
    { date: '15.10.2021', revenue: 27343, withoutTips: 9412, totalRevenue: 36755, percent: 74.4 },
  ];

  const maxValue = Math.max(...chartData);
  const minValue = Math.min(...chartData);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-foreground">R_BI</h1>
            <nav className="flex gap-2">
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                Дашборд
              </Button>
              <Button variant="ghost" size="sm">Отчеты</Button>
              <Button variant="ghost" size="sm">Конструктор</Button>
              <Button variant="ghost" size="sm">Касс. протокол</Button>
              <Button variant="ghost" size="sm">Пром./Стоплист</Button>
              <Button variant="ghost" size="sm">Анализ комбо</Button>
            </nav>
          </div>
          <Badge variant="secondary">ABC</Badge>
        </div>
      </header>

      <aside className="fixed left-0 top-16 w-56 h-full bg-white border-r border-border p-4 space-y-2">
        <Button 
          variant={selectedPeriod === 'days' ? 'default' : 'ghost'} 
          className="w-full justify-start"
          onClick={() => setSelectedPeriod('days')}
        >
          ПО ДНЯМ
        </Button>
        <Button 
          variant={selectedPeriod === 'weeks' ? 'default' : 'ghost'} 
          className="w-full justify-start text-muted-foreground"
          onClick={() => setSelectedPeriod('weeks')}
        >
          ПО НЕДЕЛЯМ
        </Button>
        <Button 
          variant={selectedPeriod === 'months' ? 'default' : 'ghost'} 
          className="w-full justify-start text-muted-foreground"
          onClick={() => setSelectedPeriod('months')}
        >
          ПО МЕСЯЦАМ
        </Button>

        <div className="pt-6 space-y-2">
          <p className="text-xs text-primary">Данные обновлены: 10.10.2022 9:39:10</p>
          <p className="text-xs text-muted-foreground">Крайняя дата синхронизации: 09.10.2022</p>
          <p className="text-xs text-destructive">Загруженных смен на текущую дату: 1</p>
        </div>

        <div className="pt-4 flex items-center gap-2">
          <input 
            type="date" 
            defaultValue="2021-01-01"
            className="text-xs border border-border rounded px-2 py-1"
          />
        </div>

        <div className="pt-8">
          <Button variant="outline" size="sm" className="w-full">
            Очистить фильтры
          </Button>
        </div>

        <div className="pt-4">
          <input 
            type="text" 
            placeholder="Ресторан"
            className="w-full text-sm border border-border rounded px-3 py-2"
          />
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Ufa 69683</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-destructive"></div>
              <span>Ufa 71482</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="ml-56 p-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-card">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{currentRevenue.toLocaleString()} ₽</div>
              <div className="text-sm text-muted-foreground">Выручка</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-destructive bg-red-50 px-3 py-1 rounded-full">
                  {revenueChangePercent}%
                </div>
                <div className="text-sm text-muted-foreground">56 906 ₽</div>
              </div>
              <div className="h-16 flex items-end justify-between gap-1">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="flex-1 bg-primary/60 rounded-sm"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{avgCheck} ₽</div>
              <div className="text-sm text-muted-foreground">Средний чек</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-destructive bg-red-50 px-3 py-1 rounded-full">
                  {avgCheckChange}%
                </div>
                <div className="text-sm text-muted-foreground">422 ₽</div>
              </div>
              <div className="h-16">
                <svg viewBox="0 0 100 30" className="w-full h-full">
                  <polyline
                    points="0,15 10,12 20,18 30,14 40,16 50,11 60,13 70,17 80,14 90,16 100,12"
                    fill="none"
                    stroke="#5B8DBE"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{checksCount}</div>
              <div className="text-sm text-muted-foreground">Кол-во чеков/гостей</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-destructive bg-red-50 px-3 py-1 rounded-full">
                  {checksCountChange}%
                </div>
                <div className="text-sm text-muted-foreground">135</div>
              </div>
              <div className="h-16">
                <svg viewBox="0 0 100 30" className="w-full h-full">
                  <polyline
                    points="0,8 10,10 20,12 30,15 40,13 50,18 60,20 70,22 80,25 90,28 100,30"
                    fill="none"
                    stroke="#5B8DBE"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-card">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{dishesCount}</div>
              <div className="text-sm text-muted-foreground">Кол-во блюд</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-destructive bg-red-50 px-3 py-1 rounded-full">
                  {dishesCountChange}%
                </div>
                <div className="text-sm text-muted-foreground">318</div>
              </div>
              <div className="h-16">
                <svg viewBox="0 0 100 30" className="w-full h-full">
                  <polyline
                    points="0,5 10,8 20,12 30,10 40,15 50,18 60,16 70,20 80,22 90,25 100,20"
                    fill="none"
                    stroke="#5B8DBE"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-card mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon name="RefreshCw" size={20} className="text-primary" />
              <span className="text-sm font-medium">Обновить данные</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">По дням</Button>
              <Button size="sm" variant="outline">По неделям</Button>
              <Button size="sm" variant="outline">По месяцам</Button>
              <Button size="sm" variant="outline">По дн. нед.</Button>
              <Button size="sm" variant="outline">По часам</Button>
              <Button size="sm" variant="outline">По рест.</Button>
              <Button size="sm" variant="outline">По сотр.</Button>
              <Button size="sm" variant="outline">По блюдам</Button>
            </div>
          </div>

          <div className="relative h-80">
            <div className="absolute inset-0 flex items-end justify-between gap-1 pb-8">
              {chartData.map((value, index) => {
                const heightPercent = ((value - minValue) / (maxValue - minValue)) * 100;
                return (
                  <div 
                    key={index}
                    className="flex-1 bg-primary/70 hover:bg-primary transition-all cursor-pointer relative group"
                    style={{ height: `${heightPercent}%` }}
                  >
                    {index === 5 && (
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white border border-border shadow-lg rounded px-3 py-2 text-xs whitespace-nowrap z-10">
                        <div>Дата = 23.09.2022</div>
                        <div>Выручка = 74 374,00₽</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-8 flex items-center text-xs text-muted-foreground">
              {chartData.map((_, index) => (
                <div key={index} className="flex-1 text-center" style={{ fontSize: '9px' }}>
                  {index % 4 === 0 && `${9 + Math.floor(index / 4)}.09`}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <div className="flex-1">
              <div className="w-48 h-48 relative mx-auto">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#E8EAF0" strokeWidth="20"/>
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#5B8DBE" 
                    strokeWidth="20"
                    strokeDasharray={`${73.9 * 2.51} ${(100 - 73.9) * 2.51}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">73.9%</span>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">Диаграмма раздач</p>
            </div>

            <div className="flex-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Дата</span>
                  <span className="font-medium">ЮНИТЫ, руб</span>
                </div>
                {tableData.map((row, index) => (
                  <div key={index} className="flex items-center justify-between text-sm py-1 border-b border-border">
                    <span>{row.date}</span>
                    <span className="font-medium">{row.revenue.toLocaleString()} ₽</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>Выр. без юнитов</span>
                  <span>Общая выручка</span>
                  <span>%</span>
                </div>
                {tableData.map((row, index) => (
                  <div key={index} className="flex items-center justify-between text-sm py-1 border-b border-border">
                    <span>{row.withoutTips.toLocaleString()} ₽</span>
                    <span>{row.totalRevenue.toLocaleString()} ₽</span>
                    <span>{row.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-32">
              <div className="space-y-2">
                {tableData.map((row, index) => (
                  <div key={index} className="h-6">
                    <div 
                      className="h-full bg-primary/70 rounded"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="flex gap-2 justify-end">
          <Button size="sm" variant="default" className="bg-primary">Выручка</Button>
          <Button size="sm" variant="outline">Кол-во чеков</Button>
          <Button size="sm" variant="outline">Средний чек</Button>
          <Button size="sm" variant="outline">Кол-во</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
