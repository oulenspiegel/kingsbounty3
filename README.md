# King's Bounty III: an expanded remake of the original DOS game in Javascript/HTML5

## Background and philosophical reflections

Like many of my colleagues in the programming guild, especially those who began their way into IT-world since the childhood, somewhere in the back of my mind I have a set of the warmest and most romantic memories of my first experiences. Once upon a time, back in 1987, my father took me to his work for the first time on a day off, where he solemnly sat me down on a chair in front of the humming Iskra-1030-11 (Soviet clone of i8086). Around then I firmly understood what I wanted to do in my future life.

Nowadays, by launching DOSBox, you can easily plunge into the aroma of a carefree childhood, remember that wonderful feeling of childhood omnipotence, dizzying interest, exciting new knowledge and skills. Now (in 2024) I'm 43, I have more than a two hundred people working under my supervision, and I still write a lot of code — especially where complex algorithms are required for intelligent data processing. Behind — in the arsenal of student achievements — the final of the ACM Olympiad, victories of my chess engine in ex-USSR championships, one of the algorithms on search trees named after me, hundreds of thousands of lines of my code in production, but nothing brings such joy and does not inspire as much as a return to the carefree world of childhood.

About 10 years ago I came across an emulator BK-0010-01 — my first home computer. Then it took a lot of effort not to start programming for it. However, this time, another wave of nostalgia nevertheless pushed me to take a very senseless step, the justification for which can only be the feeling of emotional uplift that I experienced after completing my crazy undertaking — the production of a remake/sequel of King's Bounty — the ancient ancestor of all games in the Heroes line of Might & Magic.

In general, it is an open secret that the time of lone programmers has passed. Lone heroes remained in the 90s, when, in the absence of the Internet and a large volume of specialized literature, as well as in an atmosphere of lack of computing resources, another left-hander deftly cut out 7 hats from the skin of an unkilled bear in a short time. Today, the work of programmers in most cases is collective, and the success of a developer depends to a much greater extent not on algorithmic knowledge and technological skills, but on the ability to quickly find the necessary information and communication skills (including the ability to write well-readable code that meets given requirements).

In general, the situation when one person today writes a game from start to finish (including developing the plot, logic of game interactions, creating graphics, selecting music, writing game dialogues, direct coding) is completely abnormal for the modern industry. The boots must be made by a shoemaker, and the pies must be baked by a pie maker, otherwise labor productivity will not be the highest. But on the other side of the scale lies a high level of motivation, which in some cases more than compensates for the costs that arise. The development of mobile platforms and the Web has made possible a kind of flashback — in strict accordance with the law of the negation of the negation — many of today's successful gaming startups were created either by individuals or by micro-teams that demonstrate amazing success thanks to unalienated labor.

Of course, in my case, the project is purely entertainment — there are no ideas about monetization, and in the case of such an “underground” remake it is hardly possible at all. The task was greatly simplified by the fact that the lion's share of the game graphics and logic was borrowed from the original game. In this regard, the currently abandoned OpenKB project (http://sourceforge.net/projects/openkb/) was very helpful, the author of which did a lot of work on reconstructing the original game logic and analyzing the data formats of the original game. The manuals written by the author of this project, as well as several other amateur manuals found on the Internet, allowed us to seriously save energy.

## Technologies

From the very beginning, the bet was made on cross-platform, and since in relation to Javascript and HTML5 this has been more or less achieved through titanic efforts of developers, there was, in general, no particular alternative when choosing a development language.

Of course, there are a number of languages that translate into JS and have some advantages, but there was no desire to create an extra layer in a small project. In addition, due to the prevalence of JS, you can always count on the fact that any problem that needs to be solved during the work on the project, someone has already solved it before you, generously providing code fragments for everyone to see.

Due to the comparative simplicity of the game interface of the original game, it was decided to abandon the use of any heavy gaming frameworks. Of the libraries, only jQuery was used (in principle, it could have been done without it — in fact, only \$.inArray, \$.trim and work with browser event triggers were needed; to be honest, the possible problems of cross-browser compatibility in relation to events were scary, so jQuery was still left in the project).

Graphics and music were implemented using standard HTML5 mechanisms (Canvas, Audio). The standard Canvas methods are more than enough to implement sprite graphics with minimal effort. Audio provides everything you need to supply the game with sound effects. All the required snippets can be easily found on stackoverflow using simple queries, so some practical programming experience in the modern development ecosystem is enough to understand all the technological nuances in one or two evenings.

## Progress

The work was carried out in fits and starts for almost a month and a half. From the very beginning, I gave myself a half-joking vow to write 500 lines of code a day, and at first I even managed to keep this figure. Of course, when it came to the readiness of the first conditionally functional version, the pace slowed down noticeably, because a significant part of the time began to be spent on fixing errors and minor refactoring of already written code. Some decisions made hastily in the first week of work did not pay off — in particular, as a result, I had to write a mini-library for working with dialogs, windows and other GUI components, although at first it seemed that it was possible to get by with very little blood in this regard .

