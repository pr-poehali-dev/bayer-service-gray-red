import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const services = [
    {
      icon: 'Search',
      title: 'Поиск товаров',
      description: 'Найдем любой товар на китайских площадках по вашему запросу'
    },
    {
      icon: 'ShieldCheck',
      title: 'Проверка качества',
      description: 'Тщательная проверка каждого товара перед отправкой'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Быстрая и надежная доставка до вашей двери'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи для решения любых вопросов'
    }
  ];

  const steps = [
    { number: '01', title: 'Заявка', description: 'Отправляете нам ссылку или описание товара' },
    { number: '02', title: 'Расчет', description: 'Рассчитываем стоимость с учетом всех расходов' },
    { number: '03', title: 'Закупка', description: 'Выкупаем и проверяем качество товара' },
    { number: '04', title: 'Доставка', description: 'Отправляем товар удобным способом' }
  ];

  const reviews = [
    {
      name: 'Анна Смирнова',
      text: 'Заказывала оборудование для салона. Все пришло в идеальном состоянии, сэкономила почти 50%!',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Профессиональный подход! Помогли с выбором, проверили все до мелочей. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена Петрова',
      text: 'Быстро, качественно, без переплат. Теперь заказываю только через этот сервис.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает доставка?',
      answer: 'Обычно 14-21 день с момента заказа. Экспресс-доставка — 7-10 дней.'
    },
    {
      question: 'Какие гарантии качества товара?',
      answer: 'Мы проверяем каждый товар перед отправкой, делаем фото и видео. При обнаружении брака — полный возврат средств.'
    },
    {
      question: 'Как рассчитывается стоимость?',
      answer: 'Стоимость = цена товара + доставка до склада + проверка + международная доставка + наша комиссия 10%.'
    },
    {
      question: 'Можно ли заказать оптом?',
      answer: 'Да, при оптовых заказах предоставляем индивидуальные условия и скидки.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">NEWBE</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#how" className="text-muted-foreground hover:text-accent transition-colors">Как работает</a>
            <a href="#reviews" className="text-muted-foreground hover:text-accent transition-colors">Отзывы</a>
            <a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">FAQ</a>
            <a href="#contacts" className="text-muted-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-medium">Прямые поставки из Китая</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Закупка товаров<br />
              <span className="text-accent">из Китая</span> под ключ
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Поиск, проверка качества и доставка любых товаров с китайских площадок. 
              Экономьте до 60% от розничной цены.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                Рассчитать стоимость
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный цикл работы с китайскими поставщиками</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="transition-transform duration-300 hover:scale-105 border-border hover:border-accent/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Как это работает</h2>
            <p className="text-lg text-muted-foreground">Простой процесс от заявки до получения товара</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Нам доверяют сотни довольных клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="transition-transform duration-300 hover:scale-105 border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-foreground">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">Ответы на популярные вопросы о нашем сервисе</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Оставьте заявку и мы свяжемся с вами в течение часа</p>
          </div>
          <Card className="border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email или телефон</label>
                  <Input 
                    placeholder="ivan@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ваш запрос</label>
                  <Textarea 
                    placeholder="Опишите, какой товар вас интересует..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold text-foreground">NEWBE</span>
              </div>
              <p className="text-muted-foreground">Надежный партнер для закупок из Китая</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Поиск товаров</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Проверка качества</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (900) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@chinabuyer.ru
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 NEWBE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;