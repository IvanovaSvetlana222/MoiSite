export default function GalaktikaRusskogoYazyka() {
  const audience = [
    {
      title: 'Первый полёт',
      text: 'Учащиеся 5–8 классов (подготовка к ВПР)',
    },
    {
      title: 'Разбор полётов',
      text: 'Выпускники основной школы — учащиеся 8–9 классов (подготовка к ОГЭ)',
    },
    {
      title: 'Перед выходом в открытый Космос',
      text: 'Выпускники средней школы — учащиеся 10–11 классов (подготовка к ЕГЭ)',
    },
  ]

  const features = [
    'Акцент на практику',
    'Все задания из ОБЗ ФИПИ',
    'Много интерактивных заданий',
  ]

  const requirements = [
    'Стационарный компьютер или ноутбук с наушниками и микрофоном',
    'Стабильный интернет',
  ]

  const schedule = [
    'Понедельник, 17:30 (МСК) — группа подготовки к ВПР',
    'Четверг, 18:00 (МСК) — группа подготовки к ОГЭ',
    'Пятница, 17:30 (МСК) — группа подготовки к ЕГЭ',
  ]

  const ogePoints = [
    '«Млечный путь» к изложению на «5»',
    '«ОРФО созвездие»: «космические ловушки» орфографии',
    '«Пункт 5.0»: синтаксис и пунктуация с космическими технологиями версии 5.0',
    '«Лексические спутники»: о лексике и фразеологии просто',
    '«Нормы поведения в лингвокосмосе»: грамматические нормы «великого и могучего»',
    '«Космическая станция №13»: текстоведение и «загадки» сочинения-рассуждения (задание 13)',
    'Теория + практика = «ОТЛИЧНО» на ОГЭ',
  ]

  const egeList1 = [
    '№№ 1, 26: «гравитация текста» — логико-смысловые отношения между предложениями в тексте',
    '№ 3: «мироздание» смысла, стилей и типов речи',
    '№№ 4–8: «космические нормы» — орфоэпические, грамматические, лексические',
    '№№ 9–15: «вселенная» орфографии',
    '№№ 16–21: «космос» пунктуации',
    '№ 22: «красноречивый Космос», или выразительные средства языка',
    '№№ 23, 24: информационно-смысловая переработка прочитанного текста, виды информации в тексте',
    '№№ 2, 25: «загадки» лексического анализа слова',
  ]

  const egeList2 = [
    '«Космос позиции автора» — авторская позиция как ответ на проблемный вопрос в задании 27',
    '«Небеспорядочные связи во Вселенной текста» — как найти и прокомментировать смысловую связь',
    '«Спутники»-иллюстрации — как найти и прокомментировать примеры-иллюстрации в задании 27',
    '«Мой космос» — как обосновать собственное мнение по авторской позиции',
    '«Нормы поведения в лингвокосмосе» — как соблюсти нормы языка в сочинении: орфография + пунктуация + грамматика + речь + логика + этика + фактическая точность',
    'Практические «полёты»: написание сочинений по экзаменационным критериям',
    '«Высший пилотаж»: проверка сочинения по экзаменационным критериям',
  ]

  const stars = Array.from({ length: 28 })

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060816] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.15),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.14),_transparent_22%),radial-gradient(circle_at_20%_80%,_rgba(249,115,22,0.14),_transparent_22%),linear-gradient(180deg,#050816_0%,#0b1024_45%,#050816_100%)]" />
        {stars.map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] animate-pulse rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.9)]"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 29) % 100}%`,
              animationDelay: `${(i % 8) * 0.5}s`,
              animationDuration: `${2 + (i % 5)}s`,
            }}
          />
        ))}
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute right-0 top-64 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <header className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.95)]" />
            Набор открыт • Мини-группы до 5 учеников
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-200/90">
                В центре внимания – твой успех!
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                <span className="bg-gradient-to-r from-cyan-300 via-white to-amber-200 bg-clip-text text-transparent">
                  Галактика Русского языка:
                </span>
                <br />
                <span className="text-white">притяжение знаний!</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                Подготовка к ВПР, ОГЭ, ЕГЭ в атмосфере космического путешествия — без стресса,
                с уверенностью, практикой и полётом к высоким результатам.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#signup"
                  className="rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 px-6 py-4 text-base font-bold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1"
                >
                  Записаться на курс
                </a>
                <a
                  href="#programs"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Посмотреть программу
                </a>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_60px_rgba(8,15,45,0.55)] backdrop-blur-xl">
                <p className="text-base leading-8 text-slate-100">
                  Мечтаете спокойно, без стресса, дрожи в коленях написать контрольную работу
                  (ВПР) или сдать экзамен по русскому языку (ОГЭ, ЕГЭ), чтобы поступить в
                  престижный вуз? Значит, этот курс для Вас! Как сказал когда-то первый
                  космонавт Земли Ю.А. Гагарин, отправляясь в свой первый космический полёт:
                  <span className="ml-2 font-bold text-amber-200">«Поехали!»</span>
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-md rounded-[2rem] border border-cyan-300/20 bg-white/5 p-6 shadow-[0_20px_80px_rgba(17,24,39,0.7)] backdrop-blur-xl">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
                <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1330]/80 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-cyan-200">Маршрут полёта</p>
                      <h2 className="mt-2 text-2xl font-bold text-white">К высоким баллам</h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-400 text-2xl shadow-[0_0_30px_rgba(251,191,36,0.45)]">
                      🚀
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      'ВПР • уверенность и разборы',
                      'ОГЭ • теория + практика',
                      'ЕГЭ • стратегия, сочинение, мониторинги',
                    ].map((item, idx) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 p-4"
                      >
                        <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-bold text-cyan-200">
                          {idx + 1}
                        </div>
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-white/5 to-amber-300/10 p-5">
                    <p className="text-sm uppercase tracking-[0.25em] text-amber-200/80">Формат</p>
                    <p className="mt-2 text-lg font-semibold text-white">Маленькие группы, максимум 5 учеников</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Каждый получает внимание, обратную связь и поддержку на каждом этапе подготовки.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-6 pb-24 sm:px-8 lg:px-12">
        <section className="grid gap-6 lg:grid-cols-3">
          {audience.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_14px_60px_rgba(4,10,28,0.55)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">Для кого курс</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </section>

        <section id="programs" className="rounded-[2.25rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_70px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/85">Программы курса</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Маршруты по орбитам знаний</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              Каждая программа — как продуманный полёт: с чётким маршрутом, практикой,
              поддержкой и выходом на уверенный результат.
            </p>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-3">
            <article className="rounded-[2rem] border border-cyan-300/15 bg-[#0b1330]/75 p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛰️</span>
                <h3 className="text-2xl font-bold">Первая космическая станция: ВПР</h3>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Все виды лингвистического разбора: фонетического, морфемного,
                словообразовательного, лексического, морфологического, орфографического,
                синтаксического, пунктуационного.
              </p>
              <div className="mt-5 rounded-2xl bg-cyan-300/10 p-4 text-sm font-semibold text-cyan-100">
                Уверенность при написании ВПР.
              </div>
            </article>

            <article className="rounded-[2rem] border border-amber-300/15 bg-[#111428]/80 p-6 xl:col-span-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌌</span>
                <h3 className="text-2xl font-bold">Космодром: разбор полётов ОГЭ</h3>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {ogePoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-6 text-slate-200">
                    {point}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="mt-6 rounded-[2rem] border border-orange-300/15 bg-[#0d1122]/85 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl">✨</span>
              <h3 className="text-2xl font-bold sm:text-3xl">
                Вселенная ЕГЭ, или Перед выходом в открытый Космос
              </h3>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/8 bg-white/5 p-5">
                <h4 className="text-xl font-bold text-amber-200">
                  Звездопад, или как получить 26 «звёзд» в коллекцию знаний
                </h4>
                <div className="mt-4 space-y-3">
                  {egeList1.map((item) => (
                    <div key={item} className="rounded-2xl bg-black/20 p-4 text-sm leading-6 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/8 bg-white/5 p-5">
                <h4 className="text-xl font-bold text-cyan-200">
                  «Гравитация текста», или «Тайны» экзаменационного сочинения
                </h4>
                <div className="mt-4 space-y-3">
                  {egeList2.map((item) => (
                    <div key={item} className="rounded-2xl bg-black/20 p-4 text-sm leading-6 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-gradient-to-r from-cyan-400/10 via-amber-300/10 to-orange-400/10 p-5 text-base font-semibold text-white">
              «Орбиталь»: мониторинги знаний каждые два месяца. Первый выход в открытый Космос Жизни без стресса!
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_14px_60px_rgba(4,10,28,0.55)] backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Почему этот курс особенный?</p>
            <h2 className="mt-4 text-3xl font-black">Практика, внимание, результат</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {features.map((item, idx) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-[#0d1430]/80 p-5">
                  <div className="text-2xl font-black text-amber-200">0{idx + 1}</div>
                  <p className="mt-3 text-base leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_14px_60px_rgba(4,10,28,0.55)] backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Что потребуется</p>
            <h2 className="mt-4 text-3xl font-black">Готовность к старту</h2>
            <div className="mt-6 space-y-4">
              {requirements.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-[#0d1430]/80 p-5 text-base leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_14px_60px_rgba(4,10,28,0.55)] backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Расписание</p>
            <h2 className="mt-4 text-3xl font-black">Полётный график</h2>
            <div className="mt-6 space-y-4">
              {schedule.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-[#0d1430]/80 p-5 text-base leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_14px_60px_rgba(4,10,28,0.55)] backdrop-blur-xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">Стоимость</p>
            <h2 className="mt-4 text-3xl font-black">Тарифы на запуск</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-cyan-300/20 bg-gradient-to-b from-cyan-300/10 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-100/80">Полный курс</p>
                <div className="mt-4 text-4xl font-black text-white">12 000 ₽</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">10 уроков с последовательной подготовкой и отработкой тем.</p>
              </div>
              <div className="rounded-[1.75rem] border border-amber-300/20 bg-gradient-to-b from-amber-300/10 to-transparent p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-amber-100/80">Абонемент</p>
                <div className="mt-4 text-4xl font-black text-white">1 300 ₽</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">Стоимость за 1 урок в удобном формате обучения.</p>
              </div>
            </div>
          </article>
        </section>

        <section className="rounded-[2.25rem] border border-amber-300/20 bg-gradient-to-br from-[#0f1739] via-[#0c1228] to-[#1a1022] p-6 shadow-[0_16px_70px_rgba(2,6,23,0.6)] sm:p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200/85">Набор открыт!</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl">Полетели к уверенности и высоким результатам</h2>
              <p className="mt-5 text-base leading-8 text-slate-200 sm:text-lg">
                Группы маленькие — максимум 5 учеников, чтобы каждый получил внимание.
                Места ограничены! Запишитесь сейчас — и следующее путешествие станет первым,
                где ваш ребёнок заговорит по-английски без страха!
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/85">Главное сейчас</p>
              <div className="mt-4 space-y-3 text-base leading-7 text-slate-200">
                <p>• Подготовка к ВПР, ОГЭ и ЕГЭ</p>
                <p>• Современный, спокойный и понятный формат</p>
                <p>• Индивидуальное внимание в мини-группах</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="signup" className="sticky bottom-0 z-20 border-t border-white/10 bg-[#060816]/80 px-6 py-5 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row sm:px-2">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">Галактика Русского языка</p>
            <p className="mt-1 text-base text-slate-200">Время взлетать к знаниям и отличным отметкам.</p>
          </div>
          <a
            href="#"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 px-8 py-5 text-center text-lg font-black text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-1 sm:w-auto sm:min-w-[320px]"
          >
            Записаться на курс
          </a>
        </div>
      </footer>
    </div>
  )
}