The work on the save logic in the game deserves special attention. Here I succumbed to another weakness of mine — my love for data compression algorithms, so saves are packed using the built-in compression algorithm (dictionary + LZW with dynamic bit alignment). Resorting to retrospective rationalization, I will justify this by the desire to save space on mobile devices (an unpacked save is still more than a hundred kilobytes), as well as by the desire to at least slightly diversify the lives of cheaters.

I already extracted the graphics from the original game once in the late 90s, when I wrote a KB version in C, including only battles (with an expanded set of magic and other entertainment). True, the old code died along with the dead screw back in 1999, but I roughly remembered what and where to get it. The additions were completed using Pixlr and pictures found on the Internet, taken as a basis. My fiancée helped edit one of the pictures, so strictly speaking, it wasn’t just me who worked on the game.

Music — a selection of suitable free classics from the Internet, sound effects — recordings from the original game DOSBox → Audacity, or slightly processed free samples from http://freesound.org.

Coding took half to 3/4 of the time — the resulting project had a little less than 12,000 lines (not counting jQuery) (380 kilobytes of script). The rest is writing game texts (unlike the original game, there are noticeably more of them, and besides, the game is bilingual), as well as testing.

## Result

The mechanics of the game basically repeat the mechanics of the original game — formulas for attack, magic, etc. completely correspond to the original. Also taken from the original game are the graphics (added with a small number of new objects) and the map of the first continent (with minimal changes). The plot is noticeably expanded, there are not 4, but 5 continents, while the second map is larger than in the original game. Various jokes, secrets, and new plot twists have been added. The entire system was tested on Chrome, FF, Edge, IE, and the mobile version of IE.

I would be grateful for finding bugs, advice on project development, and any feedback in general.

Game page: http://genes1s.net/kb/game.html.
Habr: https://habr.com/ru/articles/266805/

# King's Bounty III: расширенный римейк оригинальной игры под DOS на Javascript/HTML5

## Предпосылки и философские размышления

Как и у многих моих коллег по программистскому цеху, особенно у тех, кто рано начал пробовать свои силы в области компьютерных технологий, у меня где-то на задворках сознания хранится набор самых тёплых и романтических воспоминаний о первых опытах. Когда-то, в далёком 1987 году, отец впервые взял меня в выходной к себе на работу, где торжественно усадил на стул перед гудящей «Искрой-1030-11». Примерно тогда я твёрдо понял, чем хочу заниматься в своей дальнейшей жизни.

В наши дни, запустив DOSBox, можно без особого труда окунуться в аромат беззаботного детства, вспомнить то прекрасное ощущение детского всемогущества, головокружительного интереса, волнующих новых знаний и умений. Сейчас (2024) мне 43, под моим началом работает больше двух сотен человек, я по-прежнему пишу достаточно много кода — особенно там, где требуется применение сложных алгоритмов для интеллектуальной обработки данных. Позади — в арсенале студенческих достижений — финал ACM'овской олимпиады, победы моего шахматного движка в ex-USSR-чемпионатах, один из алгоритмов на поисковых деревьях, названный моим именем, сотни тысяч строк моего кода в проде, но ничто не приносит такой радости и не вдохновляет так, как возврат в беззаботный мир детства.

Лет 10 назад мне в руки попал эмулятор БК-0010-01 — моего первого домашнего компьютера. Тогда стоило огромного труда не начать программировать под него. Однако в этот раз очередная волна ностальгии всё-таки сподвигла меня на весьма бессмысленный шаг, оправданием которому может стать разве что то чувство эмоционального подъёма, которое я испытал, завершив своё безумное предприятие — изготовление римейка/сиквела King's Bounty — древнего прародителя всех игр линейки Heroes of Might & Magic.

В общем-то, это секрет Полишинеля, что время программистов-одиночек прошло. Герои-одиночки остались в 90-х, когда в условиях отсутствия Интернета и большого объёма специализированной литературы, а также в атмосфере нехватки вычислительных ресурсов, очередной левша ловко выкраивал в короткие сроки 7 шапок из шкуры неубитого медведя. Сегодня труд программистов в большинстве случаев коллективный, и успех разработчика в куда большей мере зависит не от алгоритмических знаний и технологических умений, а от способности быстро найти необходимую информацию и коммуникационных скиллов (в т.ч. способности писать хорошо читаемый код соответствующий заданным требованиям).

В целом ситуация, когда один человек сегодня пишет игру от начала до конца (включая разработку сюжета, логики игровых взаимодействий, создание графики, подбор музыки, написание игровых диалогов, непосредственный кодинг) — для современной индустрии совершенно ненормальная. Сапоги должен тачать сапожник, а пироги печь — пирожник, в противном случае производительность труда будет не самой высокой. Но на другой чаше весов лежит высокий уровень мотивации, который в ряде случаев позволяет с лихвой компенсировать возникающие издержки. Развитие мобильных платформ и Web сделало возможным своеобразный флэшбек — в точном соответствие с законом отрицания отрицания — многие современные успешные игровые стартапы созданы либо одиночками, либо микрокомандами, которые демонстрируют удивительные успехи благодаря неотчуждённому труду.

