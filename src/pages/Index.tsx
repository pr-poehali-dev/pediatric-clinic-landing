import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const directions = [
    {
      title: 'ЛОР',
      icon: 'Ear',
      description: 'Лечение заболеваний уха, горла и носа. Диагностика и терапия острых и хронических патологий ЛОР-органов у детей.'
    },
    {
      title: 'Хирургия',
      icon: 'Scissors',
      description: 'Плановые и экстренные хирургические вмешательства. Современные методики и минимально инвазивные операции.'
    },
    {
      title: 'Челюстно-лицевая хирургия',
      icon: 'Smile',
      description: 'Коррекция врожденных и приобретенных дефектов челюстно-лицевой области у детей.'
    },
    {
      title: 'Урология',
      icon: 'Droplet',
      description: 'Диагностика и лечение урологических заболеваний. Современное оборудование и опытные специалисты.'
    },
    {
      title: 'Эндоскопия',
      icon: 'Search',
      description: 'Современные эндоскопические методы диагностики и лечения. Малотравматичные процедуры с быстрым восстановлением.'
    }
  ];

  const doctors = [
    {
      name: 'Иванова Елена Петровна',
      specialty: 'Главный врач, хирург',
      experience: '25 лет опыта',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/dce3e11d-062b-401e-baf5-630bae41618e.jpg'
    },
    {
      name: 'Смирнов Александр Сергеевич',
      specialty: 'ЛОР-врач',
      experience: '18 лет опыта',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/dce3e11d-062b-401e-baf5-630bae41618e.jpg'
    },
    {
      name: 'Петрова Ольга Викторовна',
      specialty: 'Уролог',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/dce3e11d-062b-401e-baf5-630bae41618e.jpg'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Новое оборудование в отделении ЛОР',
      date: '15 октября 2025',
      preview: 'В отделении установлено современное диагностическое оборудование',
      content: 'Мы рады сообщить, что в нашем ЛОР-отделении установлено новейшее диагностическое оборудование от ведущих мировых производителей. Это позволит нам проводить более точную диагностику и повысить качество лечения наших маленьких пациентов.'
    },
    {
      id: 2,
      title: 'Успешное проведение сложной операции',
      date: '10 октября 2025',
      preview: 'Команда хирургов успешно провела сложную челюстно-лицевую операцию',
      content: 'Наша команда челюстно-лицевых хирургов успешно провела сложнейшую операцию по коррекции врожденного дефекта. Благодаря опыту специалистов и современному оборудованию, операция прошла успешно, пациент идет на поправку.'
    },
    {
      id: 3,
      title: 'День открытых дверей',
      date: '5 октября 2025',
      preview: 'Приглашаем на день открытых дверей нашего отделения',
      content: 'Приглашаем всех желающих на день открытых дверей нашего стационара. Вы сможете познакомиться с врачами, увидеть палаты и современное оборудование, задать интересующие вопросы.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Cross" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary">СКП ДГКБ св. Владимира</h1>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('problems')} className="text-sm font-medium hover:text-primary transition-colors">Что мы лечим</button>
              <button onClick={() => scrollToSection('directions')} className="text-sm font-medium hover:text-primary transition-colors">Направления</button>
              <button onClick={() => scrollToSection('before-after')} className="text-sm font-medium hover:text-primary transition-colors">До и после</button>
              <button onClick={() => scrollToSection('doctors')} className="text-sm font-medium hover:text-primary transition-colors">Наши доктора</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-sm font-semibold">
                <Icon name="Phone" size={18} className="text-primary" />
                +7 (495) 123-45-67
              </a>
              <Button onClick={() => setAppointmentOpen(true)}>
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Стационар кратковременного пребывания
              </h2>
              <p className="text-lg text-muted-foreground mb-2">
                Детская городская клиническая больница святого Владимира
              </p>
              <p className="text-lg mb-8">
                Мы рады предложить вам высококачественное медицинское обслуживание и инновационные методы лечения для ваших детей. Благодаря нашим опытным специалистам и современному оборудованию, мы предоставляем эффективное лечение в рамках обязательного медицинского страхования (ОМС) для всех граждан России, а также для иностранных пациентов.
              </p>
              <Button size="lg" onClick={() => setAppointmentOpen(true)} className="text-lg px-8">
                Записаться на консультацию
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/a0c2a4ea-a90c-4594-87cb-d38bd2815cf2.jpg"
                alt="Клиника"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">О нас</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Мы предлагаем вам уникальный опыт в лечении широкого спектра заболеваний в рамках ОМС для всех граждан РФ до 18 лет, а также мультидисциплинарную помощь для наших пациентов из-за рубежа.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Международные стандарты</h4>
                <p className="text-muted-foreground">Следуем лучшим мировым практикам в педиатрии</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Stethoscope" className="text-accent" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Эффективные методики</h4>
                <p className="text-muted-foreground">Современные подходы к диагностике и лечению</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Activity" className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">Современное оборудование</h4>
                <p className="text-muted-foreground">Новейшая медицинская техника от ведущих производителей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="problems" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Проблемы, которые мы решаем</h3>
            <p className="text-lg text-muted-foreground">
              Наше отделение специализируется на лечении широкого спектра заболеваний у детей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Высокая заболеваемость ЛОР-патологиями</h4>
                  <p className="text-muted-foreground">Более 60% детей до 5 лет сталкиваются с заболеваниями уха, горла и носа. Мы предлагаем современные методы диагностики и лечения.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Врожденные патологии</h4>
                  <p className="text-muted-foreground">Специализируемся на коррекции врожденных дефектов челюстно-лицевой области и урологических патологий.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Острые состояния</h4>
                  <p className="text-muted-foreground">Экстренная хирургическая помощь детям с минимальным временем ожидания и быстрым восстановлением.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Хронические заболевания</h4>
                  <p className="text-muted-foreground">Комплексный подход к лечению хронических патологий с применением современных протоколов.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Направления лечения</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предоставляем специализированную помощь по пяти основным направлениям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((direction, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={direction.icon as any} className="text-primary group-hover:text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{direction.title}</h4>
                  <p className="text-muted-foreground">{direction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="before-after" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">До и после лечения</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Результаты работы наших специалистов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">До</p>
                      <div className="aspect-square bg-gray-200 rounded-lg"></div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-accent mb-2">После</p>
                      <div className="aspect-square bg-accent/10 rounded-lg"></div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Пациент {item}: успешное лечение, полное восстановление функций
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Наши доктора</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты с многолетней практикой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">{doctor.name}</h4>
                  <p className="text-primary font-semibold mb-1">{doctor.specialty}</p>
                  <p className="text-sm text-muted-foreground">{doctor.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Получите консультацию наших специалистов</h3>
          <p className="text-xl mb-8 opacity-90">Мы знаем, как вам помочь</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="tel:+74951234567" className="flex items-center gap-3 text-2xl font-bold">
              <Icon name="Phone" size={32} />
              +7 (495) 123-45-67
            </a>
            <Button size="lg" variant="secondary" onClick={() => setAppointmentOpen(true)}>
              Записаться на прием
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={40} />
            </div>
            <h3 className="text-4xl font-bold mb-6">Лечение по ОМС</h3>
            <p className="text-xl leading-relaxed opacity-95">
              Бесплатное лечение в рамках обязательного медицинского страхования для всех граждан Российской Федерации в возрасте до 18 лет
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={24} />
                <span>Без очередей</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={24} />
                <span>Опытные врачи</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={24} />
                <span>Современное оборудование</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Новости</h3>
            <p className="text-lg text-muted-foreground">Последние события нашего отделения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card 
                key={item.id} 
                className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
                onClick={() => {
                  setSelectedNews(item);
                  setNewsOpen(true);
                }}
              >
                <CardContent className="p-6">
                  <p className="text-sm text-primary font-semibold mb-3">{item.date}</p>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground mb-4">{item.preview}</p>
                  <Button variant="ghost" className="px-0">
                    Читать далее <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Контакты</h3>
            <p className="text-lg text-muted-foreground">Мы всегда рады помочь вам</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Рубцовско-Дворцовая, д. 1/3</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@dgkb-vladimir.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Режим работы</h4>
                    <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A64f4a510b35e2d87a78fb5b0e77a5f6737567ba7f2e6e8f5e6c2c8f8d0b7e5a1&amp;source=constructor" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Cross" className="text-white" size={20} />
                </div>
                <h4 className="font-bold">СКП ДГКБ</h4>
              </div>
              <p className="text-sm opacity-80">Стационар кратковременного пребывания</p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Навигация</h5>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block opacity-80 hover:opacity-100">О нас</button>
                <button onClick={() => scrollToSection('directions')} className="block opacity-80 hover:opacity-100">Направления</button>
                <button onClick={() => scrollToSection('doctors')} className="block opacity-80 hover:opacity-100">Доктора</button>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="space-y-2 text-sm opacity-80">
                <p>+7 (495) 123-45-67</p>
                <p>info@dgkb-vladimir.ru</p>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Режим работы</h5>
              <p className="text-sm opacity-80">Круглосуточно<br/>Без выходных</p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60">
            <p>© 2025 ДГКБ святого Владимира. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={appointmentOpen} onOpenChange={setAppointmentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Запись на консультацию</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Имя родителя</Label>
              <Input id="name" placeholder="Иванов Иван Иванович" />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <Label htmlFor="child">Возраст ребенка</Label>
              <Input id="child" placeholder="5 лет" />
            </div>
            <div>
              <Label htmlFor="direction">Направление</Label>
              <select id="direction" className="w-full px-3 py-2 border rounded-md">
                <option>ЛОР</option>
                <option>Хирургия</option>
                <option>Челюстно-лицевая хирургия</option>
                <option>Урология</option>
                <option>Эндоскопия</option>
              </select>
            </div>
            <div>
              <Label htmlFor="message">Комментарий</Label>
              <Textarea id="message" placeholder="Опишите проблему..." rows={3} />
            </div>
            <Button className="w-full" size="lg">
              Отправить заявку
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={newsOpen} onOpenChange={setNewsOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedNews?.title}</DialogTitle>
            <DialogDescription>{selectedNews?.date}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-base leading-relaxed">{selectedNews?.content}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
