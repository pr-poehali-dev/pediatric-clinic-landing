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
      description: 'Лечение заболеваний уха, горла и носа. Диагностика и терапия острых и хронических патологий ЛОР-органов у детей.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/ae825400-71d6-4d80-ad6c-7a001423faf7.jpg'
    },
    {
      title: 'Хирургия',
      icon: 'Scissors',
      description: 'Плановые и экстренные хирургические вмешательства. Современные методики и минимально инвазивные операции.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/bfe165aa-e632-49cf-8405-6ab56798e4bf.jpg'
    },
    {
      title: 'Челюстно-лицевая хирургия',
      icon: 'Smile',
      description: 'Коррекция врожденных и приобретенных дефектов челюстно-лицевой области у детей.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/066fc0a8-d065-4182-8e18-99866df0425d.jpg'
    },
    {
      title: 'Урология',
      icon: 'Droplet',
      description: 'Диагностика и лечение урологических заболеваний. Современное оборудование и опытные специалисты.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/52301588-7d8f-4541-b6f8-1f78d9e03d40.jpg'
    },
    {
      title: 'Эндоскопия',
      icon: 'Search',
      description: 'Современные эндоскопические методы диагностики и лечения. Малотравматичные процедуры с быстрым восстановлением.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/4efbcf0b-0f73-4766-9665-02ac3ab7bcad.jpg'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Новое оборудование в отделении ЛОР',
      date: '15 октября 2025',
      preview: 'В отделении установлено современное диагностическое оборудование',
      content: 'Мы рады сообщить, что в нашем ЛОР-отделении установлено новейшее диагностическое оборудование от ведущих мировых производителей. Это позволит нам проводить более точную диагностику и повысить качество лечения наших маленьких пациентов.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/ae825400-71d6-4d80-ad6c-7a001423faf7.jpg'
    },
    {
      id: 2,
      title: 'Успешное проведение сложной операции',
      date: '10 октября 2025',
      preview: 'Команда хирургов успешно провела сложную челюстно-лицевую операцию',
      content: 'Наша команда челюстно-лицевых хирургов успешно провела сложнейшую операцию по коррекции врожденного дефекта. Благодаря опыту специалистов и современному оборудованию, операция прошла успешно, пациент идет на поправку.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/bfe165aa-e632-49cf-8405-6ab56798e4bf.jpg'
    },
    {
      id: 3,
      title: 'День открытых дверей',
      date: '5 октября 2025',
      preview: 'Приглашаем на день открытых дверей нашего отделения',
      content: 'Приглашаем всех желающих на день открытых дверей нашего стационара. Вы сможете познакомиться с врачами, увидеть палаты и современное оборудование, задать интересующие вопросы.',
      image: 'https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/066fc0a8-d065-4182-8e18-99866df0425d.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Стационар кратковременного пребывания</div>
                <div className="text-sm text-muted-foreground">ДГКБ святого Владимира</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('directions')} className="text-sm hover:text-primary transition-colors">Направления</button>
              <button onClick={() => scrollToSection('oms')} className="text-sm hover:text-primary transition-colors">ОМС</button>
              <button onClick={() => scrollToSection('news')} className="text-sm hover:text-primary transition-colors">Новости</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-sm font-semibold">
                <Icon name="Phone" size={18} />
                +7 (495) 123-45-67
              </a>
              <Button onClick={() => setAppointmentOpen(true)}>Записаться</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-accent/5 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                  Стационар кратковременного пребывания
                </h1>
                <p className="text-xl text-muted-foreground">
                  Детская городская клиническая больница святого Владимира
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Мы рады предложить вам высококачественное медицинское обслуживание и инновационные методы лечения заболеваний ЛОР-органов, урологических патологий, хирургических и челюстно-лицевых проблем.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                <p className="text-base">
                  Благодаря нашим опытным специалистам и современному оборудованию, мы предоставляем эффективное лечение в рамках обязательного медицинского страхования (ОМС) для всех граждан России, а также для иностранных пациентов.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => setAppointmentOpen(true)} className="text-lg px-8">
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('directions')} className="text-lg px-8">
                  Наши направления
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/41173580-1043-4c45-aec2-d3069ddce142/files/475030f9-dd3a-4f8d-9b7f-3c015c8de55f.jpg"
                  alt="Стационар кратковременного пребывания"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Мы предлагаем вам уникальный опыт в лечении широкого спектра заболеваний в рамках ОМС для всех граждан РФ до 18 лет, а также мультидисциплинарную помощь для наших пациентов из-за рубежа.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Международные стандарты</h3>
                <p className="text-muted-foreground">Следуем лучшим мировым практикам в педиатрии</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Stethoscope" className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Эффективные методики</h3>
                <p className="text-muted-foreground">Современные подходы к диагностике и лечению</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Activity" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Современное оборудование</h3>
                <p className="text-muted-foreground">Новейшая медицинская техника от ведущих производителей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="problems" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Проблемы, которые мы решаем</h2>
            <p className="text-lg text-muted-foreground">
              Наше отделение специализируется на лечении широкого спектра заболеваний у детей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="TrendingUp" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Высокая заболеваемость ЛОР-патологиями</h3>
                  <p className="text-muted-foreground">Более 60% детей до 5 лет сталкиваются с заболеваниями уха, горла и носа. Мы предлагаем современные методы диагностики и лечения.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertCircle" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Врожденные патологии</h3>
                  <p className="text-muted-foreground">Около 5% детей рождаются с врожденными пороками развития челюстно-лицевой области и урологическими патологиями, требующими хирургической коррекции.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Activity" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Острые хирургические состояния</h3>
                  <p className="text-muted-foreground">Экстренная хирургическая помощь детям при травмах, острых воспалительных процессах и других неотложных состояниях.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Хронические заболевания</h3>
                  <p className="text-muted-foreground">Комплексный подход к лечению хронических патологий с применением современных протоколов и минимально инвазивных методик.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="before-after" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">До и после лечения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Результаты работы наших специалистов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { before: 'Хронический тонзиллит', after: 'Полное выздоровление', specialty: 'ЛОР' },
              { before: 'Врожденная патология', after: 'Успешная коррекция', specialty: 'Челюстно-лицевая хирургия' },
              { before: 'Урологическое заболевание', after: 'Восстановление функций', specialty: 'Урология' }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">До лечения</p>
                      <div className="aspect-square bg-red-100 rounded-lg flex items-center justify-center p-4">
                        <Icon name="AlertCircle" className="text-red-500" size={48} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">После лечения</p>
                      <div className="aspect-square bg-green-100 rounded-lg flex items-center justify-center p-4">
                        <Icon name="CheckCircle" className="text-green-500" size={48} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">{item.specialty}</p>
                    <p className="text-sm text-muted-foreground">{item.before} → {item.after}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Направления лечения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предоставляем специализированную помощь по пяти основным направлениям
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((direction, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={direction.image} 
                    alt={direction.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={direction.icon as any} className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{direction.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{direction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Phone" className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-6">Получите консультацию наших специалистов</h2>
            <p className="text-xl mb-8 text-white/90">
              Мы знаем, как вам помочь. Свяжитесь с нами прямо сейчас для записи на консультацию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+74951234567" className="text-2xl font-bold hover:underline">
                +7 (495) 123-45-67
              </a>
              <Button size="lg" variant="secondary" onClick={() => setAppointmentOpen(true)} className="px-8">
                Записаться онлайн
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="oms" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="ShieldCheck" className="text-primary" size={64} />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold mb-4">Лечение по ОМС</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Лечение в рамках обязательного медицинского страхования (бесплатно) для всех граждан Российской Федерации до 18 лет
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Check" className="text-primary" size={24} />
                      <span>Полный спектр диагностических исследований</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" className="text-primary" size={24} />
                      <span>Хирургическое и консервативное лечение</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" className="text-primary" size={24} />
                      <span>Современные методики и оборудование</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Check" className="text-primary" size={24} />
                      <span>Комфортные палаты и уход</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Новости и события</h2>
            <p className="text-lg text-muted-foreground">
              Последние новости нашего отделения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 group"
                onClick={() => {
                  setSelectedNews(item);
                  setNewsOpen(true);
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary font-semibold mb-3">{item.date}</p>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
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

      <section id="contacts" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады вам помочь
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Рубцовско-Дворцовая, д. 1/3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Ежедневно с 8:00 до 20:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@dgkb-vladimir.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Режим работы</h3>
                      <p className="text-muted-foreground">Стационар работает круглосуточно</p>
                      <p className="text-sm text-muted-foreground mt-1">Приём плановых пациентов: Пн-Пт 9:00-17:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A64c2e1f5e52f8c0d89c7e3f8f7c5e3e8e7f5e3e8e7f5e3e8"
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Карта расположения клиники"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight">Стационар кратковременного</div>
                  <div className="text-xs text-gray-400">пребывания</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                ДГКБ святого Владимира
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('directions')} className="text-gray-400 hover:text-white transition-colors">Направления</button></li>
                <li><button onClick={() => scrollToSection('oms')} className="text-gray-400 hover:text-white transition-colors">ОМС</button></li>
                <li><button onClick={() => scrollToSection('news')} className="text-gray-400 hover:text-white transition-colors">Новости</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@dgkb-vladimir.ru</li>
                <li>г. Москва, ул. Рубцовско-Дворцовая, д. 1/3</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Режим работы</h3>
              <p className="text-sm text-gray-400 mb-4">
                Стационар работает круглосуточно
              </p>
              <Button onClick={() => setAppointmentOpen(true)} className="w-full">
                Записаться
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 ДГКБ святого Владимира. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={appointmentOpen} onOpenChange={setAppointmentOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Запись на консультацию</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами для уточнения времени приёма
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">ФИО родителя</Label>
              <Input id="name" placeholder="Иванов Иван Иванович" />
            </div>
            <div>
              <Label htmlFor="child-name">ФИО ребенка</Label>
              <Input id="child-name" placeholder="Иванова Мария Ивановна" />
            </div>
            <div>
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <Label htmlFor="direction">Направление</Label>
              <select id="direction" className="w-full border rounded-md p-2">
                <option>Выберите направление</option>
                {directions.map((dir, i) => (
                  <option key={i}>{dir.title}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="message">Комментарий</Label>
              <Textarea id="message" placeholder="Опишите проблему или вопрос" rows={3} />
            </div>
            <Button type="submit" className="w-full">Отправить заявку</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={newsOpen} onOpenChange={setNewsOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
          {selectedNews && (
            <>
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogHeader>
                <div className="text-sm text-primary font-semibold mb-2">{selectedNews.date}</div>
                <DialogTitle className="text-2xl">{selectedNews.title}</DialogTitle>
              </DialogHeader>
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed">{selectedNews.content}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