Конечно, в моём случае проект чисто развлекательный — нет никаких идей по поводу монетизации, да и в случае подобного «подпольного» римейка она вообще вряд ли возможна. Задача сильно упрощалась тем, что львиная доля игровой графики и логики была позаимствована из оригинальной игры. В этом плане очень помог брошенный в настоящее время проект OpenKB (http://sourceforge.net/projects/openkb/), автор которого проделал большую работу по реконструкции оригинальной игровой логики и анализу форматов данных оригинальной игры. Мануалы, написанные автором этого проекта, а также несколько других любительских мануалов, найденных в сети, позволили серьёзно сэкономить силы.

## Технологии

С самого начала была сделана ставка на кроссплатформенность, а поскольку в отношении Javascript и HTML5 таковая титаническими усилиями разработчиков к настоящему моменту более-менее достигнута, особой альтернативы при выборе языка разработки, в общем-то, не было.

Конечно, есть ряд языков транслируемых в JS и обладающих некоторыми преимуществами, но желания создавать лишний слой в небольшом проекте не возникло. Кроме того, в силу распространённости JS всегда можно рассчитывать на то, что любую задачу, которую потребуется решить в ходе работы над проектом, кто-то уже решил до тебя, великодушно предоставив фрагменты кода на всеобщее обозрение.

В силу сравнительной простоты игрового интерфейса оригинальной игры было принято решение отказаться от использования каких-либо тяжеловесных игровых фреймворков. Из библиотек использовалась только jQuery (в принципе, можно было бы обойтись и без неё — фактически понадобились только \$.inArray, \$.trim и работа с триггерами событий браузера; честно говоря, пугали возможные проблемы кроссбраузерности как раз в отношении событий, поэтому jQuery была всё-таки оставлена в проекте).

Графика и музыка реализовывались при помощи стандартных механизмов HTML5 (Canvas, Audio). Стандартных методов Canvas более чем достаточно для реализации спрайтовой графики с минимальными трудозатратами. Audio же предоставляет всё необходимое для снабжения игры звуковыми эффектами. Все требуемые сниппеты легко обнаруживаются на stackoverflow при помощи простых запросов, так что некоторого опыта практического программирования в современной экосистеме разработки вполне хватит для того, чтобы разобраться во всех технологических нюансах за один-два вечера.

## Ход работы

Работа велась урывками в течение почти полутора месяцев. С самого начала я дал себе полушутливый зарок писать по 500 строк кода в день и первое время этот показатель даже удалось соблюдать. Конечно, когда дело дошло до готовности первой условно-функциональной версии, темпы заметно снизились, т.к. заметная часть времени стала уходить на исправление ошибок и мелкий рефакторинг уже написанного кода. Некоторые решения, принятые на скорую руку в первую неделю работы, не оправдали себя — в частности, по итогам пришлось написать мини-библиотеку для работы с диалогами, окнами и другими компонентами GUI, хотя сначала казалось, что можно обойтись в этом плане совсем малой кровью.

Отдельного внимания заслуживает работа над логикой сохранения в игре. Здесь я поддался ещё одной своей слабости — любви к алгоритмам сжатия данных, поэтому сэйвы пакуются при помощи встроенного алгоритма сжатия (словарный + LZW с динамическим битовым выравниванием). Прибегая к ретроспективной рационализации, оправдаю это желанием экономить место на мобильных устройствах (распакованный сэйв всё-таки тянет больше чем на сотню килобайт), а также стремлением хотя бы немного разнообразить жизнь читеров.

Графику из оригинальной игры я уже однажды добывал в конце 90-х, когда написал на C версию KB, включающую только бои (с расширенным набором магии и другими развлечениями). Правда старый код погиб вместе с умершим винтом ещё в 1999-м, но я примерно помнил что и где брать. Дополнения были дорисованы при помощи Pixlr и найденных в сети картинок, взятых за основу. Одну из картинок помогла обтравить моя невеста, так что строго говоря над игрой работал не только я.

Музыка — подборка подходящей по смыслу бесплатной классики из сети, звуковые эффекты — записи из оригинальной игры DOSBox → Audacity, либо немного обработанные бесплатные сэмплы из http://freesound.org.

От половины до 3/4 времени занял кодинг — в полученном проекте немногим менее 12 000 строк (не считая jQuery) (380 килобайт скрипта). Остальное — написание игровых текстов (их, в отличие от оригинальной игры, заметно больше, кроме того игра двуязычная), а также тестирование.

## Результат

Механика игры в основных чертах повторяет механику оригинальной игры — формулы атаки, магии и т.д. полностью соответствуют оригиналу. Также из оригинальной игры взяты графика (дополнена небольшим количеством новых объектов) и карта первого материка (с минимальными изменениями). Сюжет заметно расширен, материков не 4, а 5, при этом вторая карта имеет больший, чем в оригинальной игре, размер. Добавлены разного рода шуточки, секреты, новые повороты сюжета. Тестировалась всё хозяйство на Chrome, FF, Edge, IE, мобильной версии IE.

Буду благодарен за нахождение багов, советы по развитию проекта и вообще любые отзывы.

Адрес страницы с игрой: http://genes1s.net/kb/game.html.
Пост на Хабре: https://habr.com/ru/articles/266805/
