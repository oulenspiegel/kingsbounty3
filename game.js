String.prototype.setCharAt = function(index, chr) {
	if (index > this.length - 1) return str;
	return this.substr(0, index) + chr + this.substr(index + 1);
}

if (!String.fromCodePoint) {
	String.fromCodePoint = function fromCodePoint () {
		var chars = [], point, offset, units, i;
		for (i = 0; i < arguments.length; ++i) {
			point = arguments[i];
			offset = point - 0x10000;
			units = point > 0xFFFF ? [0xD800 + (offset >> 10), 0xDC00 + (offset & 0x3FF)] : [point];
			chars.push(String.fromCharCode.apply(null, units));
		}
		return chars.join("");
	}
}

virtualKeyboardLayoutFull = [
	['1','2','3','4','5','6','7','8','9','0'],
	['Q','W','E','R','T','Y','U','I','O','P'],
	['A','S','D','F','G','H','J','K','L'],
	['Z','X','C','V','B','N','M','⇦','OK']
];

virtualKeyboardLayout = [
	['1','2','3','4','5','6'],
	['7','8','9','0','⇦', 'OK']
];

keyToKeyCode = {
	'SPACE': 32,
	'ESC': 27,
	'OK': 13,
	'⇦': 8
};

soundModeNames = [
	'music and sound effects',
	'only music',
	'only sound effects',
	'no sound'
];

gameActive = false;
gameFrames = 0;

codeStr = '';
lepraOn = false;

window.warriorsReady = false;
window.warriorsMirrorReady = false;
window.groundReady = false;
window.menuReady = false;
window.magicReady = false;
window.adventure1Ready = false;
window.adventure2Ready = false;
window.adventure3Ready = false;
window.cursorReady = false;
window.addonsReady = false;
window.cursorMirrorReady = false;
window.cursorSimpleReady = false;
window.sitesReady = false;
window.paneReady = false;
window.villainsReady = false;
window.rolesReady = false;
window.viewReady = false;
window.winReady = false;
window.selectReady = false;
window.titanReady = false;
window.lepraReady = false;
window.lepraGreyReady = false;

config = {
	'VERSION': 0,
	'FIELD_WIDTH': 6,
	'FIELD_HEIGHT': 5,
	'SCALE_FACTOR': 1,
	'SPRITE_WIDTH': 96,
	'SPRITE_HEIGHT': 68,
	'MAP_TILE_WIDTH': 18,
	'MAP_TILE_HEIGHT': 12,
	'COIN_WIDTH': 32,
	'COIN_HEIGHT': 16,
	'COIN_STACK_HEIGHT': 4,
	'COINS_OFFSET': 10,
	'TICKS_PER_FRAME': 10,
	'CURSOR_TICKS_PER_FRAME': 5,
	'SPRITE_FRAMES': 4,
	'QUANTITY_TEXT_HEIGHT': 20,
	'ATTACK_DURATION': 500,
	'STATUS_TEXT_HEIGHT': 18,
	'UNITS_COUNT': 25,
	'SPELL_TEXT_HEIGHT': 16,
	'SPELLS_COUNT': 7,
	'UNIT_INFO_NAME_TEXT_HEIGHT': 18,
	'INPUT_TEXT_HEIGHT': 16,
	'UNIT_INFO_TEXT_HEIGHT': 14,
	'INFO_TEXT_HEIGHT': 14,
	'INFO_TITLE_TEXT_HEIGHT': 18,
	'MAX_TROOPS': 5,
	'SIEGE_WEAPONS_COST': 3000,
	'BOAT_COST_WITH_ANCHOR': 500,
	'BOAT_COST': 100,
	'KEYBOARD_KEY_WIDTH': 40,
	'KEYBOARD_KEY_HEIGHT': 40,
	'VIRTUAL_KEYBOARD_TEXT_HEIGHT': 20,
	'language': 'russian'
};

languageNames = ['english', 'russian'];

languages = {
	'english': {
		nativeName: 'english',
		'— My Dear (F)': '— My Dear',
		'good old days when you helped(F) me a lot… Ahh, that good old time…': 'good old days when you helped me a lot… Ahh, that good old time…',
		'Princess Emrakoba (P)': 'Princess Emrakoba',
		'Eleonor Meezul Jinn (P)': 'Eleonor Meezul Jinn',
		'Jeegur Dark (P)': 'Jeegur Dark',
		'Reynold Blondiot (P)': 'Reynold Blondiot',
		'Donald Pump (P)': 'Donald Pump',
		'Peter Burnback (P)': 'Peter Burnback',
		'Elder Smirnoff (P)': 'Elder Smirnoff',
		'John Kuznetsoff (P)': 'John Kuznetsoff',
		'Nicas Leftshow (P)': 'Nicas Leftshow',
		'Ernest Mudla (P)': 'Ernest Mudla',
		'Vedogor (P)': 'Vedogor',
		'Vitas Milonos (P)': 'Vitas Milonos',
		'Wildimir the Blackbrow (P)': 'Wildimir the Blackbrow',
		'Sir Malinin (P)': 'Sir Malinin',
		'Victor Metrik (P)': 'Victor Metrik',
		'Prof Dunesberg (P)': 'Prof Dunesberg',
		'Beliarch Perill (P)': 'Beliarch Perill',
		'gold (P)': 'gold',
		'leadership (P)': 'leadership',
		'shoots (P)': 'shoots',
		'hits (P)': 'hits',
		'hits (M)': 'hits',
		'move (P)': 'move',
		'archmage (P)': 'archmage', 
		'archmages (PP)': 'archmages',
		'archer (P)': 'archer',
		'archers (PP)': 'archers',
		'barbarian (P)': 'barbarian',
		'barbarians (PP)': 'barbarians',
		'cavalry (P)': 'cavalry',
		'cavalries (PP)': 'cavalries',
		'demon (P)': 'demon',
		'demons (PP)': 'demons',
		'dragon (P)': 'dragon',
		'dragons (PP)': 'dragons',
		'druid (P)': 'druid',
		'druids (PP)': 'druids',
		'dwarf (P)': 'dwarf',
		'dwarves (PP)': 'dwarves',
		'elf (P)': 'elf',
		'elves (PP)': 'elves',
		'ghost (P)': 'ghost',
		'ghosts (PP)': 'ghosts',
		'giant (P)': 'giant',
		'giants (PP)': 'giants',
		'gnome (P)': 'gnome',
		'gnomes (PP)': 'gnomes',
		'knight (P)': 'knight',
		'knights (PP)': 'knights',
		'militiamen (P)': 'militiamen',
		'militia (PP)': 'militia',
		'nomad (P)': 'nomad',
		'nomads (PP)': 'nomads',
		'ogre (P)': 'ogre',
		'ogres (PP)': 'ogres',
		'orc (P)': 'orc',
		'orcs (PP)': 'orcs',
		'peasant (P)': 'peasant',
		'peasants (PP)': 'peasants',
		'pikemen (P)': 'pikeman',
		'pikemen (PP)': 'pikemen',
		'skeleton (P)': 'skeleton',
		'skeletons (PP)': 'skeletons',
		'sprite (P)': 'sprite',
		'sprites (PP)': 'sprites',
		'troll (P)': 'troll',
		'trolls (PP)': 'trolls',
		'vampire (P)': 'vampire',
		'vampires (PP)': 'vampires',
		'wolf (P)': 'wolf',
		'wolves (PP)': 'wolves',
		'zomby (P)': 'zomby',
		'zombies (PP)': 'zombies',
		'red troll (P)': 'red troll',
		'red trolls (PP)': 'red trolls'
	},
	'russian': {
		nativeName: 'русский',
		'you will be Latvian until you have 750 gold!': 'вы останетесь латышом пока не найдёте 750 монет!',
		'invalid save file': 'Некорректный файл сохранения',
		'wrong save file version': 'неправильная версия файла',
		'Use expanded game': 'Используйте расширенную игру',
		'the Sceptre is already found!' : 'скипетр уже найден!',
		'Loading music and sounds...': 'Загрузка музыки и звуков...',
		'Select sound mode:': 'Выберите режим озвучки:',
		'music and sound effects': 'музыка и звуковые эффекты',
		'only music': 'только музыка',
		'only sound effects': 'только звуковые эффекты',
		'no sound': 'без звука',		
		'all villains are caught': 'все злодеи пойманы',
		'current unit info': 'информация о юните',
		'skip': 'пропустить',
		'You never been in a castle at': 'Вы не бывали в замках на континенте',
		'You never been in a town at': 'Вы не бывали в городах на континенте',
		'dismiss': 'увольнение',
		'— Suddenly… RED TROLLS! Thousands of them!': 'Внезапно… КРАСНЫЕ ТРОЛЛИ! Тысячи их!',
		'you should be onboard': 'вы должны быть на борту корабля',
		'to travel between continents': 'чтобы путешествовать на другой континент',
		'there are no open slots': 'нет свободного месте или',
		'or any of this army type!': 'такого же отряда у вас в армии!',
		'load game': 'загрузить игру',
		'If you Dismiss your last army,': 'Если вы распустите последний отряд,',
		'you will be sent back to the King': 'то будете отправлены обратно к',
		'in disgrace. Dismiss last army?': 'Королю с позором. Продолжить?',
		'GP': 'з.м.',
		'coordinates': 'координаты',
		'choose army to dismiss': 'выберите отряд для увольнения',
		'Build bridge in which direction': 'Укажите направление постройки моста',
		'army reinforcement': 'подкрепление',
		'Connor provides you with his Letter': 'Коннор вручает вам своё Верительное',
		'of credence which increases your': 'письмо, что увеличивает ваш',
		'leadership by 250.': 'авторитет на 250.',
		'Connor provides you with 50 000': 'Коннор вручает вам 50 000',
		'gold pieces.': 'золотых монет.',
		'Connor summons his archmages and': 'Коннор созывает своих архимагов и',
		'orders them to cast powerfull time': 'приказывает им сотворить мощное',
		'stop spell.': 'заклинание остановки времени.',
		'orders them to join your army.': 'приказывает им присоединиться к вам.',
		'Connor summons his homagers and': 'Коннор созывает своих подданных и',
		'orders them to join your army.': 'приказывает им присоединиться к вам.',
		'support': 'Поддержка',
		'Sorry, you need to speak with Connor the': 'Извините, но сперва вам следует',
		'Barbarian first.': 'поговорить с Коннором Варваром.',
		'— Sorry': '— Извини',
		"I'm able to": 'я могу',
		'provide you with some support once in every 60 days.': 'помочь тебе только один раз в течение 60 дней.',
		'audience with the King of Barbarians': 'аудиенция у Короля Варваров',
		'call for support': 'просьба о помощи',
		'greetings': 'приветствие',
		'King Maximus suddenly summons you in his castle and says:': 'Вызов Короля застал вас врасплох. Максимус начал с порога:',
		'— My Dear': '— Мой дорогой',
		'— My Dear (F)': '— Моя дорогая',
		'many years have passed since that': 'много лет прошло с тех давних',
		'good old days when you helped me a lot… Ahh, that good old time…': 'времён, когда ты выручил меня… Ах, старые добрые времена…',
		'good old days when you helped(F) me a lot… Ahh, that good old time…': 'времён, когда ты выручила меня… Ах, старые добрые времена…',
		'Long time ago a grass was greener, the sky was brighter and even my…': 'Давным-давно трава была зеленее, небо синее и даже мой…',
		'hmm… Sceptre of Order was harder than now.': 'хмм… Жезл Порядка был твёрже, чем сейчас.',
		"When I realised I'm getting old, I opened my old wooden chest": 'Когда я ощутил холод старости в чреслах, я открыл свой старый',
		'and found in rusted nails and foreign coins the old Diary': 'деревянный сундук и там, под слоем ржавых гвоздей и заморских',
		'of my grandfather, King Minimus.': 'монет, я нашёл дневник своего прадеда, Короля Минимуса.',
		'I spent many winter evenings reading this strange adagic': 'Я провёл череду долгих зимних вечеров за чтением этого',
		"folio and amidst my ancestor's wise words I read the story about": 'странного эпического трактата, и среди мудрых слов предка',
		'legendary artefact — The Sceptre of Wisdom.': 'я прочёл историю о легендарном артефакте — Жезле Мудрости.',
		'“Fear the Order without Wisdom, my successor, the day is light and': '«Бойся Порядка лишённого Мудрости, мой наследник, день',
		"the night is dark and it's easy to confuse a finger with a": 'ясен, а ночь — темна, и так легко перепутать хрен с пальцем,',
		'horse raddish, a sage with a quack, the Bad and the Good…”.': 'мудреца с шарлатаном, Зло с Добром».',
		'King Maximus finished his quotation and returned to the throne with': 'Король Максимус закончил цитату и взгромоздился на свой трон,',
		'a short breath. After a few seconds he continues:': 'страдая от явной одышки. Спустя пару мгновений он продолжил:',
		'The History repeats itself, first as tragedy, second as': 'История повторяет себя: сначала в форме',
		"farce. It looks that I'm overlooked the conspiracy again. My past retinue": 'трагедии, а затем в виде фарса. Похоже, я вновь предан.',
		'laid the plot against me. The ancient Scepter of Wistom is stolen': 'Моя бывшая свита составила заговор против меня. Древний Жезл',
		'and my Kingdom is ruined again.': 'Мудрости похищен и моё королевство вновь погружено в хаос.',
		'Help me, Obi-Wan… Hmmm…': 'Помоги мне, Оби-Ван… ммм…',
		"You're my only hope.": 'Ты моя',
		'You have only': 'последняя надежда. У тебя есть всего',
		'days to recover the Scepter. Otherwise': 'дней чтобы найти',
		'everything will be lost and the Kingdom will turn into darkness of': 'Жезл. Иначе всё будет потеряно и Королевство окончательно',
		'ignorance and fear. Hurry up, my friend!': 'погрузится во тьму мракобесия и ужаса. Поспеши, мой друг!',
		'Continentia': 'Континентия',
		'Waternia': 'Ватерния',
		'Malbrasia': 'Мальбразия',
		'Arbusia': 'Арбузия',
		'Clostridia': 'Клостридия',
		'Westentrance': 'Восточный Вход',
		'Eastentrance': 'Западный вход',
		'South-1': 'Юг-1',
		'South-2': 'Юг-2',
		'South-3': 'Юг-3',
		'South-4': 'Юг-4',
		'South-5': 'Юг-5',
		'South-6': 'Юг-6',
		'Westshore-1': 'Западобережье-1',
		'Westshore-2': 'Западобережье-2',
		'Westshore-3': 'Западобережье-3',
		'Eastshore-3': 'Восточнобережье-3',
		'Eastshore-2': 'Восточнобережье-2',
		'Eastshore-1': 'Восточнобережье-1',
		'Northwest': 'Северо-западный',
		'Northeast': 'Северо-восточный',
		'West': 'Западный',
		'Westmiddle': 'Западный Централ',
		'Eastmiddle': 'Восточный Централ',
		'East': 'Восточный',
		'Southwest': 'Юго-Западный',
		'Southeast': 'Юго-Восточный',
		'Suddenburg': 'Садденбург',
		'Malmberg': 'Мальмберг',
		'Costov': 'Костов',
		'Severosvinsk': 'Северосвинск',
		'Kabanopol': 'Кабанополь',
		'New Pork': 'Нью Порк',
		'Fourth Rome': 'Четвёртый Рим',
		'Blacklore West Tower': 'Зап. башня Блэклора',
		'Blacklore East Tower': 'Вост. башня Блэклора',
		'Tribaldy': 'Трибальди',
		'Sortsock': 'Сортсок',
		'Bayside': 'Бейсайд',
		"Path's End": 'Патс Энд',
		'Lakeview': 'Лэйквью',
		'Fjord': 'Фьорд',
		'Xoctan': 'Ксоктан',
		'Quiln Point': 'Килн Пойнт',
		"King's Haven": 'Кингс Хэвен',
		'Nyre': 'Найр',
		'Riverton': 'Ривертон',
		'Isla Vista': 'Айла Виста',
		'Hunterville': 'Хантервилль',
		'Vutar': 'Вутар',
		'Rythacon': 'Ритакон',
		'Portalis': 'Порталис',
		'Nilslag': 'Нильслаг',
		'Azram': 'Азрам',
		'Irok': 'Ирок',
		'Wankelforte': 'Ванкельфорте',
		'Cancomar': 'Канкомар',
		'Faxis': 'Факсис',
		'Ophiraund': 'Офирон',
		'Kookamunga': 'Кукамунга',
		'Volgorod': 'Волгород',
		'Homsburg': 'Хомсбург',
		'Banev': 'Банев',
		'Burburg': 'Бурбург',
		'Skeppsgaard': 'Шеппсгаард',
		'Børkholm': 'Бёркхольм',
		'Krizhopol': 'Крыжополь',
		'Glupogorsk': 'Глупогорск',
		'Kugelheim': 'Кугельхайм',
		'Cornburg': 'Корнбург',
		'New Barns': 'Нью Барнс',
		'Barn': 'Барн',
		'Lukovo': 'Луково',
		'Elmpark': 'Элмпарк',
		'Kotlov': 'Котлов',
		'Itchtos': 'Почесунск',
		'Westbumpshire': 'Вестбампшир',
		'Chernov': 'Чернов',
		'Neustein': 'Нойештейн',
		'Kologrive': 'Кологрив',
		'Kozlov': 'Козлов',
		'Colossus': 'Колоссус',
		'Morgenhaus': 'Моргенхаус',
		'Corkberg': 'Коркберг',
		'Driffen': 'Дриффен',
		'Ostbrok': 'Остброк',
		'Rodswitch': 'Родсвитч',
		'Malborn': 'Мальборн',
		'Eastbern': 'Истберн',
		'Gorgorod': 'Горгород',
		'Bursock': 'Барсок',
		'Salesberry': 'Сэйлсберри',
		'Isla Blanca': 'Айла Бланка',
		'Lotsbrock': 'Лотсброк',
		'Paperville': 'Пейпервилль',
		'Bersk': 'Берск',
		'Doortown': 'Доортаун',
		'Candelabria': 'Канделябрия',
		'Rasalio': 'Расалио',
		'Augustberg': 'Аугустберг',
		'Tepswitch': 'Тепсвитч',
		'Engelstadt': 'Энгельштадт',
		'Bornoba': 'Борноба',
		'Kurovsk': 'Куровск',
		'Dunkelberg': 'Дункельберг',
		'Oyster': 'Ойстер',
		'Rammingen': 'Рамминген',
		'Bookinghamshire': 'Букингхэмпшир',
		'Kumbridgeshire': 'Камбриджшир',
		'Pornwall': 'Порнуолл',
		'Devan': 'Деван',
		'Doorset': 'Доорсет',
		'Vorlon Hall': 'Ворлон Холл',
		'Westborough': 'Вестборо',
		'All maps are found in chests': 'Все карты лежат в сундуках',
		'Boon docks': 'Захолустье',
		'Welcome to Kookamunga!': 'Добро пожаловать в Кукамунгу!',
		'Treasure island': 'Остров сокровищ',
		'Aurange is north': 'Аупельсин на севере',
		'The Sceptre will never be found!': 'Жезл никогда не будет найден!',
		'Irok guards the north': 'Ирок охраняет север',
		'A-maze-ing Forest': 'Олаберентительный лес',
		'Bridge port': 'Бридж-порт',
		"Pirate's Cove": 'Пиратская бухта',
		'Isle of Death': 'Остров Смерти',
		'Secret Pass': 'Тайный Проход',
		'Hidden Grove': 'Тайная Роща',
		'Dead End': 'Тупик',
		'Peasant Way': 'Сельский Путь',
		'Pond of Perill': 'Пруд Перилла',
		'Wonder woods': 'Чудолесье',
		'It takes time to cross the desert': 'Путь через пустыню отнимает время',
		'Four villains rule Continentia': 'Четыре негодяя правят Континентией',
		'Rent a boat and sail the seas!': 'Арендуй корабль и борозди моря!',
		'There are two main artefacts per continent': 'На каждом континенте есть два основных артефакта',
		"King's Treasure Garden": 'Сад Королевских Сокровищ',
		'Unhappy the land that is in need of heroes': 'Несчастна та страна, которой нужны герои',
		'History is written by the victors': 'История пишется победителями',
		'The public opinion is always a sort of lynch law': 'Общественное мнение это всегда что-то вроде суда линча',
		'Cape of Bad Hope': 'Мыс Злобной Надежды',
		"Cape of Vanya's Nose": 'Мыс Ванин Нос',
		'Wildimir is so wild!': 'Вильдимир очень дикий!',
		'Southern Waternia': 'Южная Ватерния',
		'Fuelwood cutting or removal prohibited!': 'Заготовка и вывоз дров запрещены!',
		'Western Waternia': 'Западная Ватерния',
		'Colossus is so colossal!': 'Колоссус весьма колоссален!',
		'The Non-Mysterious Island': 'Нетаинственный остров',
		'Yavelik Peninsula': 'Полуостров Явелик',
		'Rosencrantz and Guildenstern are dead!': 'Розенкранц и Гидьденстерн мертвы!',
		'Skeppsgaard to the west!': 'Шеппсгаард на западе!',
		'Skeppsgaard to the east!': 'Шеппсгаард на востоке!',
		'Malbrasian wine is the best!': 'Мальбразийское вино — лучшее!',
		'Lorem ipsum still in vogue': 'Lorem ipsum всё ещё в моде',
		'John Kuznetsoff likes hedgehogs': 'Джон Кузнецофф любит ежей',
		"Peter Burnback's roof is on fire!": 'Крыша у Питера Бёрнбека реально в огне!',
		'The Bryansk woods rusting grimly': 'Шумит сурово Брянский лес',
		'May the Force be with you': 'Да пребудет с тобою сила',
		'Arbusian economists advocates a cybernetic planning': 'Арбузианские экономисты выступают за кибернетическое планирование',
		'The dimension of the Borel subalgebra in the exceptional Lie algebra e6 is 42': 'Размерность подалгебры Бореля в исключительной алгебре Ли e6 равна 42',
		'42 is a Størmer number': '42 является числом Стёрмера',
		'We like Paul Cockshott works': 'Нам нравятся работы Пола Кокшотта',
		'There are 42 US gallons in a barrel of oil': 'В барреле нефти 42 американских галлона',
		'The atomic number of molybdenum is 42. 42, Carl!': 'Атомный номер молибдена — 42. 42, Карл!',
		"Alice's Adventures in Wonderland has 42 illustrations": 'В оригинальной версии «Приключений Алисы в Стране чудес» 42 иллюстрации',
		'Normal heroes always go around!': 'Нормальные герои всегда идут в обход!',
		"There are 42 principles of Ma'at": "Существует 42 принципа Ма'ат",
		'No one shall speak to the Man at the Helm': 'Никто не должен разговаривать с Человеком у руля',
		'Emperor Tiberius was born in 42BC': 'Император Тиберий родился в 42 году до н.э.',
		'The Battle of Stalingrad started in 1942': 'Сталинградская битва началась в 1942 году',
		'Kalaska Peninsula': 'Полуостров Каляска',
		'CRISPR is awesome': 'CRISPR это круто!',
		'Beware red trolls!': 'Бойся красных троллей!',
		'If the 666 is evil, is 25.807 the root of the evil?..': 'Если 666 это зло, то верно ли, что 25.807 это корень зла?',
		'Beware The Flying Spaghetti Monster!': 'Опасайся Летающего Макаронного Монстра!',
		'Trafalgar square equals Trafalgar width multiplied by Trafalgar length': 'Трафальгарская площадь равна произведению Трафальгарской длины на Трафальгарскую ширину',
		'To troll or not to troll — that is the question…': 'Троллить или не троллить — вот в чём вопрос…',
		'Snark is a Boojum!': 'Снарк это и есть Буджум!',
		'Massive piece of wood with': 'Массивный кусок дерева со',
		'a steel rim: this is exactly': 'стальным ободом: это как',
		'what you need for your': 'раз то, что нужно вашему',
		'squire: The Shield of': 'оруженосцу: Щит',
		'Assurance.': 'Уверенности.',
		'Amongst copper pots and': 'Среди медных кастрюль и',
		'tennis rackets at the flea': 'теннисных ракеток на блошином',
		'market, you found a piece': 'рынке вы нашли образчик',
		'of an ancient mastery:': 'древнего мастерства:',
		'The Bow of Marksmanship.': 'Лук Острого Глаза.',
		'In a spirit of gratitude for': 'В знак благодарности за',
		'saving a rare book from': 'спасение редкой книги из',
		'the hands of book robbers, a': 'рук грязных грабителей',
		'librarian presents you with:': 'библиотекарь дарит вам:',
		'The Pendant of Sun.': 'Амулет Солнца.',
		'After a hours of sword training': 'После часов тренировки на мечах',
		'your old brave teacher from': 'ваш старый храбрый учитель из',
		'Waternia presents you with': 'Ватернии вручает вам отлично',
		'a well balanced Waternian': 'сбалансированный ватернианский',
		'Training Sword.': 'Тренировочный Меч.',
		"— Welcome to my Residence, {playerName}! I'm Connor the Barbarian, King of that barbarians who rejects barbarianism and likes popular science books and science TV-shows. I will help you in your duty.": "Добро пожаловать в мою резиденцию, {playerName}! Я — Коннор-Варвар, Король тех варваров, которые отвергли варварство и полюбили научно-популярную литературу и научные телепередачи. Я буду помогать тебе в деле исполнения твоего долга.",
		"— I suppose that the real problem of King Maximus is not the Sceptre but his excessive credulity. How is it possible to trust homeopats?..": "— Я думаю, что реальная проблема Короля Максимуса это не Жезл, а его чрезмерная доверчивость. Как можно было верить гомеопатам?..",
		"— I've heard that one of the Beliarch Perill's minions uses the Power of Earth. Rumor says that his power is based on magic cucumbers… But it is not exact.": "— Я слышал, что один из миньонов Белиарха Перилла использует Силу Земли. Говорят, она основана на волшебных огурцах… Но это не точно.",
		"— It's a Pulcinella's secret that the Sceptre itself is not more than symbolic thing. It is not magic, but anyway you need to recover it: this placebo cure will help Maximus to trust himself.": "— Это секрет Полишенеля, что Жезл сам по себе — не более чем символический предмет. В нём нет магии, но, тем не менее, тебе следует найти его: это то самое плацебо, которое поможет Королю поверить в себя.",
		'— One of the last peer reviewed researches revealed that the Mock turtle soup is not made of Mock Turtle! What a surprise!': "— Одно из новых исследований, опубликованное в рецензируемом научном журнале, говорит о том, что поддельный черепаховый суп делают *не* из поддельной черепахи. Вот так сюрприз!",	
		"— When I was a boy my mother told me about Judgement Day that will come. May be this stir with a Scepre is all about it? But I don't know where is the promised man of steel?": "— Когда я был маленьким, мать рассказывала мне о Судном Дне. Может быть вся это суета с Жезлом — это как раз он и есть? Но что-то я не вижу обещенного человека из стали.",
		"— Life is like a box of matches, it is silly to treat it seriously and it is dangerous to treat it not serious.": "— Жизнь подобна коробку спичек. Обращаться с ней серьёзно — глупо, а несерьёзно — опасно.",
		"— All efforts to make politics aesthetic culminate in one thing, war.": "— Все попытки сделать политику красивой заканчиваются одной вещью — войной.",
		"— Don’t be afraid of death so much as an inadequate life.": "— Бойся не смерти, а неполноценной жизни.",
		"— Religion is like a penis. It's fine to have one and it's fine to be proud of it, but please don't whip it out in public and start waving it around...": "— Религия похожа на пенис. Это нормально, что у вас есть такая штука, нормально даже гордиться этим, но, пожалуй, не стоит обнажать её на публике и размахивать ей.",
		"— You know, in our Kingdom it takes all the running you can do, to keep in the same place. But now you need to run faster than you can. Hurry up!": "— Ты знаешь, в нашем Королевстве нужно очень быстро бежать, чтобы просто оставаться на месте. Но сейчас тебе следует бежать быстрее быстрого. Торопись!",
		"Waternian titan? What an example of a bad taste! It's completely useless and, moreover, I've heard that it's sculptor stealed one half of copper that King afforded for this buillding!": "Ватернианский титан? Классический образчик дурновкусия! Он абсолютно бесполезен и, кроме того, я слыхал, что скульптор украл половину меди, выделенной Королём на это сооружение!",
		"There are four minor artefacts: The Training Sword, The Pendant of Sun, The Bow of Marksmanship and the Shield of Assurance.": "Существует четыре младших артефакта: Тренировочный Меч, Талисман Солнца, Лук Острого Глаза и Щит Уверенности.",
		"The problem of slavery is a bad brand management. Just use more advertising for your new “Work & Travel Program” and you will see a lot of volunteers!": "Проблема рабства в плохом бренд-менеджменте. Просто вложите побольше в рекламу вашей новую программы «Work & Travel» и у вас не будет отбоя от добровольцев!",
		'You can find The Sword of Prowess at the North-East of Waternia.': 'Вы можете найти Меч Доблести на северо-востоке Ватернии.',
		'The brilliant evidence of the evolution theory is that human finger is too thick for an earhole. So, those who was not equipped with this protective feature, was kicked out by the stabilizing natural selection.': 'Прекрасным доказательством эволюционной теории является тот факт, что человеческий палец не пролезает в ухо. Те, кто не обладал этим замечательным защитным механизмом, были вытеснены стабилизирующим естественным отбором.',
		'I like criminal TV-shows. Especially the new one… About some talented detective… I forgot his name, but his brother is Minecraft Holmes.': 'Мне нравятся детективные сериалы. Особенно этот новый… Про одного талантливого детектива, как же его… В общем, точно не помню, но у него ещё есть брат: Майнкрафт Холмс.',
		'The Bow of Marksmanship increases your ranged attack by 25%.': 'Лук Острого Глаза увеличивает силу выстрелов на 25%.',
		"I've seen a strange dream about some hero with a vast army of boars, brown birds and a small halflings with a slings. Boars in the army! How ridiculous!": "Я видел странный сон о герое с большой армией кабанов, серых птиц и недомерков, вооружённых пращами. Кабаны в армии! Какой-то бред!",
		"Ok, twenty years ago The Ring of Heroism was useles. But the times they are a changin'!": "Хорошо, двадцать лет назад Кольцо Героизма было совершенно бесполезно. Но времена переменяются!",
		"The Training Sword increases your army damage by 10%.": "Тренировочный Меч увеличивает наносимый урон на 10%.",
		'XXX Olympic Games?.. OMG, really? It is probably an adult content!': 'XXX Олимпийские Игры?.. Бог мой, правда что ли? Я думаю, это только для взрослых!',
		"You can't obtain some artefacts in Arbusia without fly.": "Вы не можете добыть некоторые артефакты в Арбузии, не используя полёт.",
		"…To gild refined gold, to paint the lily,": "…Раскрасить розу, злато позлатить,",
		"To throw a perfume on the violet,": "Поверхность льда разгладить, или краски",
		"To smooth the ice, or add another hue": "Подбавить в радугу, иль светом свеч",
		"Unto the rainbow, or with taper-light": "Стараться приукрасить око неба —",
		"To seek the beauteous eye of heaven to garnish,": "Напрасный это и пустой излишек…",
		"Is wasteful and ridiculous excess…": "",
		"The Pendant of Sun increases both your spell power and maximum number of spells by 1.": "Талисман Солнца увеличивает ваши силу магии и максимальное число заклинаний на 1.",
		"As to the black holes, I think you should definitely ask Hawk King about them…": "Что касается чёрных дыр, я думаю, что вам определённо следует спросить Короля Ястребов насчёт них…",
		'As to GMOs… Of course, I know, that a lot of men are eating beef, but their horns are growing because of other reasons…': "Что я могу сказать по поводу ГМО… Конечно, я знаю, что многие мужчины едят говядину, но рога у них растут по другой причине.",
		'Those villains likes to promise a lot of magic things. But nobody seen their miracles. It is so strange. Exceptional claims demand exceptional evidence!': "Эти злодеи любят обещать разного рода магические вещи. Но никто никогда не видал их чудес. Это весьма странно. Исключительные заявления требуют исключительных доказательств!",
		"The Shield of Assurance adsorbs 10% of damage.": "Щит уверенности поглощает 10% урона.",
		"To the dumb question “Why me?” the cosmos barely bothers to return the reply: why not?": "На дурацкий вопрос «Почему я?» космос с лёгкостью отвечает вопросом: «А почему нет?»",
		"We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further.": "Мы все атеисты по отношению к большинству из богов, в которых человечество когда-либо верило. Некоторые просто опережают остальных на одного бога.",
		"There's real poetry in the real world. Science is the poetry of reality": "В реальном мире существует реальная поэзия. Наука это поэзия реальности.",
		"What if the chicken is only an egg’s way for making another egg?..": "А что если курица это всего лишь способ яйца создать ещё одно яйцо?..",
		"The Bow of Marksmanship is near the center of Malbrasia.": "Лук Острого Глаза может быть найден недалеко от центра Мальбразии.",
		"The only disgusting thing in this World is that you're not able to rob caravans…": "Единственная досадная вещь в этом мире это то, что ты не можешь грабить корованы…",
		"Red trolls? Oh, yea, they are originates from the North Clostridia. They are faster than green ones!": "Красные тролли? А, да, они происходят из Северной Клостридии. И они быстрее зелёных!",
		"I think that Western Blot is rocks. It is better that Eastern one. Ask yourself: what can be more boring than Post-translational modifications?": "Я думаю, что Вестерн блот крутой. Он лучше, чем Истерн. Подумайте сами: что может быть скучнее, чем посттрансляционные модификации?",
		"Never open your Overton window too wide: in Soviet Russia the Scepter finds YOU!": "Никогда не открывай своё Окно Овертона слишком широко: в Советской России Скипетр ищет ТЕБЯ!",
		"What is the robbing of a bank compared to the founding of a bank?": "Что такое ограбление банка по сравнению с основанием банка?",
		"Eastern Blot is underestimated! It is definitely more important than Western one. Gel electrophoresis is so dirty!": "Истерн блот недооценен! Он определённо важнее, чем Вестерн. Гелевый электрофорез это так грязно!",
		"I've heard about terrible red trolls. They comes at night and suck your blood!": "Я слышал об ужасных красных троллях. Они приходят ночью и сосут твою кровь!",
		"I'm sure that those red trolls are not really red. Their political beleifs is far right. I will be not surprised if they are members of a Mad Tea-Party…": "Я уверен что эти так называемые красные тролли на самом деле никакие не красные. Их политические взгляды крайне правые. Я не удивлюсь, если они являются членами Чайной Партии Безумного Шляпника…",
		"Do you really want to attack red trolls? I don't think it's a good idea. Before you there was another great hero, but he wasn't successful. His name was Leeroy. He and his party was finally ripped by trolls. Sad but true.": "Вы действительно хотите атаковать красных троллей? Я не думаю, что это хорошая идея. Перед вами был другой великий герой, но он потерпел неудачу. Его звали Лерой. Он и его отряд были разорваны троллями. Печально, но факт.",
		"What happens to the hole when the cheese is gone?": "Что происходит с дырками, когда сыр съеден?",
		'with desires of': 'в погоне за славой',
		'greater glory, wish to join you': 'хотят присоединиться к вам',
		'Accept?': 'Принять?',
		'followers': 'дружественный отряд',
		'flee in terror': 'бегут в страхе перед',
		'at the sight your vast army': 'вашей огромной армией',
		'Landing is not possible': 'Приземление невозможно',
		'Fly is not possible': 'Полёт невозможен',
		'Giving up will forfeit your armies': 'В результате капитуляции вы утратите',
		'and send you back to the King': 'вашу армию и будете отправлены к Королю',
		'switch to': 'переключиться на',
		'army': 'армию',
		'garrison': 'гарнизон замка',
		'You cannot garrison your last army!': 'Вы не можете оставить последний отряд!',
		'choose continent': 'выберите континент',
		'comission/week': 'жалование в неделю',
		'spell power': 'сила магии',
		'max number of spells': 'макс. число заклинаний',
		'villains caught': 'поймано злодеев',
		'artefacts found': 'найдено артефактов',
		'castles garrisoned': 'занято замков',
		'followers killed': 'убито врагов',
		'score': 'очки',
		'general': 'генерал',
		'marshal': 'маршал',
		'lord': 'лорд',
		'magician': 'чародей',
		'mage': 'маг',		
		'crusader': 'крестоносец',
		'avenger': 'мститель',
		'champion': 'чемпион',
		'chieftain': 'вождь',
		'warlord': 'воевода',
		'overlord': 'владыка',
		"you don't have enough gold!": 'у вас недостаточно золота!',
		'please vacate the boat first!': 'необходимо сначала освободить корабль!',
		'boat rental failed!': 'аренда корабля не удалась!',
		'Enter your name': 'Введите ваше имя',
		'easy': 'лёгкий',
		'hard': 'сложный',
		'impossible (?)': 'невозможный (?)',
		'how hard are you?': 'насколько вы смелы?',
		'choose difficulty level': 'выберите уровень сложности',
		'which role do you prefer?': 'какую роль вы предпочитаете?',
		'select character': 'выберите персонажа',
		'revisit which castle?': 'переместиться к какому замку?',
		'revisit which town?': 'переместиться к какому городу?',
		'destination is blocked': 'пункт назначения заблокирован',
		'not a suitable location for': 'неподходящее место для',
		'a bridge.': 'моста.',
		"you've built your bridge too far": 'Ваш мост уходит слишком далеко',
		'What a waste of a good spell': 'Бесплодная трата ценного заклинания',
		'You have captured a mischievous': 'Вы схватили озорного мелкого',
		'imp which has been terrorizing': 'беса, терроризировавшего',
		'the region. In exchange for': 'округу. В обмен на его',
		'its release, you receive:': 'освобождение вы получаете:',
		'spells': 'заклинания',
		'spell': 'заклинание',
		'Oh,': 'Увы,',
		'you have failed to recover the Sceptre': 'вы потерпели неудачу в деле поиска',
		'of Order in time to save the land!': 'Скипетра Порядка и теперь всё кончено!',
		'Beloved King Maximus has died and the': 'Всенародно любимый Король Максимус мёртв',
		'Demon King Urthrax Killspite rules in': 'и король демонов Белиарх Перилл теперь',
		'his place. The Four Continents lay in': 'правит королевством. Все континенты',
		'ruin about you, its people doomed to a': 'разорены из-за вас, люди обречены',
		'life of misery and oppression because': 'на жизнь в страхе и угнетении из-за того,',
		'you could not find the Sceptre.': 'что вам не удалось вернуть Скипетр.',
		'choose action': 'выберите действие',
		'go west': 'идти на запад',
		'go north': 'идти на север',
		'go east': 'идти на восток',
		'go south': 'идти на юг',
		'go north-west': 'идти на северо-запад',
		'go north-east': 'идти на северо-восток',
		'go south-west': 'идти на юго-запад',
		'go south-east': 'идти на юго-восток',
		'view contract': 'просмотр контракта',
		'give up': 'сдаться',
		'unit info': 'информация об отряде',
		'wait': 'ждать',
		'skip move': 'пропуск хода',
		'SPACE': 'ПРОБЕЛ',
		'show map': 'показать карту',
		'new continent': 'новый континент',
		'options': 'настройки',
		'puzzle solve': 'карта-головоломка',
		'save': 'сохранить',
		'search': 'раскопки',
		'cast spell': 'сотворить заклинание',
		'view character': 'данные о герое',
		'wait a week': 'подождать неделю',
		'view army': 'просмотр армии',
		'controls': 'управление',
		'choose spell': 'выберите заклинание',
		'search': 'раскопки',
		'It will take 10 days to do a': 'Проведение раскопок в этом районе',
		'search of this area. Search?': 'займёт 10 дней. Начать?',
		'success': 'успех',
		'Congratulations': 'Поздравляем',
		'You have recovered the Sceptre of Order from': 'вы вырвали Скипетр Порядка из',
		'the clutches of the evil Master Villains.': 'лап коварного Предводителя Злодеев.',
		'As a reward for saving himself and the four': 'В качестве награды за спасение себя и',
		'continents from ruin, King Maximus and his': 'четырёх континетов, Король Максимус и его',
		'subjects reward you with a large parcel of': 'приближённые наградили вас большим',
		'land, a rank of nobility and a medal': 'наделом земли, высоким титулом и медалью,',
		'announcing your Final Score': 'на которой написано число очков',
		'Your search of this area': 'Ваши раскопки в данном районе',
		'has revealed nothing.': 'оказались бесплодными.',
		'treasure': 'находка',
		'king Maximus rises from his throne to greet you and proclaims:': 'Король встаёт с трона, приветствуя вас, и произносит:',
		'— Hurry and recover my Scepter of Order or all will be lost!': '— Поспеши и верни мне Жезл Мудрости или всё будет потеряно!',
		'— My Dear!': '— Мой друг!',
		"I can aid you better after you've captured": 'Я смогу оказать тебе содействие после поимки',
		'more villains.': 'или более злочинцев.',
		'more villain.': 'или более злочинцев.',
		'— Congratulations!': '— Поздравляю!',
		'I now promote you to': 'Я присваиваю тебе звание:',
		'Ridding the countryside of': 'За поимку монстра, державшего',
		'a ferocious beast, the': 'в страхе деревню, Магистрат',
		'Magistrate presents you': 'преподнёс вам',
		'with: The Ring of Heroism…': 'Кольцо Героизма…',
		'Challenged to a joust by the': 'Будучи вызваны на поединок',
		'dread Dark Knight, you quickly': 'грозным Рыцарем Тьмы, вы',
		'dispose of him and receive:': 'быстро одолели его и получили:',
		'The Shield of Protection…': 'Щит Покровительства…',
		'Resting on a throne in a': 'Отдыхая на троне в воздушном',
		'phantom castle, you have found:': 'замке, вы обнаружили',
		'The Crown of Command.': 'Корону Правления.',
		'Hidden within an enchanted': 'Вашему взору открылся',
		'grove, you find: The Amulet': 'сокрытый в зачарованной',
		'of Augmentation…': 'роще Амулет Улучшения…',
		'Freeing a virtuous maiden from': 'За освобождение целомудренной',
		'the clutches of a despicable': 'девушки из рук презренного',
		'criminal, you have been granted:': 'преступника, вы получаете',
		'The Articles of Nobility…': 'Грамоту Благородства…',
		'You discover ancient scrolls': 'Вы обнаружили древние свитки',
		'that describe the patterns': 'с описанием форватеров',
		'of the oceans. Mariners, in': 'дальних морей. Моряки',
		'gratitude, bestow upon you:': 'в награду дарят вам',
		'The Anchor of Admirality…': 'Якорь Адмиралтейства…',
		'In the study of a deserted': 'При изучении покинутой',
		"wizard's tower, you have": 'башни мага, вы нашли:',
		'found: The Book of Necros…': 'Книгу Некроса…',
		'Following rumors of a great': 'Следуя за молвой о великом',
		'and powerful sword, you defeat': 'магическом мече, вы победили',
		'its fearsome guardian and gain': 'его грозного стража и получили',
		'possession of: The Sword of': 'во владение: Меч',
		'Prowess…': 'Доблести…',
		'event': 'происшествие',
		'After surveying the area,': 'После обследования района',
		'you discover that it is': 'вы обнаружили, что он',
		'rich in mineral deposits': 'богат залежами минералов',
		'The King rewards your for': 'Король вознаградил вас',
		'your find by increasing': 'за вашу находку увеличив',
		'your weekly income by': 'ваше недельное жалование на',
		'traversing tha area, you': 'пересекая область, вы',
		'stumble upon a time worn': 'споткнулись о древний',
		'cannister. Curious, you unstop': 'сосуд. Заинтересовавшись вы',
		'the bottle, releasing': 'открыли бутылку, выпустив',
		'a powerful genie who raises': 'могущественного джинна, который',
		'your Spell Power by': 'увеличил вашу Магическую Силу на',
		'and': 'и',
		'vanishes.': 'исчез.',
		'A tribe of nomads greet you': 'Группа кочевников горячо',
		'and your army warmly. Their': 'встречает вас. Их шаман',
		'shaman, in awe of your': 'из уважения к вашей доблести',
		'prowes, teaches you the': 'обучил вас магическим секретам',
		"secret of his tribe's magic.": 'их племени.',
		'Your maximum spell capacity': 'Ваша Магическая Память',
		'is increased by': 'возросла на',
		'Hidden within an ancient chest, you': 'Внутри древнего сундука вы нашли',
		'find maps and charts describing': 'лоцию, необходимую для путешествия',
		'passage to': 'на континент',
		'Peering through a magical orb': 'Глядя сквозь магический шар',
		'you are able to view the entire': 'вы способны обозревать весь',
		'continent. Your map of this': 'континент. Карта данной области',
		'area is complete.': 'для вас теперь открыта.',
		'Princess Emrakoba': 'Принцесса Эмракоба',
		'The Stunted Seed': 'Чахлое Зерно',
		'Excessive use of': 'Чрезмерное увлечение',
		'make-up to hide aging features, over-': 'косметикой для сокрытия возраста,',
		'present lace hand handkerchief.': 'навязчивое использование платочка.',
		'Ate the malt that lay in the House': 'Часто ворует пшеницу,',
		'That Jack Built.': 'которая в тёмном чулане хранится.',
		'Eleonor Meezul Jinn': 'Элеонор Мизул Джинн',
		'The Dark Printer': 'Чёрный Печатник',
		'Jeegur Dark': 'Джигур Дар',
		'The Chewbakka': 'Чубакка',
		'Reynold Blondiot': 'Рейнольд Блондьё',
		'The Deathray': 'Луч Смерти',
		'Donald Pump': 'Дональд Памп',
		'The Plaguekeeper': 'Чумовод',
		'Peter Burnback': 'Питер Бёрнбэк',
		'The Waveborn': 'Волнорождённый',
		'Elder Smirnoff': 'Старец Смирнофф',
		'The Strong Belly': 'Мощное брюхо',
		'John Kuznetsoff': 'Джон Кузнецофф',
		'The Amplificator': 'Амплификатор',
		'Nicas Leftshow': 'Никас Лефтшоу',
		'The False Mirror': 'Кривое зеркало',
		'Ernest Mudla': 'Эрнест Мудла',
		'The Astral Walker': 'Атсральный Бродильщик',
		'Vedogor': 'Ведогор',
		'The Threeloafer': 'Троехлебник',
		'Vitas Milonos': 'Витас Милонос',
		'The Hypocrite': 'Ханжа',
		'Wildimir the Blackbrow': 'Вильдимир Чернобров',
		'The Snowman': 'Снежный Человек',
		'Victor Metrik': 'Виктор Метрик',
		'The Academician': 'Академик',
		'Sir Malinin': 'Сэр Малинин',
		'The Ratkiller': 'Крысобой',
		'Prof Dunesberg': 'Профессор Дюнсберг',
		'The Dissident': 'Диссидент',
		'Beliarch Perill': 'Белиарх Перилл',
		'The Crossfolder': 'Крестоложец',
		'Princess Emrakoba (P)': 'Принцессы Эмракоба',
		'Eleonor Meezul Jinn (P)': 'Элеонора Мизул Джинна',
		'Jeegur Dark (P)': 'Джигур Дара',
		'Reynold Blondiot (P)': 'Рейнольда Блондьё',
		'Donald Pump (P)': 'Дональда Пампа',
		'Peter Burnback (P)': 'Питера Бёрнбэка',
		'Elder Smirnoff (P)': 'Старца Смирноффа',
		'John Kuznetsoff (P)': 'Джона Кузнецоффа',
		'Nicas Leftshow (P)': 'Никаса Лефтшоу',
		'Ernest Mudla (P)': 'Эрнеста Мудлы',
		'Vedogor (P)': 'Ведогора',
		'Vitas Milonos (P)': 'Витаса Милоноса',
		'Wildimir the Blackbrow (P)': 'Вильдимира Черноброва',
		'Victor Metrik (P)': 'Виктора Метрика',
		'Sir Malinin (P)': 'Сэра Малинина',
		'Prof Dunesberg (P)': 'Профессора Дюнсберга',
		'Beliarch Perill (P)': 'Белиарха Перилла',
		"Eleonor is a tiny": "Элеонор это мелкий",
		"dragon with a green body and pig": "дракончик с зелёным телом и свиным",
		"nose, he breathes fire.": "пятачком, но всё же огнедышащий.",
		"He produced a lot of foolish": "Он выпустил большое число",
		"restrictive laws using the name of": "глупейших запретительных законов",
		"the King Maximus.": "от имени Короля Максимуса.",
		"Jeegur is heavily": "Джигур — качок,",
		"muscled and wears nothing or": "обычно ходит без одежды или в",
		"weird outfit.": "дурацком прикиде.",
		"Attacked people in attempt": "Нападал на людей в попытке",
		"to perform exorcism acts.": "свершить акты экзорцизма.",
		"Single eye": "Единственный глаз",
		"centered in middle of forehead,": "расположен прямо посреди лба,",
		"over ten feet tall.": "рост более десяти футов.",
		"Falsely claimed": "Утверждал, что",
		"the invention of “Z-rays” and": "изобрёл несуществующие Z-лучи и",
		"steal a money of simpletons.": "выманивал деньги у простаков.",
		"Expensive and": "Дорогие и",
		"gaudy clothes, overweight, and a": "безвкусные одежды, лишний вес и",
		"scruffy beard.": "неряшливая борода.",
		"Major builder of financial": "Главный строитель",
		"pyramids. Forbids the use of": "финансовых пирамид. Запретил",
		"vaccines.": "использование вакцин.",
		"Pointed ears,": "Заострённые уши,",
		"sharp elfin features, pale blue": "резкие эльфийские черты, бледно-",
		"eyes with no whites.": "голубые глаза, лишённые белков.",
		"Stealed gold from the King": "Похитил золото из",
		"treasury and used it for creating the": "сокровищницы Короля и использовал",
		"Cult of the Wave.": "украденное на создание Культа Волны.",
		"Huge belly,": "Огромное пузо,",
		"big muddy eyes and a sparse": "большие мутные глаза и жидкая",
		"white beard.": "белая бородка.",
		"Issued a lot of": "Выпустил множество",
		"false King decrees to": "поддельных королевских указов,",
		"prohibit a lot of things.": "запрещавших множество вещей.",
		"Has eyes which": "Его глаза",
		"change color constantly, also a smell of": "постоянно меняют цвет, а от тела",
		"ranced milk emanates from his body.": "исходит запах прокисшего молока.",
		"Fooled people and steal": "Дурачил людей и крал",
		"their money using the Amplificator": "их деньги, используя изобретённый им",
		"device.": "так называемый «Амплификатор».",
		"Pencil thin": "Тонкие как",
		"moustache, cross-eyed, long dirty": "карандаш усы, косоглазие, длинные",
		"pale hair.": "грязные светлые волосы.",
		"Used false mirror": "Использовал кривое зеркало",
		"to fool credulous people and": "для обмана доверчивых простаков и",
		"steal their stuff.": "воровства их вещей.",
		"Bushy ebon": "Кустистая чёрная",
		"beard stained with tobacco": "борода испачканная табачными",
		"juice, arrogant behavior.": "разводами, надменное поведение.",
		"Wholesale trade of": "Оптовая торговля",
		"non-working amulets.": "недействующими амулетами.",
		"Pupil-less eyes,": "Глаза без зрачков,",
		"long white beard, always wears": "длинная белая борода, всегда носит",
		"grey robes.": "серый балахон.",
		"Killed all reptiles in the": "Убил всех рептилий в",
		"King zoo.": "королевском зоопарке.",
		"Bright orange": "Ярко-рыжие",
		"body hair on a body, a tendency to": "волосы на теле, имеет привычку",
		"shout for no apparent reason.": "орать безо всякой на то причины.",
		"Helped Eleonor": "Помог Элеонору",
		"Meezul Jinn with his affair": "Мизул Джинну с его аферой по",
		"with false King laws.": "изготовлению поддельных законов.",
		"Always wearing": "Всегда носит",
		"armor and concealed weapons, has": "доспехи и скрытно — оружие, два",
		"two prominent front teeth.": "передних зуба выступают.",
		"Used false snowman": "Использовал поддельного",
		"to fool people and steal": "снежного человека для расхищения",
		"State research funds.": "королевских научных фондов.",
		"Bald patch": "Залысина на",
		"with hair combed to cover it,": "голове и волосы зачёсанные чтобы",
		"bustling.": "скрывать её, суетлив.",
		"Helped Wildimir": "Помог Вильдимиру",
		"the Blackbrow to steal State": "в деле расхищения королевских",
		"research and production funds.": "научно-производственных фондов.",
		"Sir Malinin is an": "Сэр Малинин —",
		"undead, he is covered from head to": "ярчайший представитель нежити,",
		"foot in moldering strips of cloth.": "до головы покрыт истлевшей тканью.",
		"Helped Pricess": "Помог принцессе Эмракоба",
		"Emrakoba to steal malt using a false": "похитить зерно используя ложные",
		"evidence of it is non-edible.": "доказательства его несъедобности.",
		"Dunesberg is a": "Дюнсберг — скелет,",
		"magically animated skeleton, he wears": "оживлённый магией, носит на",
		"the ancient colander on his head": "голове старинный дуршлаг.",
		"Spreads the Plague": "Распространяет Чуму и",
		"and other lethal deseases.": "иные летальные заболевания.",
		"Green, scaly": "Зелёная чешуйчатая",
		"skin, glowing red eyes,": "кожа, горящие красные зенки,",
		"spreads a dust everywhere.": "повсюду разбрасывает пыль.",
		"Stealing the": "Похитил Скипетр",
		"Sceptre of Wisdom, leading the": "Мудрости и возглавил заговор против",
		"conspiracy against the King.": "Короля.",
		'you have no contract': 'у вас нет действующего контракта',
		'looking through the magic window': 'наблюдая сквозь магический портал',
		'you have seen the army of': 'вы видите армию',
		'occupying': 'занимающую',
		'the castle of': 'замок',
		'at': 'на континенте',
		'at march.': 'на марше',
		'Alias': 'Кличка',
		'Reward': 'Награда',
		'Last seen': 'Последнее пребывание',
		'Unknown': 'Неизвестно',
		'Castle': 'Замок',
		'Distinguishing features': 'Особые приметы',
		'Crimes': 'Злодеяния',
		'weekly cost': 'жалование',
		'skill level': 'уровень',
		'you should be promoted to': 'вы должны удостоиться звания',
		'to recruit': 'чтобы нанимать',
		'recruit soldiers': 'нанять солдат',
		'audience with the King': 'аудиенция у Короля',
		'end of the week': 'конец недели',
		'astrologers proclaim: Week of the': 'астрологи провозгласили: Неделя',
		'On hand': 'В наличии',
		'Comission': 'Доход',
		'balance': 'Баланс',
		'For fulfilling your contract': 'За исполнение вашего контракта',
		'you receive an additional': 'вы получаете дополнительно',
		'…and a piece of the map to': '…и фрагмент карты',
		'the stolen scepter.': 'места, где хранится украденный скипетр',
		'Since you did not have the proper': 'Поскольку вы не заключили соответствующий',
		'contract, the Lord has been set free.': 'контракт, главарь был отпущен на свободу.',
		'and': 'и',
		'the capture of': 'захват в плен',
		'you need siege weapons': 'вам нужны осадные орудия',
		'to attack a castle': 'чтобы атаковать замок',
		'Do you want to lay siege?': 'Прикажете осадить замок?',
		'castle': 'замок',
		'Rumor says': 'молва утверждает',
		'no one': 'шайка проходимцев',
		'is under rule of': 'занимает',
		'You have not been trained in the art of spellcasting yet': 'Вы пока ещё не освоили навык сотворения заклинаний',
		'archmage alcove': 'беседка архимага',
		'the venerable Archmage, Aurange, will teach you': 'почтенный Архимаг Аупельсин обучит вас',
		'the secrets of spell casting for 5000 gold.': 'секрету сотворения заклинаний за 5000 монет.',
		"you're sneering at me,": 'вы издеваетесь надо мной,',
		'you already have this skill!': 'вы уже давно умеете колдовать!',
		'you already have siege weapons!': 'у вас уже есть осадное орудие!',
		'The sign said 5000 gold! Why waste my valuable time': 'На входе ясно написано: 5000 монет! Зачем тратить моё драгоценное',
		"when you know you don't have the required amount of gold?": 'время, если у вас нет требуемой суммы? Убирайтесь прочь',
		'Begone until you do!': 'пока не достанете золото!',
		'rent a Boat': 'арендовать корабль',
		'cancel boat rental': 'завершить аренду корабля',
		'get New Contract': 'заключить новый контракт',
		'gather information': 'собрать слухи',
		'buy spell': 'приобрести заклинание',
		'buy siege weapons': 'приобрести осадное орудие',
		'bridge': 'мост',
		'town gate': 'городские врата',
		'castle gate': 'врата замка',
		'find villain': 'найти злодея',
		'instant army': 'подмога',
		'raise control': 'усилить контроль',
		'time stop': 'стоп-время',
		'defeat': 'поражение',
		'after being disgraced on the': 'после позора, свершившегося',
		'field of battle, King Maximus': 'на поле боя, Король Максимус',
		'summons you to his castle.': 'призвал вас в свой замок.',
		'After a lesson in tactics, he': 'После урока в области тактики, он',
		'reluctantly reissues your': 'неохотно выдал вам ваше',
		'commission and sends you': 'жалование и отправил вас',
		'on your way.': 'восвояси.',
		'a sign reads': 'надпись гласит',
		'morale': 'моральный дух',
		'low': 'низкий',
		'normal': 'норм.',
		'high': 'высокий',
		'after scouring the area,': 'при обследовании местности',
		'you fall upon a hidden': 'вы обнаружили скрытый',
		'treasure cache. You may': 'тайник с сокровищами. Вы можете',
		'gold': 'золото',
		'leadership': 'лидерство',
		'income': 'доход',
		'days': 'дней',
		'gold (P)': 'золота',
		'take': 'взять',
		'leadership (P)': 'лидерства',
		'distribute': 'раздать',
		'fail': 'неудача',
		'you already have': 'у вас уже есть',
		'the maximum number of armies': 'максимальное число отрядов',
		'You have learned your maximum number of spells.': 'Вы изучили максимальное число заклинаний',
		'You can learn': 'Можете изучить ещё',
		'more spell(s)…': 'заклинаний',
		'recruit how many': 'следует нанять',
		'available': 'в наличии',
		'cost': 'цена',
		'each': 'за единицу',
		'you may recruit up to': 'вы можете нанять до',
		'city': 'город',
		'plains': 'степи',
		'dungeon': 'темница',
		'cave': 'пещера',
		'forest': 'лес',
		'castle of King Maximus': 'замок короля Максимуса',
		'castle of Connor The Barbarian': 'замок Коннора Варвара',
		'victory': 'победа',
		'well done': 'поздравляю,',
		'the': '',
		'sorceress': 'колдунья',
		'knight': 'рыцарь',
		'barbarian': 'варвар',
		'paladin': 'паладин',
		'you have successfully vanquished': 'вы успешно разгромили',
		'yet another foe': 'ещё одного неприятеля',
		'spoils of war': 'военные трофеи',
		'yes': 'да',
		'no': 'нет',
		'your scouts have sighted': 'ваши разведчики докладывают',
		'attack': 'атаковать',
		'a multitude of': 'тьма',
		'a horde of': 'туча',
		'a lot of': 'кодла',
		'many': 'много',
		'some': 'мало',
		'a few': 'чуток',
		'there are no enemy armies vulnerable to magic': 'У противника нет ни одной уязвимой для магии армии',
		'nobody to resurrect in your army': 'В ваших войсках никого нельзя воскресить',
		'nobody can be cloned in your army': 'В ваших войсках некого клонировать',
		'nobody can be teleported in your army': 'В ваших войсках некого телепортировать',
		'there are no undead enemy armies on the field': 'у противника нет ни одной армии нежити',
		'cloned': 'клонировано',
		'resurrected': 'воскрешено',
		'you can cast spell only once per round': 'вы можете применять заклинание только один раз за ход',
		'none': 'нет',
		'undead': 'нежить',
		'half kills': 'располовинивание',
		'vampirism': 'вампиризм',
		'stole souls': 'ловцы душ',
		'immune to magic': 'иммунитет к магии',
		'regeneration': 'регенерация',
		'morale group': 'группа по морали',
		'special abilities': 'особенности',
		'quantity': 'количество',
		'hit points': 'очки здоровья',
		'moves': 'ходы',
		'ranged': 'урон от стрельбы',
		'damage': 'урон',
		'your': 'ваша армия,',
		'enemy': 'армия противника,',
		'are out of control': 'вышли из под контроля',
		'out of control': 'неконтр.',
		'waiting': 'в ожидании',
		'is': '',
		'are': '',
		'frozen': 'под действием заморозки',
		'teleported': '— телепортация выполнена',
		'shoot': 'выстрел',
		'fly': 'полёт',
		'ammo': 'аммуниция',
		'cast': 'сотворение',
		'half': 'располовинивание',
		'shoots': 'обстреливает',
		'shoots (P)': 'обстреливают',
		'hits (M)': 'настигает',
		'hits': 'атакует',
		'hits (P)': 'атакуют',
		'move (P)': 'ходят',
		'killed': 'убито',
		'move': 'ходит',
		'freeze': 'мороз',
		'lightning bolt': 'молния',
		'teleport': 'телепортация',
		'fireball': 'огненный шар',
		'resurrect': 'воскрешение',
		'clone': 'клонирование',
		'turn undead': 'вломить нежити',
		'archmage': 'архимаг',
		'archmages': 'архимаги',
		'archer': 'лучник',
		'archers': 'лучники',
		'barbarian': 'варвар',
		'barbarians': 'варвары',
		'cavalry': 'кавалерист',
		'cavalries': 'кавалеристы',
		'demon': 'демон',
		'demons': 'демоны',
		'dragon': 'дракон',
		'dragons': 'драконы',
		'druid': 'друид',
		'druids': 'друиды',
		'dwarf': 'викинг',
		'dwarves': 'викинги',
		'elf': 'эльф',
		'elves': 'эльфы',
		'ghost': 'призрак',
		'ghosts': 'призраки',
		'giant': 'гигант',
		'giants': 'гиганты',
		'gnome': 'гном',
		'gnomes': 'гномы',
		'knight': 'рыцарь',
		'knights': 'рыцари',
		'militiamen': 'пехотинец',
		'militia': 'пехотинцы',
		'nomad': 'кочевник',
		'nomads': 'кочевники',
		'ogre': 'троглодит',
		'ogres': 'троглодиты',
		'orc': 'орк',
		'orcs': 'орки',
		'peasant': 'селянин',
		'peasants': 'селяне',
		'pikeman': 'копейщик',
		'pikemen': 'копейщики',
		'skeleton': 'скелет',
		'skeletons': 'скелеты',
		'sprite': 'фея',
		'sprites': 'феи',
		'troll': 'тролль',
		'trolls': 'тролли',
		'vampire': 'вампир',
		'vampires': 'вампиры',
		'wolf': 'волк',
		'wolves': 'волки',
		'zomby': 'зомби',
		'zombies': 'зомби',
		'red troll': 'красный тролль',
		'red trolls': 'красные тролли',
		'archmage (P)': 'архимага',
		'archmages (PP)': 'архимагов',
		'archer (P)': 'лучника',
		'archers (PP)': 'лучников',
		'barbarian (P)': 'варвара',
		'barbarians (PP)': 'варваров',
		'cavalry (P)': 'кавалериста',
		'cavalries (PP)': 'кавалеристов',
		'demon (P)': 'демона',
		'demons (PP)': 'демонов',
		'dragon (P)': 'дракона',
		'dragons (PP)': 'драконов',
		'druid (P)': 'друида',
		'druids (PP)': 'друидов',
		'dwarf (P)': 'викинга',
		'dwarves (PP)': 'викингов',
		'elf (P)': 'эльфа',
		'elves (PP)': 'эльфов',
		'ghost (P)': 'призрака',
		'ghosts (PP)': 'призраков',
		'giant (P)': 'гиганта',
		'giants (PP)': 'гигантов',
		'gnome (P)': 'гнома',
		'gnomes (PP)': 'гномов',
		'knight (P)': 'рыцаря',
		'knights (PP)': 'рыцарей',
		'militiamen (P)': 'пехотинца',
		'militia (PP)': 'пехотинцев',
		'nomad (P)': 'кочевника',
		'nomads (PP)': 'кочевников',
		'ogre (P)': 'троглодита',
		'ogres (PP)': 'троглодитов',
		'orc (P)': 'орка',
		'orcs (PP)': 'орков',
		'peasant (P)': 'селянина',
		'peasants (PP)': 'селян',
		'pikemen (P)': 'копейщика',
		'pikemen (PP)': 'копейщиков',
		'skeleton (P)': 'скелета',
		'skeletons (PP)': 'скелетов',
		'sprite (P)': 'фею',
		'sprites (PP)': 'фей',
		'troll (P)': 'тролля',
		'trolls (PP)': 'троллей',
		'vampire (P)': 'вампира',
		'vampires (PP)': 'вампиров',
		'wolf (P)': 'волка',
		'wolves (PP)': 'волков',
		'zomby (P)': 'зомби',
		'zombies (PP)': 'зомби',
		'red troll (P)': 'красного тролля',
		'red trolls (PP)': 'красных троллей'
	}
};

tiles = {
	'grass': 0,
	'lake': 1,
	'forest': 2,
	'hill': 3,
	'boom': 4,
	'target': 11
};

cursorTiles = {
	'boat': 0,
	'boat1': 1,
	'boat2': 2,
	'boat3': 3,
	'dragonRider': 4,
	'dragonRider1': 5,
	'dragonRider2': 6,
	'dragonRider3': 7,
	'rider': 8,
	'rider1': 9,
	'rider2': 10,
	'rider3': 11,
	'siegeWeapons': 12,
	'magic': 16,
	'map': 23,
	'money': 24,
	'coins': 25
};

viewTiles = {
	'continentMap1': 8,
	'continentMap2': 9,
	'continentMap3': 10,
	'continentMap4': 11,
	'emptySlot': 12,
	'emptyScroll': 13
};

moraleText = {
	0: 'low',
	1: 'normal',
	2: 'high',
	3: 'out of control'
};

moraleDamageModifier = {
	0: 0.5,
	1: 1,
	2: 1.5,
	3: 1
};

moraleChart = {
	'A': {'A': 1, 'B': 1, 'C': 1, 'D': 1, 'E': 1},
	'B': {'A': 1, 'B': 1, 'C': 1, 'D': 1, 'E': 1},
	'C': {'A': 1, 'B': 1, 'C': 2, 'D': 1, 'E': 1},
	'D': {'A': 0, 'B': 1, 'C': 0, 'D': 2, 'E': 1},
	'E': {'A': 0, 'B': 0, 'C': 0, 'D': 1, 'E': 1}
};

spells = {
	0: {
		cost: 300,
		name: 'freeze'
	},
	1: {
		cost: 500,
		name: 'lightning bolt'
	},
	2: {
		cost: 500,
		name: 'teleport'
	},
	3: {
		cost: 1500,
		name: 'fireball'
	},
	4: {
		cost: 5000,
		name: 'resurrect'
	},
	5: {
		cost: 2000,
		name: 'clone'
	},
	6: {
		cost: 2000,
		name: 'turn undead'
	}
};

connorPrizes = {
	leadership: 0,
	gold: 1,
	timeStop: 2,
	archmages: 3,
	barbarians: 4
};

connorAudienceTexts = [
	[
		"— Welcome to my Residence, {playerName}! I'm Connor the Barbarian, King of that barbarians who rejects barbarianism and likes popular science books and science TV-shows. I will help you in your duty."
	],
	[
		"— I suppose that the real problem of King Maximus is not the Sceptre but his excessive credulity. How is it possible to trust homeopats?.."
	],
	[
		"— I've heard that one of the Beliarch Perill's minions uses the Power of Earth. Rumor says that his power is based on magic cucumbers… But it is not exact."
	],
	[
		"— It's a Pulcinella's secret that the Sceptre itself is not more than symbolic thing. It is not magic, but anyway you need to recover it: this placebo cure will help Maximus to trust himself."
	],
	[
		'— One of the last peer reviewed researches revealed that the Mock turtle soup is not made of Mock Turtle! What a surprise!'		
	],
	[
		"— When I was a boy my mother told me about Judgement Day that will come. May be this stir with a Scepre is all about it? But I don't know where is the promised man of steel?"
	],
	[
		"— Life is like a box of matches, it is silly to treat it seriously and it is dangerous to treat it not serious."
	],
	[
		"— All efforts to make politics aesthetic culminate in one thing, war."
	],
	[
		"— Don’t be afraid of death so much as an inadequate life."
	],
	[
		"— Religion is like a penis. It's fine to have one and it's fine to be proud of it, but please don't whip it out in public and start waving it around..."
	],
	[
		"— You know, in our Kingdom it takes all the running you can do, to keep in the same place. But now you need to run faster than you can. Hurry up!"
	]
];

adventureSpells = {
	0: {
		cost: 100,
		name: 'bridge'
	},
	1: {
		cost: 200,
		name: 'time stop'
	},
	2: {
		cost: 1000,
		name: 'find villain'
	},
	3: {
		cost: 1000,
		name: 'castle gate'
	},
	4: {
		cost: 500,
		name: 'town gate'
	},
	5: {
		cost: 1000,
		name: 'instant army'
	},
	6: {
		cost: 500,
		name: 'raise control'
	}
};

villains = [
	{
		name: 'Princess Emrakoba',
		namePassive: 'Princess Emrakoba (P)',
		mapTileIndex: 1,
		reward: 5000,
		army: [
			{
				unit: 20,
				quantity: 50
			},
			{
				unit: 20,
				quantity: 50
			},
			{
				unit: 20,
				quantity: 50
			},
			{
				unit: 11,
				quantity: 25
			},
			{
				unit: 0,
				quantity: 1
			}
		],
		alias: 'The Stunted Seed',
		features: [
			'Excessive use of',
			'make-up to hide aging features, over-',
			'present lace hand handkerchief.'
		],
		crimes: [
			'Ate the malt that lay in the House',
			'That Jack Built.'
		]
	},
	{
		name: "Eleonor Meezul Jinn",
		namePassive: "Eleonor Meezul Jinn (P)",
		mapTileIndex: 2,
		reward: 6000,
		army: [
			{
				unit: 7,
				quantity: 15
			},
			{
				unit: 8,
				quantity: 15
			},
			{
				unit: 20,
				quantity: 50
			},
			{
				unit: 23,
				quantity: 25
			},
			{
				unit: 6,
				quantity: 1
			}
		],
		alias: 'The Dark Printer',
		features: [
			"Eleonor is a tiny",
			"dragon with a green body and pig",
			"nose, he breathes fire."
		],
		crimes: [
			"He produced a lot of foolish",
			"restrictive laws using the name of",
			"the King Maximus."
		]
	},
	{
		name: 'Jeegur Dark',
		namePassive: 'Jeegur Dark (P)',
		mapTileIndex: 4,
		reward: 7000,
		army: [
			{
				unit: 2,
				quantity: 5
			},
			{
				unit: 16,
				quantity: 25
			},
			{
				unit: 15,
				quantity: 5
			},
			{
				unit: 21,
				quantity: 5
			},
			{
				unit: 10,
				quantity: 1
			}
		],
		alias: 'The Chewbakka',
		features: [
			"Jeegur is heavily",
			"muscled and wears nothing or",
			"weird outfit."
		],
		crimes: [
			"Attacked people in attempt",
			"to perform exorcism acts."
		]
	},
	{
		name: 'Reynold Blondiot',
		namePassive: 'Reynold Blondiot (P)',
		mapTileIndex: 5,
		reward: 8000,
		army: [
			{
				unit: 8,
				quantity: 40
			},
			{
				unit: 8,
				quantity: 40
			},
			{
				unit: 6,
				quantity: 20
			},
			{
				unit: 6,
				quantity: 20
			},
			{
				unit: 22,
				quantity: 15
			}
		],
		alias: 'The Deathray',
		features: [
			"Single eye",
			"centered in middle of forehead,",
			"over ten feet tall."
		],
		crimes: [
			"Falsely claimed",
			"the invention of “Z-rays” and",
			"steal a money of simpletons."
		]
	},
	{
		name: 'Donald Pump',
		namePassive: 'Donald Pump (P)',
		mapTileIndex: 7,
		reward: 9000,
		army: [
			{
				unit: 17,
				quantity: 500
			},
			{
				unit: 17,
				quantity: 500
			},
			{
				unit: 1,
				quantity: 50
			},
			{
				unit: 3,
				quantity: 25
			},
			{
				unit: 12,
				quantity: 15
			}
		],
		alias: 'The Plaguekeeper',
		features: [
			"Expensive and",
			"gaudy clothes, overweight, and a",
			"scruffy beard."
		],
		crimes: [
			"Major builder of financial",
			"pyramids. Forbids the use of",
			"vaccines."
		]
	},
	{
		name: 'Peter Burnback',
		namePassive: 'Peter Burnback (P)',
		mapTileIndex: 8,
		reward: 10000,
		army: [
			{
				unit: 4,
				quantity: 3
			},
			{
				unit: 11,
				quantity: 150
			},
			{
				unit: 11,
				quantity: 150
			},
			{
				unit: 11,
				quantity: 150
			},
			{
				unit: 11,
				quantity: 150
			}
		],
		alias: 'The Waveborn',
		features: [
			"Pointed ears,",
			"sharp elfin features, pale blue",
			"eyes with no whites."
		],
		crimes: [
			"Stealed gold from the King",
			"treasury and used it for creating the",
			"Cult of the Wave."
		]
	},
	{
		name: 'Elder Smirnoff',
		namePassive: 'Elder Smirnoff (P)',
		mapTileIndex: 10,
		reward: 12000,
		army: [
			{
				unit: 9,
				quantity: 25
			},
			{
				unit: 18,
				quantity: 150
			},
			{
				unit: 18,
				quantity: 150
			},
			{
				unit: 13,
				quantity: 350
			},
			{
				unit: 13,
				quantity: 350
			}
		],
		alias: 'The Strong Belly',
		features: [
			"Huge belly,",
			"big muddy eyes and a sparse",
			"white beard."
		],
		crimes: [
			"Issued a lot of",
			"false King decrees to",
			"prohibit a lot of things."
		]
	},
	{
		name: 'John Kuznetsoff',
		namePassive: 'John Kuznetsoff (P)',
		mapTileIndex: 11,
		reward: 14000,
		army: [
			{
				unit: 7,
				quantity: 200
			},
			{
				unit: 20,
				quantity: 5
			},
			{
				unit: 20,
				quantity: 5
			},
			{
				unit: 20,
				quantity: 5
			},
			{
				unit: 20,
				quantity: 5
			}
		],
		alias: 'The Amplificator',
		features: [
			"Has eyes which",
			"change color constantly, also a smell of",
			"ranced milk emanates from his body."
		],
		crimes: [
			"Fooled people and steal",
			"their money using the Amplificator",
			"device."
		]
	},
	{
		name: 'Nicas Leftshow',
		namePassive: 'Nicas Leftshow (P)',
		mapTileIndex: 13,
		reward: 16000,
		army: [
			{
				unit: 19,
				quantity: 500
			},
			{
				unit: 22,
				quantity: 30
			},
			{
				unit: 9,
				quantity: 50
			},
			{
				unit: 24,
				quantity: 250
			},
			{
				unit: 19,
				quantity: 500
			}
		],
		alias: 'The False Mirror',
		features: [
			"Pencil thin",
			"moustache, cross-eyed, long dirty",
			"pale hair."
		],
		crimes: [
			"Used false mirror",
			"to fool credulous people and",
			"steal their stuff."
		]
	},
	{
		name: 'Ernest Mudla',
		namePassive: 'Ernest Mudla (P)',
		mapTileIndex: 14,
		reward: 18000,
		army: [
			{
				unit: 20,
				quantity: 500
			},
			{
				unit: 20,
				quantity: 500
			},
			{
				unit: 3,
				quantity: 50
			},
			{
				unit: 3,
				quantity: 50
			},
			{
				unit: 14,
				quantity: 5
			}
		],
		alias: 'The Astral Walker',
		features: [
			"Bushy ebon",
			"beard stained with tobacco",
			"juice, arrogant behavior."
		],
		crimes: [
			"Wholesale trade of",
			"non-working amulets."
		]
	},
	{
		name: 'Vedogor',
		namePassive: 'Vedogor (P)',
		mapTileIndex: 16,
		reward: 20000,
		army: [
			{
				unit: 7,
				quantity: 100
			},
			{
				unit: 7,
				quantity: 100
			},
			{
				unit: 11,
				quantity: 500
			},
			{
				unit: 11,
				quantity: 500
			},
			{
				unit: 10,
				quantity: 50
			}
		],
		alias: 'The Threeloafer',
		features: [
			"Pupil-less eyes,",
			"long white beard, always wears",
			"grey robes."
		],
		crimes: [
			"Killed all reptiles in the",
			"King zoo."
		]
	},
	{
		name: 'Vitas Milonos',
		namePassive: 'Vitas Milonos (P)',
		mapTileIndex: 17,
		reward: 25000,
		army: [
			{
				unit: 4,
				quantity: 20
			},
			{
				unit: 16,
				quantity: 150
			},
			{
				unit: 9,
				quantity: 50
			},
			{
				unit: 22,
				quantity: 50
			},
			{
				unit: 24,
				quantity: 750
			}
		],
		alias: 'The Hypocrite',
		features: [
			"Bright orange",
			"body hair on a body, a tendency to",
			"shout for no apparent reason."
		],
		crimes: [
			"Helped Eleonor",
			"Meezul Jinn with his affair",
			"with false King laws."
		]
	},
	{
		name: 'Wildimir the Blackbrow',
		namePassive: 'Wildimir the Blackbrow (P)',
		mapTileIndex: 19,
		reward: 30000,
		army: [
			{
				unit: 8,
				quantity: 250
			},
			{
				unit: 23,
				quantity: 250
			},
			{
				unit: 23,
				quantity: 250
			},
			{
				unit: 23,
				quantity: 250
			},
			{
				unit: 23,
				quantity: 250
			}
		],
		alias: 'The Snowman',
		features: [
			"Always wearing",
			"armor and concealed weapons, has",
			"two prominent front teeth."
		],
		crimes: [
			"Used false snowman",
			"to fool people and steal",
			"State research funds."
		]
	},
	{
		name: 'Victor Metrik',
		namePassive: 'Victor Metrik (P)',
		mapTileIndex: 20,
		reward: 35000,
		army: [
			{
				unit: 6,
				quantity: 75
			},
			{
				unit: 3,
				quantity: 150
			},
			{
				unit: 12,
				quantity: 100
			},
			{
				unit: 13,
				quantity: 1000
			},
			{
				unit: 13,
				quantity: 1000
			}
		],
		alias: 'The Academician',
		features: [
			"Bald patch",
			"with hair combed to cover it,",
			"bustling."
		],
		crimes: [
			"Helped Wildimir",
			"the Blackbrow to steal State",
			"research and production funds."
		]
	},
	{
		name: 'Sir Malinin',
		namePassive: 'Sir Malinin (P)',
		mapTileIndex: 22,
		reward: 40000,
		army: [
			{
				unit: 1,
				quantity: 250
			},
			{
				unit: 1,
				quantity: 250
			},
			{
				unit: 1,
				quantity: 250
			},
			{
				unit: 1,
				quantity: 250
			},
			{
				unit: 1,
				quantity: 250
			}
		],
		alias: 'The Ratkiller',
		features: [
			"Sir Malinin is an",
			"undead, he is covered from head to",
			"foot in moldering strips of cloth."
		],
		crimes: [
			"Helped Pricess",
			"Emrakoba to steal malt using a false",
			"evidence of it is non-edible."
		]
	},
	{
		name: 'Prof Dunesberg',
		namePassive: 'Prof Dunesberg (P)',
		mapTileIndex: 23,
		reward: 45000,
		army: [
			{
				unit: 0,
				quantity: 50
			},
			{
				unit: 14,
				quantity: 500
			},
			{
				unit: 22,
				quantity: 100
			},
			{
				unit: 4,
				quantity: 75
			},
			{
				unit: 5,
				quantity: 50
			}
		],
		alias: 'The Dissident',
		features: [
			"Dunesberg is a",
			"magically animated skeleton, he wears",
			"the ancient colander on his head"
		],
		crimes: [
			"Spreads the Plague",
			"and other lethal deseases."
		]
	},
	{
		name: 'Beliarch Perill',
		namePassive: 'Beliarch Perill (P)',
		mapTileIndex: 24,
		reward: 50000,
		army: [
			{
				unit: 10,
				quantity: 100
			},
			{
				unit: 5,
				quantity: 75
			},
			{
				unit: 5,
				quantity: 75
			},
			{
				unit: 25,
				quantity: 100
			},
			{
				unit: 25,
				quantity: 100
			}
		],
		alias: 'The Crossfolder',
		features: [
			"Green, scaly",
			"skin, glowing red eyes,",
			"spreads a dust everywhere."
		],
		crimes: [
			"Stealing the",
			"Sceptre of Wisdom, leading the",
			"conspiracy against the King."
		]
	}
];

var treasureTypes = {
	gold: 0,
	income: 1,
	spellPower: 2,
	spellCapacity: 3,
	extraSpell: 4,
	orb: 5,
	map: 6
};

var difficultyLevels = [
	{
		name: 'easy',
		days: 4 * 365,
		scoreModifier: 0.5
	},
	{
		name: 'normal',
		days: 3 * 365,
		scoreModifier: 1.2
	},
	{
		name: 'hard',
		days: 2 * 365,
		scoreModifier: 2.0
	},
	{
		name: 'impossible (?)',
		days: 365,
		scoreModifier: 4.0
	}
];

/*

0	Peasants	Peasants	Sprites	Peasants	3
1	Militia	Militia	Gnomes	Wolves	2
2	Archers	Archers	Elves	Orcs	1
3	Knights	Cavalry	Druids	Ogres	1

*/

playerRoleNames = ['knight', 'paladin', 'sorceress', 'barbarian'];

playerRoles = {
	'knight': {
		levelNames: ['knight', 'general', 'marshal', 'lord'],
		baseIncome: [1000, 2000, 4000, 8000],
		baseLeadership: [100, 200, 500, 1000],
		villains: [0, 2, 8, 14],
		baseSpellPower: [1, 2, 3, 5],
		baseSpellCapacity: [2, 5, 9, 14],
		initialGold: 7500,
		initialHasMagicSkill: false,
		statusColor: '#b0b0b0',
		tile: 1,
		instantArmyUnits: [17, 13, 1, 12],
		travelMusic: 'odetojoy.mp3',
		initialArmy: [
			{ // 20 militia
				quantity: 20,
				unit: 13
			},
			{ // 2 archers
				quantity: 2,
				unit: 1
			}
		]
	},
	'sorceress': {
		levelNames: ['sorceress', 'magician', 'mage', 'archmage'],
		baseIncome: [3000, 4000, 5000, 6000],
		baseLeadership: [60, 120, 300, 500],
		villains: [0, 3, 6, 12],
		baseSpellPower: [2, 5, 10, 15],
		initialGold: 10000,
		baseSpellCapacity: [5, 13, 23, 35],
		initialHasMagicSkill: true,
		statusColor: '#a80000',
		tile: 3,
		instantArmyUnits: [17, 11, 8, 6],
		travelMusic: 'secret_garden_dreamcatcher.mp3',
		initialArmy: [
			{ // 20 peasants
				quantity: 20,
				unit: 17
			},
			{ // 10 sprites
				quantity: 10,
				unit: 20
			}
		]
	},
	'paladin': {
		levelNames: ['paladin', 'crusader', 'avenger', 'champion'],
		baseIncome: [1000, 2000, 4000, 8000],
		villains: [0, 2, 7, 13],
		baseLeadership: [80, 160, 500, 900],
		initialGold: 10000,
		baseSpellPower: [1, 3, 5, 7],
		baseSpellCapacity: [3, 7, 12, 18],
		initialHasMagicSkill: false,
		statusColor: '#00a800',
		tile: 2,
		instantArmyUnits: [17, 13, 1, 3],
		travelMusic: 'bach_BWV639.mp3',
		initialArmy: [
			{ // 20 peasants
				quantity: 20,
				unit: 17
			},
			{ // 20 militia
				quantity: 20,
				unit: 13
			}
		]
	},
	'barbarian': {
		levelNames: ['barbarian', 'chieftain', 'warlord', 'overlord'],
		baseIncome: [2000, 4000, 6000, 8000],
		villains: [0, 1, 5, 10],
		baseLeadership: [100, 200, 500, 1000],
		initialGold: 10000,
		baseSpellPower: [0, 1, 2, 3],
		baseSpellCapacity: [2, 4, 7, 10],
		initialHasMagicSkill: false,
		statusColor: '#5757ff',
		tile: 0,
		instantArmyUnits: [17, 23, 16, 15],
		travelMusic: 'sviridov_snowstorm.mp3',
		initialArmy: [
			{ // 20 peasants
				quantity: 20,
				unit: 17
			},
			{ // 20 militia
				quantity: 20,
				unit: 13
			}
		]
	},
};

instantArmyMultiplier = [3, 2, 1, 1];

/*

Bridge (100) = build 2 (or less) tiles of bridge over water tiles
Time stop (200) = stops time for 10 * spell power steps, resets to 0 if you move over desert tile
Find Villain (1000) = show the current contract's villain's location (castle)
Castle Gate (1000) = go to any castle you previously visited
Town Gate (500) = go to any town you have previously visited ("gate" coordinates are used)
Instant Army (1000) = as long as you have an open stack or have that unit, you get (spell_power + 1) * rank_multiplier of units without paying any gold
Raise Control (500) = increase Leadership by 100 * spell power till end of week	

*/

signs = [
			[
				{
					'text': 'All maps are found in chests',
					'ch': 'a',
					'tile': 16
				},
				{
					'text': 'Boon docks',
					'ch': 'b',
					'tile': 16
				},
				{
					'text': 'Welcome to Kookamunga!',
					'ch': 'c',
					'tile': 16
				},
				{
					'text': 'Treasure island',
					'ch': 'd',
					'tile': 16
				},
				{
					'text': 'Aurange is north',
					'ch': 'e',
					'tile': 16
				},
				{
					'text': 'The Sceptre will never be found!',
					'ch': 'f',
					'tile': 16
				},
				{
					'text': 'Irok guards the north',
					'ch': 'g',
					'tile': 16
				},
				{
					'text': 'A-maze-ing Forest',
					'ch': 'h',
					'tile': 16
				},
				{
					'text': 'Bridge port',
					'ch': 'i',
					'tile': 16
				},
				{
					'text': "Pirate's Cove",
					'ch': 'j',
					'tile': 16
				},
				{
					'text': 'Isle of Death',
					'ch': 'k',
					'tile': 16
				},
				{
					'text': 'Secret Pass',
					'ch': 'l',
					'tile': 16
				},
				{
					'text': 'Hidden Grove',
					'ch': 'm',
					'tile': 16
				},
				{
					'text': 'Dead End',
					'ch': 'n',
					'tile': 16
				},
				{
					'text': 'Peasant Way',
					'ch': 'o',
					'tile': 16
				},
				{
					'text': 'Pond of Perill',
					'ch': 'p',
					'tile': 16
				},
				{
					'text': 'Wonder woods',
					'ch': 'q',
					'tile': 16
				},
				{
					'text': 'It takes time to cross the desert',
					'ch': 'r',
					'tile': 16
				},
				{
					'text': 'Four villains rule Continentia',
					'ch': 's',
					'tile': 16
				},
				{
					'text': 'Rent a boat and sail the seas!',
					'ch': 't',
					'tile': 16
				},
				{
					'text': 'There are two main artefacts per continent',
					'ch': 'u',
					'tile': 16
				},
				{
					'text': "King's Treasure Garden",
					'ch': 'v',
					'tile': 16
				}
			], // Waternia
			[
				{
					'text': 'Unhappy the land that is in need of heroes',
					'ch': 'a',
					'tile': 16
				},
				{
					'text': 'History is written by the victors',
					'ch': 'b',
					'tile': 16
				},
				{
					'text': 'The public opinion is always a sort of lynch law',
					'ch': 'c',
					'tile': 16
				},
				{
					'text': 'Cape of Bad Hope',
					'ch': 'd',
					'tile': 16
				},
				{
					'text': "Cape of Vanya's Nose",
					'ch': 'e',
					'tile': 16
				},
				{
					'text': 'Wildimir is so wild!',
					'ch': 'f',
					'tile': 16
				},
				{
					'text': 'Southern Waternia',
					'ch': 'g',
					'tile': 16
				},
				{
					'text': 'Fuelwood cutting or removal prohibited!',
					'ch': 'h',
					'tile': 16
				},
				{
					'text': 'Western Waternia',
					'ch': 'i',
					'tile': 16
				},
				{
					'text': 'Colossus is so colossal!',
					'ch': 'j',
					'tile': 16
				},
				{
					'text': 'The Non-Mysterious Island',
					'ch': 'k',
					'tile': 16
				},
				{
					'text': 'Yavelik Peninsula',
					'ch': 'l',
					'tile': 16
				},
				{
					'text': 'Rosencrantz and Guildenstern are dead!',
					'ch': 'm',
					'tile': 16
				},
				{
					'text': 'Skeppsgaard to the west!',
					'ch': 'n',
					'tile': 16
				},
				{
					'text': 'Skeppsgaard to the east!',
					'ch': 'o',
					'tile': 16
				}
			], // Malbrasia
			[
				{
					'text': 'Malbrasian wine is the best!',
					'ch': 'a',
					'tile': 16
				},
				{
					'text': 'Lorem ipsum still in vogue',
					'ch': 'b',
					'tile': 16
				},
				{
					'text': 'John Kuznetsoff likes hedgehogs',
					'ch': 'c',
					'tile': 16
				},
				{
					'text': "Peter Burnback's roof is on fire!",
					'ch': 'd',
					'tile': 16
				},
				{
					'text': 'The Bryansk woods rusting grimly',
					'ch': 'e',
					'tile': 16
				},
				{
					'text': 'May the Force be with you',
					'ch': 'f',
					'tile': 16
				}
			], // Arbusia
			[
				{
					'text': 'Arbusian economists advocates a cybernetic planning',
					'ch': 'a',
					'tile': 16
				},
				{
					'text': 'The dimension of the Borel subalgebra in the exceptional Lie algebra e6 is 42',
					'ch': 'b',
					'tile': 16
				},
				{
					'text': '42 is a Størmer number',
					'ch': 'c',
					'tile': 16
				},
				{
					'text': 'We like Paul Cockshott works',
					'ch': 'd',
					'tile': 16
				},
				{
					'text': 'There are 42 US gallons in a barrel of oil',
					'ch': 'e',
					'tile': 16
				},
				{
					'text': 'The atomic number of molybdenum is 42. 42, Carl!',
					'ch': 'f',
					'tile': 16
				},
				{
					'text': "Alice's Adventures in Wonderland has 42 illustrations",
					'ch': 'g',
					'tile': 16
				},
				{
					'text': 'Normal heroes always go around!',
					'ch': 'h',
					'tile': 16
				},
				{
					'text': "There are 42 principles of Ma'at",
					'ch': 'i',
					'tile': 16
				},
				{
					'text': 'No one shall speak to the Man at the Helm',
					'ch': 'j',
					'tile': 16
				},
				{
					'text': '2^42 = 4 398 046 511 104',
					'ch': 'k',
					'tile': 16
				},
				{
					'text': 'Emperor Tiberius was born in 42BC',
					'ch': 'l',
					'tile': 16
				},
				{
					'text': 'The Battle of Stalingrad started in 1942',
					'ch': 'm',
					'tile': 16
				},
				{
					'text': '42 = 0101010(2)',
					'ch': 'n',
					'tile': 16
				}
			], // Clostridia
			[
				{
					'text': 'Kalaska Peninsula',
					'ch': 'a',
					'tile': 16
				},
				{
					'text': 'CRISPR is awesome',
					'ch': 'b',
					'tile': 16
				},
				{
					'text': 'Beware red trolls!',
					'ch': 'c',
					'tile': 16
				},
				{
					'text': 'If the 666 is evil, is 25.807 the root of the evil?..',
					'ch': 'd',
					'tile': 16
				},
				{
					'text': 'Beware The Flying Spaghetti Monster!',
					'ch': 'e',
					'tile': 16
				},
				{
					'text': 'Trafalgar square equals Trafalgar width multiplied by Trafalgar length',
					'ch': 'f',
					'tile': 16
				},
				{
					'text': 'To troll or not to troll — that is the question…',
					'ch': 'g',
					'tile': 16
				},
				{
					'text': 'Snark is a Boojum!',
					'ch': 'h',
					'tile': 16
				}
			]
];

rumorToCity = {
	// Waternia
	'Volgorod': [
		"Waternian titan? What an example of a bad taste! It's completely useless and, moreover, I've heard that it's sculptor stealed one half of copper that King afforded for this buillding!"
	],
	'Homsburg': [
		"There are four minor artefacts: The Training Sword, The Pendant of Sun, The Bow of Marksmanship and the Shield of Assurance."
	],
	'Banev': [
		"The problem of slavery is a bad brand management. Just use more advertising for your new “Work & Travel Program” and you will see a lot of volunteers!"
	],
	'Burburg': [
		'You can find The Sword of Prowess at the North-East of Waternia.'
	],
	'Skeppsgaard': [
		'The brilliant evidence of the evolution theory is that human finger is too thick for an earhole. So, those who was not equipped with this protective feature, was kicked out by the stabilizing natural selection.'
	],
	'Glupogorsk': [
		'I like criminal TV-shows. Especially the new one… About some talented detective… I forgot his name, but his brother is Minecraft Holmes.'
	],
	'Kugelheim': [
		'The Bow of Marksmanship increases your ranged attack by 25%.'
	],
	'Itchtos': [
		"I've seen a strange dream about some hero with a vast army of boars, brown birds and a small halflings with a slings. Boars in the army! How ridiculous!"
	],
	'Westbumpshire': [
		"Ok, twenty years ago The Ring of Heroism was useles. But the times they are a changin'!"
	],
	'Børkholm': [
		'Yorn desh born, der ritt de gitt der gue,',
		'Orn desh, dee born desh, de umn børk! børk! børk!'
	],
	// Malbrasia
	'Ostbrok': [
		"The Training Sword increases your army damage by 10%."
	], 
	'Malborn': [
		'XXX Olympic Games?.. OMG, really? It is probably an adult content!'
	], 
	'Eastbern': [
		"You can't obtain some artefacts in Arbusia without fly."
	], 
	'Gorgorod': [
		"…To gild refined gold, to paint the lily,",
		"To throw a perfume on the violet,",
		"To smooth the ice, or add another hue",
		"Unto the rainbow, or with taper-light",
		"To seek the beauteous eye of heaven to garnish,",
		"Is wasteful and ridiculous excess…"
	],
	'Bursock': [
		"The Pendant of Sun increases both your spell power and maximum number of spells by 1."
	], 
	'Isla Blanca': [
		"As to the black holes, I think you should definitely ask Hawk King about them…"
	],
	'Paperville': [
		'As to GMOs… Of course, I know, that a lot of men are eating beef, but their horns are growing because of other reasons…'
	],
	'Bersk': [
		'Those villains likes to promise a lot of magic things. But nobody seen their miracles. It is so strange. Exceptional claims demand exceptional evidence!'
	],
	'Candelabria': [
		"The Shield of Assurance adsorbs 10% of damage."
	],
	'Rasalio': [
		"To the dumb question “Why me?” the cosmos barely bothers to return the reply: why not?"
	],
	'Augustberg': [
		"We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further."
	],
	'Tepswitch': [
		"There's real poetry in the real world. Science is the poetry of reality."
	], 
	'Engelstadt': [
		"What if the chicken is only an egg’s way for making another egg?.."
	], 
	'Kurovsk': [
		"The Bow of Marksmanship is near the center of Malbrasia."
	], 
	'Rammingen': [
		"The only disgusting thing in this World is that you're not able to rob caravans…"
	],
	// Arbusia
	'Westshore-1': [
		"Red trolls? Oh, yea, they are originates from the North Clostridia. They are faster than green ones!"
	],
	'Westshore-2': [
		"I think that Western Blot is rocks. It is better that Eastern one. Ask yourself: what can be more boring than Post-translational modifications?"
	],
	'Westshore-3': [
		"Never open your Overton window too wide: in Soviet Russia the Scepter finds YOU!"
	],
	'Eastshore-3': [
		"What is the robbing of a bank compared to the founding of a bank?"
	],
	'Eastshore-2': [
		"Eastern Blot is underestimated! It is definitely more important than Western one. Gel electrophoresis is so dirty!"
	],
	'Eastshore-1': [
		"I've heard about terrible red trolls. They comes at night and suck your blood!"
	],
	// Clostridia
	'Severosvinsk': [
		"I'm sure that those red trolls are not really red. Their political beleifs is far right. I will be not surprised if they are members of a Mad Tea-Party…"
	],
	'Kabanopol': [
		"Do you really want to attack red trolls? I don't think it's a good idea. Before you there was another great hero, but he wasn't successful. His name was Leeroy. He and his party was finally ripped by trolls. Sad but true."
	],
	'Fourth Rome': [
		"What happens to the hole when the cheese is gone?"
	]
};

artefacts = [
	{
		extended: true,
		mapTileIndex: null,
		'name': 'Pendant of Sun',
		'ch': '!',
		viewTileId: 4,
		'tile': 81
	},
	{
		extended: true,
		mapTileIndex: null,
		'name': 'Bow of Marksmanship',
		'ch': '(',
		viewTileId: 5,
		'tile': 83
	},
	{
		extended: true,
		mapTileIndex: null,
		'name': 'Shield of Assurance',
		'ch': ';',
		viewTileId: 6,
		'tile': 84
	},
	{
		extended: true,
		mapTileIndex: null,
		'name': 'Training Sword',
		'ch': '/',
		viewTileId: 0,
		'tile': 85
	},
	{
		mapTileIndex: 0,
		'name': 'Ring of Heroism',
		'ch': 'I',
		viewTileId: 5,
		'tile': 18
	},
	{
		mapTileIndex: 3,
		'name': 'Articles of Nobility',
		'ch': 'O',
		viewTileId: 3,
		'tile': 19
	},
	{
		mapTileIndex: 6,
		'name': 'Shield of Protection',
		'ch': 'J',
		viewTileId: 1,
		'tile': 73
	},
	{
		mapTileIndex: 9,
		'name': 'Anchor of Admiralty',
		'ch': 'N',
		viewTileId: 7,
		'tile': 74
	},
	{
		mapTileIndex: 12,
		'name': 'Book of Necros',
		'ch': 'Q',
		viewTileId: 6,
		'tile': 77
	},
	{
		mapTileIndex: 15,
		'name': 'Crown of Command',
		'ch': 'K',
		viewTileId: 2,
		'tile': 76
	},
	{
		mapTileIndex: 18,
		'name': 'Amulet of Augmentation',
		'ch': 'L',
		viewTileId: 4,
		'tile': 79
	},
	{
		mapTileIndex: 21,
		'name': 'Sword of Prowess',
		'ch': 'R',
		viewTileId: 0,
		'tile': 80
	}
];

mapColorForTile = {
	32: '#0202A8', // water
	0: '#58FC5B', // grass
	17: '#DB5A69', // enemy
	72: '#DB5A69', // enemy1
	75: '#DB5A69', // enemy2
	78: '#DB5A69', // enemy3
	81: '#DB5A69', // artefact
	82: '#DB5A69', // enemy4
	83: '#DB5A69', // artefact
	84: '#DB5A69', // artefact
	85: '#DB5A69', // artefact
	10: '#DB5A69', // city
	11: '#DB5A69', // treasure
	12: '#DB5A69', // cart
	13: '#DB5A69', // tree
	14: '#DB5A69', // hill
	15: '#DB5A69', // dungeon
	16: '#DB5A69', // sign
	100: '#DB5A69', // titan 
	101: '#DB5A69', // titan
	102: '#DB5A69', // titan
	103: '#DB5A69', // titan
	104: '#DB5A69', // titan
	105: '#DB5A69', // titan
	106: '#DB5A69', // titan
	107: '#DB5A69', // titan
	108: '#DB5A69', // titan
	109: '#DB5A69', // titan
	110: '#DB5A69', // titan
	111: '#DB5A69', // titan
	18: '#DB5A69', // artefact
	19: '#DB5A69', // artefact
	73: '#DB5A69', // artefact
	74: '#DB5A69', // artefact
	76: '#DB5A69', // artefact
	77: '#DB5A69', // artefact
	79: '#DB5A69', // artefact
	80: '#DB5A69', // artefact

	20: '#5956fc', // shore
	21: '#5956fc', // shore
	22: '#5956fc', // shore
	23: '#5956fc', // shore
	24: '#5956fc', // shore
	25: '#5956fc', // shore
	26: '#5956fc', // shore
	27: '#5956fc', // shore
	28: '#5956fc', // shore
	29: '#5956fc', // shore
	30: '#5956fc', // shore
	31: '#5956fc', // shore

	71: '#a85603', // rock

	59: '#a85603', // rock
	60: '#a85603', // rock
	61: '#a85603', // rock
	62: '#a85603', // rock
	63: '#a85603', // rock
	64: '#a85603', // rock
	65: '#a85603', // rock
	66: '#a85603', // rock
	67: '#a85603', // rock
	68: '#a85603', // rock
	69: '#a85603', // rock
	70: '#a85603', // rock

	45: '#00ad00', // forest

	33: '#00ad00', // forest
	34: '#00ad00', // forest
	35: '#00ad00', // forest
	36: '#00ad00', // forest
	37: '#00ad00', // forest
	38: '#00ad00', // forest
	39: '#00ad00', // forest
	40: '#00ad00', // forest
	41: '#00ad00', // forest
	42: '#00ad00', // forest
	43: '#00ad00', // forest
	44: '#00ad00', // forest

	58: '#fffc54', // desert

	46: '#fffc54', // desert
	47: '#fffc54', // desert
	48: '#fffc54', // desert
	49: '#fffc54', // desert
	50: '#fffc54', // desert
	51: '#fffc54', // desert
	52: '#fffc54', // desert
	53: '#fffc54', // desert
	54: '#fffc54', // desert
	55: '#fffc54', // desert
	56: '#fffc54', // desert
	57: '#fffc54', // desert

	8: '#808080', // bridge
	9: '#808080', // bridge

	1: '#DB5A69', // castle shadow
	
	2: '#fcfffd', // castle
	3: '#fcfffd', // castle
	4: '#fcfffd', // castle
	5: '#fcfffd', // castle
	6: '#fcfffd', // castle
	7: '#fcfffd' // castle
};

backgroundByDwelling = {
	'5': '#a800a8',
	'C': '#b0b0b0',
	'D': '#00a800',
	'E': '#0000a8',
	'F': '#a80000'
};

units = {
	0: {
		id: 0,
		name: 'archmage',
		namePlural: 'archmages',
		namePassive: 'archmage (P)',
		namePassivePlural: 'archmages (PP)',
		skillLevel: 5,
		hitPoints: 25,
		moves: 1,
		attackMin: 2,
		attackMax: 3,
		shootMin: 25,
		shootMax: 25,
		cost: 1200,
		moraleGroup: 'C',
		fly: true,
		shoots: 2,
		magic: true,
		spoilsFactor: 120,
		growth: 2,
		maxPopulation: 25,
		dwelling: 'C'
	},
	1: {
		id: 1,
		name: 'archer',
		namePlural: 'archers',
		namePassive: 'archer (P)',
		namePassivePlural: 'archers (PP)',
		skillLevel: 2,
		hitPoints: 10,
		moves: 2,
		attackMin: 1,
		attackMax: 2,
		shootMin: 1,
		shootMax: 3,
		cost: 250,
		moraleGroup: 'B',
		shoots: 12,
		spoilsFactor: 25,
		growth: 5,
		maxPopulation: 0,
		dwelling: '5'
	},
	2: {
		id: 2,
		name: 'barbarian',
		namePlural: 'barbarians',
		namePassive: 'barbarian (P)',
		namePassivePlural: 'barbarians (PP)',
		skillLevel: 4,
		hitPoints: 40,
		moves: 3,
		attackMin: 1,
		attackMax: 6,
		cost: 750,
		moraleGroup: 'C',
		spoilsFactor: 75,
		growth: 3,
		maxPopulation: 100,
		dwelling: 'C'
	},
	3: {
		id: 3,
		name: 'cavalry',
		namePlural: 'cavalries',
		namePassive: 'cavalry (P)',
		namePassivePlural: 'cavalries (PP)',
		skillLevel: 4,
		hitPoints: 20,
		moves: 4,
		attackMin: 3,
		attackMax: 5,
		cost: 800,
		moraleGroup: 'B',
		spoilsFactor: 80,
		growth: 2,
		maxPopulation: 0,
		dwelling: '5',
		minRecruitLevel: 1
	},
	4: {
		id: 4,
		name: 'demon',
		namePlural: 'demons',
		namePassive: 'demon (P)',
		namePassivePlural: 'demons (PP)',
		skillLevel: 6,
		hitPoints: 50,
		moves: 1,
		attackMin: 5,
		attackMax: 7,
		cost: 3000,
		moraleGroup: 'E',
		fly: true,
		half: true,
		spoilsFactor: 300,
		growth: 1,
		maxPopulation: 25,
		dwelling: 'F'
	},
	5: {
		id: 5,
		name: 'dragon',
		namePlural: 'dragons',
		namePassive: 'dragon (P)',
		namePassivePlural: 'dragons (PP)',
		skillLevel: 6,
		hitPoints: 200,
		moves: 1,
		attackMin: 25,
		attackMax: 50,
		cost: 5000,
		moraleGroup: 'D',
		fly: true,
		magicImmunity: true,
		spoilsFactor: 500,
		growth: 1,
		maxPopulation: 25,
		dwelling: 'E'
	},
	6: {
		id: 6,
		name: 'druid',
		namePlural: 'druids',
		namePassive: 'druid (P)',
		namePassivePlural: 'druids (PP)',
		skillLevel: 5,
		hitPoints: 25,
		moves: 2,
		attackMin: 2,
		attackMax: 3,
		shootMin: 10,
		shootMax: 10,
		cost: 700,
		moraleGroup: 'C',
		shoots: 3,
		magic: true,
		spoilsFactor: 70,
		growth: 2,
		maxPopulation: 25,
		dwelling: 'D'
	},
	7: {
		id: 7,
		name: 'dwarf',
		namePlural: 'dwarves',
		namePassive: 'dwarf (P)',
		namePassivePlural: 'dwarves (PP)',
		skillLevel: 3,
		hitPoints: 20,
		moves: 1,
		attackMin: 2,
		attackMax: 4,
		cost: 350,
		moraleGroup: 'C',
		spoilsFactor: 30,
		growth: 4,
		maxPopulation: 100,
		dwelling: 'E'
	},
	8: {
		id: 8,
		name: 'elf',
		namePlural: 'elves',
		namePassive: 'elf (P)',
		namePassivePlural: 'elves (PP)',
		skillLevel: 3,
		hitPoints: 10,
		moves: 3,
		attackMin: 1,
		attackMax: 2,
		shootMin: 2,
		shootMax: 4,
		cost: 200,
		moraleGroup: 'C',
		shoots: 12,
		spoilsFactor: 20,
		growth: 4,
		maxPopulation: 100,
		dwelling: 'D'
	},
	9: {
		id: 9,
		name: 'ghost',
		namePlural: 'ghosts',
		namePassive: 'ghost (P)',
		namePassivePlural: 'ghosts (PP)',
		skillLevel: 4,
		hitPoints: 10,
		moves: 3,
		attackMin: 3,
		attackMax: 4,
		cost: 400,
		moraleGroup: 'E',
		ghostic: true,
		undead: true,
		spoilsFactor: 40,
		growth: 3,
		maxPopulation: 25,
		dwelling: 'F'
	},
	10: {
		id: 10,
		name: 'giant',
		namePlural: 'giants',
		namePassive: 'giant (P)',
		namePassivePlural: 'giants (PP)',
		skillLevel: 5,
		hitPoints: 60,
		moves: 3,
		attackMin: 10,
		attackMax: 20,
		shootMin: 5,
		shootMax: 10,
		cost: 2000,
		moraleGroup: 'C',
		shoots: 8,
		spoilsFactor: 200,
		growth: 2,
		maxPopulation: 50,
		dwelling: 'E'
	},
	11: {
		id: 11,
		name: 'gnome',
		namePlural: 'gnomes',
		namePassive: 'gnome (P)',
		namePassivePlural: 'gnomes (PP)',
		skillLevel: 2,
		hitPoints: 5,
		moves: 1,
		attackMin: 1,
		attackMax: 3,
		cost: 60,
		moraleGroup: 'C',
		spoilsFactor: 6,
		growth: 5,
		maxPopulation: 250,
		dwelling: 'D'
	},
	12: {
		id: 12,
		name: 'knight',
		namePlural: 'knights',
		namePassive: 'knight (P)',
		namePassivePlural: 'knights (PP)',
		skillLevel: 5,
		hitPoints: 35,
		moves: 1,
		attackMin: 6,
		attackMax: 10,
		cost: 1000,
		moraleGroup: 'B',
		spoilsFactor: 100,
		growth: 3,
		maxPopulation: 0,
		dwelling: '5',
		minRecruitLevel: 2
	},
	13: {
		id: 13,
		name: 'militiamen',
		namePlural: 'militia',
		namePassive: 'militiamen (P)',
		namePassivePlural: 'militia (PP)',
		skillLevel: 2,
		hitPoints: 2,
		moves: 2,
		attackMin: 1,
		attackMax: 2,
		cost: 50,
		moraleGroup: 'A',
		spoilsFactor: 5,
		growth: 5,
		maxPopulation: 0,
		dwelling: '5'
	},
	14: {
		id: 14,
		name: 'nomad',
		namePlural: 'nomads',
		namePassive: 'nomad (P)',
		namePassivePlural: 'nomads (PP)',
		skillLevel: 3,
		hitPoints: 15,
		moves: 2,
		attackMin: 2,
		attackMax: 4,
		cost: 300,
		moraleGroup: 'C',
		spoilsFactor: 30,
		growth: 4,
		maxPopulation: 150,
		dwelling: 'C'
	},
	15: {
		id: 15,
		name: 'ogre',
		namePlural: 'ogres',
		namePassive: 'ogre (P)',
		namePassivePlural: 'ogres (PP)',
		skillLevel: 4,
		hitPoints: 40,
		moves: 1,
		attackMin: 3,
		attackMax: 5,
		cost: 750,
		moraleGroup: 'D',
		spoilsFactor: 75,
		growth: 3,
		maxPopulation: 200,
		dwelling: 'E'
	},
	16: {
		id: 16,
		name: 'orc',
		namePlural: 'orcs',
		namePassive: 'orc (P)',
		namePassivePlural: 'orcs (PP)',
		skillLevel: 2,
		hitPoints: 5,
		moves: 2,
		attackMin: 2,
		attackMax: 3,
		shootMin: 1,
		shootMax: 2,
		cost: 75,
		moraleGroup: 'D',
		shoots: 8,
		spoilsFactor: 7,
		growth: 5,
		maxPopulation: 200,
		dwelling: 'E'
	},
	17: {
		id: 17,
		name: 'peasant',
		namePlural: 'peasants',
		namePassive: 'peasant (P)',
		namePassivePlural: 'peasants (PP)',
		skillLevel: 1,
		hitPoints: 1,
		moves: 1,
		attackMin: 1,
		attackMax: 1,
		cost: 10,
		moraleGroup: 'A',
		spoilsFactor: 1,
		growth: 6,
		maxPopulation: 250,
		dwelling: 'C'
	},
	18: {
		id: 18,
		name: 'pikeman',
		namePlural: 'pikemen',
		namePassive: 'pikemen (P)',
		namePassivePlural: 'pikemen (PP)',
		skillLevel: 3,
		hitPoints: 10,
		moves: 2,
		attackMin: 2,
		attackMax: 4,
		cost: 300,
		moraleGroup: 'B',
		spoilsFactor: 30,
		growth: 4,
		maxPopulation: 0,
		dwelling: '5'
	},
	19: {
		id: 19,
		name: 'skeleton',
		namePlural: 'skeletons',
		namePassive: 'skeleton (P)',
		namePassivePlural: 'skeletons (PP)',
		skillLevel: 2,
		hitPoints: 3,
		moves: 2,
		attackMin: 1,
		attackMax: 2,
		cost: 40,
		moraleGroup: 'E',
		undead: true,
		spoilsFactor: 4,
		growth: 5,
		maxPopulation: 150,
		dwelling: 'F'
	},
	20: {
		id: 20,
		name: 'sprite',
		namePlural: 'sprites',
		namePassive: 'sprite (P)',
		namePassivePlural: 'sprites (PP)',
		skillLevel: 1,
		hitPoints: 1,
		moves: 1,
		attackMin: 1,
		attackMax: 2,
		cost: 15,
		moraleGroup: 'C',
		fly: true,
		spoilsFactor: 1,
		growth: 6,
		maxPopulation: 200,
		dwelling: 'D'
	},
	21: {
		id: 21,
		name: 'troll',
		namePlural: 'trolls',
		namePassive: 'troll (P)',
		namePassivePlural: 'trolls (PP)',
		skillLevel: 4,
		hitPoints: 50,
		moves: 1,
		attackMin: 2,
		attackMax: 5,
		cost: 1000,
		moraleGroup: 'D',
		regenerate: true,
		spoilsFactor: 100,
		growth: 3,
		maxPopulation: 25,
		dwelling: 'D'
	},
	22: {
		id: 22,
		name: 'vampire',
		namePlural: 'vampires',
		namePassive: 'vampire (P)',
		namePassivePlural: 'vampires (PP)',
		skillLevel: 5,
		hitPoints: 10,
		moves: 1,
		attackMin: 3,
		attackMax: 6,
		cost: 1500,
		moraleGroup: 'E',
		fly: true,
		vampiric: true,
		undead: true,
		spoilsFactor: 150,
		growth: 2,
		maxPopulation: 50,
		dwelling: 'F'
	},
	23: {
		id: 23,
		name: 'wolf',
		namePlural: 'wolves',
		namePassive: 'wolf (P)',
		namePassivePlural: 'wolves (PP)',
		skillLevel: 2,
		hitPoints: 3,
		moves: 3,
		attackMin: 1,
		attackMax: 3,
		cost: 40,
		moraleGroup: 'D',
		spoilsFactor: 4,
		growth: 5,
		maxPopulation: 150,
		dwelling: 'C'
	},
	24: {
		id: 24,
		name: 'zomby',
		namePlural: 'zombies',
		namePassive: 'zomby (P)',
		namePassivePlural: 'zombies (PP)',
		skillLevel: 2,
		hitPoints: 5,
		moves: 1,
		attackMin: 2,
		attackMax: 2,
		cost: 50,
		moraleGroup: 'E',
		undead: true,
		spoilsFactor: 5,
		growth: 5,
		maxPopulation: 100,
		dwelling: 'F'
	},
	25: {
		id: 25,
		name: 'red troll',
		namePlural: 'red trolls',
		namePassive: 'red troll (P)',
		namePassivePlural: 'red trolls (PP)',
		skillLevel: 4,
		hitPoints: 40,
		moves: 2,
		attackMin: 2,
		attackMax: 4,
		cost: 1000,
		moraleGroup: 'D',
		vampiric: true,
		spoilsFactor: 100,
		growth: 3,
		maxPopulation: 25,
		dwelling: 'D'
	}
};

armyPositions = {
	'simple': {
		0: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 1, y: 4}],
		1: [{x: 5, y: 0}, {x: 5, y: 1}, {x: 5, y: 2}, {x: 5, y: 3}, {x: 5, y: 4}, {x: 4, y: 0}, {x: 4, y: 1}, {x: 4, y: 2}, {x: 4, y: 3}, {x: 4, y: 4}]
	},
	'siege': {
		0: [{x: 2, y: 4}, {x: 3, y: 4}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 1, y: 3}],
		1: [{x: 2, y: 0}, {x: 3, y: 0}, {x: 1, y: 0}, {x: 4, y: 0}, {x: 2, y: 1}]
	}
};

collectableStuff = {
	'B': true,
	'I': true,
	'J': true,
	'K': true,
	'L': true,
	'N': true,
	'O': true,
	'Q': true,
	'R': true,
	'/': true,
	'(': true,
	';': true,
	'!': true
};

enemies = {
	'H': true,
	'M': true,
	'P': true,
	'S': true,
	'&': true
};

sites = {
	'A': {
		spriteIndex: 5,
		name: 'city',
		city: true
	},
	'C': {
		spriteIndex: 4,
		name: 'plains',
		simpleSite: true
	},
	'D': {
		spriteIndex: 3,
		name: 'forest',
		simpleSite: true
	},
	'E': {
		spriteIndex: 1,
		name: 'cave',
		simpleSite: true
	},
	'F': {
		spriteIndex: 2,
		name: 'dungeon',
		simpleSite: true
	},
	'5': {
		spriteIndex: 0,
		name: 'castle of King Maximus',
		castle: true,
		kingCastle: true
	},
	'%': {
		spriteIndex: 0,
		name: 'castle',
		enemyCastle: true,
		castle: true
	},
	'`': {
		spriteIndex: 0,
		name: 'castle of Connor The Barbarian',
		castle: true,
		kingCastle: false,
		barbarianCastle: true
	},
	'*': {
		spriteIndex: 1,
		name: 'archmage alcove',
		simpleSite: false,
		alcove: true
	},
	'^': {
		spriteIndex: 1,
		name: 'portal',
		simpleSite: false
	}
}

numberNames = [
	{
		minValue: 500,
		name: 'a multitude of'
	},
	{
		minValue: 100,
		name: 'a horde of'
	},
	{
		minValue: 50,
		name: 'a lot of'
	},
	{
		minValue: 20,
		name: 'many'
	},
	{
		minValue: 10,
		name: 'some'
	},
	{
		minValue: 1,
		name: 'a few'
	}
];

function getQuantityName(quantity) {
	var name = '?';

	for (var i = 0; i < numberNames.length; i++) {
		if (quantity >= numberNames[i].minValue) {
			return getCaption(numberNames[i].name);
		}
	}

	return name;
}

function makeSubst(text) {
	return text.replace("Aurange", "Jovan").replace("Аупельсин", "Йован");
}

function getCaption(text) {
	if (typeof(languages[config.language][text]) != 'undefined') {
		return makeSubst(languages[config.language][text]);
	}
	return makeSubst(text);
}

function init() {
	gameField = null;
	gameWindows = {};
	anyKeyHandler = null;
	activeInputField = null;

	field = new Array(config.FIELD_HEIGHT);

	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		field[i] = new Array(config.FIELD_WIDTH);
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			field[i][j] = {
				groundType: (Math.random() < 0.8) ? 0 : (1 + Math.floor(Math.random() * 3)),
				quantity: 0,
				fieldX: j,
				fieldY: i
			};
		}
	}

	window.sprites = [];

	for (var y = 0; y < config.FIELD_HEIGHT; y++) {
		for (var x = 0; x < config.FIELD_WIDTH; x++) {
			if (typeof(field[y][x]) != undefined) {
				var newSprite = sprite({
					context: canvas.getContext("2d"),
					image: warriorsImage,
					mirrorImage: warriorsMirrorImage,
					groundImage: groundImage,
					numberOfFrames: config.SPRITE_FRAMES,
					ticksPerFrame: config.TICKS_PER_FRAME,
					x: x * config.SPRITE_WIDTH * config.SCALE_FACTOR,
					y: y * config.SPRITE_HEIGHT * config.SCALE_FACTOR,
					width: config.SPRITE_WIDTH,
					height: config.SPRITE_HEIGHT,
					fieldX: x,
					fieldY: y
				});

				window.sprites.push(newSprite);
			}
		}
	}

	spellCastUnit = {
		fieldX: -1,
		fieldY: -1
	};

	flyUnit = {
		fieldX: -1,
		fieldY: -1
	};

	shootUnit = {
		fieldX: -1,
		fieldY: -1
	};

	activePointer = {
		fieldX: -1,
		fieldY: -1
	};

	activeUnit = {
		fieldX: -1,
		fieldY: -1
	};

	hitUnit = {
		fieldX: -1,
		fieldY: -1
	};

	unitToTeleport = null;
	infoUnit = null;
	siteSprite = null;
	armyToShow = null;
}

function getRandomUnit(minLevel, maxLevel, dwelling, excludeTroops) {
	var best = -1;
	var bestArmy = 0;
	for (var i = 0; i < config.UNITS_COUNT; i++) {
		if (units[i].skillLevel <= maxLevel && units[i].skillLevel >= minLevel && (typeof(excludeTroops) == 'undefined' || typeof(excludeTroops[i]) == 'undefined')) {
			if (typeof(dwelling) == 'undefined' || dwelling == null || dwelling == units[i].dwelling) {
				var val = Math.random();
				if (val > best) {
					best = val;
					bestArmy = i;
				}
			}
		}
	}
	return bestArmy;
}

function getRandomArmy(minLevel, maxLevel, averageArmyCost, armiesCount, excludeKingTroops) {
	var result = [];
	var excludeTroops = {};

	if (typeof(excludeKingTroops) != 'undefined' && excludeKingTroops) {
		for (var i = 0; i < config.UNITS_COUNT; i++) {
			if (units[i].dwelling == '5') {
				excludeTroops[i] = true;
			}
		}
	}

	for (var i = 0; i < armiesCount; i++) {
		var unit = getRandomUnit(minLevel, maxLevel, null, excludeTroops);
		var quantity = Math.ceil((averageArmyCost / 5) * (Math.random() + 4.5) / units[unit].cost);
		result.push({
			unit: unit,
			quantity: quantity
		});
		excludeTroops[unit] = true;
	}

	return result;
}

function updateMorale(army, side) {
	for (var i = 0; i < army.length; i++) {
		if (side == 0 && isUnitOutOfControl(army[i])) {
			army[i].morale = 3;
		} else {
			army[i].morale = 1;
			for (var j = 0; j < army.length; j++) {
				var moraleModifier = moraleChart[units[army[j].unit].moraleGroup][units[army[i].unit].moraleGroup];
				army[i].morale = Math.min(army[i].morale, moraleModifier);
			}
		}
	}
}

function setSimpleBattleGround() {
	var freeLines = 5;

	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		var freeLine = true;
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			var groundType = (Math.random() < 0.8) ? 0 : (1 + Math.floor(Math.random() * 3));
			if (groundType > 0 && (j > 0 || j < config.FIELD_WIDTH - 1) && freeLines <= 1) {
				groundType = 0;
			}
			if (groundType > 0) {
				freeLine = false;
			}
			field[i][j] = {
				groundType: groundType,
				quantity: 0,
				fieldX: j,
				fieldY: i
			};
		}
		if (!freeLine) {
			freeLines--;
		}
	}
}

function setCastleBattleGround() {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			field[i][j] = {
				groundType: 0,
				quantity: 0,
				fieldX: j,
				fieldY: i
			};
		}
	}

	for (var i = 0; i < config.FIELD_HEIGHT - 1; i++) {
		field[i][0].groundType = 8;
		field[i][config.FIELD_WIDTH - 1].groundType = 9;
	}

	field[config.FIELD_HEIGHT - 1][0].groundType = 5;
	field[config.FIELD_HEIGHT - 1][config.FIELD_WIDTH - 1].groundType = 6;
	field[config.FIELD_HEIGHT - 1][1].groundType = 7;
	field[config.FIELD_HEIGHT - 1][config.FIELD_WIDTH - 2].groundType = 10;
}

function setArmies(playerArmy, enemyArmy) {
	var armies = [playerArmy, enemyArmy];

	if (gameField.siege) {
		setCastleBattleGround();
	} else {
		setSimpleBattleGround();
	}

	updateMorale(playerArmy, 0);
	updateMorale(enemyArmy, 1);

	for (var i = 0; i < config.FIELD_HEIGHT * 2; i++) {
		for (var side = 0; side < 2; side++) {
			var j = (side == 0) ? 0 : (config.FIELD_WIDTH - 1);
			var unit = i < armies[side].length ? armies[side][i].unit : 0;
			var quantity = i < armies[side].length ? armies[side][i].quantity : 0;
			var morale = i < armies[side].length ? armies[side][i].morale : 0;
			var position = armyPositions[gameField.siege ? 'siege' : 'simple'][side][i];

			if (quantity == 0) {
				if (i < config.FIELD_HEIGHT) {
					field[position.y][position.x] = {
						quantity: 0,
						fieldX: position.x,
						fieldY: position.y,
						groundType: 0
					};
				}
			} else {
				field[position.y][position.x] = {
					morale: morale,
					unit: unit,
					quantity: quantity,
					startTurnQuantity: quantity,
					startQuantity: quantity,
					injury: 0,
					side: side,
					canRetaliate: true,
					fieldX: position.x,
					fieldY: position.y,
					ammo: units[unit].shoots,
					moves: units[unit].moves,
					groundType: 0,
					order: i
				};
			}
		}
	}
}

function getDamageData(sourceUnit, destUnit, isRanged) {
	var result = {
		damage: 0,
		kills: 0,
		injury: 0,
		demonKills: 0,
		retaliate: false,
		failed: false,
		isRanged: isRanged
	};

	if (units[sourceUnit.unit].half && Math.random() >= 0.9) {
		result.demonKills = Math.ceil(destUnit.quantity / 2);
	}

	var minAttack = units[sourceUnit.unit].attackMin;
	var maxAttack = units[sourceUnit.unit].attackMax;

	if (isRanged) {
		if (!units[sourceUnit.unit].magic || !units[destUnit.unit].magicImmunity) {
			if (units[sourceUnit.unit].shootMin) {
				minAttack = units[sourceUnit.unit].shootMin;
			}
			if (units[sourceUnit.unit].shootMax) {
				maxAttack = units[sourceUnit.unit].shootMax;
			}
		} else {
			result.failed = true;
		}
	} else {
		result.retaliate = destUnit.canRetaliate;
	}

	var damage = Math.round(Math.random() * (maxAttack - minAttack)) + minAttack;
	damage *= sourceUnit.startTurnQuantity;

	var skillDiff = units[sourceUnit.unit].skillLevel + 5 - units[destUnit.unit].skillLevel;
	damage = Math.floor((damage * skillDiff) / 10);

	damage = Math.floor(damage * moraleDamageModifier[sourceUnit.morale]);

	if (sourceUnit.side == 0) {
		if (hasArtefact('Sword of Prowess')) {
			damage = Math.floor(damage * 1.5);
		}

		if (hasArtefact('Training Sword')) {
			damage = Math.floor(damage * 1.1);
		}

		if (hasArtefact('Bow of Marksmanship') && isRanged) {
			damage = Math.floor(damage * 1.25);
		}
	}

	if (destUnit.side == 0) {
		if (hasArtefact('Ring of Heroism')) {
			if (Math.random() > 0.9) {
				damage *= 4 / 3;
			}
		}

		if (hasArtefact('Shield of Protection')) {
			damage = Math.floor(damage / 4);
			damage *= 3;
		}

		if (hasArtefact('Shield of Assurance')) {
			damage = Math.ceil(damage * 0.9);
		}
	} else {
		if (Math.random() > 0.9) {
			damage *= 3 / 4;
		}
	}

	result.damage = damage;

	damage += destUnit.injury;
	damage += units[destUnit.unit].hitPoints * result.demonKills;

	result.kills = Math.floor(damage / units[destUnit.unit].hitPoints);
	result.injury = (damage - result.kills * units[destUnit.unit].hitPoints);

	if (result.kills > destUnit.quantity) {
		result.kills = destUnit.quantity;
	}
	
	return result;
}

function getMagicDamageData(destUnit, damage) {
	var result = {
		damage: 0,
		kills: 0,
		injury: 0,
		demonKills: 0,
		retaliate: false,
		failed: false,
		isRanged: true
	};

	result.damage = damage;

	damage += destUnit.injury;

	result.kills = Math.floor(damage / units[destUnit.unit].hitPoints);
	result.injury = (damage - result.kills * units[destUnit.unit].hitPoints);

	if (result.kills > destUnit.quantity) {
		result.kills = destUnit.quantity;
	}

	return result;
}

function newMove(sideToMove) {
	gameField.sideToMove = sideToMove;
	gameField.playersInfo[sideToMove].spellCasted = false;

	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (!(typeof(field[i][j].unit) == 'undefined')) {
				field[i][j].startTurnQuantity = field[i][j].quantity;
				field[i][j].canRetaliate = true;
				field[i][j].wait = false;

				if (field[i][j].side % 2 == sideToMove) {
					field[i][j].alreadyMoved = false;
					field[i][j].moves = units[field[i][j].unit].moves;
				} else {
					field[i][j].alreadyMoved = true;
					field[i][j].frozen = false;
				}
				if (units[field[i][j].unit].regenerate) {
					field[i][j].injury = 0;
				}
			}
		}
	}
}

function inflictDamage(damageData, destUnit) {
	destUnit.quantity -= damageData.kills;
	destUnit.injury = damageData.injury;
	if (destUnit.side == 1) {
		gameField.followersKilled += damageData.kills;
	}
}

function magicHit(spellName, destUnit, damage, callback) {
	hitUnit = {
		fieldX: destUnit.fieldX,
		fieldY: destUnit.fieldY
	};

	var damageData = getMagicDamageData(destUnit, damage);

	var statusText = capitalizeFirstLetter(getCaption(spellName)) + " " + getCaption('hits (M)') + " " +
						getUnitNamePassive(destUnit) + ". " +
						damageData.kills + " " + getCaption('killed') + ". ";

	showStatus(statusText);

	setTimeout(function () {
		hitUnit = {
			fieldX: -1,
			fieldY: -1
		};

		inflictDamage(damageData, destUnit);
		destUnit.startTurnQuantity = destUnit.quantity;
		if (callback != null) setTimeout(callback, 1);
	}, config.ATTACK_DURATION);
}

function hit(sourceUnit, destUnit, isRanged, callback, retaliate) {
	activeUnit = {
		fieldX: -1,
		fieldY: -1
	};

	if (!retaliate) {
		if (isRanged) {
			sounds.arrow.play();
		} else {
			sounds.hit.play();
		}
	}

	var damageData = getDamageData(sourceUnit, destUnit, isRanged);
	var statusText = getCaption(getUnitName(sourceUnit)) + " " +
						getCaption(isRanged ? (sourceUnit.quantity > 1 ? 'shoots (P)' : 'shoots') : (sourceUnit.quantity > 1 ? 'hits (P)' : 'hits')) + " " +
						getUnitNamePassive(destUnit) + ". " + (damageData.demonKills ? (capitalizeFirstLetter(getCaption('half')) + "! ") : "") +
						damageData.kills + " " + getCaption('killed') + ". ";

	showStatus(statusText);

	if (isRanged) {
		sourceUnit.ammo--;
		destUnit.startTurnQuantity = destUnit.quantity;
	}

	hitUnit = {
		fieldX: destUnit.fieldX,
		fieldY: destUnit.fieldY
	};

	setTimeout(function () {
		hitUnit = {
			fieldX: -1,
			fieldY: -1
		};

		inflictDamage(damageData, destUnit);

		if (sourceUnit.quantity > 0) {
			if (units[sourceUnit.unit].vampiric) {
				var drained = -damageData.kills * units[destUnit.unit].hitPoints - sourceUnit.injury;
				var resurrected = Math.floor(drained / units[sourceUnit.unit].hitPoints);
				sourceUnit.quantity -= resurrected;
				sourceUnit.injury = -(drained - resurrected * units[sourceUnit.unit].hitPoints);
				if (sourceUnit.quantity > sourceUnit.startQuantity) {
					sourceUnit.quantity = sourceUnit.startQuantity;
					sourceUnit.injury = 0;
				}
				if (sourceUnit.injury < 0) {
					sourceUnit.injury = 0;
				}
			}

			if (units[sourceUnit.unit].ghostic) {
				sourceUnit.quantity += damageData.kills;
			}
		}

		if (damageData.retaliate && !retaliate) {
			activeUnit = destUnit;
			destUnit.canRetaliate = false;
			hit(destUnit, sourceUnit, false, null, true);
			sounds.hit.currentTime = 0;
			sounds.hit.play();
			if (callback != null) setTimeout(callback, 1);
		} else {
			if (callback != null) setTimeout(callback, 1);
		}
	}, config.ATTACK_DURATION);
}

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
 
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());

function getTarget(potentialTargets, sourceUnit, dx, dy) {
	var x = sourceUnit.fieldX + dx;
	var y = sourceUnit.fieldY + dy;

	if (x >=0 && y >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT && field[y][x].groundType == 0 && field[y][x].quantity > 0 && field[y][x].side != sourceUnit.side) {
		potentialTargets.push(field[y][x]);
	}

	return potentialTargets;
}

function getEmptyField(potentialTargets, sourceUnit, dx, dy) {
	var x = sourceUnit.fieldX + dx;
	var y = sourceUnit.fieldY + dy;

	if (x >=0 && y >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT && field[y][x].groundType == 0 && (field[y][x].quantity <= 0)) {
		potentialTargets.push(field[y][x]);
	}

	return potentialTargets;
}

function hasAnyTargets(sourceUnit) {
	var potentialTargets = [];

	potentialTargets = getTarget(potentialTargets, sourceUnit, -1, 0);
	if (potentialTargets.length > 0) return true;
	potentialTargets = getTarget(potentialTargets, sourceUnit, 1, 0);
	if (potentialTargets.length > 0) return true;
	potentialTargets = getTarget(potentialTargets, sourceUnit, 0, 1);
	if (potentialTargets.length > 0) return true;
	potentialTargets = getTarget(potentialTargets, sourceUnit, 0, -1);
	if (potentialTargets.length > 0) return true;

	potentialTargets = getTarget(potentialTargets, sourceUnit, -1, -1);
	if (potentialTargets.length > 0) return true;
	potentialTargets = getTarget(potentialTargets, sourceUnit, -1, 1);
	if (potentialTargets.length > 0) return true;
	potentialTargets = getTarget(potentialTargets, sourceUnit, 1, -1);
	if (potentialTargets.length > 0) return true;
	potentialTargets = getTarget(potentialTargets, sourceUnit, 1, 1);
	if (potentialTargets.length > 0) return true;

	if (sourceUnit.ammo > 0) {
		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				potentialTargets = getTarget(potentialTargets, sourceUnit, j - sourceUnit.fieldX, i - sourceUnit.fieldY);
				if (potentialTargets.length > 0) return true;
			}
		}
	}

	return false;
}

function getMatrixValue(matrix, x, y) {
	if (x >=0 && y >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT) {
		return matrix[y][x];
	}
	return 1000000;
}

function getMinAdjacentMatrixValue(matrix, x, y) {
	var result = 1000000;
	result = Math.min(result, getMatrixValue(matrix, x - 1, y - 1));
	result = Math.min(result, getMatrixValue(matrix, x - 1, y));
	result = Math.min(result, getMatrixValue(matrix, x - 1, y + 1));
	result = Math.min(result, getMatrixValue(matrix, x, y - 1));
	result = Math.min(result, getMatrixValue(matrix, x, y + 1));
	result = Math.min(result, getMatrixValue(matrix, x + 1, y - 1));
	result = Math.min(result, getMatrixValue(matrix, x + 1, y));
	result = Math.min(result, getMatrixValue(matrix, x + 1, y + 1));
	return result;
}

function chooseTarget(sourceUnit) {
	var potentialTargets = [];

	potentialTargets = getTarget(potentialTargets, sourceUnit, -1, 0);
	potentialTargets = getTarget(potentialTargets, sourceUnit, 1, 0);
	potentialTargets = getTarget(potentialTargets, sourceUnit, 0, 1);
	potentialTargets = getTarget(potentialTargets, sourceUnit, 0, -1);

	potentialTargets = getTarget(potentialTargets, sourceUnit, -1, -1);
	potentialTargets = getTarget(potentialTargets, sourceUnit, -1, 1);
	potentialTargets = getTarget(potentialTargets, sourceUnit, 1, -1);
	potentialTargets = getTarget(potentialTargets, sourceUnit, 1, 1);

	if (potentialTargets.length == 0 && sourceUnit.ammo > 0 && !sourceUnit.frozen) {
		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				potentialTargets = getTarget(potentialTargets, sourceUnit, j - sourceUnit.fieldX, i - sourceUnit.fieldY);
			}
		}
	}

	if (potentialTargets.length == 0) {
		return null;
	}

	var bestScore = 32768;
	var bestIndex = 0;

	for (var i = 0; i < potentialTargets.length; i++) {
		var score = units[potentialTargets[i].unit].hitPoints + Math.random();

		if (units[sourceUnit.unit].ghostic && units[sourceUnit.unit].hitPoints > units[potentialTargets[i].unit].hitPoints) {
			score -= 8192;
		}

		if (!potentialTargets[i].canRetaliate && Math.max(Math.abs(sourceUnit.fieldX - potentialTargets[i].fieldX), Math.abs(sourceUnit.fieldY - potentialTargets[i].fieldY)) < 2) {
			score -= 4096;
		}

		if (units[potentialTargets[i].unit].ghostic || units[potentialTargets[i].unit].vampiric || units[potentialTargets[i].unit].half) {
			score -= 2048;

			if ((units[potentialTargets[i].unit].ghostic || units[potentialTargets[i].unit].vampiric) && potentialTargets[i].canRetaliate && units[potentialTargets[i].unit].hitPoints > units[sourceUnit.unit].hitPoints) {
				score += 8192;
			}
		}

		if (potentialTargets[i].ammo > 0) {
			score -= 1024;
		}

		if (score < bestScore) {
			bestScore = score;
			bestIndex = i;
		}
	}
	
	return potentialTargets[bestIndex];
}

function getUnitsCount(x, y, side) {
	if (x >= 0 && y >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT && field[y][x].quantity > 0 && field[y][x].groundType == 0 && field[y][x].side == side) {
		return true;
	} else {
		return false;
	}
}

function getUnitsCountNotSide(x, y, side) {
	if (x >= 0 && y >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT && field[y][x].quantity > 0 && field[y][x].groundType == 0 && field[y][x].side != side) {
		return true;
	} else {
		return false;
	}
}

function countCloseUnits(x, y, side) {
	var result = 0;
	if (getUnitsCountNotSide(x - 1, y - 1, side)) result++;
	if (getUnitsCountNotSide(x - 1, y, side)) result++;
	if (getUnitsCountNotSide(x - 1, y + 1, side)) result++;
	if (getUnitsCountNotSide(x, y - 1, side)) result++;
	if (getUnitsCountNotSide(x, y + 1, side)) result++;
	if (getUnitsCountNotSide(x + 1, y - 1, side)) result++;
	if (getUnitsCountNotSide(x + 1, y, side)) result++;
	if (getUnitsCountNotSide(x + 1, y + 1, side)) result++;
	return result;
}

function getTargetScore(side, x, y, sourceUnit) {
	var result = 0;

	if (y >= 0 && x >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT) {
		if (field[y][x].quantity > 0 && field[y][x].side != side) {
			result++;
			
			var closeSourceUnit = (Math.max(Math.abs(x - sourceUnit.fieldX), Math.abs(y - sourceUnit.fieldY)) < 2) ? 1 : 0;

			if (field[y][x].ammo > 0 && countCloseUnits(x, y, side) - closeSourceUnit == 0) {
				result += 16;
			}

			if (units[field[y][x].unit].ghostic && units[sourceUnit.unit].hitPoints < units[field[y][x].unit].hitPoints) {
				result -= 1024;
			}
		}
	}

	return result;
}

function getDefendScore(x, y) {
	var result = 1;

	if (y >= 0 && x >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT) {
		if (field[y][x].quantity <= 0 && field[y][x].groundType == 0) {
			result--;
		}
	}

	return result;
}

function chooseTargetEmptyField(sourceUnit) {
	var potentialTargets = [];

	if (units[sourceUnit.unit].fly && !sourceUnit.alreadyMoved) {
		var bestScore = -1;
		var bestField = null;

		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				if ((field[i][j].quantity <= 0 && field[i][j].groundType == 0) || (i == sourceUnit.fieldY && j == sourceUnit.fieldX)) {
					var targetsScore = 0;

					if (sourceUnit.ammo > 0) {
						var minDist = 1000000;

						for (var i1 = 0; i1 < config.FIELD_HEIGHT; i1++) {
							for (var j1 = 0; j1 < config.FIELD_WIDTH; j1++) {
								if (field[i1][j1].quantity > 0 && field[i1][j1].side != sourceUnit.side) {
									var dist = Math.max(Math.abs(i1 - i), Math.abs(j1 - j));
									if (dist < minDist) {
										minDist = dist;
									}
								}
							}
						}

						targetsScore += getDefendScore(j - 1, i - 1);
						targetsScore += getDefendScore(j - 1, i);
						targetsScore += getDefendScore(j - 1, i + 1);
						targetsScore += getDefendScore(j, i - 1);
						targetsScore += getDefendScore(j, i + 1);
						targetsScore += getDefendScore(j + 1, i - 1);
						targetsScore += getDefendScore(j + 1, i);
						targetsScore += getDefendScore(j + 1, i + 1);

						targetsScore += 1000 + minDist - ((minDist < 2) ? 100 : 0) + ((targetsScore == 8) ? 10 : 0);

					} else {
						targetsScore += getTargetScore(gameField.sideToMove, j - 1, i, sourceUnit);
						targetsScore += getTargetScore(gameField.sideToMove, j + 1, i, sourceUnit);
						targetsScore += getTargetScore(gameField.sideToMove, j, i - 1, sourceUnit);
						targetsScore += getTargetScore(gameField.sideToMove, j, i + 1, sourceUnit);

						targetsScore += getTargetScore(gameField.sideToMove, j - 1, i - 1, sourceUnit);
						targetsScore += getTargetScore(gameField.sideToMove, j - 1, i + 1, sourceUnit);
						targetsScore += getTargetScore(gameField.sideToMove, j + 1, i - 1, sourceUnit);
						targetsScore += getTargetScore(gameField.sideToMove, j + 1, i + 1, sourceUnit);
					}

					if (targetsScore > bestScore) {
						bestScore = targetsScore;
						bestField = field[i][j];
					}
				}
			}
		}

		return bestField;
	} else {
		potentialTargets.push(field[sourceUnit.fieldY][sourceUnit.fieldX]);

		potentialTargets = getEmptyField(potentialTargets, sourceUnit, -1, 0);
		potentialTargets = getEmptyField(potentialTargets, sourceUnit, 1, 0);
		potentialTargets = getEmptyField(potentialTargets, sourceUnit, 0, 1);
		potentialTargets = getEmptyField(potentialTargets, sourceUnit, 0, -1);

		potentialTargets = getEmptyField(potentialTargets, sourceUnit, -1, -1);
		potentialTargets = getEmptyField(potentialTargets, sourceUnit, -1, 1);
		potentialTargets = getEmptyField(potentialTargets, sourceUnit, 1, -1);
		potentialTargets = getEmptyField(potentialTargets, sourceUnit, 1, 1);

		if (potentialTargets.length == 0) {
			return null;
		}

		var bestEnemy = {
			fieldX: 0,
			fieldY: 0,
			distanceMatrix: getDistanceMatrix(field[0][0])
		};

		var bestDistance = 32768;

		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				var dist = bestDistance;
				if (sourceUnit.ammo > 0) {
					if (!(field[i][j].quantity > 0) && field[i][j].groundType == 0 && countCloseUnits(j, i, sourceUnit.side) == 0) {
						field[i][j].distanceMatrix = getDistanceMatrix(field[i][j]);
						dist = getMinAdjacentMatrixValue(field[i][j].distanceMatrix, sourceUnit.fieldX, sourceUnit.fieldY);
					}
				} else {
					if (field[i][j].quantity > 0 && field[i][j].groundType == 0 && field[i][j].side != sourceUnit.side) {
						dist = Math.max(Math.abs(i - sourceUnit.fieldY) + Math.abs(j - sourceUnit.fieldX)) + Math.random();

						if (field[i][j].ammo || ((units[sourceUnit.unit].ghostic || units[sourceUnit.unit].vampiric) && (units[sourceUnit.unit].hitPoints > units[field[i][j].unit].hitPoints))) {
							dist -= 512;
						}

						field[i][j].distanceMatrix = getDistanceMatrix(field[i][j]);
						var matrixDistance = getMinAdjacentMatrixValue(field[i][j].distanceMatrix, sourceUnit.fieldX, sourceUnit.fieldY);
						if (matrixDistance >= 1024) {
							dist += 4096;
						} else {
							var matrixDistanceNormalized = matrixDistance / units[sourceUnit.unit].moves;
							dist += Math.min(2048, matrixDistanceNormalized * 256);
						}
					}
				}

				if (dist < bestDistance) {
					bestDistance = dist;
					bestEnemy = field[i][j];
				}
			}
		}

		bestDistance = 32768;

		var distanceMatrix = bestEnemy.distanceMatrix;

		for (var i = 0; i < potentialTargets.length; i++) {
			var distance = Math.abs(potentialTargets[i].fieldX - bestEnemy.fieldX) + Math.abs(potentialTargets[i].fieldY - bestEnemy.fieldY) + Math.random();
			distance += distanceMatrix[potentialTargets[i].fieldY][potentialTargets[i].fieldX] * 10;

			// TODO
			if (sourceUnit.ammo > 0 && countCloseUnits(potentialTargets[i].fieldX, potentialTargets[i].fieldY, sourceUnit.side) == 0) {
				distance -= 16384;
			}

			if (distance < bestDistance) {
				bestDistance = distance;
				bestField = potentialTargets[i];
			}
		}
	}

	return bestField;
}

function hasElement(matrix, x, y, value) {
	if (x < 0 || y < 0 || x >= config.FIELD_WIDTH || y >= config.FIELD_HEIGHT || matrix[y][x] != value) {
		return false;
	}

	return true;
}

function getDistanceMatrix(destField) {
	var result = new Array(config.FIELD_HEIGHT)
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		result[i] = new Array(config.FIELD_WIDTH)
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			result[i][j] = 1024;
		}
	}

	result[destField.fieldY][destField.fieldX] = 0;

	var doIt = true;
	var step = 0;

	while (doIt) {
		doIt = false;

		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				if (field[i][j].quantity <= 0 && field[i][j].groundType == 0 && result[i][j] == 1024) {
					if (hasElement(result, j - 1, i - 1, step) ||
						hasElement(result, j - 1, i, step) ||
						hasElement(result, j - 1, i + 1, step) ||
						hasElement(result, j, i - 1, step) ||
						hasElement(result, j, i + 1, step) ||
						hasElement(result, j + 1, i - 1, step) ||
						hasElement(result, j + 1, i, step) ||
						hasElement(result, j + 1, i + 1, step)
					) {
						result[i][j] = step + 1;
						doIt = true;
					}
				}
			}
		}

		step++;
	}

	return result;
}

function getUnitToMove(sideToMove) {
	var max = 100000;
	var best = null;

	for (var wait = 0; wait < 2; wait++) {
		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				if (field[i][j].quantity > 0 && field[i][j].groundType == 0 && field[i][j].side % 2 == sideToMove && !field[i][j].alreadyMoved) {
					if (!field[i][j].wait || wait == 1) {
						var val = field[i][j].order;
						if (val < max) {
							best = field[i][j];
							max = val;
						}
					}
				}
			}
		}

		if (best != null) {
			break;
		}
	}

	if (sideToMove == 1 && best == null) {
		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				if (field[i][j].quantity > 0 && field[i][j].groundType == 0) {
					if (field[i][j].side == 1) {
						return null;
					}
				}
			}
		}

		var turn = false;

		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				if (field[i][j].quantity > 0 && field[i][j].groundType == 0) {
					if (field[i][j].side == 2) {
						field[i][j].side = 1;
						field[i][j].alreadyMoved = false;
						field[i][j].startTurnQuantity = field[i][j].quantity;
						field[i][j].canRetaliate = true;
						field[i][j].wait = false;
						field[i][j].moves = units[field[i][j].unit].moves;
						if (units[field[i][j].unit].regenerate) {
							field[i][j].injury = 0;
						}

						turn = true;
					}
				}
			}
		}

		if (turn) {
			return getUnitToMove(sideToMove);
		}
	}

	return best;
}

function moveUnit(sourceUnit, dx, dy, byMagic) {
	if (dx == 0 && dy == 0) {
		showStatus(getUnitName(sourceUnit) + " " + getCaption('waiting') + ".");
		return;
	}

	if (sourceUnit.frozen && !byMagic) {
		showStatus(getUnitName(sourceUnit) + " " + $.trim(getCaption((sourceUnit.quantity == 1) ? "is" : "are") + " " + getCaption('frozen')) + ".");
		return;
	}

	var x = sourceUnit.fieldX + dx;
	var y = sourceUnit.fieldY + dy;
	field[y][x] = field[sourceUnit.fieldY][sourceUnit.fieldX];
	field[sourceUnit.fieldY][sourceUnit.fieldX] = {
		quantity: 0,
		unit: 0,
		side: 0,
		fieldX: sourceUnit.fieldX,
		fieldY: sourceUnit.fieldY,
		groundType: 0
	};
	field[y][x].fieldX = x;
	field[y][x].fieldY = y;
}

function isGameFinished() {
	var remainingUnits = {
		0: 0,
		1: 0,
		2: 0
	};

	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (field[i][j].quantity > 0 && field[i][j].groundType == 0) {
				remainingUnits[field[i][j].side] = 1;
				if ((remainingUnits[0] + remainingUnits[1] + remainingUnits[2]) > 1) {
					return false;
				}
			}
		}
	}

	return (remainingUnits[0] + remainingUnits[1] + remainingUnits[2]) < 2;
}

function getUnitName(sourceUnit) {
	return getCaption(((sourceUnit.quantity != 1) ? units[sourceUnit.unit].namePlural : units[sourceUnit.unit].name));
}

function getUnitNamePassive(sourceUnit) {
	return getCaption(((sourceUnit.quantity != 1) ? units[sourceUnit.unit].namePassivePlural : units[sourceUnit.unit].namePassive));
}

function showUnitStatus(sourceUnit) {
	if (sourceUnit.side == 2) {
		showStatus(getUnitName(sourceUnit) + " " + getCaption('are out of control') + "!");
	} else {
		var addStatus = "";

		if (gameField.playersInfo[sourceUnit.side].isHuman && sourceUnit.side != 2) {
			addStatus += " ";
			if (sourceUnit.ammo) {
				addStatus += "S — " + getCaption('shoot') + " (" + getCaption('ammo') + ": " + sourceUnit.ammo + ")."
			}
			if (units[sourceUnit.unit].fly && !units.alreadyMoved) {
				addStatus += " F — " + getCaption('fly') + ".";
			}
		}

		showStatus(getUnitName(sourceUnit) + " " + (sourceUnit.quantity > 1 ? getCaption("move (P)") : getCaption("move")) + " (" + sourceUnit.moves + ")." + addStatus);
	}
}

function isUnitOutOfControl(unit) {
	return (getLeadership() / units[unit.unit].hitPoints < unit.quantity);
}

function meleeUnit(sourceUnit) {
	if (isGameFinished()) {
		endBattle();
		return;
	}

	if (sourceUnit.side == 2) { // out of control
		if (!isUnitOutOfControl(sourceUnit)) {
			sourceUnit.side = 0;
		}
	} else {
		if (gameField.playersInfo[sourceUnit.side].isHuman) {
			if (isUnitOutOfControl(sourceUnit)) {
				sourceUnit.side = 2;
			}
		}
	}

	showUnitStatus(sourceUnit);

	if (gameField.playersInfo[sourceUnit.side].isHuman && sourceUnit.side != 2) {
		activeUnit = sourceUnit;
		return;
	}

	var done = false;
	
	// fly away
	if ((units[sourceUnit.unit].fly || (sourceUnit.moves > 1 && sourceUnit.ammo > 0)) && (!sourceUnit.alreadyMoved || !units[sourceUnit.unit].fly) && countCloseUnits(sourceUnit.fieldX, sourceUnit.fieldY, sourceUnit.side) > 0) {
		targetUnit = null;
	} else {
		targetUnit = chooseTarget(sourceUnit);
		if (targetUnit == null && sourceUnit.alreadyMoved && units[sourceUnit.unit].fly) {
			done = true;
		}
	}

	if (targetUnit == null) {
		var emptyField = (sourceUnit.alreadyMoved && units[sourceUnit.unit].fly) ? null : chooseTargetEmptyField(sourceUnit);
		sourceUnit.alreadyMoved = true;
		if (emptyField == null) {
			if (done || (!units[sourceUnit.unit].fly && --sourceUnit.moves <= 0)) {
				setTimeout(melee, 1);
			} else {
				setTimeout(function() {
					meleeUnit(sourceUnit);
				}, 1);
			}
		} else {
			activeUnit = sourceUnit;
			var sameField = emptyField.fieldX == sourceUnit.fieldX && emptyField.fieldY == sourceUnit.fieldY;
			
			setTimeout(function() {
				moveUnit(sourceUnit, emptyField.fieldX - sourceUnit.fieldX, emptyField.fieldY - sourceUnit.fieldY);
				if (!units[sourceUnit.unit].fly) {
					sourceUnit.moves--;
				}
				if (sourceUnit.moves <= 0) {
					setTimeout(melee, sameField ? 1 : config.ATTACK_DURATION);
				} else {
					setTimeout(function() {
						meleeUnit(sourceUnit);
					}, sameField ? 1 : config.ATTACK_DURATION);
				}
			}, sameField ? 1 : config.ATTACK_DURATION);
		}
	} else {
		sourceUnit.alreadyMoved = true;
		if (targetUnit == null) {
			setTimeout(melee, 1);
		} else {
			activeUnit = sourceUnit;
			setTimeout(function() {
				hit(sourceUnit, targetUnit, Math.max(Math.abs(targetUnit.fieldX - sourceUnit.fieldX), Math.abs(targetUnit.fieldY - sourceUnit.fieldY)) > 1, melee);
			}, config.ATTACK_DURATION);
		}
	}
}

function melee() {
	setTimeout(function() {
		if (isGameFinished()) {
			endBattle();
			return;
		}
		sourceUnit = getUnitToMove(gameField.sideToMove);
		if (sourceUnit == null) {
			newMove(1 - gameField.sideToMove);
			sourceUnit = getUnitToMove(gameField.sideToMove);
			if (sourceUnit == null) {
				endBattle();
				return;
			}
		}
		meleeUnit(sourceUnit);
	}, config.ATTACK_DURATION);
}

function drawWindow(boxLeft, boxTop, boxWidth, boxHeight, shadow, bgColor) {
	var context = canvas.getContext("2d");

	if (typeof(shadow) == 'undefined') {
		shadow = true;
	}

	if (shadow) {
		context.fillStyle = "#101010";
		context.fillRect(boxLeft + 4, boxTop + 4, boxWidth, boxHeight); 
	}

	if (typeof(bgColor) != 'undefined') {
		context.fillStyle = bgColor;
	} else {
		context.fillStyle = "#0000A6";
	}

	context.fillRect(boxLeft, boxTop, boxWidth, boxHeight); 

	context.strokeStyle = "#FFFF00";
	context.lineWidth = 3;
	context.beginPath();
	context.rect(boxLeft, boxTop, boxWidth, boxHeight); 
	context.stroke();

	context.strokeStyle = "#FFFFFF";
	context.lineWidth = 1;
	context.beginPath();
	context.rect(boxLeft, boxTop, boxWidth, boxHeight); 
	context.stroke();
}

function isWindowActive(name) {
	return (typeof(gameWindows[name]) != 'undefined') && (gameWindows[name].isActive);
}

function addClickHandler(windowName, left, top, width, height, keyCode, handler) {
	for (var i = 0; i < gameWindows[windowName].handlers.length; i++) {
		var oldHandler = gameWindows[windowName].handlers[i];
		if (oldHandler.left == left && oldHandler.top == top && oldHandler.width == width && oldHandler.height == height && oldHandler.keyCode == keyCode) {
			return;
		}
	}

	gameWindows[windowName].handlers.push({
		left: left,
		top: top,
		width: width,
		height: height,
		keyCode: keyCode,
		handler: handler
	});
}

function getSiteSpell() {
	var spell = getMap().citySpells[gameField.siteY + '_' + gameField.siteX];
	if (!isNumeric(spell.cost)) {
		return spellsByName[spell.name];
	}
	return spell;
}

function closeWindow(name) {
	gameWindows[name] = {
		handlers: [],
		isActive: false
	};
	draw();
}

function showWindow(name) {
	gameWindows[name] = {
		handlers: [],
		isActive: true
	};
}

function fillTextMultiple(lines, left, top, interval) {
	if (typeof(interval) == 'undefined') {
		interval = 24;
	}

	for (var i = 0; i < lines.length; i++) {
		context.fillText(lines[i], left, top);
		top += interval;
	}

	return top;
}

function showGoldChestMenu() {
	var lines = [
		capitalizeFirstLetter(getCaption("after scouring the area,")),
		getCaption("you fall upon a hidden"),
		getCaption("treasure cache. You may") + ": ",
	];

	var variations = [
		{
			'key': 'A',
			'text': capitalizeFirstLetter(getCaption('take')) + " " + gameField.treasure.gold + " " + getCaption('gold (P)'),
			'handler': function() {
				gameField.gold += gameField.treasure.gold;
				closeWindow('goldChestMenu');
				showAdventureStatus();
			}
		},
		{
			'key': 'B',
			'text': capitalizeFirstLetter(getCaption('distribute')) + " (+" + gameField.treasure.leadership + " " + getCaption('leadership') + ")",
			'handler': function() {
				gameField.leadership += gameField.treasure.leadership;
				closeWindow('goldChestMenu');
				showAdventureStatus();
			}
		}
	];

	showDialog({
		name: 'goldChestMenu',
		textLines: lines,
		title: capitalizeFirstLetter(getCaption('treasure')),
		variations: variations
	});
}

function showCastSpellMenu() {
	var variations = [];
	for (var i = 0; i < config.SPELLS_COUNT; i++) {
		(function (spellIndex) {
			var spellGlobalIndex = gameField.adventureMode ? adventureSpells[spellIndex].index : spells[spellIndex].index; 
			variations.push({
				key: String.fromCharCode(spellIndex + 'A'.charCodeAt(0)),
				text: capitalizeFirstLetter(getCaption(gameField.adventureMode ? adventureSpells[spellIndex].name : spells[spellIndex].name)),
				rightText: gameField.playersInfo[0].spells[spellGlobalIndex],
				handler: function() {
					if (gameField.playersInfo[0].spells[spellGlobalIndex] > 0) {
						startSpellCasting(spellIndex);
					}
				}
			});
		})(i);
	}

	showDialog({
		name: 'castSpellMenu',
		textLines: [],
		title: capitalizeFirstLetter(getCaption('choose spell')),
		variations: variations,
		closeable: true
	});
}

function tryToTeleport(x, y, continent) {
	var ch = getMapChar(x, y, continent);
	if (ch == '+') {
		var playerArmy = getPlayerArmy();
		getMap().armies[gameField.playerY + '_' + gameField.playerX] = null;
		gameField.map[continent].armies[y + '_' + x] = playerArmy;
		gameField.continentIndex = continent;
		gameField.playerX = x;
		gameField.playerY = y;
		sounds.magic.play();
		return true;
	} else {
		return false;
	}
}

function teleportToGroundNear(x, y, continent) {
	if (tryToTeleport(x - 1, y, continent)) return;
	if (tryToTeleport(x + 1, y, continent)) return;
	if (tryToTeleport(x, y - 1, continent)) return;
	if (tryToTeleport(x, y + 1, continent)) return;
	if (tryToTeleport(x - 1, y - 1, continent)) return;
	if (tryToTeleport(x - 1, y + 1, continent)) return;
	if (tryToTeleport(x + 1, y - 1, continent)) return;
	if (tryToTeleport(x + 1, y + 1, continent)) return;

	openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
		capitalizeFirstLetter(getCaption('destination is blocked')) + '!'
	]);
}

function showCastleGateMenu(continentIndex) {
	var variations = [];
	var i = 0;
	for (var key in gameField.visitedCastles) {
		if (key.charAt(0) == '*' && gameField.visitedCastles[key].continent == continentIndex) {
			(function (index) {
				var castle = gameField.visitedCastles[key];
				if (typeof(castle.name) == 'undefined' || castle.name == null) {
					var ch = getMapChar(castle.x, castle.y, castle.continent);
					switch (ch) {
						case '5':
							castle.name = 'castle of King Maximus';
							break;
						case '`':
							castle.name = 'castle of Connor The Barbarian';
							break;
						default:
							castle.name = 'Misterious castle :)';
							break;
					}
				}
				variations.push({
					key: String.fromCharCode(index + 'A'.charCodeAt(0)),
					text: capitalizeFirstLetter(getCaption(castle.name)),
					handler: function() {
						closeWindow('castleGateMenu');
						teleportToGroundNear(castle.x, castle.y, castle.continent);
					}
				});
			})(i++);
		}
	}

	if (variations.length == 0) {
		showStatus(getCaption('You never been in a castle at') + " " + getCaption(gameField.map[continentIndex].name));
		gameField.playersInfo[0].spells[7]++; // return spell
	} else {
		showDialog({
			name: 'castleGateMenu',
			textLines: [],
			title: capitalizeFirstLetter(getCaption('revisit which castle?')),
			variations: variations,
			closeable: true
		});
	}
}

function showTownGateMenu(continentIndex) {
	var variations = [];
	var i = 0;
	for (var key in gameField.visitedCities) {
		if (key.charAt(0) == '*' && gameField.visitedCities[key].continent == continentIndex) {
			(function (index) {
				var city = gameField.visitedCities[key];
				variations.push({
					key: String.fromCharCode(index + 'A'.charCodeAt(0)),
					text: capitalizeFirstLetter(getCaption(city.name)),
					handler: function() {
						closeWindow('townGateMenu');
						teleportToGroundNear(city.x, city.y, city.continent);
					}
				});
			})(i++);
		}
	}

	if (variations.length == 0) {
		showStatus(getCaption('You never been in a town at') + " " + getCaption(gameField.map[continentIndex].name));
		gameField.playersInfo[0].spells[9]++; // return spell
	} else {
		showDialog({
			name: 'townGateMenu',
			textLines: [],
			title: capitalizeFirstLetter(getCaption('revisit which town?')),
			variations: variations,
			closeable: true
		});
	}
}

function makeTravel(index) {
	var playerArmy = getPlayerArmy();

	getMap().armies[gameField.playerY + '_' + gameField.playerX] = null;
	gameField.map[index].armies[gameField.map[index].entryPoint.y + '_' + gameField.map[index].entryPoint.x] = playerArmy;
	gameField.continentIndex = index;

	gameField.playerX = getMap().entryPoint.x;
	gameField.playerY = getMap().entryPoint.y;
	gameField.boatX = gameField.playerX;
	gameField.boatY = gameField.playerY;
	gameField.boatContinent = index;
	clearFogAtPlayerCoords();
}

function travelToContinent(index) {
	if (gameField.editMode) {
		makeTravel(index);
	} else {
		waitDays(5, function() {
			makeTravel(index);
		});
	}
}

function showChooseContinentMenu(callback) {
	var availableContinents = gameField.map.filter(function(item, idx) {
		return item.available || gameField.editMode;
	});

	if (typeof(callback) == 'undefined') {
		callback = travelToContinent;
	}

	var variations = [];
	for (var i = 0; i < availableContinents.length; i++) {
		(function (index) {
			variations.push({
				key: String.fromCharCode(index + '1'.charCodeAt(0)),
				text: capitalizeFirstLetter(getCaption(gameField.map[index].name)),
				handler: function() {
					closeWindow('chooseContinentMenu');
					callback(index);
				}
			});
		})(i);
	}

	showDialog({
		name: 'chooseContinentMenu',
		textLines: [],
		title: capitalizeFirstLetter(getCaption('choose continent')),
		variations: variations,
		closeable: true
	});
}

function performDismiss(index) {
	var newArmy = [];
	var army = getPlayerArmy();
	for (var i = 0; i < army.length; i++) {
		if (i != index) {
			newArmy.push(army[i]);
		}
	}
	getMap().armies[gameField.playerY + '_' + gameField.playerX] = newArmy;
}

function showDismissArmyDialog() {
	var army = getPlayerArmy();
	var variations = [];

	for (var i = 0; i < army.length; i++) {
		(function(index) {
			variations.push({
				'key': String.fromCharCode(index + 'A'.charCodeAt(0)),
				'text': (army[index].quantity >= 100000 ? "" : (army[index].quantity + " ")) + capitalizeFirstLetter(getUnitName(army[index])),
				'handler': function() {
					closeWindow('dismissMenu');
					if (army.length < 2) {
						showConfirmationDialog(capitalizeFirstLetter(getCaption("dismiss")) + "?", [
							getCaption('If you Dismiss your last army,'),
							getCaption('you will be sent back to the King'),
							getCaption('in disgrace. Dismiss last army?')
						], 'requestDismissConfirmation', function() {
							closeWindow('requestDismissConfirmation');
							performDismiss(index);
							restartAdventure(false);
						}, function() {
							closeWindow('requestDismissConfirmation');
						});

					} else {
						performDismiss(index);
					}
				}
			});
		})(i);
	}

	showDialog({
		name: 'dismissMenu',
		textLines: [],
		title: capitalizeFirstLetter(getCaption('choose army to dismiss')),
		variations: variations,
		closeable: true
	});
}

function getKeyCode(key) {
	if (typeof(keyToKeyCode[key]) != 'undefined') {
		return keyToKeyCode[key];
	}
	return key.charCodeAt(0);
}

function showVariationsMenu(context, variations, left, top, boxWidth, windowName, lineHeight, isHorizontal) {
	if (typeof(lineHeight) == 'undefined') {
		lineHeight = 16;
	}

	context.fillStyle = "#FFFF00";
	for (var i = 0; i < variations.length; i++) {
		var key = variations[i].key;
		variations[i].fullText = getCaption(key) + ') ' + variations[i].text;
		variations[i].size = context.measureText(variations[i].fullText);
		variations[i].keyCode = getKeyCode(key);
		context.fillText(variations[i].fullText, left, top);

		(function (index) {
			addClickHandler(windowName, left, top - 24, variations[index].size.width, 24, variations[index].keyCode, function() {
				variations[index].handler(index);
			});
		})(i);

		if (typeof(variations[i].rightText) != 'undefined') {
			var textSize = context.measureText(variations[i].rightText);
			var textWidth = Math.round(textSize.width);
			context.fillStyle = "#FFFFFF";
			context.fillText(variations[i].rightText, left + boxWidth - 12 - 12 - textWidth, top);
			context.fillStyle = "#FFFF00";
		}

		if (isHorizontal) {
			left += variations[i].size.width + 8;
		} else {
			top += lineHeight;
		}
	}

	return top;
}

function getArmyEstimateLine(unit) {
	return getQuantityName(unit.quantity) + " " + getCaption(units[unit.unit].namePassivePlural);
}

function getArmyEstimateLines(army) {
	var results = [];
	var hasRedTrolls = false;
	for (var i = 0; i < army.length; i++) {
		var text = "— " + getArmyEstimateLine(army[i]);
		if (i == army.length - 1) {
			text += ".";
		} else {
			text += ";";
		}
		if (army[i].unit == 25) {
			hasRedTrolls = true;
		}
		results.push(text);
	}

	if (hasRedTrolls && army.length > 5) {
		return [getCaption('— Suddenly… RED TROLLS! Thousands of them!')]
	}

	return results;
}

function showConfirmationDialog(title, lines, name, handlerYes, handlerNo) {
	showDialog({
		name: name,
		textLines: lines,
		title: title,
		variations: [
			{
				'key': 'Y',
				'text': capitalizeFirstLetter(getCaption('yes')),
				'handler': handlerYes
			},
			{
				'key': 'N',
				'text': capitalizeFirstLetter(getCaption('no')),
				'handler': handlerNo
			}
		]
	});
}

function eraseArmy(side) {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (field[i][j].side == side) {
				field[i][j].quantity = 0;
			}
		}
	}
}

function showGiveUpConfirmation() {
	showConfirmationDialog(capitalizeFirstLetter(getCaption("give up")) + "?", [
		getCaption('Giving up will forfeit your armies'),
		getCaption('and send you back to the King') + "."
	], 'requestGiveUpConfirmation', function() {
		closeWindow('requestGiveUpConfirmation');
		eraseArmy(0);
		endBattle();
	}, function() {
		closeWindow('requestGiveUpConfirmation');
	});
}

function removeFriendlyFoe(key) {
	getMap().armies[key] = null;
	setMapChar(gameField.enemyX, gameField.enemyY, '+');
}

function showFightConfirmation() {
	var key = gameField.enemyY + '_' + gameField.enemyX;
	var enemyArmy = getEnemyArmy();

	if (getMap().friendlyFoes[key]) {
		var estimate = getArmyEstimateLine(enemyArmy[0]);
		var lines = [
			capitalizeFirstLetter(estimate) + " " + getCaption('with desires of'),
			getCaption('greater glory, wish to join you') + ".",
			getCaption('Accept?')
		];

		showConfirmationDialog(capitalizeFirstLetter(getCaption("followers")), lines, 'requestFightConfirmation', function() {
			closeWindow('requestFightConfirmation');
			if (!joinArmy(enemyArmy)) {
				openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
					capitalizeFirstLetter(getUnitName(enemyArmy[0])) + " " + getCaption('flee in terror'),
					getCaption('at the sight your vast army') + '.'
				]);
			}
			removeFriendlyFoe(key);
		}, function() {
			closeWindow('requestFightConfirmation');
			removeFriendlyFoe(key);
		});

	} else {
		var lines = getArmyEstimateLines(enemyArmy).concat([capitalizeFirstLetter(getCaption("attack")) + "?"]);
		
		showConfirmationDialog(capitalizeFirstLetter(getCaption("your scouts have sighted")) + ":", lines, 'requestFightConfirmation', function() {
			closeWindow('requestFightConfirmation');
			gameField.siegeVillainId = null;
			fightWithEnemy(enemyArmy);
		}, function() {
			closeWindow('requestFightConfirmation');
		});
	}
}

function getBoatCost() {
	return hasArtefact('Anchor of Admiralty') ? config.BOAT_COST_WITH_ANCHOR : config.BOAT_COST; 
}

function hasBoat() {
	return gameField.boatX != null;
}

function cancelBoatRental() {
	gameField.boatX = null;
	gameField.boatY = null;
}

function tryRentBoat(x, y, iteration) {
	if (x < 0 || y < 0 || x >= getMap().width || y >= getMap().height || (getMapChar(x, y) != '.' && getMapChar(x, y) != '-' && getMapChar(x, y) != '|')) {
		return false;
	}

	if (iteration == 0 && (Math.abs(x - gameField.playerX) > 1 || Math.abs(y - gameField.playerY) > 1)) {
		return false;
	}

	var lChar = groundCharExt(getMapChar(x - 1, y));
	var rChar = groundCharExt(getMapChar(x + 1, y));
	var uChar = groundCharExt(getMapChar(x, y - 1));
	var dChar = groundCharExt(getMapChar(x, y + 1));

	var ulChar = groundCharExt(getMapChar(x - 1, y - 1));
	var urChar = groundCharExt(getMapChar(x + 1, y - 1));
	var dlChar = groundCharExt(getMapChar(x - 1, y + 1));
	var drChar = groundCharExt(getMapChar(x + 1, y + 1));

	if (lChar != '+' && rChar != '+' && dChar != '+' && uChar != '+' && ulChar != '+' && urChar != '+' && dlChar != '+' && drChar != '+') {
		return false;
	}

	gameField.boatX = x;
	gameField.boatY = y;
	gameField.boatContinent = gameField.continentIndex;

	return true;
}

function rentBoat() {
	for (var i = 0; i < 2; i++) {
		if (tryRentBoat(gameField.siteX - 1, gameField.siteY, i)) return true;
		if (tryRentBoat(gameField.siteX, gameField.siteY - 1, i)) return true;
		if (tryRentBoat(gameField.siteX + 1, gameField.siteY, i)) return true;
		if (tryRentBoat(gameField.siteX, gameField.siteY + 1, i)) return true;
		if (tryRentBoat(gameField.siteX - 1, gameField.siteY - 1, i)) return true;
		if (tryRentBoat(gameField.siteX + 1, gameField.siteY + 1, i)) return true;
		if (tryRentBoat(gameField.siteX + 1, gameField.siteY - 1, i)) return true;
		if (tryRentBoat(gameField.siteX - 1, gameField.siteY + 1, i)) return true;
	}

	return false;
}

function getPlayerArmy() {
	if (gameField.isDragonRider) {
		return gameField.flyingArmy;
	}
	return getMap().armies[gameField.playerY + '_' + gameField.playerX];
}

function getSiteArmy() {
	return getMap().armies[gameField.siteY + '_' + gameField.siteX];
}

function getEnemyArmy() {
	return getMap().armies[gameField.enemyY + '_' + gameField.enemyX];
}

function isCastleVisited(castleName) {
	for (key in gameField.visitedCastles) {
		if (gameField.visitedCastles.hasOwnProperty(key)) {
			if (gameField.visitedCastles[key].name == castleName) {
				return true;
			}
		}
	}
	return false;
}

function showContractInfo(callback) {
	if (gameField.contract == null) {
		openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
			capitalizeFirstLetter(getCaption('you have no contract')) + '!'
		], callback);
		return;
	}

	var villain = villains[gameField.contract];
	var lastSeen = 'Unknown';
	var castle = 'Unknown';

	for (var i = 0; i < gameField.map.length; i++) {
		if (hasContinentMap(i)) {
			// $.inArray(gameField.contract, gameField.villainsCaught) != -1
			for (castleName in gameField.map[i].ownerToCastle) {
				if (gameField.map[i].ownerToCastle.hasOwnProperty(castleName) && gameField.map[i].ownerToCastle[castleName] == villain.name) {
					if (isCastleVisited(castleName)) {
						castle = castleName;
					}
					lastSeen = gameField.map[i].name;
				}
			}
		}
	}

	var lines = [
		getCaption("Alias") + ": " + getCaption(villain.alias),
		getCaption("Reward") + ": " + villain.reward + " " + getCaption("gold (P)"),
		getCaption("Last seen") + ": " + getCaption(lastSeen),
		getCaption("Castle") + ": " + getCaption(castle)
	];

	lines.push(getCaption("Distinguishing features") + ": " + getCaption(villain.features[0]));
	
	for (var i = 1; i < villain.features.length; i++) {
		lines.push("    " + getCaption(villain.features[i]));
	}

	lines.push(getCaption("Crimes") + ": " + getCaption(villain.crimes[0]));

	for (var i = 1; i < villain.crimes.length; i++) {
		lines.push("    " + getCaption(villain.crimes[i]));
	}

	openInfoWindowExtended({
		title: getCaption(villain.name),
		titleInterval: 96,
		lineInterval: 16,
		width: config.SPRITE_WIDTH * 3,
		height: config.SPRITE_HEIGHT * 4,
		textLines: lines,
		onDraw: function(context, boxLeft, boxTop) {
			drawVillainImage(boxLeft + 12, boxTop + 32, gameField.contract);
		},
		closeByAnyKey: true,
		callback: callback
	});
}

function drawRoleImage(x, y, tileIndex) {
	var context = canvas.getContext("2d");
	context.drawImage(
		rolesImage,
		0,
		config.SPRITE_HEIGHT * tileIndex * 3,
		config.SPRITE_WIDTH * 2,
		config.SPRITE_HEIGHT * 3,
		x,
		y,
		config.SCALE_FACTOR * config.SPRITE_WIDTH * 2,
		config.SCALE_FACTOR * config.SPRITE_HEIGHT * 3
	);
}

function drawViewImage(x, y, tileIndex) {
	var context = canvas.getContext("2d");
	context.drawImage(
		viewImage,
		config.SPRITE_WIDTH * tileIndex,
		0,
		config.SPRITE_WIDTH,
		config.SPRITE_HEIGHT,
		x,
		y,
		config.SCALE_FACTOR * config.SPRITE_WIDTH,
		config.SCALE_FACTOR * config.SPRITE_HEIGHT
	);
}

function drawAdventureImage(x, y, tileIndex) {
	var context = canvas.getContext("2d");
	var tileImage;
	var innerTileIndex;
	var innerTileIndex = tileIndex % 36;
	var tilesetIndex = Math.floor(tileIndex / 36);
	var tileImages = [adventureImage1, adventureImage2, adventureImage3];
	var tileImage = tileImages[tilesetIndex];

	context.drawImage(
		tileImage,
		innerTileIndex * config.SPRITE_WIDTH,
		0,
		config.SPRITE_WIDTH,
		config.SPRITE_HEIGHT,
		x,
		y,
		config.SCALE_FACTOR * config.SPRITE_WIDTH,
		config.SCALE_FACTOR * config.SPRITE_HEIGHT
	);
}

function drawVillainImage(x, y, villainId) {
	var context = canvas.getContext("2d");
	context.drawImage(
		villainsImage,
		config.SPRITE_WIDTH * getGlobalFrameIndex(),
		villainId * config.SPRITE_HEIGHT,
		config.SPRITE_WIDTH,
		config.SPRITE_HEIGHT,
		x,
		y,
		config.SCALE_FACTOR * config.SPRITE_WIDTH,
		config.SCALE_FACTOR * config.SPRITE_HEIGHT
	);
}

function getSpellsCount() {
	var result = 0;

	for (var i = 0; i < allSpells.length; i++) {
		result += gameField.playersInfo[0].spells[i];
	}

	return result;
}

function getSiteName() {
	return getMap().siteNames[gameField.siteY + '_' + gameField.siteX];
}

function getCastleOwnerName(castleName) {
	return (typeof(getMap().ownerToCastle[castleName]) == 'undefined') ? 'no one' : getMap().ownerToCastle[castleName]
}

function getCastleOwnerId(castleName) {
	return (typeof(getMap().ownerToCastle[castleName]) == 'undefined' || getMap().ownerToCastle[castleName] == 'no one') ? null : villainsByName[getMap().ownerToCastle[castleName]].id;
}

function eraseSiteSprite() {
	var context = canvas.getContext("2d");
	var spriteIndex = sites[gameField.citeChar].spriteIndex;

	context.drawImage(
		sitesImage,
		siteSprite.x,
		spriteIndex * 204 + siteSprite.y,
		config.SPRITE_WIDTH,
		config.SPRITE_HEIGHT,
		siteSprite.x,
		siteSprite.y,
		config.SPRITE_WIDTH * config.SCALE_FACTOR,
		config.SPRITE_HEIGHT * config.SCALE_FACTOR
	);
}

function getOutputLines(width, lines) {
	if (lines.length == 1) {
		return getLines(60, prepareText(lines)[0]);
	} else {
		return prepareText(lines);
	}
}

function fixCost(cost) {
	if (lepraOn) {
		return Math.floor(cost * 0.9);
	}
	return cost;
}

function showCiteWindow() {
	gameWindows['citeWindow'].handlers = [];

	var context = canvas.getContext("2d");
	var boxLeft = 0;
	var boxTop = 204 * config.SCALE_FACTOR;
	var boxWidth = 480 * config.SCALE_FACTOR;
	var boxHeight = 5 * config.SPRITE_HEIGHT * config.SCALE_FACTOR - 204 * config.SCALE_FACTOR;
	var spriteIndex = sites[gameField.citeChar].spriteIndex;

	context.drawImage(
		sitesImage,
		0,
		spriteIndex * 204,
		480,
		204,
		0,
		0,
		480 * config.SCALE_FACTOR,
		204 * config.SCALE_FACTOR
	);

	drawWindow(boxLeft, boxTop, boxWidth, boxHeight, false);
	context.font = config.INFO_TITLE_TEXT_HEIGHT + "px Tahoma";
	context.fillStyle = "#FFFFFF";

	var l = 20;
	var siteName = capitalizeFirstLetter(getCaption(sites[gameField.citeChar].name));

	if (typeof(getMap().siteNames[gameField.siteY + '_' + gameField.siteX]) != 'undefined' && !sites[gameField.citeChar].kingCastle && !sites[gameField.citeChar].barbarianCastle) {
		siteName += " " + getCaption(getSiteName());
	}

	var castleName = getSiteName();
	var ownerName;
	if (!sites[gameField.citeChar].enemyCastle) {
		if (sites[gameField.citeChar].barbarianCastle) {
			ownerName = 'connor the Barbarian';
		} else {
			ownerName = 'king';
		}
	} else {
		ownerName = getCastleOwnerName(castleName);
	}

	if (ownerName != 'no one' && sites[gameField.citeChar].castle && !sites[gameField.citeChar].kingCastle && !sites[gameField.citeChar].barbarianCastle) {
		siteName += " " + getCaption("is under rule of") + " " + ((ownerName == 'you') ? getPlayerName() : getCaption(ownerName));
	}

	context.fillText(siteName, boxLeft + 12, boxTop + l);
	l += 16;

	context.font = config.UNIT_INFO_TEXT_HEIGHT + "px Tahoma";
	context.fillStyle = "#FFFFFF";

	if (sites[gameField.citeChar].simpleSite || gameField.siteArmyIndex != null) {
		var armyToRecruit = getSiteArmy();
		var playerArmy = getPlayerArmy();

		context.fillText(((armyToRecruit[gameField.siteArmyIndex].quantity < 100000) ? (armyToRecruit[gameField.siteArmyIndex].quantity + " " + getCaption(getUnitNamePassive(armyToRecruit[gameField.siteArmyIndex]))) : capitalizeFirstLetter(getCaption(getUnitName(armyToRecruit[gameField.siteArmyIndex])))) + " " + $.trim(getCaption((armyToRecruit[gameField.siteArmyIndex].quantity == 1) ? "is" : "are") + " " + getCaption('available')) + ".", boxLeft + 12, boxTop + l);
		l += 18;

		context.fillText(capitalizeFirstLetter(getCaption('cost')) + " = " + fixCost(units[armyToRecruit[gameField.siteArmyIndex].unit].cost) + " " + getCaption('each') + ". " + 
			((armyToRecruit[gameField.siteArmyIndex].quantity < 100000) ? (getCaption("GP") + " = " + (fixCost(units[armyToRecruit[gameField.siteArmyIndex].unit].cost) * armyToRecruit[gameField.siteArmyIndex].quantity) + ".") : ""),
			boxLeft + 12, boxTop + l
		);

		l += 18;

		var alreadyHave = 0;

		for (var i = 0; i < playerArmy.length; i++) {
			if (playerArmy[i].unit == armyToRecruit[gameField.siteArmyIndex].unit) {
				alreadyHave += playerArmy[i].quantity;
			}
		}

		var maxRecruit = Math.floor(Math.max(0, Math.min(armyToRecruit[gameField.siteArmyIndex].quantity, Math.min(getLeadership() / units[armyToRecruit[gameField.siteArmyIndex].unit].hitPoints - alreadyHave, gameField.gold / fixCost(units[armyToRecruit[gameField.siteArmyIndex].unit].cost)))));

		context.fillText(capitalizeFirstLetter(getCaption('you may recruit up to')) + " " + maxRecruit + ".", boxLeft + 12, boxTop + l);
		l += 18;

		var text = capitalizeFirstLetter(getCaption('recruit how many') + ": ");
		var textSize = context.measureText(text);
		context.fillText(text, boxLeft + 12, boxTop + l);

		showInputField('recruitInput', boxLeft + 12 + textSize.width, boxTop + l, maxRecruit, function() {
			performRecruit();
			activeInputField = null;

			if (sites[gameField.citeChar].simpleSite) {
				closeCiteWindow();
			} else {
				gameField.siteArmyIndex = null;
				siteSprite = null;
				showCiteWindow();
			}
		});
	} else {
		if (sites[gameField.citeChar].city) {
			var variations = [
				{
					'key': 'A',
					'text': capitalizeFirstLetter(getCaption('get New Contract')),
					'handler': function() {
						if (gameField.contract == null) {
							gameField.contract = -1;
						}

						if (gameField.villainsCaught.length == villains.length) {
							openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
								capitalizeFirstLetter(getCaption('all villains are caught')) + "!"
							], showCiteWindow);
						} else {
							do {
								gameField.contract = (gameField.contract + 1) % villains.length;
							} while ($.inArray(gameField.contract, gameField.villainsCaught) != -1);

							showContractInfo(function() {
								showCiteWindow();
							});
						}
					}
				},
				{
					'key': 'B',
					'text': capitalizeFirstLetter(hasBoat() ? getCaption('cancel boat rental') : getCaption('rent a Boat')),
					'handler': function() {
						var boatCost = getBoatCost();
						if (!hasBoat()) {
							if (gameField.gold >= boatCost) {
								if (rentBoat()) {
									gameField.gold -= boatCost;
								} else {
									showStatus(capitalizeFirstLetter(getCaption('boat rental failed!')));
								}
							} else {
								showStatus(capitalizeFirstLetter(getCaption("you don't have enough gold!")));
							}
						} else {
							if (getMapChar(gameField.playerX, gameField.playerY) == '.') {
								showStatus(capitalizeFirstLetter(getCaption('please vacate the boat first!')));
							} else {
								cancelBoatRental();
							}
						}
						showCiteWindow();
					}
				},
				{
					'key': 'C',
					'text': capitalizeFirstLetter(getCaption('gather information')),
					'handler': function() {
						var cityName = getSiteName();
						var lines;

						if (typeof(rumorToCity[cityName]) != 'undefined') {
							lines = getOutputLines(60, rumorToCity[cityName]);
						} else {
							var linkedCastleName = getMap().castleToCity[cityName];
							var castleCoords = getMap().siteCoordsByName[linkedCastleName];
							var castleArmy = getMap().armies[castleCoords.y + '_' + castleCoords.x];
							var ownerName = getCastleOwnerName(linkedCastleName);
							var armyLines = getArmyEstimateLines(castleArmy);
							lines = [
								capitalizeFirstLetter(capitalizeFirstLetter(getCaption("castle")) + " " + getCaption(linkedCastleName) + " " + getCaption("is under rule of") + " " + ((ownerName == 'you') ? getPlayerName() : getCaption(ownerName)) + "."),
							].concat(armyLines);
						}

						openInfoWindow(capitalizeFirstLetter(getCaption('Rumor says')) + "…", lines, function() {
							showCiteWindow();
						});
					}
				},
				{
					'key': 'D',
					'text': capitalizeFirstLetter(getCaption('buy spell')) + " (" + capitalizeFirstLetter(getCaption(getSiteSpell().name)) + ") (" + fixCost(getSiteSpell().cost) + " " + getCaption("gold (P)") + ")",
					'handler': function() {
						var spellsCount = getSpellsCount();
						var spell = getSiteSpell();

						if (spellsCount >= gameField.spellCapacity) {
							showStatus(getCaption("You have learned your maximum number of spells."));
						} else {
							if (gameField.gold >= fixCost(spell.cost)) {
								gameField.playersInfo[0].spells[spell.index]++;
								gameField.gold -= fixCost(spell.cost);
								var moreSpells = Math.max(0, gameField.spellCapacity - 1 - spellsCount);
								showStatus(getCaption("You can learn") + " " + moreSpells + " " + getCaption("more spell(s)…"));
							} else {
								showStatus(capitalizeFirstLetter(getCaption("you don't have enough gold!")));
							}							
						}
					}
				},
				{
					'key': 'E',
					'text': capitalizeFirstLetter(getCaption('buy siege weapons')) + " (" + config.SIEGE_WEAPONS_COST + ")",
					'handler': function() {
						if (!gameField.hasSiegeWeapons) {
							if (gameField.gold >= config.SIEGE_WEAPONS_COST) {
								gameField.gold -= config.SIEGE_WEAPONS_COST;
								gameField.hasSiegeWeapons = true;
								showAdventureStatus();
							} else {
								showStatus(capitalizeFirstLetter(getCaption("you don't have enough gold!")));
							}
						} else {
							showStatus(capitalizeFirstLetter(getCaption('you already have siege weapons!')));
						}
					}
				}
			];

			showVariationsMenu(context, variations, boxLeft + 12, boxTop + l, boxWidth, 'citeWindow', 16);
		} else {
			if (sites[gameField.citeChar].alcove) {
				switch (gameField.conversationFrame) {
					case 0:
						l = fillTextMultiple([
							capitalizeFirstLetter(getCaption("the venerable Archmage, Aurange, will teach you")),
							getCaption("the secrets of spell casting for 5000 gold.")
						], boxLeft + 12, boxTop + l, 16);
						var variations = [
							{
								'key': 'Y',
								'text': capitalizeFirstLetter(getCaption('yes')),
								'handler': function() {
									if (gameField.hasMagicSkill) {
										gameField.conversationFrame = 2;
										showCiteWindow();
									} else {
										if (gameField.gold < 5000) {
											gameField.conversationFrame = 1;
											showCiteWindow();
										} else {
											gameField.gold -= 5000;
											gameField.hasMagicSkill = true;
											closeCiteWindow();
										}
									}
								}
							},
							{
								'key': 'N',
								'text': capitalizeFirstLetter(getCaption('no')),
								'handler': function() {
									closeCiteWindow();
								}
							}
						];
						showVariationsMenu(context, variations, boxLeft + 15, l + 8, boxWidth, 'citeWindow', 16);
						break;
					case 1:
						l = fillTextMultiple([
							capitalizeFirstLetter(getCaption("The sign said 5000 gold! Why waste my valuable time")),
							getCaption("when you know you don't have the required amount of gold?"),
							getCaption("Begone until you do!")
						], boxLeft + 12, boxTop + l, 16);
						setAnyKeyHandler(function () {
							closeCiteWindow();
						});
						break;
					case 2:
						l = fillTextMultiple([
							capitalizeFirstLetter(getCaption("you're sneering at me,") + " " + getPlayerName() + "!"),
							capitalizeFirstLetter(getCaption("you already have this skill!"))
						], boxLeft + 12, boxTop + l, 16);
						setAnyKeyHandler(function () {
							closeCiteWindow();
						});
						break;
					default:
						break;
				}
			} else {
				switch(ownerName) {
					case 'connor the Barbarian':
						if (gameField.audienceMode) {
							if (typeof(gameField.lastConnorAudience) == 'undefined') {
								gameField.connorAudienceNumber = 0;
								gameField.lastConnorAudience = gameField.daysLeft;
							} else {
								if (gameField.lastConnorAudience - gameField.daysLeft > 60) {
									gameField.connorAudienceNumber++;
									gameField.lastConnorAudience = gameField.daysLeft;
								}
							}
							var lines = getOutputLines(64, connorAudienceTexts[Math.min(gameField.connorAudienceNumber, connorAudienceTexts.length - 1)]);
							fillTextMultiple(lines, boxLeft + 12, boxTop + l, 16);
							setAnyKeyHandler(function () {
								closeCiteWindow();
							});
						} else {
							var variations = [
								{
									'key': 'A',
									'text': capitalizeFirstLetter(getCaption('audience with the King of Barbarians')),
									'handler': function() {
										gameField.audienceMode = true;
										showCiteWindow();
									}
								},
								{
									'key': 'B',
									'text': capitalizeFirstLetter(getCaption('call for support')),
									'handler': function() {
										provideConnorSupport();
									}
								}
							];

							showVariationsMenu(context, variations, boxLeft + 12, boxTop + l, boxWidth, 'citeWindow', 16);
						}
						break;
					case 'king':
						if (gameField.audienceMode) {
							var remainingVillains = getRemainingVillainsCount();
							var lines = [getCaption("king Maximus rises from his throne to greet you and proclaims:")];

							if (remainingVillains == null) {
								lines.push(getCaption("— Hurry and recover my Scepter of Order or all will be lost!"));
								setAnyKeyHandler(function () {
									closeCiteWindow();
								});
							} else {
								if (remainingVillains > 0) {
									lines.push(getCaption("— My Dear!"));
									lines.push(getCaption("I can aid you better after you've captured") + " " + remainingVillains + " " + ((remainingVillains > 1) ? getCaption("more villains.") : getCaption("more villain.")));
									setAnyKeyHandler(function () {
										closeCiteWindow();
									});
								} else {
									lines.push(getCaption("— Congratulations!"));
									lines.push(getCaption("I now promote you to") + " " + capitalizeFirstLetter(getCaption(playerRoles[gameField.playerRole].levelNames[gameField.playerLevel + 1])) + ".");
									setAnyKeyHandler(function () {
										promotePlayer();
										closeCiteWindow();
									});
								}
							}

							l = fillTextMultiple(lines, boxLeft + 12, boxTop + l, 16);
							// getCaption("— My Dear, this feature is not yet implemented!")
						} else {
							if (gameField.recruitMode) {
								var armyToRecruit = getSiteArmy();			
								var variations = [];

								for (var i = 0; i < armyToRecruit.length; i++) {
									(function(index) {
										variations.push({
											'key': String.fromCharCode(index + 'A'.charCodeAt(0)),
											'text': (armyToRecruit[index].quantity >= 100000 ? "" : (armyToRecruit[index].quantity + " ")) + capitalizeFirstLetter(getUnitName(armyToRecruit[index])),
											'rightText': fixCost(units[armyToRecruit[index].unit].cost),
											'handler': function() {
												var minUnitLevel = units[armyToRecruit[index].unit].minRecruitLevel; 
												if (typeof(minUnitLevel) != 'undefined' && minUnitLevel > gameField.playerLevel) {
													openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
														capitalizeFirstLetter(getCaption('you should be promoted to')),
														getCaption(playerRoles[gameField.playerRole].levelNames[minUnitLevel]) + ' ' + getCaption('to recruit') + ' ' + getUnitNamePassive(armyToRecruit[index]) + '!'
													], showCiteWindow);
												} else {
													gameField.siteArmyIndex = index;
													setSiteSprite();
													showCiteWindow();
												}
											}
										});
									})(i);
								}

								showVariationsMenu(context, variations, boxLeft + 12, boxTop + l, boxWidth, 'citeWindow', 16);
							} else {
								var variations = [
									{
										'key': 'A',
										'text': capitalizeFirstLetter(getCaption('recruit soldiers')),
										'handler': function() {
											gameField.recruitMode = true;
											showCiteWindow();
										}
									},
									{
										'key': 'B',
										'text': capitalizeFirstLetter(getCaption('audience with the King')),
										'handler': function() {
											gameField.audienceMode = true;
											showCiteWindow();
										}
									}
								];

								showVariationsMenu(context, variations, boxLeft + 12, boxTop + l, boxWidth, 'citeWindow', 16);
							}
						}
						break;
					case 'you':
						var army = gameField.garrisonMode ? getSiteArmy() : getPlayerArmy();
						var variations = [];

						for (var i = 0; i < army.length; i++) {
							(function(index) {
								var cost = Math.ceil(units[army[index].unit].cost * army[index].quantity / 10);
								variations.push({
									'key': String.fromCharCode(index + 'A'.charCodeAt(0)),
									'text': (army[index].quantity >= 100000 ? "" : (army[index].quantity + " ")) + capitalizeFirstLetter(getUnitName(army[index])),
									'rightText': gameField.garrisonMode ? "" : cost,
									'handler': function() {
										if (gameField.garrisonMode) {
											transferUnit(getSiteArmy(), getPlayerArmy(), index, showCiteWindow, showCiteWindow);
										} else {
											if (army.length > 1) {
												if (gameField.gold < cost) {
													showStatus(capitalizeFirstLetter(getCaption("you don't have enough gold!")));
												} else {
													transferUnit(getPlayerArmy(), getSiteArmy(), index, function() {
														gameField.gold -= cost;
														showAdventureStatus();
														showCiteWindow();
													}, showCiteWindow);
												}
											} else {
												showStatus(getCaption("You cannot garrison your last army!"));
											}
										}
									}
								});
							})(i);
						}
						
						variations.push({
							'key': 'SPACE',
							'text': capitalizeFirstLetter(getCaption("switch to")) + " " + (getCaption(gameField.garrisonMode ? 'army' : 'garrison')),
							'handler': function() {
								gameField.garrisonMode = !gameField.garrisonMode;
								showCiteWindow();
							}
						});

						showVariationsMenu(context, variations, boxLeft + 12, boxTop + l, boxWidth, 'citeWindow', 16);

						break;
					default:
						var lines = getArmyEstimateLines(getSiteArmy());
						lines.push(capitalizeFirstLetter(getCaption("Do you want to lay siege?")));
						l = fillTextMultiple(lines, boxLeft + 12, boxTop + l, 14);

						var variations = [
							{
								'key': 'Y',
								'text': capitalizeFirstLetter(getCaption('yes')),
								'handler': function() {
									closeCiteWindow();
									
									if (!gameField.hasSiegeWeapons) {
										openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
											capitalizeFirstLetter(getCaption('you need siege weapons')),
											getCaption('to attack a castle') + '!'
										]);
									} else {
										gameField.enemyX = gameField.siteX;
										gameField.enemyY = gameField.siteY;
										gameField.fightInitiatedByEnemy = false;
										gameField.siege = true;
										gameField.siegeVillainId = getCastleOwnerId(castleName);
										fightWithEnemy(getSiteArmy());
									}
								}
							},
							{
								'key': 'N',
								'text': capitalizeFirstLetter(getCaption('no')),
								'handler': function() {
									closeCiteWindow();
								}
							}
						];

						showVariationsMenu(context, variations, boxLeft + 15, l + 4, boxWidth, 'citeWindow', 14, true);
						break;
				}
			}
		}
	}
}

function transferUnit(sourceArmy, destArmy, sourceUnitIndex, callbackSuccess, callbackFail) {
	var unit = sourceArmy[sourceUnitIndex];

	addUnitToArmy(destArmy, unit, null, function() {
		removeUnitFromArmy(sourceArmy, sourceUnitIndex);
		if (typeof(callbackSuccess) != 'undefined') {
			callbackSuccess();
		}
	}, function() {
		if (typeof(callbackFail) != 'undefined') {
			callbackFail();
		}
	});
}

function giveConnorPrize(prize) {
	var lines;

	switch (prize) {
		case connorPrizes.leadership:
			lines = [
				getCaption('Connor provides you with his Letter'),
				getCaption('of credence which increases your'),
				getCaption('leadership by 250.')
			];
			gameField.leadership += 250;
			break;
		case connorPrizes.gold:
			lines = [
				getCaption('Connor provides you with 50 000'),
				getCaption('gold pieces.')
			];
			gameField.gold += 50000;
			break;
		case connorPrizes.timeStop:
			lines = [
				getCaption('Connor summons his archmages and'),
				getCaption('orders them to cast powerfull time'),
				getCaption('stop spell.')
			];
			gameField.timeStop = 500;
			break;
		case connorPrizes.archmages:
			lines = [
				getCaption('Connor summons his archmages and'),
				getCaption('orders them to join your army.')
			];
			joinArmy([{
				unit: 0,
				quantity: 25
			}]);
			break;
		case connorPrizes.barbarians:
			lines = [
				getCaption('Connor summons his homagers and'),
				getCaption('orders them to join your army.')
			];
			joinArmy([{
				unit: 2,
				quantity: 25
			}]);
			break;
		default:
			lines = "?";
			break;
	}

	openInfoWindow(capitalizeFirstLetter(getCaption('support')), lines, function() {
		showCiteWindow();
	});
}

function provideConnorSupport() {
	if (typeof(gameField.lastConnorAudience) == 'undefined') {
		openInfoWindow(capitalizeFirstLetter(getCaption('support')), [
			getCaption('Sorry, you need to speak with Connor the'),
			getCaption('Barbarian first.')
		], function() {
			showCiteWindow();
		});
	} else {
		if (typeof(gameField.lastConnorSupport) != 'undefined' && gameField.lastConnorSupport - gameField.daysLeft < 60) {
			openInfoWindow(capitalizeFirstLetter(getCaption('support')), [
				getCaption('— Sorry') + ", " + getPlayerName() + ", " + getCaption("I'm able to"),
				getCaption('provide you with some support once in every 60 days.')
			], function() {
				showCiteWindow();
			});
		} else {
			var bestValue = Math.random();
			var playerArmy = getPlayerArmy();
			var prize = connorPrizes.leadership;
			var value = Math.random();

			gameField.lastConnorSupport = gameField.daysLeft;

			if (value > bestValue) {
				bestValue = value;
				prize = connorPrizes.gold;
			}
			value = Math.random();
			if (value > bestValue) {
				bestValue = value;
				prize = connorPrizes.timeStop;
			}
			if (playerArmy.length < 5) {
				value = Math.random();
				if (value > bestValue) {
					bestValue = value;
					prize = connorPrizes.archmages;
				}

				value = Math.random();
				if (value > bestValue) {
					bestValue = value;
					prize = connorPrizes.barbarians;
				}
			}
			giveConnorPrize(prize);
		}
	}
}

function addUnitToArmy(army, unit, howMany, callbackSuccess, callbackFail) {
	var troopIndex = -1;
	for (var i = 0; i < army.length; i++) {
		if (army[i].unit == unit.unit) {
			troopIndex = i;
			break;
		}
	}

	if (troopIndex == -1) {
		if (army.length >= config.MAX_TROOPS) {
			openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
				capitalizeFirstLetter(getCaption('you already have')),
				getCaption('the maximum number of armies') + '!'
			], callbackFail);
			return;
		}
		army.push({
			quantity: (howMany == null) ? unit.quantity : howMany,
			unit: unit.unit
		});
	} else {
		army[troopIndex].quantity += (howMany == null) ? unit.quantity : howMany;
	}

	if (typeof(callbackSuccess) != 'undefined') {
		callbackSuccess();
	}
}

function removeUnitFromArmy(army, index) {
	army.splice(index, 1);
}

function performRecruit() {
	var howMany = parseInt(activeInputField.text);
	var recruitArmy = getSiteArmy()[gameField.siteArmyIndex];

	if (!isNaN(howMany) && howMany > 0) {
		var playerArmy = getPlayerArmy();
		addUnitToArmy(playerArmy, getSiteArmy()[gameField.siteArmyIndex], howMany, function() {
			if (recruitArmy.quantity < 100000) {
				recruitArmy.quantity -= howMany;
			}

			gameField.gold -= howMany * fixCost(units[getSiteArmy()[gameField.siteArmyIndex].unit].cost);
			showAdventureStatus();
		});
	}
}

function renderInputField() {
	var text = capitalizeFirstLetter((activeInputField.text + "").toLowerCase());
	var context = activeInputField.cursorSprite.context;
	context.font = "bold " + config.INPUT_TEXT_HEIGHT + "px Tahoma";
	var textSize = context.measureText(text);

	context.fillStyle = activeInputField.backgroundColor;
	context.fillRect(activeInputField.x, activeInputField.y, textSize.width + 2 * config.INPUT_TEXT_HEIGHT, config.INPUT_TEXT_HEIGHT + 2);

	context.fillStyle = "#FFFF00";
	context.fillText(text, activeInputField.x, activeInputField.y + 15);
	activeInputField.cursorSprite.x = activeInputField.x + textSize.width;
}

function showInputField(name, left, top, defaultText, callback) {
	if (activeInputField == null) {
		activeInputField = {
			cursorSprite: sprite({
				context: canvas.getContext("2d"),
				image: cursorSimpleImage,
				numberOfFrames: config.SPRITE_FRAMES,
				ticksPerFrame: config.CURSOR_TICKS_PER_FRAME,
				x: left,
				y: top - 15,
				width: 20,
				height: 20,
				site: true,
				unit: 0
			}),
			x: left,
			y: top - 15,
			text: defaultText,
			maxLength: 16,
			isNumeric: true,
			maxValue: defaultText,
			backgroundColor: '#0000A6',
			callback: function() {
				if (typeof(callback) != 'undefined') {
					callback();
				}
			}
		};
		openVirtualKeyboard(virtualKeyboardLayout, -100);
	}
}

function showNameInputField(left) {
	if (activeInputField == null) {
		activeInputField = {
			cursorSprite: sprite({
				context: statusCanvas.getContext("2d"),
				image: cursorSimpleImage,
				numberOfFrames: config.SPRITE_FRAMES,
				ticksPerFrame: config.CURSOR_TICKS_PER_FRAME,
				x: 0,
				y: 0,
				width: 20,
				height: 20,
				site: true,
				unit: 0,
				allowEmpty: false
			}),
			x: left,
			y: 0,
			text: '',
			maxLength: 16,
			isNumeric: false,
			backgroundColor: getRole().statusColor,
			callback: function() {
				closeWindow('nameInputDialog');
				var name = capitalizeFirstLetter(activeInputField.text.toLowerCase());
				activeInputField = null;
				beginNewGame(chosenRole, chosenDifficulty, name);
			}
		};
		openVirtualKeyboard(virtualKeyboardLayoutFull);
	}
}

function getAutoBoxWidth(options) {
	var context = canvas.getContext("2d");
	context.font = config.INFO_TITLE_TEXT_HEIGHT + "px Tahoma";
	var boxWidth = context.measureText(options.title).width + 24;
	context.font = config.INFO_TEXT_HEIGHT + "px Tahoma";
	var paddingLeft = options.paddingLeft;

	if (typeof(paddingLeft) == 'undefined') {
		paddingLeft = 12;
	}

	for (var i = 0; i < options.textLines.length; i++) {
		var addition = (options.textLines[i].indexOf("|") >= 0) ? 12 : 0;
		boxWidth = Math.max(boxWidth, context.measureText(options.textLines[i]).width + paddingLeft + 12 + addition);
	}

	if (typeof(options.variations) != 'undefined') {
		for (var i = 0; i < options.variations.length; i++) {
			var textToMeasure = options.variations[i].key + ") " + options.variations[i].text;
			var addition = (options.variations[i].text.indexOf("|") >= 0) ? 15 : 3;

			if (typeof(options.variations[i].rightText) != 'undefined') {
				addition += 12;
				textToMeasure += options.variations[i].rightText;
			}
			
			boxWidth = Math.max(boxWidth, context.measureText(textToMeasure).width + paddingLeft + 12 + addition);
		}
	}

	return Math.ceil(boxWidth);
}

function getAutoBoxHeight(options) {
	var lineInterval;
	var titleInterval;

	if (typeof(options.lineInterval) != 'undefined') {
		lineInterval = options.lineInterval;
	} else {
		lineInterval = 16;
	}

	if (typeof(options.titleInterval) != 'undefined') {
		titleInterval = options.titleInterval;
	} else {
		titleInterval = 24;
	}

	var paddingTop;

	if (typeof(options.paddingTop) != 'undefined') {
		paddingTop = options.paddingTop;
	} else {
		paddingTop = 24;
	}

	var result = options.textLines.length * lineInterval + titleInterval + paddingTop;

	if (typeof(options.variations) != 'undefined') {
		result += options.variations.length * lineInterval + 6;
	}

	return result;
}

function isSidePaneVisible() {
	return (gameField != null && gameField.adventureMode);
}

function drawBoxCentered(boxWidth, boxHeight, topShift) {
	if (typeof(topShift) == 'undefined') {
		topShift = 0;
	}

	var context = canvas.getContext("2d");
	var visibleFieldWidth = config.SCALE_FACTOR * config.SPRITE_WIDTH * (isSidePaneVisible() ? 5 : 6);
	var boxLeft = Math.round((visibleFieldWidth - boxWidth) / 2);
	var boxTop = Math.floor((config.SCALE_FACTOR * config.SPRITE_HEIGHT * 5 - boxHeight) / 2) + topShift;

	drawWindow(boxLeft, boxTop, boxWidth, boxHeight);

	return {
		left: boxLeft,
		top: boxTop,
		width: boxWidth,
		height: boxHeight
	};
}

function drawTextLines(left, top, width, lineInterval, textLines) {
	var context = canvas.getContext("2d");
	for (var i = 0; i < textLines.length; i++) {
		var text = textLines[i];
		var splitPos = text.indexOf("|");
		if (splitPos >= 0) {
			var rightText = text.substr(splitPos + 1);
			text = text.substr(0, splitPos);
			context.fillText(rightText, left + width - 12 - context.measureText(rightText).width, top);
		}

		context.fillText(text, left + 12, top);
		top += lineInterval;
	}

	return top;
}

function getWindowHeight() {
	return config.SPRITE_HEIGHT * config.FIELD_HEIGHT * config.SCALE_FACTOR;
}

function getWindowWidth() {
	return config.SPRITE_WIDTH * config.FIELD_WIDTH * config.SCALE_FACTOR;
}

function showDialog(options) {
	if (typeof(anyKeyHandler) == 'undefined' || anyKeyHandler == null) {
		showDialogInternal(options);
	} else {
		var oldAnyKeyHandler = anyKeyHandler;
		anyKeyHandler = function() {
			oldAnyKeyHandler();
			showDialog(options);
		}
	}
}

function showDialogInternal(options) {
	dialog = options;
	showWindow(options.name);

	var context = canvas.getContext("2d");
	var boxWidth = options.width;
	var boxHeight = options.height;
	var lineInterval = options.lineInterval;
	var paddingLeft = options.paddingLeft;
	var topShift = options.topShift;

	if (typeof(boxWidth) == 'undefined') {
		boxWidth = getAutoBoxWidth(options);
	}

	if (typeof(boxHeight) == 'undefined') {
		boxHeight = getAutoBoxHeight(options);
	}

	if (typeof(lineInterval) == 'undefined') {
		lineInterval = 16;
	}

	if (typeof(paddingLeft) == 'undefined') {
		paddingLeft = 12;
	}

	if (typeof(topShift) == 'undefined') {
		topShift = 0;
	}

	var box = drawBoxCentered(boxWidth, boxHeight, topShift);
	dialog.box = box;

	context.font = config.INFO_TITLE_TEXT_HEIGHT + "px Tahoma";
	context.fillStyle = "#FFFFFF";

	var titleInterval;

	if (typeof(options.titleInterval) != 'undefined') {
		titleInterval = options.titleInterval;
	} else {
		titleInterval = 24;
	}

	var paddingTop;

	if (typeof(options.paddingTop) != 'undefined') {
		paddingTop = options.paddingTop;
	} else {
		paddingTop = 24;
	}

	var l = box.top + paddingTop;
	context.fillText(options.title, box.left + paddingLeft, l);
	l += titleInterval;

	context.font = config.INFO_TEXT_HEIGHT + "px Tahoma";
	context.fillStyle = "#FFFFFF";

	l = drawTextLines(box.left + paddingLeft - 12, l, box.width, lineInterval, options.textLines);

	if (typeof(options.onDraw) != 'undefined') {
		options.onDraw(context, box.left, box.top);
	}

	if (typeof(options.variations) != 'undefined') {
		showVariationsMenu(context, options.variations, box.left + paddingLeft + 3, l + 6, box.width, options.name, lineInterval);
	}

	if (options.closeable) {
		var closeFunction = function() {
			closeWindow(options.name);
			draw();
		};

		addClickHandler(options.name, 0, 0, box.left, getWindowHeight(), 27, closeFunction);
		addClickHandler(options.name, box.left + box.width, 0, getWindowWidth() - box.width - box.left, getWindowHeight(), 27, closeFunction);
		addClickHandler(options.name, box.left, 0, getWindowWidth() - box.width - box.left, box.top, 27, closeFunction);
		addClickHandler(options.name, box.left, box.top + box.height, getWindowWidth() - box.width - box.left, getWindowHeight() - box.top - box.height, 27, closeFunction);
	}
}

function getPlayerArmyFromBattleField() {
	var army = [];

	for (var n = 0; n < 5; n++) {
		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				if (field[i][j].quantity > 0 && field[i][j].side == 0 && field[i][j].order == n) {
					army.push({
						unit: field[i][j].unit,
						quantity: field[i][j].quantity
					});
				}
			}
		}
	}

	return army;
}

function showArmyViewWindow() {
	showWindow('armyViewWindow');

	var context = canvas.getContext("2d")
	var boxWidth = config.SCALE_FACTOR * config.SPRITE_WIDTH * (config.FIELD_WIDTH - 1);
	var boxHeight = config.SCALE_FACTOR * config.SPRITE_HEIGHT;
	var boxLeft = config.SCALE_FACTOR * config.SPRITE_WIDTH;

	context.font = config.UNIT_INFO_NAME_TEXT_HEIGHT + "px Tahoma";

	for (var i = 0; i < armyToShow.length; i++) {
		var boxTop = config.SCALE_FACTOR * config.SPRITE_HEIGHT * i;
		drawWindow(boxLeft, boxTop, boxWidth, boxHeight, false, backgroundByDwelling[units[armyToShow[i].unit].dwelling]);

		context.fillStyle = "#FFFFFF";
		context.fillText(capitalizeFirstLetter(getUnitName(armyToShow[i])) + ": " + armyToShow[i].quantity, boxLeft + 12, boxTop + 20);
		context.fillText(capitalizeFirstLetter(getCaption('skill level')) + ": " + units[armyToShow[i].unit].skillLevel + ", " + getCaption("moves") + ": " + units[armyToShow[i].unit].moves, boxLeft + 12, boxTop + 40);
		context.fillText(capitalizeFirstLetter(getCaption('morale')) + ": " + getCaption(moraleText[armyToShow[i].morale]), boxLeft + 12, boxTop + 60);
		context.fillText(capitalizeFirstLetter(getCaption('hit points')) + ": " + units[armyToShow[i].unit].hitPoints, boxLeft + 232, boxTop + 20);

		var damageText = (armyToShow[i].quantity * (units[armyToShow[i].unit].attackMin)) + "—" + (armyToShow[i].quantity * (units[armyToShow[i].unit].attackMax));
		if (units[armyToShow[i].unit].shoots) {
			damageText += " (" + (armyToShow[i].quantity * (units[armyToShow[i].unit].shootMin)) + "—" + (armyToShow[i].quantity * (units[armyToShow[i].unit].shootMax)) + ")";
		}

		context.fillText(capitalizeFirstLetter(getCaption('damage')) + ": " + damageText, boxLeft + 232, boxTop + 40);
		context.fillText(capitalizeFirstLetter(getCaption('weekly cost')) + ": " + Math.ceil(units[armyToShow[i].unit].cost * armyToShow[i].quantity / 10), boxLeft + 232, boxTop + 60);
	}
}

function getPlayerScore() {
	return Math.round(((gameField.villainsCaught.length * 500) + (gameField.artefactsCollected.length * 250) + (gameField.castlesGarrisoned.length * 100) + gameField.followersKilled) * difficultyLevels[gameField.difficultyLevel].scoreModifier);
}

function hasContinentMap(index) {
	if (gameField.map.length <= index) {
		return false;
	}
	return gameField.map[index].available;
}

function getIncome() {
	return gameField.income + gameField.castlesGarrisoned.length * 250;
}

function showCharacterViewWindow() {
	showWindow('characterViewWindow');

	var context = canvas.getContext("2d");
	drawRoleImage(0, 0, playerRoles[gameField.playerRole].tile);

	var tilesToShow = [viewTiles.emptySlot, viewTiles.emptySlot, viewTiles.emptySlot, viewTiles.emptySlot, hasContinentMap(0) ? viewTiles.continentMap1 : viewTiles.emptyScroll, hasContinentMap(2) ? viewTiles.continentMap3 : viewTiles.emptyScroll, viewTiles.emptySlot, viewTiles.emptySlot, viewTiles.emptySlot, viewTiles.emptySlot, hasContinentMap(1) ? viewTiles.continentMap2 : viewTiles.emptyScroll, hasContinentMap(3) ? viewTiles.continentMap4 : viewTiles.emptyScroll];
	var plusesToShow = [false, false, false, false, false, false, false, false, false, false, false, false];
	var boxLeft = 2 * config.SPRITE_WIDTH * config.SCALE_FACTOR;
	var boxTop = 0;
	var boxWidth = 4 * config.SPRITE_WIDTH * config.SCALE_FACTOR;
	drawWindow(boxLeft, boxTop, boxWidth, 3 * config.SPRITE_HEIGHT * config.SCALE_FACTOR, false);

	context.font = config.UNIT_INFO_NAME_TEXT_HEIGHT + "px Tahoma";
	context.fillStyle = "#FFFFFF";

	drawTextLines(boxLeft, boxTop + 20, boxWidth, 16, [
		getPlayerName(),
		'',
		capitalizeFirstLetter(getCaption('leadership')) + '|' + getLeadership(),
		capitalizeFirstLetter(getCaption('comission/week')) + '|' + getIncome(),
		capitalizeFirstLetter(getCaption('gold')) + '|' + gameField.gold,
		capitalizeFirstLetter(getCaption('spell power')) + '|' + gameField.spellPower,
		capitalizeFirstLetter(getCaption('max number of spells')) + '|' + gameField.spellCapacity,
		capitalizeFirstLetter(getCaption('villains caught')) + '|' + gameField.villainsCaught.length,
		capitalizeFirstLetter(getCaption('artefacts found')) + '|' + gameField.artefactsCollected.length,
		capitalizeFirstLetter(getCaption('castles garrisoned')) + '|' + gameField.castlesGarrisoned.length,
		capitalizeFirstLetter(getCaption('followers killed')) + '|' + gameField.followersKilled,
		capitalizeFirstLetter(getCaption('score')) + '|' + getPlayerScore()
	]);

	for (var i = 0; i < gameField.artefactsCollected.length; i++) {
		var artefactTile = artefactsByChar[gameField.artefactsCollected[i]].id;
		var index = (artefactTile % 4) + Math.floor(artefactTile / 4) * 6;
		if (artefactsByChar[gameField.artefactsCollected[i]].extended) {
			plusesToShow[index] = true;
		} else {
			tilesToShow[index] = artefactsByChar[gameField.artefactsCollected[i]].viewTileId;
		}
	}

	if (gameField.map.length > 4) {
		for (var i = 4; i < gameField.map.length; i++) {
			if (gameField.map[i].available) {
				plusesToShow[11] = true;
				break;
			}
		}
	}

	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 6; j++) {
			var index = j + i * 6;
			drawViewImage(j * config.SPRITE_WIDTH * config.SCALE_FACTOR, (i + 3) * config.SPRITE_HEIGHT * config.SCALE_FACTOR, tilesToShow[index]);
			if (plusesToShow[index]) {
				context.drawImage(
					addonsImage,
					0,
					0,
					16,
					16,
					(j * config.SPRITE_WIDTH + 68) * config.SCALE_FACTOR,
					((i + 3) * config.SPRITE_HEIGHT + 4) * config.SCALE_FACTOR,
					config.SCALE_FACTOR * 16,
					config.SCALE_FACTOR * 16
				);
			}
		}
	}


	/* var army;

	var boxWidth = config.SCALE_FACTOR * config.SPRITE_WIDTH * (config.FIELD_WIDTH - 1);
	var boxHeight = config.SCALE_FACTOR * config.SPRITE_HEIGHT;
	var boxLeft = config.SCALE_FACTOR * config.SPRITE_WIDTH;

	context.font = config.UNIT_INFO_NAME_TEXT_HEIGHT + "px Tahoma";

	for (var i = 0; i < armyToShow.length; i++) {
		var boxTop = config.SCALE_FACTOR * config.SPRITE_HEIGHT * i;
		drawWindow(boxLeft, boxTop, boxWidth, boxHeight, false);
		
		context.fillStyle = "#FFFFFF";
		context.fillText(getUnitName(armyToShow[i]) + ": " + armyToShow[i].quantity, boxLeft + 12, boxTop + 20);
		context.fillText(capitalizeFirstLetter(getCaption('skill level')) + ": " + units[armyToShow[i].unit].skillLevel + ", " + getCaption("moves") + ": " + units[armyToShow[i].unit].moves, boxLeft + 12, boxTop + 40);
		context.fillText(capitalizeFirstLetter(getCaption('morale')) + ": " + getCaption(moraleText[armyToShow[i].morale]), boxLeft + 12, boxTop + 60);
		context.fillText(capitalizeFirstLetter(getCaption('hit points')) + ": " + units[armyToShow[i].unit].hitPoints, boxLeft + 272, boxTop + 20);
	
		var damageText = (armyToShow[i].quantity * (units[armyToShow[i].unit].attackMin)) + "—" + (armyToShow[i].quantity * (units[armyToShow[i].unit].attackMax));
		if (units[armyToShow[i].unit].shoots) {
			damageText += " (" + (armyToShow[i].quantity * (units[armyToShow[i].unit].shootMin)) + "—" + (armyToShow[i].quantity * (units[armyToShow[i].unit].shootMax)) + ")";
		}
		
		context.fillText(capitalizeFirstLetter(getCaption('damage')) + ": " + damageText, boxLeft + 272, boxTop + 40);
		context.fillText(capitalizeFirstLetter(getCaption('weekly cost')) + ": " + (units[armyToShow[i].unit].cost / 10), boxLeft + 272, boxTop + 60);
	} */
}

function showUnitInfo(sourceUnit) {
	var context = canvas.getContext("2d")
	var boxLeft = config.SCALE_FACTOR * config.SPRITE_WIDTH * 1.5;
	var boxTop = config.SCALE_FACTOR * config.SPRITE_HEIGHT * 1;
	var boxWidth = config.SCALE_FACTOR * config.SPRITE_WIDTH * (config.FIELD_WIDTH - 3);
	var boxHeight = config.SCALE_FACTOR * config.SPRITE_HEIGHT * (config.FIELD_HEIGHT - 2);

	drawWindow(boxLeft, boxTop, boxWidth, boxHeight);

	context.font = config.UNIT_INFO_NAME_TEXT_HEIGHT + "px Tahoma";
	context.fillStyle = "#FFFFFF";

	var l = 32;
	context.fillText(capitalizeFirstLetter(getCaption(sourceUnit.side == 0 ? 'your' : 'enemy')) + " " + getUnitName(sourceUnit), boxLeft + 12, boxTop + l);

	context.font = config.UNIT_INFO_TEXT_HEIGHT + "px Tahoma";
	context.fillStyle = "#FFFFFF";

	l += 24;
	context.fillText(capitalizeFirstLetter(getCaption('quantity')) + ": " + sourceUnit.quantity, boxLeft + 12, boxTop + l);
	l += 18;
	context.fillText(capitalizeFirstLetter(getCaption('hit points')) + ": " + (units[sourceUnit.unit].hitPoints - sourceUnit.injury) + "/" + units[sourceUnit.unit].hitPoints, boxLeft + 12, boxTop + l);
	l += 18;
	context.fillText(capitalizeFirstLetter(getCaption('moves')) + ": " + sourceUnit.moves + "/" + units[sourceUnit.unit].moves, boxLeft + 12, boxTop + l);
	l += 18;
	context.fillText(capitalizeFirstLetter(getCaption('damage')) + ": " + sourceUnit.quantity * (units[sourceUnit.unit].attackMin) + "—" + sourceUnit.quantity * (units[sourceUnit.unit].attackMax), boxLeft + 12, boxTop + l);

	if (units[sourceUnit.unit].shoots) {
		l += 18;
		context.fillText(capitalizeFirstLetter(getCaption('ranged')) + ": " + sourceUnit.quantity * (units[sourceUnit.unit].shootMin) + "—" + sourceUnit.quantity * (units[sourceUnit.unit].shootMax), boxLeft + 12, boxTop + l);
		l += 18;
		context.fillText(capitalizeFirstLetter(getCaption('ammo')) + ": " + sourceUnit.ammo + "/" + units[sourceUnit.unit].shoots, boxLeft + 12, boxTop + l);
	}

	var specialAbilities = "";

	if (units[sourceUnit.unit].fly) {
		specialAbilities += getCaption('fly') + ", ";
	}

	if (units[sourceUnit.unit].vampiric) {
		specialAbilities += getCaption('vampirism') + ", ";;
	}

	if (units[sourceUnit.unit].ghostic) {
		specialAbilities += getCaption('stole souls') + ", ";
	}

	if (units[sourceUnit.unit].magicImmunity) {
		specialAbilities += getCaption('immune to magic') + ", ";
	}

	if (units[sourceUnit.unit].regenerate) {
		specialAbilities += getCaption('regeneration') + ", ";;
	}

	if (units[sourceUnit.unit].half) {
		specialAbilities += getCaption('half kills') + ", ";
	}

	if (units[sourceUnit.unit].undead) {
		specialAbilities += getCaption('undead') + ", ";
	}

	if (specialAbilities == "") {
		specialAbilities = getCaption('none');
	} else {
		specialAbilities = specialAbilities.substring(0, specialAbilities.length - 2);
	}

	l += 18;
	context.fillText(capitalizeFirstLetter(getCaption('special abilities')) + ": " + specialAbilities, boxLeft + 12, boxTop + l);
	l += 18;
	context.fillText(capitalizeFirstLetter(getCaption('morale')) + ": " + getCaption(moraleText[sourceUnit.morale]), boxLeft + 12, boxTop + l);
}

function getGlobalFrameIndex() {
	return Math.floor(gameFrames / config.TICKS_PER_FRAME) % 4;
}

function getCoinsCount() {
	var result = [];
	result.push(Math.floor(gameField.gold / 10000));
	result.push(Math.floor((gameField.gold - result[0] * 10000) / 1000));
	result.push(Math.floor((gameField.gold - result[0] * 10000 - result[1] * 1000) / 100));
	for (var i = 0; i < 3; i++) {
		result[i] = Math.min(10, result[i]);
	}
	return result;
}

function drawCoins(canvas) {
	var coins = getCoinsCount();
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < coins[i]; j++) {
			context.drawImage(
				cursorImage,
				config.SPRITE_WIDTH * cursorTiles.coins + i * config.COIN_WIDTH,
				0,
				config.COIN_WIDTH,
				config.COIN_HEIGHT,
				config.SCALE_FACTOR * (5 * config.SPRITE_WIDTH + i * config.COIN_WIDTH),
				config.SCALE_FACTOR * (4 * config.SPRITE_HEIGHT + config.COIN_STACK_HEIGHT * (10 - j) + config.COINS_OFFSET),
				config.SCALE_FACTOR * config.COIN_WIDTH,
				config.SCALE_FACTOR * config.COIN_HEIGHT
			);
		}
	}
}

function drawPane() {
	context = canvas.getContext("2d");

	context.drawImage(
		paneImage,
		0,
		0,
		96,
		340,
		5 * config.SCALE_FACTOR * config.SPRITE_WIDTH,
		0,
		config.SCALE_FACTOR * config.SPRITE_WIDTH,
		340
	);

	var frameIndex = getGlobalFrameIndex();

	if (gameField.hasSiegeWeapons) {
		context.drawImage(
			cursorImage,
			config.SPRITE_WIDTH * (cursorTiles.siegeWeapons + frameIndex),
			0,
			config.SPRITE_WIDTH,
			config.SPRITE_HEIGHT,
			5 * config.SCALE_FACTOR * config.SPRITE_WIDTH,
			1 * config.SCALE_FACTOR * config.SPRITE_HEIGHT,
			config.SCALE_FACTOR * config.SPRITE_WIDTH,
			config.SCALE_FACTOR * config.SPRITE_HEIGHT
		);
	}

	if (gameField.hasMagicSkill) {
		context.drawImage(
			cursorImage,
			config.SPRITE_WIDTH * (cursorTiles.magic + frameIndex),
			0,
			config.SPRITE_WIDTH,
			config.SPRITE_HEIGHT,
			5 * config.SCALE_FACTOR * config.SPRITE_WIDTH,
			2 * config.SCALE_FACTOR * config.SPRITE_HEIGHT,
			config.SCALE_FACTOR * config.SPRITE_WIDTH,
			config.SCALE_FACTOR * config.SPRITE_HEIGHT
		);
		if (lepraOn) {
			context.drawImage(
				lepraImage,
				0,
				0,
				config.SPRITE_WIDTH,
				config.SPRITE_HEIGHT,
				5 * config.SCALE_FACTOR * config.SPRITE_WIDTH - 1,
				2 * config.SCALE_FACTOR * config.SPRITE_HEIGHT,
				config.SCALE_FACTOR * config.SPRITE_WIDTH,
				config.SCALE_FACTOR * config.SPRITE_HEIGHT
			);
		}
	} else {
		if (lepraOn) {
			context.drawImage(
				lepraGreyImage,
				0,
				0,
				config.SPRITE_WIDTH,
				config.SPRITE_HEIGHT,
				5 * config.SCALE_FACTOR * config.SPRITE_WIDTH - 1,
				2 * config.SCALE_FACTOR * config.SPRITE_HEIGHT,
				config.SCALE_FACTOR * config.SPRITE_WIDTH,
				config.SCALE_FACTOR * config.SPRITE_HEIGHT
			);
		}
	}

	context.drawImage(
		cursorImage,
		config.SPRITE_WIDTH * cursorTiles.money,
		0,
		config.SPRITE_WIDTH,
		config.SPRITE_HEIGHT,
		5 * config.SCALE_FACTOR * config.SPRITE_WIDTH,
		4 * config.SCALE_FACTOR * config.SPRITE_HEIGHT,
		config.SCALE_FACTOR * config.SPRITE_WIDTH,
		config.SCALE_FACTOR * config.SPRITE_HEIGHT
	);

	drawCoins();

	for (var i = 0; i < gameField.mapParts.length; i++) {
		var x = gameField.mapParts[i] % 5;
		var y = Math.floor(gameField.mapParts[i] / 5);
		
		context.drawImage(
			cursorImage,
			config.SPRITE_WIDTH * cursorTiles.map + x * config.MAP_TILE_WIDTH + 3,
			y * config.MAP_TILE_HEIGHT + 3,
			config.MAP_TILE_WIDTH + 1,
			config.MAP_TILE_HEIGHT + 1,
			(5 * config.SPRITE_WIDTH + x * config.MAP_TILE_WIDTH + 3) * config.SCALE_FACTOR,
			(3 * config.SPRITE_HEIGHT + y * config.MAP_TILE_HEIGHT + 3) * config.SCALE_FACTOR,
			config.SCALE_FACTOR * (config.MAP_TILE_WIDTH + 1),
			config.SCALE_FACTOR * (config.MAP_TILE_HEIGHT + 1)
		);
	}

	if (gameField.contract != null) {
		context.drawImage(
			villainsImage,
			config.SPRITE_WIDTH * frameIndex,
			gameField.contract * config.SPRITE_HEIGHT,
			config.SPRITE_WIDTH,
			config.SPRITE_HEIGHT,
			5 * config.SCALE_FACTOR * config.SPRITE_WIDTH,
			0 * config.SCALE_FACTOR * config.SPRITE_HEIGHT,
			config.SCALE_FACTOR * config.SPRITE_WIDTH,
			config.SCALE_FACTOR * config.SPRITE_HEIGHT
		);
	}
}

function showMapPointer() {
	var context = canvas.getContext("2d");
	var color = '#000000';
	var tileIndex = getTileIndex(gameField.playerX, gameField.playerY);

	if (typeof(mapColorForTile[tileIndex]) != 'undefined') {
		color = mapColorForTile[tileIndex];
	}

	if (gameFrames % 10 < 5) {
		context.fillStyle = '#DB5A69';
	} else {
		if (color != '#DB5A69') {
			context.fillStyle = color;
		} else {
			context.fillStyle = '#58FC5B';
		}
	}

	context.fillRect(dialog.box.left + 12 + gameField.playerX * 4, dialog.box.top + 64 + gameField.playerY * 4, 4, 4); 
}

windowShowHandlers = {
	'requestDismissConfirmation': function() {
	},
	'keyboard': function () {
	},
	'dismissMenu': function() {
	},
	'nameInputDialog': function() {
	},
	'actionsMenu': function() {
	},
	'mapInfoWindow': function() {
		showMapPointer();
	},
	'searchAreaConfirmation': function() {
	},
	'goldChestMenu': function() {
	},
	'citeWindow': function() {
		// showCiteWindow();
		if (siteSprite != null) {
			siteSprite.update();
			eraseSiteSprite();
			siteSprite.render();
		}
	},
	'requestFightConfirmation': function() {
	},
	'requestGiveUpConfirmation': function() {
	},
	'infoWindow': function() {
	},
	'castSpellMenu': function() {
	},
	'castleGateMenu': function() {
	},
	'townGateMenu': function() {
	},
	'chooseContinentMenu': function() {
	},
	'unitInfo': function() {
		showUnitInfo(infoUnit);
	},
	'armyViewWindow': function() {
	},
	'characterViewWindow': function() {
	},
	'difficultyChoiceMenu': function() {
	},
	'roleChoiceMenu': function() {
	},
	'languageChoiceMenu': function() {
	},
	'soundChoiceMenu': function() {
	}
};

function showWindows() {
	var result = false;
	for (var i in gameWindows) {
		if (gameWindows[i].isActive) {
			windowShowHandlers[i]();
			result = true;
		}
	}
	return result;
}

function drawInputField() {
	if (activeInputField != null) {
		renderInputField();
		activeInputField.cursorSprite.update();
		activeInputField.cursorSprite.render();
	}
}

function draw() {
	if (gameField != null && gameField.adventureMode && armyToShow == null && !isWindowActive('characterViewWindow')) {
		drawPane();
	}

	if (showWindows()) {
		drawInputField();
		if (gameField == null || (armyToShow == null && gameField.puzzleMap == null)) {
			return;
		}
	} else {
		drawInputField();
	}

	if (gameField == null) {
		return;
	}

	if (gameField.puzzleMap != null) {
		if (gameFrames % 10 == 0) {
			gameField.puzzleMap++;
		}
		puzzleTileVisible = {};

		for (var i = 0; i < Math.min(gameField.puzzleMap, gameField.mapParts.length); i++) {
			puzzleTileVisible[gameField.mapParts[i]] = true;
		}
	}

	for (var i = 0; i < window.sprites.length; i++) {
		window.sprites[i].update();
		window.sprites[i].render();
	}
}

function gameLoop() {
	gameFrames++;
	window.requestAnimationFrame(gameLoop);
	draw();
}

function capitalizeFirstLetter(string) {
	if (string == "") return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRole() {
	if (gameField == null || typeof(gameField.playerRole) == 'undefined') {
		if (typeof(chosenRole) == 'undefined') {
			return playerRoles['knight'];
		}
		return playerRoles[chosenRole];
	}
	return playerRoles[gameField.playerRole];
}

function showStatus(text) {
	text = capitalizeFirstLetter(text);
	statusContext.fillStyle = getRole().statusColor;
	statusContext.strokeWidth = 0;
	statusContext.fillRect(0, 0, statusCanvas.width, statusCanvas.height);

	statusContext.drawImage(
		menuImage,
		0,
		0,
		16,
		16,
		statusCanvas.width - 18,
		1,
		16,
		16
	);

	statusContext.drawImage(
		magicImage,
		0,
		0,
		16,
		16,
		statusCanvas.width - 18 - 18,
		1,
		16,
		16
	);

	statusContext.font = config.STATUS_TEXT_HEIGHT + "px Tahoma";
	statusContext.fillStyle = "#FFFFFF";
	
	var result = statusContext.measureText(text).width;
	statusContext.fillText(text, 2, 15);
	return result;
}

function getMapChar(x, y, continent) {
	if (typeof(continent) == 'undefined') {
		continent = gameField.continentIndex;
	}

	if (x < 0 || y < 0 || x >= gameField.map[continent].width || y >= gameField.map[continent].height) {
		return '.';
	}

	return gameField.map[continent].data.charAt(x + (y * gameField.map[continent].width));
}

function setMapChar(x, y, ch, continent) {
	var map = getMap(continent);
	if (x < 0 || y < 0 || x >= map.width || y >= map.height) {
		return;
	}
	map.data = map.data.setCharAt(x + (y * map.width), ch);
}

function groundChar(ch) {
	if (enemies[ch] || signsByChar[gameField.continentIndex][ch] || artefactsByChar[ch] || sites[ch]) return '+';
	if (ch == 'T' || ch == 'U' || ch == 'W' || ch == 'X' || ch == 'Y' || ch == 'Z' || ch == '{' || ch == '}' || ch == '$' || ch == ':' || ch == ']' || ch == '[') return '.';
	return ch;
}

function groundCharExt(ch) {
	if (sites[ch]) return ch;
	if (ch == '=' || ch == '-' || ch == '|') return '+';
	return groundChar(ch);
}

function isGround(ch) {
	return (ch == '+') || (ch == '#') || (ch == '@') || (ch == '=') || (ch == 'B') || (ch >= '1' && ch <= '7') || (ch == '[') || (ch == ']');
}

function isGroundOrWater(ch, excludeChar) {
	if (typeof(excludeChar) != 'undefined' && ch == excludeChar) {
		return false;
	}
	return (ch == '.') || (ch == '|') || (ch == '-') || isGround(ch);
}

function getTileIndex(x, y, ch, continent) {
	var mapChar;

	if (typeof(ch) == 'undefined' || ch == null) {
		mapChar = getMapChar(x, y, continent);
	} else {
		mapChar = ch;
	}

	var lChar = groundChar(getMapChar(x - 1, y, continent));
	var rChar = groundChar(getMapChar(x + 1, y, continent));
	var uChar = groundChar(getMapChar(x, y - 1, continent));
	var dChar = groundChar(getMapChar(x, y + 1, continent));

	var ulChar = groundChar(getMapChar(x - 1, y - 1, continent));
	var urChar = groundChar(getMapChar(x + 1, y - 1, continent));
	var dlChar = groundChar(getMapChar(x - 1, y + 1, continent));
	var drChar = groundChar(getMapChar(x + 1, y + 1, continent));

	var uCharExact = getMapChar(x, y - 1);

	switch (mapChar) {
		case '.': // water
			if (isGround(ulChar) && isGround(uChar) && isGround(lChar)) return 25 - 4;
			if (isGround(dlChar) && isGround(dChar) && isGround(lChar)) return 26 - 4;
			if (isGround(urChar) && isGround(uChar) && isGround(rChar)) return 24 - 4;
			if (isGround(drChar) && isGround(dChar) && isGround(rChar)) return 27 - 4;
			if (isGround(rChar)) return 28;
			if (isGround(lChar)) return 29;
			if (isGround(uChar)) return 30;
			if (isGround(dChar)) return 31;
			if (isGround(drChar)) return 24;
			if (isGround(urChar)) return 25;
			if (isGround(dlChar)) return 26;
			if (isGround(ulChar)) return 27;

			return 32;
		case '+': // grass
			if (uCharExact == '5' || uCharExact == '%' || uCharExact == '`') return 1;
			return 0;
		case '=': // desert
			if (isGroundOrWater(ulChar, '=') && isGroundOrWater(uChar, '=') && isGroundOrWater(lChar, '=')) return 24 + 26 - 4;
			if (isGroundOrWater(dlChar, '=') && isGroundOrWater(dChar, '=') && isGroundOrWater(lChar, '=')) return 25 + 26 - 4;
			if (isGroundOrWater(urChar, '=') && isGroundOrWater(uChar, '=') && isGroundOrWater(rChar, '=')) return 26 + 26 - 4;
			if (isGroundOrWater(drChar, '=') && isGroundOrWater(dChar, '=') && isGroundOrWater(rChar, '=')) return 27 + 26 - 4;
			if (isGroundOrWater(rChar, '=')) return 28 + 26;
			if (isGroundOrWater(lChar, '=')) return 29 + 26;
			if (isGroundOrWater(uChar, '=')) return 30 + 26;
			if (isGroundOrWater(dChar, '=')) return 31 + 26;
			if (isGroundOrWater(drChar, '=')) return 24 + 26;
			if (isGroundOrWater(urChar, '=')) return 25 + 26;
			if (isGroundOrWater(dlChar, '=')) return 26 + 26;
			if (isGroundOrWater(ulChar, '=')) return 27 + 26;
			return 58;
		case '@': // forest
			if (isGroundOrWater(ulChar, '@') && isGroundOrWater(uChar, '@') && isGroundOrWater(lChar, '@')) return 24 + 13 - 4;
			if (isGroundOrWater(dlChar, '@') && isGroundOrWater(dChar, '@') && isGroundOrWater(lChar, '@')) return 25 + 13 - 4;
			if (isGroundOrWater(urChar, '@') && isGroundOrWater(uChar, '@') && isGroundOrWater(rChar, '@')) return 26 + 13 - 4;
			if (isGroundOrWater(drChar, '@') && isGroundOrWater(dChar, '@') && isGroundOrWater(rChar, '@')) return 27 + 13 - 4;
			if (isGroundOrWater(rChar, '@')) return 28 + 13; // right edge
			if (isGroundOrWater(lChar, '@')) return 29 + 13; // left edge
			if (isGroundOrWater(uChar, '@')) return 30 + 13; // top edge
			if (isGroundOrWater(dChar, '@')) return 31 + 13; // bottom edge
			if (isGroundOrWater(drChar, '@')) return 24 + 13;
			if (isGroundOrWater(urChar, '@')) return 25 + 13;
			if (isGroundOrWater(dlChar, '@')) return 26 + 13;
			if (isGroundOrWater(ulChar, '@')) return 27 + 13;
			return 32 + 13;
		case '#': // rock
			if (isGroundOrWater(ulChar, '#') && isGroundOrWater(uChar, '#') && isGroundOrWater(lChar, '#')) return 24 + 39 - 4;
			if (isGroundOrWater(dlChar, '#') && isGroundOrWater(dChar, '#') && isGroundOrWater(lChar, '#')) return 25 + 39 - 4;
			if (isGroundOrWater(urChar, '#') && isGroundOrWater(uChar, '#') && isGroundOrWater(rChar, '#')) return 26 + 39 - 4;
			if (isGroundOrWater(drChar, '#') && isGroundOrWater(dChar, '#') && isGroundOrWater(rChar, '#')) return 27 + 39 - 4;
			if (isGroundOrWater(rChar, '#')) return 28 + 39;
			if (isGroundOrWater(lChar, '#')) return 29 + 39;
			if (isGroundOrWater(uChar, '#')) return 30 + 39;
			if (isGroundOrWater(dChar, '#')) return 31 + 39;
			if (isGroundOrWater(drChar, '#')) return 24 + 39;
			if (isGroundOrWater(urChar, '#')) return 25 + 39;
			if (isGroundOrWater(dlChar, '#')) return 26 + 39;
			if (isGroundOrWater(ulChar, '#')) return 27 + 39;
			return 32 + 39;
		case 'A':
			return 10; // city
		case 'B':
			return 11; // treasure
		case 'C':
			return 12; // cart
		case 'D':
			return 13; // tree
		case 'E':
			return 14; // hill
		case 'F':
			return 15; // dungeon
		case '*':
			return 14; // alcove
		case '^':
			return 14; // portal
		case 'H':
			return 17; // enemy
		case '&':
			return 82; // enemy 4
			break;
		case 'S':
			return 72; // enemy1
		case 'M':
			return 75; // enemy2
		case 'P':
			return 78; // enemy3
		case '2':
			return 2;
		case '3':
			return 3;
		case '4':
			return 4;
		case '5':
			return 5;
		case '%':
			return 5;
		case '`':
			return 5;
		case '6':
			return 6;
		case '7':
			return 7;
		case '-':
			return 8;
		case '|':
			return 9;
		case '{':
			return 100;
		case '$':
			return 101;
		case '}':
			return 102;
		case 'T':
			return 103;
		case 'U':
			return 104;
		case 'W':
			return 105;
		case 'X':
			return 106;
		case 'Y':
			return 107;
		case 'Z':
			return 108;
		case '[':
			return 109;
		case ':':
			return 110;
		case ']':
			return 111;
		default:
			if (typeof(artefactsByChar[mapChar]) != 'undefined') {
				return artefactsByChar[mapChar].tile;
			}
			if (typeof(signsByChar[gameField.continentIndex][mapChar]) != 'undefined') {
				return signsByChar[gameField.continentIndex][mapChar].tile;
			}
			break;
	}

	return 0;
}

function getVisibleTileIndex(x, y, ch) {
	return getTileIndex(x + gameField.playerX - 2, y + gameField.playerY - 2, ch);
}

function isCursorVisibleAt(x, y) {
	return gameField.editMode && isRiderVisibleAt(x, y);
}

function isRiderVisibleAt(x, y) {
	return (x == 2) && (y == 2);
}

function isBoatVisibleAt(x, y) {
	var x1 = x + gameField.playerX - 2;
	var y1 = y + gameField.playerY - 2;

	return (x1 == gameField.boatX) && (y1 == gameField.boatY) && (gameField.continentIndex == gameField.boatContinent);
}

function getTitanTile(tileIndex) {
	tileIndex -= 100;
	return {
		x: tileIndex % 3,
		y: Math.floor(tileIndex / 3)
	};
}

function playerJump() {
	for (var i = 0; i < sprites.length; i++) {
		if (isRiderVisibleAt(sprites[i].fieldX, sprites[i].fieldY)) {
			sprites[i].jump();
			break;
		}
	}
}

function sprite(options) {
	var that = {},
		frameIndex = 0,
		tickCount = 0,
		ticksPerFrame = options.ticksPerFrame || 0,
		numberOfFrames = options.numberOfFrames || 1;

	that.context = options.context;
	that.image = options.image;
	that.mirrorImage = options.mirrorImage;
	that.x = options.x;
	that.y = options.y;
	that.unit = options.unit;
	that.side = options.side;
	that.groundImage = options.groundImage;
	that.fieldX = options.fieldX;
	that.fieldY = options.fieldY;
	that.site = options.site;
	that.width = options.width;
	that.height = options.height;

	that.jump = function() {
		frameIndex = 3;
		tickCount = 0;
	}

	that.update = function () {
		tickCount++;
		var correctNumberOfFrames = numberOfFrames;

		if (gameField != null && gameField.adventureMode && isRiderVisibleAt(that.fieldX, that.fieldY)) {
			correctNumberOfFrames--;
		}

		if (tickCount > ticksPerFrame) {
			tickCount = 0;

			if (frameIndex < correctNumberOfFrames - 1) {	
				frameIndex++;
			} else {
				frameIndex = 0;
			}
		}
	};

	that.render = function () {
		if (gameField != null && gameField.puzzleMap != null) {
			if (that.fieldX < 5) {
				var mapTileIndex = that.fieldX + that.fieldY * 5;
				if (typeof(puzzleTileVisible[mapTileIndex]) != 'undefined') {
					var tileIndex = getTileIndex(that.fieldX + gameField.sceptreX - 2, that.fieldY + gameField.sceptreY - 2, null, gameField.sceptreContinent);
					drawAdventureImage(that.x, that.y, tileIndex);
				} else {
					if (typeof(villainsByMapTileIndex[mapTileIndex]) != 'undefined') {
						drawVillainImage(that.fieldX * config.SPRITE_WIDTH * config.SCALE_FACTOR, that.fieldY * config.SPRITE_HEIGHT * config.SCALE_FACTOR, villainsByMapTileIndex[mapTileIndex].id);
					} else {
						drawViewImage(that.fieldX * config.SPRITE_WIDTH * config.SCALE_FACTOR, that.fieldY * config.SPRITE_HEIGHT * config.SCALE_FACTOR, artefactsByMapTileIndex[mapTileIndex].viewTileId);
					}
				}
			}
			return;
		}

		if (gameField != null && gameField.adventureMode && !that.site && armyToShow == null) {
			if (that.fieldX > 4) return;

			var tileIndex = getVisibleTileIndex(that.fieldX, that.fieldY);
			drawAdventureImage(that.x, that.y, tileIndex >= 100 ? getVisibleTileIndex(that.fieldX, that.fieldY, '.') : tileIndex);

			if (isBoatVisibleAt(that.fieldX, that.fieldY)) {
				if (!gameField.isBoatLeftDirected) {
					that.context.drawImage(
						cursorImage,
						(cursorTiles.boat + ((gameField.playerX == gameField.boatX && gameField.playerY == gameField.boatY) ? frameIndex : 0)) * that.width,
						0,
						that.width,
						that.height,
						that.x,
						that.y,
						config.SCALE_FACTOR * that.width,
						config.SCALE_FACTOR * that.height
					);
				} else {
					that.context.drawImage(
						cursorMirrorImage,
						(25 - (cursorTiles.boat + ((gameField.playerX == gameField.boatX && gameField.playerY == gameField.boatY) ? frameIndex : 0))) * that.width,
						0,
						that.width,
						that.height,
						that.x,
						that.y,
						config.SCALE_FACTOR * that.width,
						config.SCALE_FACTOR * that.height
					);
				}
			} else {
				if (isCursorVisibleAt(that.fieldX, that.fieldY)) {
					that.context.drawImage(
						that.groundImage,
						(tiles.target + frameIndex) * that.width,
						0,
						that.width,
						that.height,
						that.x,
						that.y,
						config.SCALE_FACTOR * that.width,
						config.SCALE_FACTOR * that.height
					);
				} else {
					if (isRiderVisibleAt(that.fieldX, that.fieldY)) {
						if (gameField.isDragonRider) {
							if (!gameField.isLeftDirected) {
								that.context.drawImage(
									cursorImage,
									(cursorTiles.dragonRider + frameIndex) * that.width,
									0,
									that.width,
									that.height,
									that.x,
									that.y,
									config.SCALE_FACTOR * that.width,
									config.SCALE_FACTOR * that.height
								);
							} else {
								that.context.drawImage(
									cursorMirrorImage,
									(25 - (cursorTiles.dragonRider + frameIndex)) * that.width,
									0,
									that.width,
									that.height,
									that.x,
									that.y,
									config.SCALE_FACTOR * that.width,
									config.SCALE_FACTOR * that.height
								);
							}
						} else {
							if (!gameField.isLeftDirected) {
								that.context.drawImage(
									cursorImage,
									(cursorTiles.rider + frameIndex) * that.width,
									0,
									that.width,
									that.height,
									that.x,
									that.y,
									config.SCALE_FACTOR * that.width,
									config.SCALE_FACTOR * that.height
								);
							} else {
								that.context.drawImage(
									cursorMirrorImage,
									(25 - (cursorTiles.rider + frameIndex)) * that.width,
									0,
									that.width,
									that.height,
									that.x,
									that.y,
									config.SCALE_FACTOR * that.width,
									config.SCALE_FACTOR * that.height
								);
							}
						}
					}
				}
			}

			if (tileIndex >= 100) {
				var titanTile = getTitanTile(tileIndex);
				that.context.drawImage(
					titanImage,
					titanTile.x * that.width,
					titanTile.y * that.height,
					that.width,
					that.height,
					that.x,
					that.y,
					config.SCALE_FACTOR * that.width,
					config.SCALE_FACTOR * that.height
				);
			}
		} else {
			if (!that.site && gameField != null && (armyToShow == null || that.fieldX == 0 || that.fieldY >= armyToShow.length)) {
				that.context.drawImage(
					that.groundImage,
					(armyToShow != null ? 0 : field[that.fieldY][that.fieldX].groundType) * that.width,
					0,
					that.width,
					that.height,
					that.x,
					that.y,
					config.SCALE_FACTOR * that.width,
					config.SCALE_FACTOR * that.height
				);
			}

			if (typeof(armyToShow) != 'undefined' && armyToShow != null) {
				if (that.fieldY < armyToShow.length && that.fieldX == 0) {
					that.context.drawImage(
						that.image,
						frameIndex * that.width,
						armyToShow[that.fieldY].unit * that.height,
						that.width,
						that.height,
						that.x,
						that.y,
						config.SCALE_FACTOR * that.width,
						config.SCALE_FACTOR * that.height
					);
				}
			} else {
				if (that.site || (field[that.fieldY][that.fieldX].quantity > 0 && field[that.fieldY][that.fieldX].groundType == 0)) {
					that.context.drawImage(
						(!that.site && field[that.fieldY][that.fieldX].side == 1) ? that.mirrorImage : that.image,
						((that.site || (activeUnit.fieldX == that.fieldX && activeUnit.fieldY == that.fieldY)) ? ((!that.site && field[that.fieldY][that.fieldX].side == 1) ? (config.SPRITE_FRAMES - 1 - frameIndex) : frameIndex) : ((field[that.fieldY][that.fieldX].side == 1) ? (config.SPRITE_FRAMES - 1) : 0)) * that.width,
						(that.site ? that.unit : field[that.fieldY][that.fieldX].unit) * that.height,
						that.width,
						that.height,
						that.x,
						that.y,
						config.SCALE_FACTOR * that.width,
						config.SCALE_FACTOR * that.height
					);

					if (!that.site) {
						that.context.font = config.QUANTITY_TEXT_HEIGHT + "px Tahoma";
						var textSize = that.context.measureText(field[that.fieldY][that.fieldX].quantity);
						var textWidth = Math.round(textSize.width) + 4;
						var textHeight = config.QUANTITY_TEXT_HEIGHT + 4;

						var boxLeft = that.x + config.SCALE_FACTOR * that.width - 1 - textWidth;
						var boxTop = that.y + config.SCALE_FACTOR * that.height - 1 - textHeight;
						that.context.fillStyle = (field[that.fieldY][that.fieldX].side == 2) ? "#000070" : (field[that.fieldY][that.fieldX].side ? "#007000" : "#700000");
						that.context.strokeStyle = "#FFFFFF";
						that.context.strokeWidth = 1;
						that.context.fillRect(boxLeft, boxTop, textWidth, textHeight); 

						that.context.beginPath();
						that.context.rect(boxLeft, boxTop, textWidth, textHeight); 
						that.context.stroke();
						
						that.context.fillStyle = (field[that.fieldY][that.fieldX].alreadyMoved && !field[that.fieldY][that.fieldX].canRetaliate) ? "#B0B0B0" : "#FFFFFF";
						that.context.fillText(field[that.fieldY][that.fieldX].quantity, boxLeft + 2, boxTop - 4 + textHeight);

						that.context.fillStyle = "#A00000";
						var injuryHeight = field[that.fieldY][that.fieldX].injury * (textHeight - 2) / units[field[that.fieldY][that.fieldX].unit].hitPoints; 
						that.context.fillRect(boxLeft - 7 + 1, boxTop, 3, injuryHeight); 
						that.context.fillStyle = "#00A000";
						that.context.fillRect(boxLeft - 7 + 1, boxTop + injuryHeight, 3, textHeight - 1 - injuryHeight); 

						that.context.strokeStyle = "#FFFFFF";
						that.context.strokeWidth = 1;
						that.context.beginPath();
						that.context.rect(boxLeft - 7, boxTop, 5, textHeight); 
						that.context.stroke();

						if (hitUnit.fieldX == that.fieldX && hitUnit.fieldY == that.fieldY) {
							that.context.drawImage(
								that.groundImage,
								tiles.boom * that.width,
								0,
								that.width,
								that.height,
								that.x,
								that.y,
								config.SCALE_FACTOR * that.width,
								config.SCALE_FACTOR * that.height
							);
						}
					}
				}

				if (!that.site && activePointer.fieldX == that.fieldX && activePointer.fieldY == that.fieldY) {
					that.context.drawImage(
						that.groundImage,
						(tiles.target + frameIndex) * that.width,
						0,
						that.width,
						that.height,
						that.x,
						that.y,
						config.SCALE_FACTOR * that.width,
						config.SCALE_FACTOR * that.height
					);
				}
			}
		}
	};

	return that;
}

function getRandomTreasure() {
	var result = {};
	var val = Math.floor(Math.random() * 100) + 1;
	var chances = getMap().chances;

	if (val < chances.gold) {
		var points = Math.floor(Math.random() * chances.extraGold) + 1 + chances.baseGold;
		result.gold = Math.floor(points * 100);
		result.leadership = Math.floor(result.gold / 50);
		if (hasArtefact('Crown of Command')) {
			result.leadership = result.leadership * 2;
		}
		result.type = treasureTypes.gold;
	} else {
		if (val < chances.income) {
			result.income = Math.floor(Math.random() * chances.extraIncome) + 1 + chances.baseIncome;
			result.type = treasureTypes.income;
		} else {
			if (val < chances.spellPower) {
				result.spellPower = 1;
				result.type = treasureTypes.spellPower;
			} else {
				if (val < chances.spellCapacity) {
					result.spellCapacity = chances.spellCapacityCount;
					if (hasArtefact('Book of Necros')) {
						result.spellCapacity = result.spellCapacity * 2;
					}
					result.type = treasureTypes.spellCapacity;
				} else {
					result.extraSpellsCount = Math.floor(Math.random() * chances.extraSpellsCount) + 1;
					result.spell = getRandomSpell();
					result.type = treasureTypes.extraSpell;
				}
			}
		}
	}

	return result;
}

function prepareText(lines) {
	var result = [];
	for (var i = 0; i < lines.length; i++) {
		result.push(getCaption(lines[i]).replace("{playerName}", getPlayerName()));
	}
	return result;
}

function takeArtefact(ch) {
	gameField.artefactsCollected.push(ch);
	if (artefactsByChar[ch].mapTileIndex != null) {
		gameField.mapParts.push(artefactsByChar[ch].mapTileIndex);
	}

	switch (ch) {
		case 'O': // Articles of Nobility
			gameField.income += 2000;
			break;
		case 'L': // Amulet of Augmentation
			gameField.spellPower += 5;
			break;
		case 'K':
			gameField.extraLeadership = 0;
			gameField.leadership = gameField.leadership * 2;
			break;
		case 'Q':
			gameField.spellCapacity = gameField.spellCapacity * 2; 
			break;
		case '!':
			gameField.spellPower += 1;
			gameField.spellCapacity += 1;
			break;
		default:
			break;
	}
}

function hasArtefact(artefactName) {
	for (var i = 0; i < gameField.artefactsCollected.length; i++) {
		if (artefactsByChar[gameField.artefactsCollected[i]].name == artefactName) {
			return true;
		}
	}
	return false;
}

function openMap() {
	for (var i = 0; i < getMap().fog.length; i++) {
		getMap().fog[i] = true;
	}
}

function showTreasureWindow() {
	sounds.chest.play();

	switch (gameField.treasure.type) {
		case treasureTypes.gold:
			showGoldChestMenu();
			break;
		case treasureTypes.income:
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", [
				getCaption("After surveying the area,"),
				getCaption("you discover that it is"),
				getCaption("rich in mineral deposits") + ".",
				getCaption("The King rewards your for"),
				getCaption("your find by increasing"),
				getCaption("your weekly income by") + " " + gameField.treasure.income + ".",
			]);
			gameField.income += gameField.treasure.income;
			showAdventureStatus();
			break;
		case treasureTypes.spellPower:
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", [
				capitalizeFirstLetter(getCaption("traversing tha area, you")),
				getCaption("stumble upon a time worn"),
				getCaption("cannister. Curious, you unstop"),
				getCaption("the bottle, releasing"),
				getCaption("a powerful genie who raises"),
				getCaption("your Spell Power by") + " " + gameField.treasure.spellPower + " " + getCaption("and"),
				getCaption("vanishes.")
			]);
			gameField.spellPower += gameField.treasure.spellPower;
			showAdventureStatus();
			break;
		case treasureTypes.spellCapacity:
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", [
				getCaption("A tribe of nomads greet you"),
				getCaption("and your army warmly. Their"),
				getCaption("shaman, in awe of your"),
				getCaption("prowes, teaches you the"),
				getCaption("secret of his tribe's magic."),
				getCaption("Your maximum spell capacity"),
				getCaption("is increased by") + " " + gameField.treasure.spellCapacity + "."
			]);
			gameField.spellCapacity += gameField.treasure.spellCapacity;
			showAdventureStatus();
			break;
		case treasureTypes.extraSpell:
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", [
				getCaption("You have captured a mischievous"),
				getCaption("imp which has been terrorizing"),
				getCaption("the region. In exchange for"),
				getCaption("its release, you receive:"),
				gameField.treasure.extraSpellsCount + " " + getCaption(gameField.treasure.extraSpellsCount > 1 ? 'spells' : 'spell') + " (" + getCaption(gameField.treasure.spell.name) + ")."
			]);
			gameField.playersInfo[0].spells[gameField.treasure.spell.index] += gameField.treasure.extraSpellsCount;
			break;
		case treasureTypes.orb:
			getMap().orbFound = true;
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				getCaption("Peering through a magical orb"),
				getCaption("you are able to view the entire"),
				getCaption("continent. Your map of this"),
				getCaption("area is complete.")
			]), openMapInfoWindow);
			break;
		case treasureTypes.map:
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				getCaption('Hidden within an ancient chest, you'),
				getCaption('find maps and charts describing'),
				getCaption('passage to') + " " + getCaption(gameField.map[gameField.continentIndex + 1].name) + "."
			]));
			gameField.map[gameField.continentIndex + 1].available = true;
			break;
		default:
			break;
	}
}

function showArtefactWindow(stuffChar) {
	takeArtefact(stuffChar);

	switch (stuffChar) {
		case ';': // shield of assurance
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Massive piece of wood with",
				"a steel rim: this is exactly",
				"what you need for your",
				"squire: The Shield of",
				"Assurance."
			]));
			break;
		case '(': // bow
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Amongst copper pots and",
				"tennis rackets at the flea",
				"market, you found a piece",
				"of an ancient mastery:",
				"The Bow of Marksmanship."
			]));
			break;
		case '!': // pendant of sun
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"In a spirit of gratitude for",
				"saving a rare book from",
				"the hands of book robbers, a",
				"librarian presents you with:",
				"The Pendant of Sun."
			]));
			break;
		case '/': // training sword
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"After a hours of sword training",
				"your old brave teacher from",
				"Waternia presents you with",
				"a well balanced Waternian",
				"Training Sword."
			]));
			break;
		case 'I': // ring
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Ridding the countryside of",
				"a ferocious beast, the",
				"Magistrate presents you",
				"with: The Ring of Heroism…",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		case 'J': // shield
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Challenged to a joust by the",
				"dread Dark Knight, you quickly",
				"dispose of him and receive:",
				"The Shield of Protection…",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		case 'K': // crown
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Resting on a throne in a",
				"phantom castle, you have found:",
				"The Crown of Command.",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		case 'L': // amulet
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Hidden within an enchanted",
				"grove, you find: The Amulet",
				"of Augmentation…",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		case 'O': // articles
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Freeing a virtuous maiden from",
				"the clutches of a despicable",
				"criminal, you have been granted:",
				"The Articles of Nobility…",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		case 'N': // anchor
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"You discover ancient scrolls",
				"that describe the patterns",
				"of the oceans. Mariners, in",
				"gratitude, bestow upon you:",
				"The Anchor of Admirality…",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		case 'Q': // book
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"In the study of a deserted",
				"wizard's tower, you have",
				"found: The Book of Necros…",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		case 'R': // sword
			openInfoWindow(capitalizeFirstLetter(getCaption('event')) + "!", prepareText([
				"Following rumors of a great",
				"and powerful sword, you defeat",
				"its fearsome guardian and gain",
				"possession of: The Sword of",
				"Prowess…",
				"…and a piece of the map to",
				"the stolen scepter."
			]));
			break;
		default:
			break;
	}
}

function getMap(continent) {
	return gameField.map[(typeof(continent) == 'undefined') ? gameField.continentIndex : continent];
}

function collectStuff(x, y) {
	var stuffChar = getMapChar(x, y);

	switch (stuffChar) {
		case 'B':
			var map = getMap();
			if (map.orbX == x && map.orbY == y) {
				gameField.treasure = {
					type: treasureTypes.orb
				};
			} else {
				if (map.mapX == x && map.mapY == y) {
					gameField.treasure = {
						type: treasureTypes.map
					};
				} else {
					gameField.treasure = getRandomTreasure();
				}
			}

			showTreasureWindow();
			break;
		default:
			if (typeof(artefactsByChar[stuffChar]) != 'undefined') {
				showArtefactWindow(stuffChar);
			}
			break;
	}
}

function getRandomArmyForChar(enemyChar) {
	var maxLevel = 5;
	var minLevel = 1;
	var avgCost = 7500;
	var unitsCount = 3;
	
	switch (enemyChar) {
		case 'H':
			minLevel = 1;
			maxLevel = 3;
			avgCost = Math.round(500 * difficultyLevels[gameField.difficultyLevel].scoreModifier);
			break;
		case 'S':
			minLevel = 2;
			maxLevel = 4;
			avgCost = Math.round(1500 * difficultyLevels[gameField.difficultyLevel].scoreModifier);
			break;
		case 'M':
			minLevel = 3;
			maxLevel = 5;
			avgCost = Math.round(4000 * difficultyLevels[gameField.difficultyLevel].scoreModifier);
			break;
		case 'P':
			minLevel = 4;
			maxLevel = 6;
			avgCost = Math.round(9000 * difficultyLevels[gameField.difficultyLevel].scoreModifier);
			break;
		case '&':
			return getBossArmy();
		default:
			break;
	}

	return getRandomArmy(minLevel, maxLevel, avgCost, unitsCount, true);
}

function getBossArmy() {
	var result = [];
	for (var i = 0; i < 10; i++) {
		result.push({
			unit: 25,
			quantity: 50
		});
	}
	return result;
}

function getSpoilsOfWar(army) {
	var result = 0;
	for (var i = 0; i < army.length; i++) {
		result += units[army[i].unit].spoilsFactor * 5 * army[i].quantity;
	}
	return result;
}

function fightWithEnemy(enemyArmy) {
	gameField.spoilsOfWar = getSpoilsOfWar(enemyArmy);
	setArmies(getPlayerArmy(), enemyArmy);
	startBattle();
}

function requestFightConfirmation(x, y, initiatedByEnemy) {
	// setMapChar(x, y, '+');
	// fightWithEnemy(gameField.map[gameField.continentIndex].armies[y + '_' + x]);
	// mapChar = '+';
	if (typeof(initiatedByEnemy) == 'undefined') {
		initiatedByEnemy = false;
	}
	gameField.enemyX = x;
	gameField.enemyY = y;
	gameField.fightInitiatedByEnemy = initiatedByEnemy;
	gameField.siege = false;
	showFightConfirmation();
}

function repopulateDwellings(creature) {
	for (var continent = 0; continent < gameField.map.length; continent++) {
		for (var i = 0; i < getMap().height; i++) {
			for (var j = 0; j < getMap().width; j++) {
				if (getMapChar(j, i, continent) == units[creature].dwelling) {
					gameField.map[continent].armies[i + '_' + j].quantity = units[creature].maxPopulation;
				}
			}
		}
	}
}

/* End Of Week
At the end of each week a creature is picked at random. Every 4th week is always a week of peasant.
At the week of peasant, all your ghosts permanently turn into peasants.
Player's leadership is reset to base_leadership value.
All non-garrisoned player castles, are re-occupied by monsters, as per "Castle repopulation" in world salting (see above).
All dwellings for the weekly creature are re-populated, meaning their creature count is at maximum (MaxPop) again.
All castles not owned by player and all the foes grow their troop counts for the weekly creature according to the growth value (Growth). This happens after castle repopulation. */

function turnGhostsIntoPeasants(army) {
	for (var i = 0; i < army.length; i++) {
		if (units[army[i].unit].ghostic) {
			// turn ghosts into peasants
			army[i].unit = 17;
		}
	}
}

function endOfTheWeek(callback) {
	var creature;
	var army = getPlayerArmy();
	var expenses = 0;

	gameField.extraLeadership = 0;

	if (gameField.daysLeft % 20 == 0) {
		creature = 17;
		turnGhostsIntoPeasants(army);
		for (var i = 0; i < gameField.castlesGarrisoned.length; i++) {
			turnGhostsIntoPeasants(gameField.map[gameField.castlesGarrisoned[i].continent].armies[gameField.castlesGarrisoned[i].y + '_' + gameField.castlesGarrisoned[i].x]);
		}
	} else {
		creature = getRandomUnit(0, 6);
	}

	repopulateDwellings(creature);

	var lines = [
		capitalizeFirstLetter(getCaption("astrologers proclaim: Week of the")) + " " + capitalizeFirstLetter(getCaption(units[creature].namePassive)),
		capitalizeFirstLetter(getCaption("On hand")) + ":|" + gameField.gold,
		capitalizeFirstLetter(getCaption("Comission")) + ":|" + getIncome()
	];

	gameField.gold += getIncome();
	for (var i = 0; i < army.length; i++) {
		var expenses = Math.ceil(army[i].quantity * units[army[i].unit].cost / 10);
		gameField.gold -= expenses;

		if (gameField.gold < 0) {
			gameField.gold += expenses;
			army[i].quantity = 0;
		} else {
			lines.push(capitalizeFirstLetter(getUnitName(army[i])) + ":|" + expenses);
		}
	}

	army = army.filter(function(item, idx) {
		return item.quantity > 0;
	});

	reoccupyCastles();
	showAdventureStatus();

	setPlayerArmy(army);
	lines.push(capitalizeFirstLetter(getCaption("balance")) + ":| " + gameField.gold);
	openInfoWindow(capitalizeFirstLetter(getCaption('end of the week')), lines, callback);
}

function setPlayerArmy(army) {
	if (gameField.isDragonRider) {
		gameField.flyingArmy = army;
	} else {
		getMap().armies[gameField.playerY + '_' + gameField.playerX] = army;
	}
}

function getArmyStrength(army) {
	var result = 0;

	for (var i = 0; i < army.length; i++) {
		result += army[i].quantity * units[army[i].unit].hitPoints;
	}

	return result;
}

function reoccupyCastles() {
	var updatedFreeVillains = [];

	for (var villain = 0; villain < gameField.freeVillains.length + 1; villain++) {
		var bestArmyStrength = 0;
		var bestCastle = null;

		for (var continent = 0; continent < gameField.map.length; continent++) {
			for (var i = 0; i < gameField.map[continent].height; i++) {
				for (var j = 0; j < gameField.map[continent].width; j++) {
					var ch = getMapChar(j, i, continent);
					if (typeof(sites[ch]) != 'undefined' && sites[ch].enemyCastle) {
						var ownerName = getCastleOwnerName(gameField.map[continent].siteNames[i + '_' + j]);
						if (ownerName == 'you' || ownerName == 'no one') {
							var armyStrength = getArmyStrength(gameField.map[continent].armies[i + '_' + j]) + Math.random();
							if (bestCastle == null || armyStrength < bestArmyStrength) {
								bestCastle = {
									x: j,
									y: i,
									continent: continent
								}
								bestArmyStrength = armyStrength;
							}
						}
					}
				}
			}
		}

		if (villain == gameField.freeVillains.length) {
			if (bestCastle != null && bestArmyStrength < 1) {
				var castleName = gameField.map[bestCastle.continent].siteNames[bestCastle.y + '_' + bestCastle.x];
				lostCastle(bestCastle);
				delete gameField.map[bestCastle.continent].ownerToCastle[castleName];
				gameField.map[bestCastle.continent].armies[bestCastle.y + '_' + bestCastle.x] = getEnemyCastleArmy(bestCastle.x, bestCastle.y, bestCastle.continent);
			}
		} else {
			if (bestCastle == null) {
				updatedFreeVillains.push(gameField.freeVillains[villain]);
			} else {
				var castleName = gameField.map[bestCastle.continent].siteNames[bestCastle.y + '_' + bestCastle.x];
				var villainData = villains[gameField.freeVillains[villain]];
				if (gameField.map[bestCastle.continent].ownerToCastle[bestCastle.name] == 'you') {
					lostCastle(bestCastle);
				}
				gameField.map[bestCastle.continent].ownerToCastle[castleName] = villainData.name;
				gameField.map[bestCastle.continent].armies[bestCastle.y + '_' + bestCastle.x] = modifyVillainArmy(villainsByName[villainData.name].army);
			}
		}
	}

	gameField.freeVillains = updatedFreeVillains;
}

function lostCastle(castle) {
	var updatedCastlesGarrisoned = [];
	for (var i = 0; i < gameField.castlesGarrisoned.length; i++) {
		if (gameField.castlesGarrisoned[i].x != castle.x || gameField.castlesGarrisoned[i].y != castle.y || gameField.castlesGarrisoned[i].continent != castle.continent) {
			updatedCastlesGarrisoned.push(gameField.castlesGarrisoned[i]);
		}
	}
	gameField.castlesGarrisoned = updatedCastlesGarrisoned;
}

function waitADay(callback) {
	gameField.daysLeft--;
	if (gameField.daysLeft == 0) {
		openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
			getCaption('Oh,') + " " + getPlayerName() + ",",
			getCaption('you have failed to recover the Sceptre'),
			getCaption('of Order in time to save the land!'),
			getCaption('Beloved King Maximus has died and the'),
			getCaption('Demon King Urthrax Killspite rules in'),
			getCaption('his place. The Four Continents lay in'),
			getCaption('ruin about you, its people doomed to a'),
			getCaption('life of misery and oppression because'),
			getCaption('you could not find the Sceptre.')
		], function() {
			startMenu();
		});
		return true;
	}

	if (gameField.daysLeft % 5 == 0) {
		endOfTheWeek(callback);
		return true;
	} else {
		if (typeof(callback) != 'undefined') {
			callback();
		}
	}

	return false;
}

function waitDays(days, callback) {
	if (days == 1) {
		waitADay(callback);
	} else {
		waitADay(function () {
			waitDays(days - 1, callback);
		});
	}
}

function waitTurns(turns, untilEndOfTheWeek) {
	while (turns--) {
		gameField.turnsLeft--;
		if (gameField.turnsLeft <= 0) {
			gameField.turnsLeft = 40;
			if (waitADay()) {
				break;
			}
		}
	}
}

function moveCursor(dx, dy) {
	var x = gameField.playerX + dx;
	var y = gameField.playerY + dy;

	if (!(x >= 0 && y >= 0 && x <= getMap().width && y <= getMap().height)) {
		return;
	}

	gameField.playerX = x;
	gameField.playerY = y;
}

function movePlayer(dx, dy) {
	var x = gameField.playerX + dx;
	var y = gameField.playerY + dy;
	var mapChar = getMapChar(x, y);

	if (!(x >= 0 && y >= 0 && x <= getMap().width && y <= getMap().height)) {
		sounds.noStep.play();
		return;
	}

	if (gameField.timeStop > 0) {
		if (!gameField.isDragonRider && mapChar == '=') {
			gameField.timeStop = 0;
		} else {
			gameField.timeStop--;
		}
	} else {
		if (!gameField.isDragonRider && mapChar == '=') {
			gameField.turnsLeft = 0;
		}
		waitTurns(1);
	}

	if (!gameField.isDragonRider) {
		if (collectableStuff[mapChar]) {
			collectStuff(x, y);
			setMapChar(x, y, '+');
			mapChar = '+';
			gameField.stuffCollected = true;
		} else {
			gameField.stuffCollected = false;
		}

		if (mapChar == '^') { // portal
			var destination = getMap().portals[y + '_' + x];
			x = destination.x;
			y = destination.y;
			mapChar = '+';
		} else {
			if (typeof(sites[mapChar]) != 'undefined') {
				if (sites[mapChar].castle) {
					markCastleVisited(x, y, gameField.continentIndex);
				} else {
					if (sites[mapChar].city) {
						markCityVisited(x, y, gameField.continentIndex);
					}
				}
				openCiteWindow(x, y);
				return;
			}
		}

		if (enemies[mapChar]) {
			requestFightConfirmation(x, y);
			return;
		}

		if (groundChar(mapChar) == '.' && mapChar != ']' && mapChar != '[') {
			if ((gameField.playerX == gameField.boatX && gameField.playerY == gameField.boatY && gameField.boatContinent == gameField.continentIndex) || (x == gameField.boatX && y == gameField.boatY && gameField.boatContinent == gameField.continentIndex)) {
				gameField.boatX = x;
				gameField.boatY = y;
			} else {
				sounds.noStep.play();
				return;
			}
		} else {
			if (!(mapChar == '+' || mapChar == '|' || mapChar == '-' || mapChar == '=' || signsByChar[gameField.continentIndex][mapChar])) {
				sounds.noStep.play();
				return;
			} else {
				if (mapChar == '|' || mapChar == '-') {
					if ((gameField.playerX == gameField.boatX && gameField.playerY == gameField.boatY && gameField.boatContinent == gameField.continentIndex) || (x == gameField.boatX && y == gameField.boatY && gameField.boatContinent == gameField.continentIndex)) {
						gameField.boatX = x;
						gameField.boatY = y;
					}
				}
			}
		}

		if (signsByChar[gameField.continentIndex][mapChar]) {
			openInfoWindow(capitalizeFirstLetter(getCaption('a sign reads')) + ":", getLines(40, capitalizeFirstLetter(getCaption(signsByChar[gameField.continentIndex][mapChar].text))));
		}

		gameField.oldPlayerX = gameField.playerX;
		gameField.oldPlayerY = gameField.playerY;

		if (x != gameField.playerX || y != gameField.playerY) {
			getMap().armies[y + '_' + x] = getPlayerArmy();
			getMap().armies[gameField.playerY + '_' + gameField.playerX] = null;

			gameField.playerX = x;
			gameField.playerY = y;

			if (gameField.playerX == gameField.boatX && gameField.playerY == gameField.boatY && gameField.boatContinent == gameField.continentIndex) {
				gameField.isBoatLeftDirected = gameField.isLeftDirected;
			}
		}

		if (gameField.timeStop <= 0 && !playerNearKingCastle()) {
			moveEnemies();
		}

		playerJump();
	} else {
		gameField.oldPlayerX = gameField.playerX;
		gameField.oldPlayerY = gameField.playerY;
		gameField.playerX = x;
		gameField.playerY = y;
	}

	if (dx > 0) {
		gameField.isLeftDirected = false;
	} else {
		if (dx < 0) {
			gameField.isLeftDirected = true;
		}
	}

	sounds.step.play();
	clearFogAtPlayerCoords();
	showAdventureStatus();
}

function getLines(width, text) {
	if (text.length <= 0) {
		return [];
	}

	var result = [''];
	var words = text.split(/([\s\n\r]+)/);

    for (var i = 0; i < words.length; i++) {
		if (width < words[i].length + result[result.length - 1].length) {
			result.push(words[i].trim());
		} else {
			result[result.length - 1] += words[i];
		}
	}

	return result;
}

function playerNearKingCastle() {
	var map = getMap();
	if (typeof(map.siteCoordsByName['castle of King Maximus']) != 'undefined') {
		var coords = map.siteCoordsByName['castle of King Maximus'];
		var dx = gameField.playerX - coords.x;
		var dy = gameField.playerY - coords.y;
		return (Math.abs(dx) <= 5 && dy >= 0 && dy <= 3);
	}
	return false;
}

function markCastleVisited(x, y, continent) {
	var key = '*' + continent + '_' + y + '_' + x;
	gameField.visitedCastles[key] = {
		name: gameField.map[continent].siteNames[y + '_' + x],
		x: x,
		y: y,
		continent: continent
	}
}

function markCityVisited(x, y, continent) {
	var key = '*' + continent + '_' + y + '_' + x;
	gameField.visitedCities[key] = {
		name: gameField.map[continent].siteNames[y + '_' + x],
		x: x,
		y: y,
		continent: continent
	}
}

function getMapCoordsByScreenCoords(x, y, playerX, playerY) {
	if (typeof(playerX) == 'undefined') {
		playerX = gameField.playerX;
	}

	if (typeof(playerY) == 'undefined') {
		playerY = gameField.playerY;
	}

	return {
		x: x + playerX - 2,
		y: y + playerY - 2
	};
}

function tryMoveEnemy(x, y, x1, y1) {
	var mapChar = getMapChar(x1, y1);
	if (mapChar == '+') {
		if (x1 == gameField.playerX && y1 == gameField.playerY) {
			if (gameField.stuffCollected) {
				return false;
			}
			requestFightConfirmation(x, y, true);
			return true;
		}
		var oldKey = y + '_' + x;
		var newKey = y1 + '_' + x1;
		getMap().armies[newKey] = getMap().armies[oldKey];
		getMap().armies[oldKey] = 0;
		setMapChar(x1, y1, getMapChar(x, y));
		setMapChar(x, y, '+');
		
		if (getMap().friendlyFoes[oldKey]) {
			getMap().friendlyFoes[oldKey] = false;
			getMap().friendlyFoes[newKey] = true;
		}

		return true;
	} else {
		return false;
	}
}

function moveEnemies() {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH - 1; j++) {
			var mapCoords = getMapCoordsByScreenCoords(j, i, gameField.oldPlayerX, gameField.oldPlayerY);
			var ch = getMapChar(mapCoords.x, mapCoords.y);
			if (enemies[ch]) {
				var dx = 0, dy = 0;
				if (mapCoords.x < gameField.oldPlayerX) {
					dx = 1;
				} else {
					if (mapCoords.x > gameField.oldPlayerX) {
						dx = -1;
					}
				}
				if (mapCoords.y < gameField.oldPlayerY) {
					dy = 1;
				} else {
					if (mapCoords.y > gameField.oldPlayerY) {
						dy = -1;
					}
				}
				if (!tryMoveEnemy(mapCoords.x, mapCoords.y, mapCoords.x + dx, mapCoords.y + dy)) {
					if (!tryMoveEnemy(mapCoords.x, mapCoords.y, mapCoords.x + dx, mapCoords.y)) {
						tryMoveEnemy(mapCoords.x, mapCoords.y, mapCoords.x, mapCoords.y + dy);
					}
				}
			}
		}
	}
}

// After scouring the area,
// you fall upon a hidden
// treasure cache. You may:
// Take the 400 gold.
// Distribute the gold to
// the peasants, increasing
// your leadership by 8

// Dungeon
// 150 skeletons are available
// Cost= 40 each. GP = 6K
// You may recrui up to 29
// Recruit how many _

function showAdventureStatus() {
	var days;

	if (gameField.timeStop > 0) {
		days = getCaption("time stop") + ": " + gameField.timeStop;
	} else {
		days = getCaption("days") + ": " + gameField.daysLeft;
	}

	showStatus(capitalizeFirstLetter(getCaption("gold")) + ": " + gameField.gold + ", " + getCaption("income") + ": " + getIncome() + ", " + getCaption("leadership") + ": " + getLeadership() + ", " + days);
}

function processCiteInput(keyCode) {
	switch (keyCode) {
		case 27:
			closeCiteWindow();
			break;
		default:
			break;
	}
}

function searchArea() {
	showConfirmationDialog(capitalizeFirstLetter(getCaption('search')), [
		getCaption('It will take 10 days to do a'),
		getCaption('search of this area. Search?')
	], 'searchAreaConfirmation', function() {
		closeWindow('searchAreaConfirmation');
		gameField.timeStop = 0;
		waitDays(10, function() {
			if (gameField.playerX == gameField.sceptreX && gameField.playerY == gameField.sceptreY && gameField.continentIndex == gameField.sceptreContinent) {
				gameField.sceptreContinent = null;

				openInfoWindowExtended({
					name: 'infoWindow',
					title: capitalizeFirstLetter(getCaption('success')) + "!",
					width: config.SPRITE_WIDTH * config.SCALE_FACTOR * 5 - 16,
					height: config.SPRITE_HEIGHT * config.SCALE_FACTOR * 4,
					titleInterval: 32,
					lineInterval: 20,
					textLines: [
						getCaption('Congratulations') + ",",
						getCaption('You have recovered the Sceptre of Order from'),
						getCaption('the clutches of the evil Master Villains.'),
						getCaption('As a reward for saving himself and the four'),
						getCaption('continents from ruin, King Maximus and his'),
						getCaption('subjects reward you with a large parcel of'),
						getCaption('land, a rank of nobility and a medal'),
						getCaption('announcing your Final Score') + ': ' + getPlayerScore()
					],
					paddingLeft: 154,
					onDraw: function(context, boxLeft, boxTop) {
						var context = canvas.getContext("2d");
						context.drawImage(
							winImage,
							0,
							0,
							141,
							261,
							boxLeft + 5,
							boxTop + 5,
							141,
							261
						);

						context.font = "bold 30px Tahoma";
						context.fillStyle = "#FFFF00";
						context.fillText(getPlayerScore(), boxLeft + 154, boxTop + 230);
					},
					closeByAnyKey: true
				});
			} else {
				openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
					getCaption('Your search of this area'),
					getCaption('has revealed nothing.')
				]);
			}
		});
	}, function() {
		closeWindow('searchAreaConfirmation');
	});
}

function getDummyHandler(key, text, menuName, cascadeHandler) {
	return {
		'key': key,
		'text': capitalizeFirstLetter(getCaption(text)),
		'handler': function() {
			closeWindow(menuName);
			cascadeHandler(getKeyCode(key));
		}
	};
}

function showActionsMenu() {
	if (isWindowActive('citeWindow')) {
		return;
	}

	if (gameField.adventureMode) {
		showDialog({
			name: 'actionsMenu',
			textLines: [],
			title: capitalizeFirstLetter(getCaption('choose action')),
			variations: [
				getDummyHandler('A', 'view army', 'actionsMenu', processAdventureInput),
				getDummyHandler('C', 'controls', 'actionsMenu', processAdventureInput),
				getDummyHandler('D', 'dismiss', 'actionsMenu', processAdventureInput),
				getDummyHandler('F', 'fly', 'actionsMenu', processAdventureInput),
				getDummyHandler('I', 'view contract', 'actionsMenu', processAdventureInput),
				getDummyHandler('M', 'show map', 'actionsMenu', processAdventureInput),
				getDummyHandler('N', 'new continent', 'actionsMenu', processAdventureInput),
				getDummyHandler('P', 'puzzle solve', 'actionsMenu', processAdventureInput),
				getDummyHandler('Q', 'save', 'actionsMenu', processAdventureInput),
				getDummyHandler('S', 'search', 'actionsMenu', processAdventureInput),
				getDummyHandler('U', 'cast spell', 'actionsMenu', processAdventureInput),
				getDummyHandler('V', 'view character', 'actionsMenu', processAdventureInput),
				getDummyHandler('W', 'wait a week', 'actionsMenu', processAdventureInput),
				getDummyHandler('SPACE', 'pass', 'actionsMenu', processAdventureInput)
			],
			closeable: true
		});
	} else {
		showDialog({
			name: 'actionsMenu',
			textLines: [],
			title: capitalizeFirstLetter(getCaption('choose action')),
			variations: [
				getDummyHandler('A', 'view army', 'actionsMenu', processBattleInput),
				getDummyHandler('C', 'controls', 'actionsMenu', processBattleInput),
				getDummyHandler('G', 'give up', 'actionsMenu', processBattleInput),
				getDummyHandler('F', 'fly', 'actionsMenu', processBattleInput),
				getDummyHandler('I', 'current unit info', 'actionsMenu', processBattleInput),
				getDummyHandler('S', 'shoot', 'actionsMenu', processBattleInput),
				getDummyHandler('U', 'cast spell', 'actionsMenu', processBattleInput),
				getDummyHandler('W', 'wait', 'actionsMenu', processBattleInput),
				getDummyHandler('SPACE', 'skip', 'actionsMenu', processBattleInput)
			],
			closeable: true
		});
	}
}

function showControlsInfo() {
	openInfoWindowCondensed(capitalizeFirstLetter(getCaption('controls')), [
		'⇦|' + getCaption('go west'),
		'⇧|' + getCaption('go north'),
		'⇨|' + getCaption('go east'),
		'⇩|' + getCaption('go south'),
		'Home|' + getCaption('go north-west'),
		'PgUp|' + getCaption('go north-east'),
		'End|' + getCaption('go south-west'),
		'PgDn|' + getCaption('go south-east'),
		'A|' + getCaption('view army'),
		'C|' + getCaption('controls'),
		'F|' + getCaption('fly'),
		'I|' + getCaption('view contract'),
		'M|' + getCaption('show map'),
		'N|' + getCaption('new continent'),
		'P|' + getCaption('puzzle solve'),
		'Q|' + getCaption('save'),
		'S|' + getCaption('search'),
		'U|' + getCaption('cast spell'),
		'V|' + getCaption('view character'),
		'W|' + getCaption('wait a week')
	]);
}

function showBattleControlsInfo() {
	openInfoWindowCondensed(capitalizeFirstLetter(getCaption('controls')), [
		'⇦|' + getCaption('go west'),
		'⇧|' + getCaption('go north'),
		'⇨|' + getCaption('go east'),
		'⇩|' + getCaption('go south'),
		'Home|' + getCaption('go north-west'),
		'PgUp|' + getCaption('go north-east'),
		'End|' + getCaption('go south-west'),
		'PgDn|' + getCaption('go south-east'),
		'A|' + getCaption('view army'),
		'F|' + getCaption('fly'),
		'G|' + getCaption('give up'),
		'I|' + getCaption('unit info'),
		'S|' + getCaption('shoot'),
		'U|' + getCaption('cast spell'),
		'W|' + getCaption('wait'),
		getCaption('SPACE') + "|" + getCaption('skip move')
	]);
}

function makeBridge(dx, dy) {
	var x1 = gameField.playerX + dx;
	var y1 = gameField.playerY + dy;
	var mapChar = getMapChar(x1, y1);

	gameField.bridgeMode = false;

	if (mapChar != '.') {
		openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
			capitalizeFirstLetter(getCaption('not a suitable location for')),
			getCaption('a bridge.'),
			getCaption('What a waste of a good spell') + '!'
		]);
		return;
	} else {
		var map = getMap();
		if (x1 < 0 || y1 < 0 || x1 >= map.width || y1 >= map.height) {
			openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
				capitalizeFirstLetter(getCaption("you've built your bridge too far")) + ".",
				getCaption('What a waste of a good spell') + '!'
			]);
			return;
		}
	}

	setMapChar(x1, y1, dx == 0 ? '|' : '-');

	var x2 = x1 + dx;
	var y2 = y1 + dy;

	if (mapChar == '.') {
		setMapChar(x2, y2, dx == 0 ? '|' : '-');
	}
}

function processBridgeInput(keyCode) {
	switch (keyCode) {
		case 102:
		case 54:
		case 39: // right
			makeBridge(1, 0);
			break;
		case 100:
		case 52:
		case 37: // left
			makeBridge(-1, 0);
			break;
		case 104:
		case 56:
		case 38: // up
			makeBridge(0, -1);
			break;
		case 98:
		case 50:
		case 40: // down
			makeBridge(0, 1);
			break;
		default:
			break;
	}
}

function download(filename, text, encoding) {
	if (typeof(encoding) == 'undefined') {
		encoding = 'base64';
	}
	if (encoding == 'base64') {
		text = btoa(text);
	}
	var element = document.createElement('a');
	element.setAttribute('href', 'data:application/octet-stream;' + encoding + ',' + text);
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function isTableValue(arg) {
	var type = typeof arg;
	return (type != 'object' && type != 'function' && type != 'undefined');
}

function addTableValue(table, value) {
	if (typeof(table.data[value]) != 'undefined' || value == null || (value + "").length < 4) {
		return;
	}
	var encoded = '~' + table.count.toString(36);
	table.count++;
	table.data[value] = encoded;
	table.decodeData[encoded] = value;
}

function updateStringsTable(table, obj) {
	if (isTableValue(obj)) {
		addTableValue(table, obj);
		return;
	}

	if ($.isArray(obj)) {
		for (var i = 0; i < obj.length; i++) {
			updateStringsTable(table, obj[i]);
		}
	} else {
		if (typeof(obj) == 'object') {
			for (key in obj) {
				if (obj.hasOwnProperty(key)) {
					addTableValue(table, key);
					updateStringsTable(table, obj[key]);
				}
			}
		}
	}
}

function encodeLiteralUsingTable(table, obj) {
	if (typeof(table.data[obj]) != 'undefined' && obj != null) {
		return table.data[obj];
	}
	return obj;
}

function encodeUsingTable(table, obj) {
	if (isTableValue(obj)) {
		return encodeLiteralUsingTable(table, obj);
	}

	if (obj == null) {
		return null;
	}

	if ($.isArray(obj)) {
		var newArray = [];
		for (var i = 0; i < obj.length; i++) {
			newArray.push(encodeUsingTable(table, obj[i]));
		}
		return newArray;
	} else {
		if (typeof(obj) == 'object') {
			var newObject = {};
			for (key in obj) {
				if (obj.hasOwnProperty(key)) {
					var newKey = encodeLiteralUsingTable(table, key);
					newObject[newKey] = encodeUsingTable(table, obj[key]);
				}
			}
			return newObject;
		}
	}
	return obj;
}

function decodeLiteralUsingTable(table, obj) {
	if (typeof(obj) == 'undefined') {
		return obj;
	}

	if (typeof(table.decodeData[obj]) != 'undefined') {
		return table.decodeData[obj];
	}
	return obj;
}

function isTableIndex(s) {
	if (typeof(s) == 'object') {
		return false;
	}
	var str = s + "";
	if (str.length == 0) return false;
	return str.charAt(0) == '~';
}

function decodeUsingTable(table, obj) {
	if (obj == null) {
		return null;
	}

	if (isTableIndex(obj)) {
		return decodeLiteralUsingTable(table, obj);
	}

	if ($.isArray(obj)) {
		var newArray = [];
		for (var i = 0; i < obj.length; i++) {
			newArray.push(decodeUsingTable(table, obj[i]));
		}
		return newArray;
	} else {
		if (typeof(obj) == 'object') {
			var newObject = {};
			for (key in obj) {
				if (obj.hasOwnProperty(key)) {
					var newKey = key;
					if (isTableIndex(key)) {
						newKey = decodeLiteralUsingTable(table, key);
					}
					newObject[newKey] = decodeUsingTable(table, obj[key]);
				}
			}
			return newObject;
		}
	}
	return obj;
}

function cloneVillain(villain, level) {
	var result = {};

	for (var key in villain) {
		result[key] = villain[key];
	}

	result.army = modifyVillainArmy(villain.army, level);

	return result;
}

function fixVillains(villains, fixLevelBug) {
	if (typeof(fixLevelBug) == 'undefined') {
		return villains;
	}

	var result = [];
	for (var i = 0; i < villains.length; i++) {
		result.push(cloneVillain(villains[i], fixLevelBug));
	}

	return result;
}

function getSaveLiteralsTable(fixLevelBug) {
	var result = {
		count: 0,
		data: {},
		decodeData: {}
	};
	updateStringsTable(result, getInitialGameField());
	updateStringsTable(result, ['quantity', '100000', 'fog', 'oldPlayerX', 'oldPlayerY', 'unit', 'siteCoordsByName', 'isAdventure', 'orbX', 'orbY', 'siteNames', 'mapX', 'mapY', 'sceptreContinent', 'sceptreX', 'sceptreY', 'stuffCollected', 'citySpells', 'undefined']);
	updateStringsTable(result, fixVillains(villains, fixLevelBug));
	updateStringsTable(result, playerRoles);
	updateStringsTable(result, spells);
	updateStringsTable(result, adventureSpells);

	return result;
}

function createBitOutStream() {
	return {
		outString: '',
		bitBuffer: 0,
		bitPos: 1,
		outBit: function(bit) {
			this.bitBuffer += bit * this.bitPos;
			this.bitPos <<= 1;
			if (this.bitPos == 256) {
				this.flush();
			}
		},
		flush: function() {
			this.outString += String.fromCharCode(this.bitBuffer);
			this.bitBuffer = 0;
			this.bitPos = 1;
		},
		outBits: function(value, bits) {
			while (bits-- > 0) {
				this.outBit(value & 1);
				value >>= 1;
			}
		}
	};
}

function createBitInStream(sourceString) {
	return {
		sourceString: sourceString,
		bitPos: 1,
		bytePos: 0,
		endOfData: false,
		bitBuffer: sourceString.charCodeAt(0),
		getBit: function() {
			var result = (this.bitBuffer & this.bitPos) ? 1 : 0;
			this.bitPos <<= 1;
			if (this.bitPos == 256) {
				this.bitPos = 1;
				this.bytePos++;
				if (this.bytePos >= sourceString.length) {
					this.endOfData = true;
				} else {
					this.bitBuffer = sourceString.charCodeAt(this.bytePos);	
				}
			}
			return result;
		},
		getBits: function(bits) {
			var pos = 1;
			var result = 0;
			while (bits--) {
				result += this.getBit() * pos;
				pos <<= 1;
			}
			return result;
		}
	}
}

function lzwEncode(s) {
	var data = (s + "").split("");
	var currChar;
	var phrase = data[0];
	var dict = {};
	var code = 256;
	var bitStream = createBitOutStream();

	for (var i = 1; i < data.length; i++) {
		currChar = data[i];
		if (dict[phrase + currChar] != null) {
			phrase += currChar;
		}
		else {
			bitStream.outBits(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0), Math.ceil(Math.log2(code)));
			dict[phrase + currChar] = code;
			code++;
			phrase = currChar;
		}
	}

	bitStream.outBits(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0), Math.ceil(Math.log2(code)));;
	bitStream.flush();

	return bitStream.outString;
}

function saveMap() {
	var text = "";
	for (var i = 0; i < getMap().height; i++) {
		text += '"';
		for (var j = 0; j < getMap().width; j++) {
			text += getMapChar(j, i);
		}
		text += '" +' + "\r\n";
	}
	download('map' + gameField.continentIndex + '.txt', text);
}

function lzwEncodeSave(data) {
	return lzwEncode(JSON.stringify(encodeUsingTable(getSaveLiteralsTable(), data)));
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function isValidSave(field) {
	if (typeof(playerRoles[field.playerRole]) == 'undefined') {
		return false;
	}

	for (var continent = 0; continent < field.map.length; continent++) {
		for (var key in field.map[continent].armies) {
			if (field.map[continent].armies.hasOwnProperty(key)) {
				var army = field.map[continent].armies[key];
				if (army != null && typeof(army.length) != 'undefined') {
					for (var i = 0; i < army.length; i++) {
						if (!isNumeric(army[i].quantity)) {
							console.log("q:" + army[i].quantity);
							return false;
						}
					}
				}
			}
		}
	}

	return true;
}

function brutalFix(field) {
	if (typeof(playerRoles[field.playerRole]) == 'undefined') {
		field.playerRole = 'knight';
	}

	for (var continent = 0; continent < field.map.length; continent++) {
		for (var key in field.map[continent].armies) {
			if (field.map[continent].armies.hasOwnProperty(key)) {
				var army = field.map[continent].armies[key];
				if (army != null && typeof(army.length) != 'undefined') {
					for (var i = 0; i < army.length; i++) {
						if (!isNumeric(army[i].quantity)) {
							army[i].quantity = 25;
						}
					}
				}
			}
		}
	}

	return field;
}

function lzwDecodeSave(data) {
	if (data.charCodeAt(0) != '{'.charCodeAt(0)) {
		return 0;
	}

	data = lzwDecode(data);
	eval("obj=" + data + ";");
	var result = decodeUsingTable(getSaveLiteralsTable(), obj);

	if (result.version < config.VERSION) {
		return 1;
	}

	if (isValidSave(result)) {
		return result;
	}

	console.log('Savegame is broken. Trying to fix it...');

	for (var level = 0; level < 4; level++) {
		var table = getSaveLiteralsTable(level);
		var newResult = decodeUsingTable(table, obj);

		if (isValidSave(newResult)) {
			console.log('Fix done.');
			return newResult;
		}
	}

	console.log('Fix failed :( Apply brutal fix.');

	return brutalFix(result);
}

function lzwDecode(s) {
	var bitStream = createBitInStream(s);
	var currChar = String.fromCharCode(bitStream.getBits(8));
	var oldPhrase = currChar;
	var out = [currChar];
	var phrase;
	var code = 256;
	var dict = {};

	while (true) {
		var currCode = bitStream.getBits(Math.ceil(Math.log2(code + 1)));
		if (bitStream.endOfData) {
			break;
		}

		if (currCode < 256) {
			phrase = String.fromCharCode(currCode);
		}
		else {
			phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
		}

		out.push(phrase);
		currChar = phrase.charAt(0);
		dict[code] = oldPhrase + currChar;
		code++;
		oldPhrase = phrase;
	}
	return out.join("");
}

function saveGame() {
	var data = lzwEncodeSave(gameField);
	download(gameField.playerName + '.sav', data);
	// var data1 = lzwDecode(data);
	// download(gameField.playerName + '.sav.unp', data1);
}

function loadGame() {
	$('#loadFileInput').trigger('click');
}

function uintToString(uintArray) {
	return String.fromCharCode.apply(null, uintArray);
}

function arrayBufferToString(buffer) {
	var bytes = new Uint8Array(buffer);
	return uintToString(bytes);
}

function handleFileSelect(evt) {
	var files = evt.target.files;

	for (var i = 0, f; f = files[i]; i++) {
		var reader = new FileReader();

		reader.onload = (function(theFile) {
			return function(e) {
				var data = arrayBufferToString(e.target.result);
				
				if (!gameActive) {
					setup('knight', 0, '');
					gameActive = true;
				}

				gameField = lzwDecodeSave(data);

				switch (gameField) {
					case 0:
						openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
							capitalizeFirstLetter(getCaption('invalid save file')) + '.'
						], showRoleChoiceMenu);
						break;
					case 1:
						openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
							capitalizeFirstLetter(getCaption('wrong save file version')) + '.',
							getCaption('Use expanded game') + '.'
						], showRoleChoiceMenu);
						break;
					default:
						gameField = getFixedGameField(gameField);
						fixSpells();
						closeWindow('roleChoiceMenu');
						initAudio(gameField.playerRole, function() {
							draw();
							showAdventureStatus();
							music.travel.play();
						});
						break;
				}
			};
		})(f);

		reader.readAsArrayBuffer(f);
		break;
	}
}

function isFlyPossible() {
	if (gameField.playerX == gameField.boatX && gameField.playerY == gameField.boatY && gameField.boatContinent == gameField.continentIndex) {
		return false;
	}

	var result = true;
	var army = getPlayerArmy();

	for (var i = 0; i < army.length; i++) {
		if (!units[army[i].unit].fly || units[army[i].unit].skillLevel < 2) {
			result = false;
			break;
		}
	}

	return result;
}

function isLandingPossible() {
	var ch = getMapChar(gameField.playerX, gameField.playerY);
	return (ch == '+' || ch == '=');
}

function makeLanding() {
	if (isLandingPossible()) {
		gameField.isDragonRider = false;
		getMap().armies[gameField.playerY + '_' + gameField.playerX] = gameField.flyingArmy;
		gameField.flyingArmy = null;
		music.fly.pause();
		music.travel.currentTime = 0;
		music.travel.play();
	} else {
		showStatus(getCaption('Landing is not possible'));
	}
}

function startFly() {
	if (isFlyPossible()) {
		gameField.flyingArmy = getPlayerArmy();
		gameField.isDragonRider = true;
		getMap().armies[gameField.playerY + '_' + gameField.playerX] = null;
		music.travel.pause();
		music.fly.currentTime = 0;
		music.fly.play();
	} else {
		showStatus(getCaption('Fly is not possible'));
	}
}

function spreadLepra() {
	if (gameField.gold < 750) {
		openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
			capitalizeFirstLetter(getCaption('you will be Latvian until you have 750 gold!'))
		], showRoleChoiceMenu);
	} else {
		gameField.gold -= 750;
		lepraOn = true;
		showAdventureStatus();
	}
}

function processAdventureInput(keyCode) {
	if (isWindowActive('citeWindow')) {
		processCiteInput(keyCode);
		return;
	}

	if (isWindowActive('requestFightConfirmation') || isWindowActive('goldChestMenu') || isWindowActive('mapInfoWindow')) {
		return;
	}

	if (gameField.bridgeMode) {
		processBridgeInput(keyCode);
		return;
	}

	switch (keyCode) {
		case 101:
		case 53:
		case 32: // pass
			movePlayer(0, 0);
			break;
		case 102:
		case 54:
		case 39: // right
			movePlayer(1, 0);
			break;
		case 100:
		case 52:
		case 37: // left
			movePlayer(-1, 0);
			break;
		case 104:
		case 56:
		case 38: // up
			movePlayer(0, -1);
			break;
		case 98:
		case 50:
		case 40: // down
			movePlayer(0, 1);
			break;
		case 103:
		case 55:
		case 36: // left-up
			movePlayer(-1, -1);
			break;
		case 97:
		case 49:
		case 35: // left-down
			movePlayer(-1, 1);
			break;
		case 105:
		case 57:
		case 33: // right-up
			movePlayer(1, -1);
			break;
		case 99:
		case 51:
		case 34: // right-down
			movePlayer(1, 1);
			break;
		case 65: // view army
			openArmyView();
			break;
		case 67: // controls
			showControlsInfo();
			break;
		case 68: // dismiss
			showDismissArmyDialog();
			break;
		case 96:
		case 70: // fly
			if (gameField.isDragonRider) {
				makeLanding();
			} else {
				startFly();
			}
			break;
		case 73: // view contract
			showContractInfo();
			break;
		case 77: // show map
			openMapInfoWindow();
			break;
		case 80: // puzzle
			openPuzzleMap();
			break;
		case 81: // save
			saveGame();
			break;
		case 83: // search
			searchArea();
			break;
		case 85: // cast spell
			castSpell();
			break;
		case 86: // view character
			openCharacterView();
			break;
		case 87: // wait a week
			waitTurns(7 * 40, true);
			break;
		case 78:
			if (gameField.playerX == gameField.boatX && gameField.playerY == gameField.boatY && gameField.boatContinent == gameField.continentIndex) {
				performContinentTravel();
			} else {
				openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
					capitalizeFirstLetter(getCaption('you should be onboard')),
					getCaption('to travel between continents') + '!'
				]);
			}
			break;
		default:
			break;
	}
}

function setMap(ch) {
	if (gameField.map[0].data.indexOf(ch) >= 0 || isGround(groundChar(ch)) || ch == '|' || ch == '-') {
		setMapChar(gameField.playerX, gameField.playerY, ch);
	} else {
		alert(ch.charCodeAt(0));
	}
}

function processEditInput(keyCode) {
	switch (keyCode) {
		case 102:
		case 54:
		case 39: // right
			moveCursor(1, 0);
			break;
		case 100:
		case 52:
		case 37: // left
			moveCursor(-1, 0);
			break;
		case 104:
		case 56:
		case 38: // up
			moveCursor(0, -1);
			break;
		case 98:
		case 50:
		case 40: // down
			moveCursor(0, 1);
			break;
		case 103:
		case 55:
		case 36: // left-up
			moveCursor(-1, -1);
			break;
		case 97:
		case 49:
		case 35: // left-down
			moveCursor(-1, 1);
			break;
		case 105:
		case 57:
		case 33: // right-up
			moveCursor(1, -1);
			break;
		case 99:
		case 51:
		case 34: // right-down
			moveCursor(1, 1);
			break;
		case 27: // save
			saveMap();
			break;
		case 32: // ground
			setMap('+');
			break;
		case 49: // water
			setMap('.');
			break;
		case 90: // desert
			setMap('=');
			break;
		case 191: // sign
			setMap('a');
			break;
		case 189: // enemy castle gate
			setMap('%');
			break;
		case 220: // alcove
			setMap('*');
			break;
		case 222: // forest
			setMap('@');
			break;
		case 219: // bridge
			setMap('|');
			break;
		case 221: // bridge
			setMap('-');
			break;
		case 190: // rock
			setMap('#');
			break;
		case 192:
			openMapInfoWindow();
			break;
		case 48: // new continent
			performContinentTravel();
			break;
		default:
			setMap(String.fromCharCode(keyCode));
			break;
	}
}

function openPuzzleMap() {
	if (gameField.sceptreContinent == null) {
		openInfoWindow(capitalizeFirstLetter(getCaption('victory')) + "!", [
			capitalizeFirstLetter(getCaption("the Sceptre is already found!"))
		]);
	} else {
		gameField.puzzleMap = 0;
		setAnyKeyHandler(function () {
			gameField.puzzleMap = null;
		});
	}
}

function allowedChar(keyCode) {
	return keyCode >= 'A'.charCodeAt(0) && keyCode <= 'Z'.charCodeAt(0);
}

function processFieldInput(keyCode) {
	var text = activeInputField.text + "";

	if ((keyCode >= 48 && keyCode <= 57) || (!activeInputField.isNumeric && allowedChar(keyCode))) {
		var newText = text + String.fromCharCode(keyCode);

		if (activeInputField.isNumeric) {
			var numValue = parseInt(newText);
			if (numValue > activeInputField.maxValue) {
				return true;
			}
		}

		if (newText.length <= activeInputField.maxLength) {
			activeInputField.text = newText;
		}
		return true;
	}

	switch (keyCode) {
		case 27:
			closeWindow('keyboard');
			return false;
		case 8:
			if (text.length > 0) {
				activeInputField.text = text.substring(0, text.length - 1);
			}
			break;
		case 13:
			if (text.length > 0 || activeInputField.allowEmpty) {
				closeWindow('keyboard');
				activeInputField.callback();
			}
			break;
		default:
			break;
	}

	return true;
}

function mute(audio) {
	for (var key in audio) {
		if (audio.hasOwnProperty(key)) {
			audio[key].muted = !audio[key].muted;
		}
	}
}

function processInput(keyCode) {
	if (gameField != null && gameField.adventureMode) {
		codeStr += String.fromCharCode(keyCode);
		if (codeStr.length > 5) {
			codeStr = codeStr.substring(1, codeStr.length);
		}

		switch (codeStr) {
			case 'LEPRA':
				spreadLepra();
				codeStr = '';
				return;
			case 'GOLDM':
				gameField.gold += 100000;
				codeStr = '';
				showAdventureStatus();
				return;
			case 'LEADR':
				gameField.leadership += 1000;
				codeStr = '';
				showAdventureStatus();
				return;
			default:
				break;
		}
	}

	if (keyCode == 189 || keyCode == 109 || keyCode == 173) {
		mute(sounds);
	} else {
		if (keyCode == 187 || keyCode == 107 || keyCode == 61) {
			mute(music);
		}
	}

	if (processAnyKeyHandler()) {
		return;
	}

	var clickHandler = getClickHandlerByKeyCode(keyCode);

	if (clickHandler != null) {
		clickHandler();
		return;
	}

	if (activeInputField != null) {
		if (processFieldInput(keyCode)) {
			return;
		}
	}

	if (gameField != null) {
		if (gameField.editMode) {
			processEditInput(keyCode);
		} else {
			if (gameField.adventureMode) {
				processAdventureInput(keyCode);
			} else {
				processBattleInput(keyCode);
			}
		}
	}
}

function showStartScreen() {
	var context = canvas.getContext("2d");
	context.drawImage(
		selectImage,
		0,
		0,
		getWindowWidth(),
		getWindowHeight(),
		0,
		0,
		getWindowWidth(),
		getWindowHeight()
	);
}

function showNameInput() {
	showWindow('nameInputDialog');
	showNameInputField(showStatus(getCaption('Enter your name') + ": "));
}

function modifyVillainArmy(villainArmy, level) {
	var army = cloneArmy(villainArmy);

	if (typeof(level) == 'undefined') {
		level = gameField.difficultyLevel;
	}

	for (var j = 0; j < army.length; j++) {
		army[j].quantity = Math.ceil(army[j].quantity * difficultyLevels[level].scoreModifier);
	}
	return army;
}

function setDifficulty(index) {
	chosenDifficulty = index;
}

function showDifficultyMenu() {
	var variations = [];
	for (var i = 0; i < difficultyLevels.length; i++) {
		(function (index) {
			variations.push({
				key: String.fromCharCode(index + 'A'.charCodeAt(0)),
				text: capitalizeFirstLetter(getCaption(difficultyLevels[index].name)),
				handler: function() {
					closeWindow('difficultyChoiceMenu');
					showStartScreen();
					setDifficulty(index);
					showNameInput();
				}
			});
		})(i);
	}

	showStatus(capitalizeFirstLetter(getCaption('how hard are you?')));

	showDialog({
		name: 'difficultyChoiceMenu',
		textLines: [],
		title: capitalizeFirstLetter(getCaption('choose difficulty level')),
		variations: variations,
		closeable: false
	});
}

function initAudio(chosenRole, callback) {
	var role = playerRoles[chosenRole];

	showStatus(getCaption("Loading music and sounds..."));

	if (window.soundMode == 0 || window.soundMode == 2) {
		sounds = {
			step: new Audio('music/step.mp3'),
			noStep: new Audio('music/nostep.mp3'),
			chest: new Audio('music/chest.mp3'),
			hit: new Audio('music/hit.mp3'),
			magic: new Audio('music/magic.mp3'),
			fireball: new Audio('music/fireball.mp3'),
			'lightning bolt': new Audio('music/lightning.mp3'),
			'turn undead': new Audio('music/turn_undead.mp3'),
			arrow: new Audio('music/arrow.mp3'),
			map: new Audio('music/map.mp3')
		};
	} else {
		sounds = {
			step: getDummyAudio(),
			noStep: getDummyAudio(),
			chest: getDummyAudio(),
			hit: getDummyAudio(),
			magic: getDummyAudio(),
			fireball: getDummyAudio(),
			'lightning bolt': getDummyAudio(),
			'turn undead': getDummyAudio(),
			arrow: getDummyAudio(),
			map: getDummyAudio()
		};
	}

	if (window.soundMode == 0 || window.soundMode == 1) {
		music = {
			travel: new Audio('music/' + role.travelMusic),
			battle: new Audio('music/hachaturyan_dance.mp3'),
			plains: new Audio('music/theodorakis_ena_to_helidoni.mp3'),
			cave: new Audio('music/grieg_cave.mp3'),
			city: new Audio('music/chaikovsky_barcarola.mp3'),
			forest: new Audio('music/strauss_wienerwald.mp3'),
			dungeon: new Audio('music/gounod_funeral.mp3'),
			battle: new Audio('music/wagner_valkyries.mp3'),
			'castle of King Maximus': new Audio('music/tchaikovsky_flowers.mp3'),
			'castle of Connor The Barbarian': new Audio('music/bethoven_khil_irish.mp3'),
			fly: new Audio('music/borodin_fly.mp3'),
			win: new Audio('music/verdi_pavorotti_brindisi.mp3')
		};
	} else {
		music = {
			travel: getDummyAudio(),
			battle: getDummyAudio(),
			plains: getDummyAudio(),
			cave: getDummyAudio(),
			city: getDummyAudio(),
			forest: getDummyAudio(),
			dungeon: getDummyAudio(),
			battle: getDummyAudio(),
			'castle of King Maximus': getDummyAudio(),
			'castle of Connor The Barbarian': getDummyAudio(),
			fly: getDummyAudio(),
			win: getDummyAudio()
		};
	}

	window.audioInitDone = false;
	window.loadedSounds = 0;
	window.soundsCount = 0;

	for (var key in music) {
		if (music.hasOwnProperty(key)) {
			window.soundsCount++;
			music[key].addEventListener('ended', function() {
				this.currentTime = 0;
				this.play();
			}, false);
			music[key].addEventListener('canplay', function() {
				onLoadSound(callback);
			}, false);
			music[key].addEventListener('canplaythrough', function() {
				// fix Chromium issue with not releasing sockets (https://code.google.com/p/chromium/issues/detail?id=234779)
				this.play();
				this.pause();
			}, false);
		}
	}

	for (var key in sounds) {
		if (sounds.hasOwnProperty(key)) {
			window.soundsCount++;
			sounds[key].addEventListener('canplay', function() {
				onLoadSound(callback);
			}, false);
			sounds[key].addEventListener('canplaythrough', function() {
				// fix Chromium issue with not releasing sockets (https://code.google.com/p/chromium/issues/detail?id=234779)
				this.play();
				this.pause();
			}, false);
		}
	}
}

function getDummyAudio() {
	return {
		addEventListener: function(eventName, handler) {
			if (eventName == 'canplay') {
				setTimeout(handler, 1);
			}
		},
		play: function() {
		},
		pause: function() {
		}
	};
}

function onLoadSound(callback) {
	if (window.audioInitDone) {
		return;
	}
	window.loadedSounds++;
	if (window.loadedSounds >= window.soundsCount) {
		window.audioInitDone = true;
		music.travel.play();
		callback();
	}
}

function showRoleChoiceMenu() {
	var variations = [];
	gameField = null;
	for (var i = 0; i < playerRoleNames.length; i++) {
		(function (index) {
			variations.push({
				key: String.fromCharCode(index + 'A'.charCodeAt(0)),
				text: capitalizeFirstLetter(getCaption(playerRoleNames[index])),
				handler: function() {
					closeWindow('roleChoiceMenu');
					showStartScreen();
					chosenRole = playerRoleNames[index];
					initAudio(chosenRole, showDifficultyMenu);
				}
			});
		})(i);
	}

	variations.push({
		key: 'SPACE',
		text: capitalizeFirstLetter(getCaption('load game')),
		handler: function() {
			loadGame();
		}
	});

	showStatus(capitalizeFirstLetter(getCaption('which role do you prefer?')));

	showDialog({
		name: 'roleChoiceMenu',
		textLines: [],
		title: capitalizeFirstLetter(getCaption('select character')),
		variations: variations,
		closeable: false
	});
}

function showSoundMenu() {
	var variations = [];
	for (var i = 0; i < soundModeNames.length; i++) {
		(function (index) {
			variations.push({
				key: String.fromCharCode(index + 'A'.charCodeAt(0)),
				text: capitalizeFirstLetter(getCaption(soundModeNames[i])),
				handler: function() {
					closeWindow('soundChoiceMenu');
					showStartScreen();
					window.soundMode = index;
					showRoleChoiceMenu();
				}
			});
		})(i);
	}

	showDialog({
		name: 'soundChoiceMenu',
		title: getCaption('Select sound mode:'),
		textLines: [],
		variations: variations,
		closeable: false
	});
}

function showLanguageMenu() {
	var variations = [];
	for (var i = 0; i < languageNames.length; i++) {
		(function (index) {
			variations.push({
				key: String.fromCharCode(index + 'A'.charCodeAt(0)),
				text: capitalizeFirstLetter(getCaption(languages[languageNames[index]].nativeName)),
				handler: function() {
					closeWindow('languageChoiceMenu');
					showStartScreen();
					config.language = languageNames[index];
					showSoundMenu();
				}
			});
		})(i);
	}

	showDialog({
		name: 'languageChoiceMenu',
		title: '',
		titleInterval: 0,
		textLines: [],
		variations: variations,
		closeable: false
	});
}

function startMenu() {
	gameField = null;
	showStartScreen();
	setTimeout(function() {
		showLanguageMenu();
	}, 1000);
}

function startGame() {
	if (!(window.warriorsReady && window.warriorsMirrorReady && window.groundReady && window.menuReady && window.magicReady && window.adventure1Ready && window.adventure2Ready && window.adventure3Ready && window.cursorReady && window.cursorMirrorReady && window.cursorSimpleReady && window.sitesReady && window.paneReady && window.villainsReady && window.rolesReady && window.viewReady && window.winReady && window.selectReady && window.titanReady && window.lepraReady && window.lepraGreyReady)) {
		setTimeout(startGame, 50);
	} else {
		gameLoop();
		$('#loadFileInput').change(handleFileSelect);
		$(document).keyup(function(e) {
			processInput(e.keyCode);
		});
		startMenu();
	}
}

function getRemainingVillainsCount() {
	if (gameField.playerLevel >= playerRoles[gameField.playerRole].villains.length) {
		return null; // nobody to catch
	}

	return playerRoles[gameField.playerRole].villains[gameField.playerLevel + 1] - gameField.villainsCaught.length;
}

// TODO
function promotePlayer() {
	gameField.playerLevel++;
	gameField.income += playerRoles[gameField.playerRole].baseIncome[gameField.playerLevel] - playerRoles[gameField.playerRole].baseIncome[gameField.playerLevel - 1];
	gameField.leadership += playerRoles[gameField.playerRole].baseLeadership[gameField.playerLevel] - playerRoles[gameField.playerRole].baseLeadership[gameField.playerLevel - 1];
	gameField.spellCapacity += playerRoles[gameField.playerRole].baseSpellCapacity[gameField.playerLevel] - playerRoles[gameField.playerRole].baseSpellCapacity[gameField.playerLevel - 1];
	gameField.spellPower += playerRoles[gameField.playerRole].baseSpellPower[gameField.playerLevel] - playerRoles[gameField.playerRole].baseSpellPower[gameField.playerLevel - 1];
}

function getLeadership() {
	return gameField.leadership + gameField.extraLeadership;
}

function placeVillainToCastle(map, castleName, ownerName) {
	var coords = map.siteCoordsByName[castleName];
	map.armies[coords.y + '_' + coords.x] = modifyVillainArmy(villainsByName[ownerName].army);
	map.ownerToCastle[castleName] = ownerName;
	return map;
}

function isVillainCaught(name) {
	if (typeof(villainsByName) == 'undefined') {
		return false;
	}
	var villain = villainsByName[name];
	return $.inArray(villain.id, gameField.villainsCaught) != -1;
}

function getFixedGameField(result) {
	if (result.playerRole == 'crusader') {
		result.playerRole = 'paladin';
	} else {
		if (result.playerRole == 'chieftain') {
			result.playerRole = 'barbarian';
		}		
	}

	setMapChar(7, 17, '@', 1);

	if (result.map[3].ownerToCastle['West'] == 'Nicas Leftshow' && isVillainCaught('Nicas Leftshow')) {
		delete result.map[3].ownerToCastle['West'];
	}

	if (result.map[3].ownerToCastle['Southwest'] == 'Ernest Mudla' && isVillainCaught('Ernest Mudla')) {
		delete result.map[3].ownerToCastle['Southwest'];
	}

	if (result.map[3].ownerToCastle['Southeast'] == 'Vedogor' && isVillainCaught('Vedogor')) {
		delete result.map[3].ownerToCastle['Southeast'];
	}

	if (result.map[3].ownerToCastle['East'] == 'Victor Metrik' && isVillainCaught('Victor Metrik')) {
		delete result.map[3].ownerToCastle['East'];
	}

	if (typeof(result.map[3].ownerToCastle['South-1']) != 'undefined' && result.map[3].ownerToCastle['South-1'] == 'Nicas Leftshow' && !isVillainCaught('Nicas Leftshow')) {
		result.map[3] = placeVillainToCastle(result.map[3], 'West', 'Nicas Leftshow');
		delete result.map[3].ownerToCastle['South-1'];
	}

	if (typeof(result.map[3].ownerToCastle['South-2']) != 'undefined' && result.map[3].ownerToCastle['South-2'] == 'Ernest Mudla' && !isVillainCaught('Ernest Mudla')) {
		result.map[3] = placeVillainToCastle(result.map[3], 'Southwest', 'Ernest Mudla');
		delete result.map[3].ownerToCastle['South-2'];
	}

	if (typeof(result.map[3].ownerToCastle['South-5']) != 'undefined' && result.map[3].ownerToCastle['South-5'] == 'Vedogor' && !isVillainCaught('Vedogor')) {
		result.map[3] = placeVillainToCastle(result.map[3], 'Southeast', 'Vedogor');
		delete result.map[3].ownerToCastle['South-5'];
	}

	if (typeof(result.map[3].ownerToCastle['South-6']) != 'undefined' && result.map[3].ownerToCastle['South-6'] == 'Victor Metrik' && !isVillainCaught('Victor Metrik')) {
		result.map[3] = placeVillainToCastle(result.map[3], 'East', 'Victor Metrik');
		delete result.map[3].ownerToCastle['South-6'];
	}

	return result;
}

function getInitialGameField() {
	return {
		version: config.VERSION,
		visitedCastles: {},
		visitedCities: {},
		difficultyLevel: 1,
		timeStop: 0,
		mapParts: [],
		castlesGarrisoned: [],
		followersKilled: 0,
		hasSiegeWeapons: false,
		hasMagicSkill: false,
		continentIndex: 0,
		gold: 1000,
		leadership: 1000,
		extraLeadership: 0,
		income: 100,
		spellPower: 1,
		spellCapacity: 0,
		daysLeft: 3 * 365,
		turnsLeft: 40,
		adventureMode: true,
		editMode: false,
		isDragonRider: false,
		playerLevel: 0,
		artefactsCollected: [],
		villainsCaught: [],
		freeVillains: [],
		puzzleMap: null,
		boatX: null,
		boatY: null,
		boatContinent: 0,
		isLeftDirected: false,
		isBoatLeftDirected: false,
		sideToMove: 0,
		playerX: 0,
		playerY: 0,
		playerRole: 'knight',
		playerName: 'Noname',
		contract: null,
		playersInfo: {
			0: {
				isHuman: true,
				spellCasted: false,
				spells: {
				}
			},
			1: {
				isHuman: false,
				spellCasted: false,
				spells: {
				}
			},
			2: {
				isHuman: false,
				spellCasted: false,
				spells: {
				}
			}
		},
		map: [
			{
				chances: {
					gold: 0x3d,
					income: 0x51,
					spellPower: 0,
					spellCapacity: 0x56,
					extraSpells: 0x65,
					baseGold: 0,
					extraGold: 0x5,
					baseIncome: 0x9,
					extraIncome: 0x29,
					spellCapacityCount: 0x1,
					extraSpellsCount: 0x1
				},
				castleMonsters: {
					minLevel: 1,
					maxLevel: 4,
					avgCost: 1000
				},
				name: 'Continentia',
				minDwellingsLevel: 1,
				maxDwellingsLevel: 3,
				available: true,
				orbFound: false,
				friendlyFoesCount: 5,
				cities: ['Bayside', "Path's End", 'Lakeview', 'Fjord', 'Xoctan', 'Quiln Point', "King's Haven", 'Nyre', 'Riverton', 'Isla Vista', 'Hunterville'],
				castles: ['Vutar', 'Rythacon', 'Portalis', 'Nilslag', 'Azram', 'Irok', 'Wankelforte', 'Cancomar', 'Faxis', 'Ophiraund', 'Kookamunga'],
				castleToCity: {
					'Bayside': 'Ophiraund',
					'Xoctan': 'Kookamunga',
					'Nyre': 'Portalis',
					'Isla Vista': 'Rythacon',
					'Hunterville': 'Vutar',
					'Quiln Point': 'Irok',
					"King's Haven": 'Nilslag',
					'Riverton': 'Azram',
					'Fjord': 'Wankelforte',
					"Path's End": 'Cancomar',
					'Lakeview': 'Faxis'
				},
				spellToCity: {
					'Hunterville': 'bridge'
				},
				ownerToCastle: {
					'Cancomar': 'Princess Emrakoba',
					'Portalis': 'Eleonor Meezul Jinn',
					'Wankelforte': 'Jeegur Dark',
					'Faxis': 'Reynold Blondiot'
				},
				width: 64,
				height: 64,
				armies: {},
				portals: {},
				entryPoint: {
					x: 11,
					y: 61
				},
				fixedDwellings: [
					{
						x: 27,
						y: 52,
						unit: 17
					}
				],
				data:   "................................................................" +
						"................................................................" +
						"................................................................" +
						"...########..##############.......##BH+++.....##++++H++++++B...." +
						"...#####################################+++b+B##+....++c246@@..." +
						"...##246+######BH+++++++H###############+A+++++++.....++3%7@@..." +
						"...##3%7+...########+##BH#####O+#####++++..............++++B...." +
						"...##+++H....#######+########++++++##+.........................." +
						"...##++j..........##+######+++++..+##+.........................." +
						"...##+##............+++++++++......++++++H......................" +
						"...##+##...##...........................+++++++++..............." +
						"...##+########...........................++#####+++++..........." +
						"...##+########.............................#########++.........." +
						"...##+++##B.........+246H..........246A.......#######++........." +
						"...####+##.........+D3%7k+.........3%7+++.........####++B@@@...." +
						"...####+##........+++H+++++......+++H++++@@........####++@@@...." +
						".....##+###......................+@@@@@@+@@@@++B....####++@@...." +
						".....##+###......................+@@@@@@+@@@@+@@@....####+@@@..." +
						".....##++###.....................+@@++++++^@@+@@@B....###H@@@..." +
						".....###+###....+A............++++@@+@@@@@@@@+B@@@+....##++@@..." +
						".....###+####++++++++......++++@@@@@+@@@@@@@@@@@@@++...##++@@..." +
						".....###++####+==+==++++++++@@@@@@@@+@@@@@@@@@@@@@.....##H+@@..." +
						"....####+l####+==+==@@@@@@@@@@@@@H+++@@246@@B+++++....+##++@@..." +
						"....###+++++++++++@@@@@@@@@@@@@++++++@@3%7@@@@@@@....+D##++++..." +
						"...###!++###@@@@@@@@@@@+++++++++++m+B@@+++@@@@@@@...+####@@@+..." +
						"...#########@@@@@@@@++++@@@@@@@@@@@@@@@@+@@@@@.....i+####@@@+..." +
						"...#########@@++++++H@@@@@@@@@@@@@@@@@@@+@@........+++++H++++..." +
						"...@@@@@@@@@@@+@@@@@@@@@@@+++++E+...............++++##@@+@@@^..." +
						"...@@@@@@@@@@@+@@@@@@@@B++....................A++B####@@+@@@...." +
						"...@@BH++++++++@@C++................+###+#############++++++...." +
						"...@@@@@@@@@@++h............############+############++@@@aB...." +
						"...@@@@@@@@@@++.......#################====###B/#####++@@@......" +
						"........++246++....###########B===============++###+++.........." +
						"........++3%7++....#####========================+##+............" +
						".........++H+++....+++++===============D==========H+............" +
						"..........g++++....#####=====246==================+A.....@@....." +
						"............++A....#######===3%7..================+....@@@@@...." +
						"...@@@@............++B####===++B..================+....@@@@@@..." +
						"...@@@@............++246##========================+...@@@@@@@..." +
						".....+++++++.......++3%7####=============B========+...@@@246...." +
						".....+#####+++++....++H+####======================+...@@@3%7...." +
						".....+#####++++H........#######================B==+....@@++@@..." +
						".....+##B######++A.......B######===============++++....@@+@@@..." +
						"...+++##H######+++++++.......#####+B===========+==++....H+@@@..." +
						"...H####+##*+##B++++++.......B########=======+++==++............" +
						"...+####+###+####...++++++H....+n########C+==H++++++............" +
						"...+##BH+###+####...+++B@@+....+++++#########++##+##B##F........" +
						"...+####+###+++##...p+@@@@+@@..++@@++++######r+##+##+##+++......" +
						"...B####+#####+######+@@@@+@@..++@@@@@++B@@@@@++++H+++@@@H......" +
						"...###++++####H######+@@+++@@...+@@@@@@@@@@@@@++@@+@@+@@@++B...." +
						"...###+##++++++++++##E@@+@@@@...+++@@@@@@@@B@@++@@A@@+++++......" +
						"....##+####+######+####++@@@@A.....++@@@q@@+@@+++..............." +
						"....##+####+######B####++o+C++.......++++@@++++++..............." +
						"....##H+26B+v26u#####++H++++++++H......H++++@@.................." +
						"...f###+37B++37+#####++#########+++......+++@@.......+++..@@...." +
						"....###+2624626+##+++++###########+@@.......@@......++H++B@@...." +
						"....##++3735737+++++########++####+@@++..........B@@+246+@@@...." +
						".....e+@@26+26@@++#######E++++++++H++++246......@@@@+3%7+@@@...." +
						"......+@@37+37@@++##################+++3%7.....@@@@@+++++A......" +
						"...B..+++++++++++..+B#################++++...@@@@@C+............" +
						"...d....B...A+t++..+++B......++++B####s......@@@................" +
						"................................................................" +
						"................................................................" +
						"................................................................"
			},
			{
				name: 'Waternia',
				chances: {
					gold: 0x42,
					income: 0x56,
					spellPower: 0x57,
					spellCapacity: 0x5c,
					extraSpells: 0x65,
					baseGold: 0x04,
					extraGold: 0x10,
					baseIncome: 0x31,
					extraIncome: 0x33,
					spellCapacityCount: 0x1,
					extraSpellsCount: 0x1
				},
				castleMonsters: {
					minLevel: 2,
					maxLevel: 5,
					avgCost: 3000
				},
				minDwellingsLevel: 2,
				maxDwellingsLevel: 4,
				available: false,
				orbFound: false,
				friendlyFoesCount: 7,
				cities: ['Volgorod', 'Homsburg', 'Banev', 'Burburg', 'Skeppsgaard', 'Børkholm', 'Krizhopol', 'Glupogorsk', 'Kugelheim', 'Cornburg', 'New Barns', 'Barn', 'Lukovo', 'Elmpark', 'Kotlov', 'Itchtos', 'Westbumpshire'],
				castles: ['Chernov', 'Neustein', 'Kologrive', 'Kozlov', 'Colossus', 'Morgenhaus', 'Corkberg', 'Driffen'],
				castleToCity: {
					'Skeppsgaard': 'Chernov',
					'Krizhopol': 'Neustein',
					'New Barns': 'Kologrive',
					'Barn': 'Kozlov',
					'Cornburg': 'Colossus',
					'Lukovo': 'Morgenhaus',
					'Kotlov': 'Corkberg',
					'Elmpark': 'Driffen'
				},
				spellToCity: {
				},
				ownerToCastle: {
					'Corkberg': 'Vitas Milonos',
					'Driffen': 'Wildimir the Blackbrow'
				},
				width: 98,
				height: 66,
				armies: {},
				portals: {},
				entryPoint: {
					x: 10,
					y: 0
				},
				fixedDwellings: [],
				data:
					"..............{$}................................................................................." +
					"..............TUW..........................................................a++S++++++............." +
					"..+++++++++++AXYZSA++++++++++S++++++++++++B++..++++++++++++++++++++....k+...++B++A........B+++++.." + // Volgorod, Homsburg, Banev
					".+############[:]###########################+++########B#########B++.....................#######+." +
					".+############...############################+B####################++...............############+." +
					".+##.......BB.....BB......................#######....#####.....######.......######..#######S+B##B." +
					".+##.......++.....==.......................######................######..#############@@B++..B##+." +
					".+####.....++.....==...............S++B............................###########..######@@+++...##+." +
					".+####.....+++SSS+++........AB......++.............@@@@@.............######...........@@..+...##+." + // Burburg
					".++S##......+++++++.........+++.................l++@@@@@+...@@@.......................B...+++R##+." +
					".+++##.......+oAn+............+S++...............+++++++++..@@@+..............+++++...+.....+###+." + // Skeppsgaard
					".+++####.......................|++++++............+B..S..B++++++++......+......+DS+++++.....+###+." +
					".+++####.......................|...B++S@@@@S@@.............+B@@@@+@@...@@++........+++.....+S##B+." +
					".+B==^##........S..............|......+@@@@+@@...............@@@@+@@+++@@+++B......B+.....@@B##+.." +
					"..+==B##@@..+246+..............|.......++++++.......@@...........+++++++++@@@@..+.........@@###+.." +
					"...++###@@+++3%7+...++.........|.........S+B+.....@@@@@@@........S+@@@@B++@@@@+++..........B###+.." + // *Chernov
					"...++###F++++++++..A+S+........|...........+++....@@@@@@@@@........@@@@@@+++@@+++.....@@....##B..." + // Børkholm
					".+++B##B@@@@..B+...++++........|...........++++..B@@B++@@@@+++b......@@@@@@S++++......@@+...##+..." +
					".+++###@@@@@......+++B.....++A++............@@@+@@@@@+++++++++@@.......@@@@@+++........++...##+..." + // Krizhopol
					".+..###@@.........@@+.....+=====+...........@@@+@@@@@+246@@+..@@++......+@@@@++........++B..##+..." + // *Neustein
					".+..##B+.......S..@@......+=====+------------S+++++++S3%7@@....B+++......+@@@++.......S+@@..##S+.." +
					".+####.......+++..........+==B==+............@@+@@@@@++++@@......+@@......+@@@+......+++@@..###+.." +
					".+####......+##.......A...+=====+............@@+@@@@@+++@@@......+@@D.....+@@@+.....+@@++...###++." + // Glupogorsk
					".S##+A...+++B##..+....+---+=====+...........+@@++++@@@@+@@@+.....+@@@@...++@@++.....+@@+.....##++." + // Kugelheim
					".+##+++++#############+....+S+++...........+++++@@+@@@@++++++....+@@@@....+@@++....++@@B.....##++." +
					".B##++##+#############+;.....|............S++B..@@++B@@+@@@++....S++++....+@@@+...@@+@@@+....###+." +
					".+###+##+++++++++++++++##....|...........@@++....S+++@@+@@@++.....++@@....+@@@+...@@+@@@+S...###+." +
					"..###+##S+###+######+++##...B+.........@@@@+.....@@@+@@+@@+........+@@.....++++....++@@B++....##+." +
					"..+##+###+###+######+####...+S+==...@@@@@@@+.....@@@+@@+@@.........+@@.............+B@@@+.....##+." +
					".++##+###+##++++++##+####.....+==..+@@@@@++..........A++.....++....B@@..++........B++@@@+.....##+." + // Cornburg
					".++##++##+##+####+##+##++B....B++..++++++++.................+++....+@@..+........+++++++.....B##+." +
					".S+###+##+##+####+##+##+246.....++++++.........B............+......+@@.........@@+^@@@.....+++##+." + // *Kologrive
					".++###+##+##+##DS+##++++3%7+.....+@@..........##...................+@@.......@@@@+@@@@......+###+." +
					".++D##+##+##+#######+##+++++A.....@@......+...##....+##S...........+@@...@@@@@@@@+@@@.......S###+." + // New Barns
					".i+S##+##+##+#######B##++++++##.........##+B...++..^+##B...........+@@...@@@@@@+++@@....+....##B+." +
					".++B##+##+##++++++#####+#######+......S+##+....S....+###+B........++@@..B+++++++++@@...+B+...##++." +
					".++###+##+#######+#####+#######++.....++++....++....+###++.......B++@@...+++++..........+....##++." +
					".+####+##+#######+##B##++++++++++....##++....B###....++++@@.....246++........................##++." + // *Kozlov
					".+###++++++++SB##+##S##+##++##+##....##++....+###+....+++@@....+3%7++...........S............##S+." +
					".+##B+###+#######+##+##+###+##+##....###+....+246+B...+..@@...A+++++...B.......+++...........###+." + // Barn, *Colossus
					".+###+###+#######+##+##+###+##+##....###++...+3%7++...+.......####++..@@@.....B++@@..+++S....###+." +
					".+###++S+++++++++++++##+B##+##+##........++..j+===+...........####S+..@@@B..B++..@@..+++++++S+##+." +
					".+##B+############+####+###+##+##........++...+===.........S.....+++...@@@+++@@..+.......+B..B##+." +
					".B###+############+####+###+##+##........B+....==........+++B....+##...@@@246@@+++.......+....##+." + // *Morgenhaus
					".+###+##++S++++++++++++++##+##+##...B+....++...++....c+++++......+##B...@@3%7@@+S...===..+....##+." +
					".+##C+##+#########+##+##+##+##+++...++....++...S+...+++B##....+....+.....++++++.....===..++..B##+." +
					".+###+##+#########+##+##+##+##+++...S+...d+...A++..++++###...++...........+@@+.....===....++++##+." + // Lukovo
					".+###+##+##B+++++++##+##+##+##+##...++........++...+##+###...++++.....e....@@.....S===.....+++##+." +
					".HF##+##+####+#######+##+##+##+##...+##.......++....##+##....++.....+++..........B+===.....S+B##+." +
					".+S##+##+####S#######+##+##+##+##....###...B...+S.....+##.....+...B++...........B+..+...+..+####+." +
					".++##+##+##++++++++++++++##+##+##....####..+....==....+++........@@+......+....+++..+...+..+####+." +
					".++##+##+##+246+###########+##+###....###..++...==+....+++.......@@......==...D+++++B..++..+##..+." + // *Corkberg
					".+B##+##+##+3%7+###########+##+###.........===....+B....B+@@....+++.....S==+...S..++...++..+##..+." +
					".+###+##+##+++++++++++++++++##++##.........===....++......@@B...++@@...+++++...........++..+##S++." +
					".+###+##+##+@@@@@@@+@@@@@@+####+##.......S+++....+++.............+@@...++..B..........++...B###+.." +
					".+##B+##+##+@@@@@@@+@@@@@@+####+###...m++++A.....++...............++..B+.......+..+..++.....###+.." + // Elmpark
					"..###++++##+@@BS++++++++@@+SB##+###...++B........+A................++++.......++++++++......B##++." + // Kotlov
					"..#########+@@@@@@@@@@@B+++@@##++++...........+.......+++++++++......++...h@@++SH+..+B.....++##B+." +
					"..#########+@@@@@@@@@@@@+@@@@##+++...........++......+B...+===+A.........++@@++++........B+==###+." + // Itchtos
					"..##246++f+++++++S+++@@@+@@@@##+##.....######++....S++....====#####......B...B..........=====###+." + // *Driffen
					".+##3%7++++++#######++++++SBB##+##...########++..+++++...+===+######...................======S##+." +
					".+##^+S###################EBB##+##...####BS#####D+++++++++==B###D####...........#######=====+F##+." +
					".+#############...#####################++++#####################++##############################+." +
					".+#######B+++++...S++++B###############...g+++#################+S..###############S+B###########+." +
					".AS++++++++...+++++++++++++++++++++++++.....+++++++++++++++++++....++++++++++++++++++++++++B++++.." + // Westbumpshire
					".................................................................................................."
			},
			{
				chances: {
					gold: 0x4c,
					income: 0x56,
					spellPower: 0x58,
					spellCapacity: 0x5d,
					extraSpells: 0x65,
					baseGold: 0x9,
					extraGold: 0x15,
					baseIncome: 0x63,
					extraIncome: 0x65,
					spellCapacityCount: 0x2,
					extraSpellsCount: 0x2
				},
				castleMonsters: {
					minLevel: 3,
					maxLevel: 5,
					avgCost: 6000
				},
				name: 'Malbrasia',
				minDwellingsLevel: 3,
				maxDwellingsLevel: 5,
				available: false,
				orbFound: false,
				friendlyFoesCount: 6,
				cities: ['Ostbrok', 'Rodswitch', 'Malborn', 'Eastbern', 'Gorgorod', 'Bursock', 'Salesberry', 'Isla Blanca', 'Lotsbrock', 'Paperville', 'Bersk', 'Doortown', 'Candelabria', 'Rasalio', 'Augustberg', 'Tepswitch', 'Engelstadt', 'Bornoba', 'Kurovsk', 'Dunkelberg', 'Oyster', 'Rammingen'],
				castles: ['Bookinghamshire', 'Kumbridgeshire', 'Pornwall', 'Devan', 'Doorset', 'Vorlon Hall', 'Westborough'],
				castleToCity: {
					'Rodswitch': 'Bookinghamshire',
					'Salesberry': 'Kumbridgeshire',
					'Lotsbrock': 'Pornwall',
					'Doortown': 'Devan',
					'Bornoba': 'Doorset',
					'Oyster': 'Vorlon Hall',
					'Dunkelberg': 'Westborough'
				},
				spellToCity: {
				},
				ownerToCastle: {
					'Pornwall': 'Donald Pump',
					'Devan': 'Peter Burnback',
					'Doorset': 'Elder Smirnoff',
					'Westborough': 'John Kuznetsoff'
				},
				width: 64,
				height: 64,
				armies: {},
				portals: {},
				entryPoint: {
					x: 11,
					y: 62
				},
				fixedDwellings: [
				],
				data:
					"................................................................" +
					"................................................................" +
					"......@@....@@@a...@@+++....++...@@...+...B@@@....@@@A.........." + // *Ostbrok
					"....@@@@M@@@@@@....@@@@++b...++++@@+..++..+@@@...B@@@++++......." +
					"....@@@@+@@@@@+...@@@@@+++....@@+++...@@@@++@@....@@+B@@+M......" +
					"...M++@@+246@@+..@@@@@@@+@@...@@++^...@@@@+++......++@@@+@@....." +
					"...@@++++3%7@@A..@@@+@@@+@@...+++@@....B+++++......++@@@+@@....." + // Bookinghamshire, *Rodswitch
					"...@@B++++++@@....++++@@+@@....+@@@@........A....++++@@M+@@@...." + // *Malborn
					"...@@@@++@@+++....+@@+@@+@@....+@@@@M...........@@@+@@@++@@@...." +
					"...@@@@++@@++...B++@@++++@@@......@@@...........@@@+@@@++++++..." +
					"....@@B++++++....++@@+@@+@@@......@@@...+A@@....@@M++++++@@@+..." + // *Eastbern
					"....@@++@@@@......+@@D@@+246+..........M+@@@....@@+@@B+..@@@M..." +
					".....++@@@@@......+@@@@@+3%7+@@........B+@@@...++++@@@A...@@+..." + // Kumbridgeshire, *Gorgorod
					".....A+@@@.......B+@@@@@+++++@@A......@@+@@....+@@+@@@.........." + // *Bursock, *Salesberry
					"......+++.....B...++++++++++++++......@@+@@....@@@++............" +
					".......+......+....B@@+@@@+@@@@@@....@@@++.....@@@+M............" +
					".......A.....+++....@@+@@@+@@@@@@...@@@@++.....B+++........@@..." + // *Isla Blanca
					"...........@@@++....@@++++++++++E...@@@F+++...@@M........+A@@..." + // *Lotsbrock
					"..........B@@@+.....@@++E@@B+@@B...A++++++++..@@.....@@@+@@@@..." + // *Paperville
					".....+...@@@@++....+++++B@@M+@@....+M@@+B@@+...B.....@@@N@@@@..." +
					".....B@@+@@@@+.....B@@@+@@@@+@@.....@@@+@@@A...@@...@@@26B26+..." + // *Bersk
					"....+@@@++++++......@@@+@@@@+@@@....@@@+@@@....@@..@@@@37B37+..." +
					".....@@@+@@+B+............@@+@@@...@@@++@@.....D...@@@2624626..." +
					".....@@++@@++++............++++++..@@@@+@@.........@@+373`737..." + // Conon's castle
					"....+@@+246+@@+@@..........B@@@++...@@@+@@@@.......+++++++++...." +
					"....+@@+3%7+@@+@@@@@@@......@@@+......A+@@@@@@.....@@+++++......" + // Pornwall, *Doortown
					"...A+@@+++++@@+@@@@@@@M+A...@@++.......++B@@@@.....@@++M........" + // *Candelabria, *Rasalio
					"...++M++@@+@@@+@@++++++(.....+..........+246@@....@@@++........." +
					"...+@@@+@@+@@@++++@@@@@B................+3%7@@B..+@@@+.....@@..." + // Devan
					"...+@@@++++++++@@+@@@@@............+.....+++@@+@@+++++....+@@..." +
					"....+@@@+J@@+@@@@++++@@...........@@@.....++@@+@@+A......@@@@E.." + // *Augustberg
					"....+@@@+F@@+@@@@+@@+@@...^..@@...@@@@....M+@@+++M......@@@@@+.." +
					"....+B@@+@@@+@@++B@@++....+++@@@..+@@@B....++++@@.......@@@+++.." +
					"...++@@@+@@@++++@@@@@B....++M@@@++++++++....+@@@@......@@@M++..." +
					"...++@@@++@@@+@@@@@@@+...@@+@@@B+@@@@@@@c....@@@@.....@@@@++...." +
					"....+M@@@+@@@+@@@@+++....@@+@@@@M@@@@@@@.......+.....@@@@+++...." +
					".....A@@@+++..++++A.....+@@+B@@@+@@+++A..............@@@L+++...." + // *Tepswitch, *Engelstadt, *Bornoba
					"..A.....++.....BM........@@+B@@B++++++....++..........@@@+@@@..." + // *Kurovsk
					"..++.....................@@+@@@@M+++M.....+++.........@@@+@@@@.." +
					"...+B.....................++@@@@++........M+@@.......B246+F@@@.." +
					"...++....++....++...+.......+++..........@@+@@@@....++3%7++@@..." + // Doorset
					"..@@+...++@@...+@@+@@@................@@@@@+@@@@...@@++++++@@..." +
					"..@@+...++@@@...@@+@@@@............+++@@@@@++++....@@++M+++@@..." +
					"..@@+....+@@@...@@++@@@...+...@@....++++++++@@....B@@@@D++++++.." +
					"...+++...+B@@@..@@@++@@@..++@@@@@....@@@+@@+@@.....@@@@@@++@@+.." +
					"...++++...+@@@@B@@@@+@@@...+@@@@@+...@@@@@@+@@.......@@@@++@@B.." +
					"..M+++....+M@@@++@@@++@@...+++++++....@@@@@+@@.........@@+@@@..." +
					"....++.....++@@@+++++++.....@@@+@@.......@@+@@.........@@+@@@..." +
					"....+++....++@@@++@@++......@@@+@@.......M++@@++......@@@+@@...." +
					"....++++...++@@@++@@++.......@@+@@......@@=====++....+@@@++....." +
					"...+@@M+....+@@@+@@@+........+++++......@@=====@@....+++++......" +
					"...+@@B+....+@@+M@@@+...B...+@@@@@+...@@@@====@@@...@@M+++......" +
					"...+@@@+...B++++@@@+...@@+...@@@@@d...@@@@===@@@@...@@@+@@@....." +
					"....@@@+..@@246+@@@+...@@+............M++++@@@@@...+@@@+@@@....." +
					"....B@@...@@3%7+@@M+...@@++...........@@++B@@@@....++@@++M++...." + // Vorlon Hall
					"...+C@@...@@+++@@@+...@@@+++...@@...@@@@+@@@@........++++++@@..." +
					"...+@@@...@@+MB@@@+...@@@+M++++@@e..@@@@+@@@@..............@@..." +
					"...+@@@@..@@+@@@@+...+@@+++++++++++++++++@@................@@..." +
					"....+@@@..+++@@@@....+@@+@@@@@@+++++MB+++@@....+246...++....+..." +
					"....++@@..@@++++....+M+++@@@@@@..+@@@@+@@@@...++3%7f..+BM...+..." + // Westborough
					".....++...@@@@++...+@@@@+@@B......@@@@+@@@@...A+++++...+E+..B..." + // *Dunkelberg
					"......+...@@@@A....A@@@@+@@....................................." + // *Oyster, *Rammingen
					"................................................................" +
					"................................................................"
			},
			{
				chances: {
					gold: 0x47,
					income: 0x51,
					spellPower: 0x56,
					spellCapacity: 0x5b,
					extraSpells: 0x65,
					baseGold: 0x13,
					extraGold: 0x1f,
					baseIncome: 0xc7,
					extraIncome: 0x12d,
					spellCapacityCount: 0x2,
					extraSpellsCount: 0x2
				},
				castleMonsters: {
					minLevel: 4,
					maxLevel: 6,
					avgCost: 12000
				},
				name: 'Arbusia',
				minDwellingsLevel: 4,
				maxDwellingsLevel: 6,
				available: false,
				orbFound: false,
				friendlyFoesCount: 6,
				cities: ['Westentrance', 'Eastentrance', 'South-1', 'South-2', 'South-3', 'South-4', 'South-5', 'South-6', 'Westshore-1', 'Westshore-2', 'Westshore-3', 'Eastshore-3', 'Eastshore-2', 'Eastshore-1'],
				castles: ['Northwest', 'Northeast', 'West', 'Westmiddle', 'Eastmiddle', 'East', 'Southwest', 'Southeast'],
				castleToCity: {
					'Westentrance': 'Northwest',
					'Eastentrance': 'Northeast',
					'South-1': 'West',
					'South-2': 'Southwest',
					'South-3': 'Westmiddle',
					'South-4': 'Eastmiddle',
					'South-5': 'Southeast',
					'South-6': 'East'
				},
				spellToCity: {
				},
				ownerToCastle: {
					'South-1': 'Nicas Leftshow',
					'South-2': 'Ernest Mudla',
					'South-5': 'Vedogor',
					'South-6': 'Victor Metrik'
				},
				width: 64,
				height: 64,
				armies: {},
				portals: {},
				entryPoint: {
					x: 31,
					y: 1
				},
				fixedDwellings: [
				],
				data:
					"................................................................" +
					"................................................................" +
					"..++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.." +
					"..+++M+++++++++++M++++++++++++++++++++++++++++M+++++++++++M+++.." +
					"..++++====++++++++====++++++++====++++++++====++++++++====++++.." +
					"..++++====++++++++====++++++++====++++++++====++++++++====++++.." +
					"..++++====++++++++====++++++++====++++++++====++++++++====++++.." +
					"..++++====++++++++====++++++++====++++++++====++++++++====++++.." +
					"..++++++++M+====++++++M+====++++++++====+M++++++====+M++++++++.." +
					"..++++++++++====++++++++====++++++++====++++++++====++++++++++.." +
					"..++++++++++====++++++++====++++++++====++++++++====++++++++++.." +
					"..++++++++++====++++++++====+M++++M+====++++++++====++++++++++.." +
					"..++++====++++++++====++++++++====++++++++====++++++++====++++.." +
					"..++++====++++++++====++++++++====++++++++====++++++++====++++.." +
					"..++++====++++++++====++++++++====++++++++====++++++++====++++.." +
					"..============================================================.." +
					"..============================================================.." +
					"..a+========^+++================================+++^========+b.." +
					"..++========++++========+++###A==A###+++========++++========++.." +
					"..++========++++======########BPPB########======++++========++.." +
					"..++========+++B===###########++++###########===B+++========++.." +
					"..====^+++=======#######246++++++++++246#######=======+++^====.." +
					"..====++++======#####F+m3%7++++++++++3%7n+F#####======++++====.." +
					"..====++++======###246++++++246++246++++++246###======++++====.." +
					"..====+++B=====####3%7+++B++3%7++3%7++B+++3%7####=====B+++====.." +
					"..c+========+++####+++++246++P++++P++246+++++####+++========+d.." +
					"..++========+++###++B##C3%7##E####E##3%7C##B++###+++========++.." +
					"..++========++####+######+############+######+####++========++.." +
					"..++========++####+######+############+######+####++========++.." +
					"..====^+++====##P++P++P++P++P++PP++P++P++P++P++P##====+++^====.." +
					"..====++++====##+##+##+##+##+##++##+##+##+##+##+##====++++====.." +
					"..====++++====##+##+##+##+##+##++##+##+##+##+##+##====++++====.." +
					"..====+++B===###+##+##+##+##+##++##+##+##+##+##+###===B+++====.." +
					"..e+========+###+##+##+##+##+##++##+##+##+##+##+###+========+f.." +
					"..++========+##B++B++B++B++B++B++B++B++B++B++B++B##+========++.." +
					"..++========+##+##+##+##+##+##+##+##+##+##+##+##+##+========++.." +
					"..++========+##+##+##+##+##+##+##+##+##+##+##+##+##+========++.." +
					"..====^+++===##+##+##+##+##+##+##+##+##+##+##+##+##===+++^====.." +
					"..====++++===##+##+##+##+##+##+##+##+##+##+##+##+##===++++====.." +
					"..====++++===##+P++P++P++P++P++PP++P++P++P++P++P+##===++++====.." +
					"..====+++B===###+##+##+##+##+##++##+##+##+##+##+###===B+++====.." +
					"..g+========+###+##+##+##+##+##++##+##+##+##+##+###+========+h.." +
					"..++========++##+##+##+##+##+##++##+##+##+##+##+##++========++.." +
					"..++========++##+##+##+##+##+##++##+##+##+##+##+##++========++.." +
					"..@@@@@@@@@@@@##++++++++++++++++++++++++++++++++##@@@@@@@@@@@@.." +
					"..@@@@@@@@@@@@####@@@@+@@+@@+@@PP@@+@@+@@+@@@@####@@@@@@@@@@@@.." +
					"..@@@@Q+++@@@@####@@@@+@@+@@+@@PP@@+@@+@@+@@@@####@@@@+++K@@@@.." +
					"..@@@@+26+@@@@@###@@@@A@@A@@A@@PP@@A@@A@@A@@@@###@@@@@+26+@@@@.." +
					"..@@@@+37+@@@@@####@@@@@@@@@@@@PP@@@@@@@@@@@@####@@@@@+37+@@@@.." +
					"..@@@@+++B@@@@@####@@@@@@@@@@@@PP@@@@@@@@@@@@####@@@@@B+++@@@@.." +
					"..+P@@@@@@@@i+++###@@@@@@@@@@@....@@@@@@@@@@@###+++j@@@@@@@@P+.." +
					"..++@@@@@@@@+26+#####@@@@@@@@@....@@@@@@@@@#####+26+@@@@@@@@++.." +
					"..++@@@@@@@@+37+P#######@@@@@@....@@@@@@#######P+37+@@@@@@@@++.." +
					"..+B@@@@@@@@+++B@@B###########....###########B@@B+++@@@@@@@@B+.." +
					"..@@@@B++B@@@@@@@@+++P########....########P+++@@@@@@@@B++B@@@@.." +
					"..@@@@+26+@@@@@@@@+26+@@@@@###....###@@@@@+26+@@@@@@@@+26+@@@@.." +
					"..@@@@+37+@@@@@@@@+37+@@@@@@@@....@@@@@@@@+37+@@@@@@@@+37+@@@@.." +
					"..@@@@B++B@@@@@@@@B+++@@@@@@@@....@@@@@@@@+++B@@@@@@@@B++B@@@@.." +
					"..+B@@@@@@@@+P++@@@@@@@@+P++@@....@@++P+@@@@@@@@++P+@@@@@@@@B+.." +
					"..++@@@@@@@@++++@@@@@@@@++++@@....@@++++@@@@@@@@++++@@@@@@@@++.." +
					"..k+@@@@@@@@B++A@@@@@@@@B++A@@....@@A++B@@@@@@@@A++B@@@@@@@@+l.." +
					"................................................................" +
					"................................................................" +
					"................................................................"
			},
			{
				chances: {
					gold: 0x47,
					income: 0x51,
					spellPower: 0x56,
					spellCapacity: 0x5b,
					extraSpells: 0x65,
					baseGold: 0x16,
					extraGold: 0x22,
					baseIncome: 0xc9,
					extraIncome: 0x14d,
					spellCapacityCount: 0x3,
					extraSpellsCount: 0x3
				},
				castleMonsters: {
					minLevel: 5,
					maxLevel: 6,
					avgCost: 24000
				},
				name: 'Clostridia',
				minDwellingsLevel: 6,
				maxDwellingsLevel: 6,
				available: false,
				orbFound: false,
				friendlyFoesCount: 0,
				cities: ['Suddenburg', 'Malmberg', 'Costov', 'Severosvinsk', 'Kabanopol', 'New Pork', 'Fourth Rome'],
				castles: ['Blacklore West Tower', 'Blacklore East Tower', 'Tribaldy', 'Sortsock'],
				castleToCity: {
					'Suddenburg': 'Blacklore West Tower',
					'Malmberg': 'Blacklore East Tower',
					'Costov': 'Tribaldy',
					'New Pork': 'Sortsock'
				},
				spellToCity: {
				},
				ownerToCastle: {
					'Tribaldy': 'Sir Malinin',
					'Blacklore East Tower': 'Prof Dunesberg',
					'Blacklore West Tower': 'Beliarch Perill'
				},
				width: 48,
				height: 34,
				armies: {},
				portals: {},
				entryPoint: {
					x: 31,
					y: 1
				},
				fixedDwellings: [
				],
				data:
					"................................................" +
					"................................................" +
					".........@@..........####......................." +
					"........+@@@.......#######....###..............." +
					".......A+@@@+.....###########&####.............." +
					".......++B@@+...#####++D#####+#####............." +
					"......@@+++.....####++@@@++##+#######..........." +
					"......@@P+.....+##E+++@@@+B##+##+#####.........." +
					"......@@++...+#######++++++++++++++#####........" +
					".....+26##+...############++@@+2446+#####B......" +
					"....##37##.........#########@@+3%%7++F###......." +
					"....##++................######+++++@@###........" +
					"....@@+...................#####I+++@@###........" +
					"....@@B....#####............#####++++##........." +
					"....@@....########.....A+....#####+++##........." +
					"....@@....###E#####+....+g.....####++##........." +
					"....+....+++++++###++....##.....###++###........" +
					".........A###+++246+##...##+.....##++###A......." +
					"..........###F++3%7+##...##+##....A++B##........" +
					"......B....####+++++###...+P###....#####........" +
					"......+....########+###....+####...#####........" +
					"......++.....######+B##....+B###...b##.........." +
					".....P+##........##+H###...+++##c..+##.........." +
					".....^+##..........HH###+...+###....BP...+......" +
					".....++++....@@.....H+##.....###........++......" +
					"......###A..P@@@.....+d.................@@......" +
					"......###++++@@@e.........P.......aP....@@......" +
					".......#####E246+P+......++@@......++..+@@......" +
					".......######3%7+++f....@@+@@@@@....+++++B......" +
					"..........####+###B....A@@+@@@@@@...^@@@+......." +
					"...........###+###.......B+@@F@@@B...@@@........" +
					"..........................h@@++P+..............." +
					"................................................" +
					"................................................"
			}
		]
	};
};

function setup(playerRole, difficultyLevel, playerName) {
	gameField = getInitialGameField();

	gameField.difficultyLevel = difficultyLevel;
	gameField.playerRole = playerRole;
	gameField.playerName = playerName;
	gameField.daysLeft = difficultyLevels[difficultyLevel].days;

	initGameData();
	setupVillains();
	setupArtefacts();
	testSigns();
	setupSpells();
	initSceptre();
	setupArmiesCitiesTreasuresAndCastles();
	reoccupyCastles();
	setupPlayerStats();
	movePlayerToKingCastle();
	setupFogOfWar();
	setupPlayerArmy();

	gameField = getFixedGameField(gameField);
}

function beginNewGame(playerRole, difficultyLevel, playerName) {
	setup(playerRole, difficultyLevel, playerName);
	showAdventureStatus();
	draw();
	showGreetings();
}

function showGreetings() {
	openInfoWindow(capitalizeFirstLetter(getCaption('greetings')) + "!", [
		"    " + getCaption("King Maximus suddenly summons you in his castle and says:"),
		"    " + getCaption((gameField.playerRole == 'sorceress') ? "— My Dear (F)" : "— My Dear") + " " + getPlayerName() + ", " + getCaption("many years have passed since that"),
		getCaption((gameField.playerRole == 'sorceress') ? "good old days when you helped(F) me a lot… Ahh, that good old time…" : "good old days when you helped me a lot… Ahh, that good old time…"),
		getCaption("Long time ago a grass was greener, the sky was brighter and even my…"),
		getCaption("hmm… Sceptre of Order was harder than now."),
		"    " + getCaption("When I realised I'm getting old, I opened my old wooden chest"),
		getCaption("and found in rusted nails and foreign coins the old Diary"),
		getCaption("of my grandfather, King Minimus."),
		"    " + getCaption("I spent many winter evenings reading this strange adagic"),
		getCaption("folio and amidst my ancestor's wise words I read the story about"),
		getCaption("legendary artefact — The Sceptre of Wisdom."),
		"    " + getCaption("“Fear the Order without Wisdom, my successor, the day is light and"),
		getCaption("the night is dark and it's easy to confuse a finger with a"),
		getCaption("horse raddish, a sage with a quack, the Bad and the Good…”.")
	], function() {
		openInfoWindow(capitalizeFirstLetter(getCaption('greetings')) + "!", [
			"    " + getCaption("King Maximus finished his quotation and returned to the throne with"),
			getCaption("a short breath. After a few seconds he continues:"),
			"    " + getCaption((gameField.playerRole == 'sorceress') ? "— My Dear (F)" : "— My Dear") + "! " + getCaption("The History repeats itself, first as tragedy, second as"),
			getCaption("farce. It looks that I'm overlooked the conspiracy again. My past retinue"),
			getCaption("laid the plot against me. The ancient Scepter of Wistom is stolen"),
			getCaption("and my Kingdom is ruined again."),
			"    " + getCaption("Help me, Obi-Wan… Hmmm…") + " " + getPlayerName() + ". " + getCaption("You're my only hope."),
			getCaption("You have only") + " " + gameField.daysLeft + " " + getCaption("days to recover the Scepter. Otherwise"),
			getCaption("everything will be lost and the Kingdom will turn into darkness of"),
			getCaption("ignorance and fear. Hurry up, my friend!")
		]);
	});
}

function setupArtefacts() {
	artefactsByMapTileIndex = makeIndex(artefacts, 'mapTileIndex');
	testArtefacts();
}

function testVillains() {
	for (var i = 0; i < villains.length; i++) {
		for (var continent = 0; continent < gameField.map.length; continent++) {
			for (var key in gameField.map[continent].ownerToCastle) {
				if (gameField.map[continent].ownerToCastle.hasOwnProperty(key)) {
					if (gameField.map[continent].ownerToCastle[key] == villains[i].name) {
						if (villains[i].used) {
							console.log('Warning: villain ' + villains[i].name + ' placed twice, castle name: ' + key);
						} else {
							villains[i].used = true;
						}
					}
				}
			}
		}

		if (typeof(villains[i].used) == 'undefined') {
			console.log('Warning: villain ' + villains[i].name + ' is not placed');
		}
	}
}

function testArtefacts() {
	for (var continent = 0; continent < gameField.map.length; continent++) {
		for (var i = 0; i < gameField.map[continent].height; i++) {
			for (var j = 0; j < gameField.map[continent].width; j++) {
				var ch = getMapChar(j, i, continent);
				if (typeof(artefactsByChar[ch]) != 'undefined') {
					if (artefactsByChar[ch].placed) {
						console.log('Warning: artefact ' + artefactsByChar[ch].name + ' (' + ch + ') is placed twice [' + gameField.map[continent].name + ':' + j + ':' + i + ']');
					}
					artefactsByChar[ch].placed = true;
				}
			}
		}
	}

	for (var key in artefactsByChar) {
		if (artefactsByChar.hasOwnProperty(key)) {
			if (typeof(artefactsByChar[key].placed) == 'undefined') {
				console.log('Warning: artefact ' + artefactsByChar[key].name + ' (' + key + ') is not placed');
			}
		}
	}
}

function testSigns() {
	for (var continent = 0; continent < gameField.map.length; continent++) {
		for (var i = 0; i < gameField.map[continent].height; i++) {
			for (var j = 0; j < gameField.map[continent].width; j++) {
				var ch = getMapChar(j, i, continent);
				if (typeof(signsByChar[continent][ch]) != 'undefined') {
					if (signsByChar[continent][ch].placed) {
						console.log('Warning: sign "' + signsByChar[continent][ch].text + '" (' + ch + ') is placed twice [' + gameField.map[continent].name + ':' + j + ':' + i + ']');
					}
					signsByChar[continent][ch].placed = true;
				}
			}
		}

		for (var key in signsByChar[continent]) {
			if (signsByChar[continent].hasOwnProperty(key)) {
				if (typeof(signsByChar[continent][key].placed) == 'undefined') {
					console.log('Warning: artefact ' + signsByChar[continent][key].text + ' (' + key + ') is not placed');
				}
			}
		}
	}
}

function initSceptre() {
	gameField.sceptreContinent = Math.floor(Math.random() * gameField.map.length);
	var maxValue = -1;

	for (var i = 0; i < gameField.map[gameField.sceptreContinent].height; i++) {
		for (var j = 0; j < gameField.map[gameField.sceptreContinent].width; j++) {
			if (getMapChar(j, i, gameField.sceptreContinent) == '+') {
				var val = Math.random();
				if (val > maxValue) {
					maxValue = val;
					gameField.sceptreX = j;
					gameField.sceptreY = i;
				}
			}
		}
	}
}

function setupVillains() {
	villainsByName = makeIndex(villains, 'name');
	villainsByMapTileIndex = makeIndex(villains, 'mapTileIndex');
	testVillains();
}

function clearFog(x, y) {
	if (x >= 0 && y >= 0 && x < getMap().width && y < getMap().height) {
		getMap().fog[y * getMap().width + x] = true;
	}
}

function clearFogAtPlayerCoords() {
	for (var i = gameField.playerY - 2; i <= gameField.playerY + 2; i++) {
		for (var j = gameField.playerX - 2; j <= gameField.playerX + 2; j++) {
			clearFog(j, i);
		}
	}
}

function setupFogOfWar() {
	for (var continent = 0; continent < gameField.map.length; continent++) {
		gameField.map[continent].fog = new Array(gameField.map[continent].length);
	}

	clearFogAtPlayerCoords();
}

function fixSpells() {
	for (var i = 0; i < config.SPELLS_COUNT * 2; i++) {
		if (gameField.playersInfo[0].spells[i] < 0) {
			gameField.playersInfo[0].spells[i] = 0;
		}
	}
}

function setupSpells() {
	allSpells = [];
	for (var i = 0; i < config.SPELLS_COUNT; i++) {
		spells[i].isAdventure = false;
		spells[i].index = allSpells.length;
		gameField.playersInfo[0].spells[allSpells.length] = 0;
		gameField.playersInfo[1].spells[allSpells.length] = 0;
		allSpells.push(spells[i]);

		adventureSpells[i].isAdventure = true;
		adventureSpells[i].index = allSpells.length;
		gameField.playersInfo[0].spells[allSpells.length] = 0;
		gameField.playersInfo[1].spells[allSpells.length] = 0;
		allSpells.push(adventureSpells[i]);
	}
	spellsByName = makeIndex(allSpells, 'name');
}

function getRandomSpell() {
	return allSpells[Math.floor(Math.random() * allSpells.length)];
}

function getEnemyCastleArmy(x, y, continent) {
	return getRandomArmy(gameField.map[continent].castleMonsters.minLevel, gameField.map[continent].castleMonsters.maxLevel, gameField.map[continent].castleMonsters.avgCost * difficultyLevels[gameField.difficultyLevel].scoreModifier, 5, true);
}

function setupArmiesCitiesTreasuresAndCastles() {
	var cityIndex;
	var castleIndex;

	for (var continent = 0; continent < gameField.map.length; continent++) {
		var portals = [];
		var orbBestVal = -1;
		var mapBestVal = -1;
		var enemiesList = [];

		cityIndex = 0;
		castleIndex = 0;

		gameField.map[continent].siteCoordsByName = {};
		gameField.map[continent].citySpells = {};
		gameField.map[continent].siteNames = {};
		gameField.map[continent].friendlyFoes = {};

		for (var i = 0; i < gameField.map[continent].height; i++) {
			for (var j = 0; j < gameField.map[continent].width; j++) {
				var ch = gameField.map[continent].data.charAt(j + i * gameField.map[continent].width);

				if (ch == 'B') {
					var orbVal = Math.random();
					if (orbVal > orbBestVal) {
						orbBestVal = orbVal;
						gameField.map[continent].orbX = j;
						gameField.map[continent].orbY = i;
					} else {
						if (continent != gameField.map.length - 1) {
							var mapVal = Math.random();
							if (mapVal > mapBestVal) {
								mapBestVal = mapVal;
								gameField.map[continent].mapX = j;
								gameField.map[continent].mapY = i;
							}
						}
					}
				}

				if (ch == '^') {
					portals.push({
						x: j,
						y: i
					});
				}

				if (enemies[ch]) {
					var key = i + '_' + j;
					gameField.map[continent].armies[key] = getRandomArmyForChar(ch);
					enemiesList.push(key);
				} else {
					if (sites[ch]) {
						if (ch == 'A') {
							gameField.map[continent].siteCoordsByName[gameField.map[continent].cities[cityIndex]] = {
								x: j,
								y: i
							};

							var cityName = gameField.map[continent].cities[cityIndex++];
							if (typeof(gameField.map[continent].spellToCity[cityName]) != 'undefined') {
								gameField.map[continent].citySpells[i + '_' + j] = spellsByName[gameField.map[continent].spellToCity[cityName]];
							} else {
								gameField.map[continent].citySpells[i + '_' + j] = getRandomSpell();
							}
							gameField.map[continent].siteNames[i + '_' + j] = cityName;
						} else {
							if (ch == '%') {
								gameField.map[continent].siteCoordsByName[gameField.map[continent].castles[castleIndex]] = {
									x: j,
									y: i
								};

								gameField.map[continent].siteNames[i + '_' + j] = gameField.map[continent].castles[castleIndex++];
							} else {
								if (ch == '5') {
									gameField.map[continent].siteCoordsByName['castle of King Maximus'] = {
										x: j,
										y: i
									};
									gameField.map[continent].siteNames[i + '_' + j] = 'castle of King Maximus';
								} else {
									if (ch == '`') {
										gameField.map[continent].siteNames[i + '_' + j] = 'castle of Connor The Barbarian'
									}
								}
							}
						}

						if (sites[ch].simpleSite) {
							var dwellingArmy = getInitialSiteArmy(ch, gameField.map[continent].minDwellingsLevel, gameField.map[continent].maxDwellingsLevel, gameField.map[continent].fixedDwellings, j, i);
							gameField.map[continent].armies[i + '_' + j] = dwellingArmy;
						} else {
							if (sites[ch].enemyCastle) {
								var ownerName = getCastleOwnerName(gameField.map[continent].siteNames[i + '_' + j]);
								if (ownerName != 'you' && ownerName != 'king' && ownerName != 'no one') {
									gameField.map[continent].armies[i + '_' + j] = modifyVillainArmy(villainsByName[ownerName].army);
								} else {
									gameField.map[continent].armies[i + '_' + j] = getEnemyCastleArmy(j, i, continent);
								}
							} else {
								if (!sites[ch].city) {
									gameField.map[continent].armies[i + '_' + j] = [
										{
											quantity: 100000,
											unit: 13
										},
										{
											quantity: 100000,
											unit: 1
										},
										{
											quantity: 100000,
											unit: 18
										},
										{
											quantity: 100000,
											unit: 3
										},
										{
											quantity: 100000,
											unit: 12
										}
									]
								}
							}
						}
					}
				}
			}
		}
		
		shuffle(portals);
		for (var i = 0; i < portals.length; i += 2) {
			var key1 = portals[i].y + '_' + portals[i].x;
			var key2 = portals[i + 1].y + '_' + portals[i + 1].x;
			gameField.map[continent].portals[key1] = portals[i + 1];
			gameField.map[continent].portals[key2] = portals[i];
		}

		shuffle(enemiesList);
		for (var i = 0; i < Math.min(gameField.map[continent].friendlyFoesCount, enemiesList.length); i++) {
			setFriendlyFoe(gameField.map[continent], enemiesList[i]);
		}
	}
}

function setFriendlyFoe(map, key) {
	map.armies[key] = [map.armies[key][0]];
	map.friendlyFoes[key] = true;
}

function shuffle(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function setupPlayerStats() {
	gameField.gold = playerRoles[gameField.playerRole].initialGold;
	gameField.income = playerRoles[gameField.playerRole].baseIncome[gameField.playerLevel];
	gameField.leadership = playerRoles[gameField.playerRole].baseLeadership[gameField.playerLevel];
	gameField.spellPower = playerRoles[gameField.playerRole].baseSpellPower[gameField.playerLevel];
	gameField.spellCapacity = playerRoles[gameField.playerRole].baseSpellCapacity[gameField.playerLevel];
	gameField.hasMagicSkill = playerRoles[gameField.playerRole].initialHasMagicSkill;
}

function getInitialSiteArmy(ch, minLevel, maxLevel, fixedDwellings, x, y) {
	var unit = -1;

	for (var i = 0; i < fixedDwellings.length; i++) {
		if (x == fixedDwellings[i].x && y == fixedDwellings[i].y) {
			unit = fixedDwellings[i].unit;
			break;
		}
	}

	if (unit == -1) {
		unit = getRandomUnit(minLevel, maxLevel, ch);
	}

	return [{
		unit: unit,
		quantity: units[unit].maxPopulation
	}];
}

function cloneArmy(army) {
	var result = [];

	for (var i = 0; i < army.length; i++) {
		result.push({
			quantity: army[i].quantity,
			unit: army[i].unit
		});
	}

	return result;
}	

function setupPlayerArmy() {
	getMap().armies[gameField.playerY + '_' + gameField.playerX] = cloneArmy(playerRoles[gameField.playerRole].initialArmy);
}

function startBattle() {
	closeWindow('actionsMenu');
	music.travel.pause();
	music.battle.currentTime = 0;
	music.battle.play();

	newMove(0);
	melee();
	gameField.adventureMode = false;
}

function setAnyKeyHandler(handler) {
	anyKeyHandler = handler;
}

function openInfoWindowExtended(options) {
	if (typeof(anyKeyHandler) == 'undefined' || anyKeyHandler == null) {
		openInfoWindowExtendedInternal(options);
	} else {
		var oldAnyKeyHandler = anyKeyHandler;
		anyKeyHandler = function() {
			oldAnyKeyHandler();
			openInfoWindowExtended(options);
		}
	}
}

function openInfoWindowExtendedInternal(options) {
	if (typeof(options.name) == 'undefined') {
		options.name = 'infoWindow';
	}

	showDialog(options);

	if (options.closeByAnyKey) {
		setAnyKeyHandler(function () {
			closeWindow(options.name);
			if (typeof(dialog.callback) != 'undefined') {
				dialog.callback();
			}
		});
	}
}

function openInfoWindow(title, textLines, callback) {
	openInfoWindowExtended({
		title: title,
		textLines: textLines,
		callback: callback,
		closeByAnyKey: true
	});
}

function openInfoWindowCondensed(title, textLines, callback) {
	openInfoWindowExtended({
		title: title,
		textLines: textLines,
		callback: callback,
		closeByAnyKey: true,
		lineInterval: 14,
		titleInterval: 16,
		paddingTop: 20
	});
}

function fillRectCheckered(context, left, top, width, height, colorEven, colorOdd) {
	for (var i = 0; i < height; i++) {
		for (var j = 0; j < width; j++) {
			context.fillStyle = ((i + j) % 2 == 0) ? colorEven : colorOdd;
			context.fillRect(left + j, top + i, 1, 1);
		}
	}
}

function openMapInfoWindow() {
	sounds.map.play();
	openInfoWindowExtended({
		name: 'mapInfoWindow',
		title: getCaption(getMap().name),
		titleInterval: 24,
		textLines: [capitalizeFirstLetter(getCaption('coordinates')) + ": " + gameField.playerX + ", " + gameField.playerY],
		width: getMap().width * 4 + 24,
		height: getMap().height * 4 + 80,
		onDraw: function(context, boxLeft, boxTop) {
			for (var i = 0; i < getMap().height; i++) {
				for (var j = 0; j < getMap().width; j++) {
					var index = j + i * getMap().width;
					var color = '#000000';
					var tileIndex = getTileIndex(j, i);

					if (typeof(mapColorForTile[tileIndex]) != 'undefined') {
						color = mapColorForTile[tileIndex];
					}
					
					if (getMap().fog[index] || gameField.editMode) {
						context.fillStyle = color;
						context.fillRect(boxLeft + 12 + j * 4, boxTop + 64 + i * 4, 4, 4);
					} else {
						if (getMap().orbFound) {
							fillRectCheckered(context, boxLeft + 12 + j * 4, boxTop + 64 + i * 4, 4, 4, color, '#000000');
						} else {
							context.fillStyle = '#000000';
							context.fillRect(boxLeft + 12 + j * 4, boxTop + 64 + i * 4, 4, 4);
						}
					}					
				}
			}

			if (hasBoat() && (gameField.boatX != gameField.playerX || gameField.boatY != gameField.playerY) && (gameField.boatContinent == gameField.continentIndex)) {
				context.fillStyle = '#DB5A69';
				context.fillRect(dialog.box.left + 12 + gameField.boatX * 4, dialog.box.top + 64 + gameField.boatY * 4, 4, 4); 
			}
		},
		closeByAnyKey: true
	});
}

function getLayoutSize(layout) {
	var result = {
		height: layout.length * config.KEYBOARD_KEY_HEIGHT
	};

	var maxWidth = 0;
	for (var i = 0; i < layout.length; i++) {
		if (layout[i].length > maxWidth) {
			maxWidth = layout[i].length;
		}
	}

	result.width = maxWidth * config.KEYBOARD_KEY_WIDTH;
	return result;
}

function openVirtualKeyboard(layout, top) {
	var layoutSize = getLayoutSize(layout);

	openInfoWindowExtended({
		name: 'keyboard',
		title: '',
		titleInterval: 0,
		textLines: [],
		topShift: top,
		width: layoutSize.width + 20,
		height: layoutSize.height + 20,
		onDraw: function(context, boxLeft, boxTop) {
			context.font = "bold " + config.VIRTUAL_KEYBOARD_TEXT_HEIGHT + "px Tahoma";

			for (var i = 0; i < layout.length; i++) {
				for (var j = 0; j < layout[i].length; j++) {
					context.fillStyle = '#FFFFFF';
					var keyLeft = boxLeft + 10 + j * config.KEYBOARD_KEY_WIDTH;
					var keyTop = boxTop + 10 + i * config.KEYBOARD_KEY_HEIGHT;
					var keyWidth = config.KEYBOARD_KEY_WIDTH - 1;
					var keyHeight = config.KEYBOARD_KEY_HEIGHT - 1;
					context.fillRect(keyLeft, keyTop, keyWidth, keyHeight);
					context.fillStyle = "#000030";
					var textWidth = context.measureText(layout[i][j]).width;
					context.fillText(layout[i][j], keyLeft + Math.round((keyWidth - textWidth) / 2), keyTop + keyHeight - Math.round((keyHeight - config.VIRTUAL_KEYBOARD_TEXT_HEIGHT) / 2) - 3);
					
					(function (keyData) {
						addClickHandler('keyboard', keyData.left, keyData.top, keyData.width, keyData.height, null, function() {
							processInput(keyData.keyCode);
						});
					})({
						left: keyLeft,
						top: keyTop,
						width: keyWidth,
						height: keyHeight,
						keyCode: getKeyCode(layout[i][j])
					});

				}
			}
		}
	});
}

function setSiteSprite() {
	if (typeof(getMap().armies[gameField.siteY + '_' + gameField.siteX]) != 'undefined' && gameField.siteArmyIndex != null) {
		siteSprite = sprite({
			context: canvas.getContext("2d"),
			image: warriorsImage,
			mirrorImage: warriorsMirrorImage,
			groundImage: groundImage,
			numberOfFrames: config.SPRITE_FRAMES,
			ticksPerFrame: config.TICKS_PER_FRAME,
			x: 1 * config.SPRITE_WIDTH * config.SCALE_FACTOR,
			y: 2 * config.SPRITE_HEIGHT * config.SCALE_FACTOR - 2,
			unit: getSiteArmy()[gameField.siteArmyIndex].unit,
			width: config.SPRITE_WIDTH,
			height: config.SPRITE_HEIGHT,
			site: true
		});
	} else {
		siteSprite = null;
	}
}

function openCiteWindow(siteX, siteY, showArmy) {
	closeWindow('actionsMenu');
	showWindow('citeWindow');
	gameField.citeChar = getMapChar(siteX, siteY);
	gameField.siteX = siteX;
	gameField.siteY = siteY;
	gameField.siteArmyIndex = sites[gameField.citeChar].simpleSite ? 0 : null;
	gameField.audienceMode = false;
	gameField.recruitMode = false;
	gameField.conversationFrame = 0;
	gameField.garrisonMode = showArmy ? false : true;
	setSiteSprite();

	var name = sites[gameField.citeChar].name;
	if (typeof(music[name]) != 'undefined') {
		music.travel.pause();
		music[name].currentTime = 0;
		music[name].play();
	}

	showCiteWindow();
}

function closeCiteWindow() {
	var name = sites[gameField.citeChar].name;

	if (typeof(music[name]) != 'undefined') {
		music[name].pause();
		music.travel.currentTime = 0;
		music.travel.play();
	}

	closeWindow('citeWindow');
	closeWindow('keyboard');
	activeInputField = null;
	draw();
	showAdventureStatus();
}

function getPlayerName() {
	return capitalizeFirstLetter(gameField.playerName) + " " + $.trim(getCaption("the") + " " + getCaption(gameField.playerRole));
}

function villainCaught(villain) {
	gameField.villainsCaught.push(villain.id);
	gameField.mapParts.push(villain.mapTileIndex);
	gameField.gold += villains[gameField.contract].reward;
	gameField.contract = null;
}

function villainFlee(villain) {
	gameField.freeVillains.push(villain.id);
}

function endBattle() {
	var armyRemnants = [[], []];

	closeWindow('actionsMenu');
	music.battle.pause();
	music.travel.currentTime = 0;
	music.travel.play();

	for (var k = 0; k < 5; k++) {
		for (var i = 0; i < config.FIELD_HEIGHT; i++) {
			for (var j = 0; j < config.FIELD_WIDTH; j++) {
				if (field[i][j].quantity > 0 && field[i][j].order == k) {
					if (field[i][j].side == 2) {
						field[i][j].side = 1;
					}
					armyRemnants[field[i][j].side].push({
						unit: field[i][j].unit,
						quantity: field[i][j].quantity
					});
				}
			}
		}
	}

	getMap().armies[gameField.playerY + '_' + gameField.playerX] = armyRemnants[0];
	getMap().armies[gameField.enemyY + '_' + gameField.enemyX] = armyRemnants[1];

	if (armyRemnants[0].length > 0) {
		var lines = [
			capitalizeFirstLetter(getCaption("well done")) + " " + getPlayerName() + ",",
			getCaption("you have successfully vanquished"),
			getCaption("yet another foe") + "!",
			"",
			capitalizeFirstLetter(getCaption("spoils of war")) + ": " + gameField.spoilsOfWar + " " + getCaption('gold (P)')
		];

		if (gameField.siegeVillainId != null) {
			var villain = villains[gameField.siegeVillainId];
			lines[lines.length - 1] = lines[lines.length - 1] + " " + getCaption('and');
			lines.push(getCaption('the capture of') + " " + getCaption(villain.namePassive) + ".");
			
			if (gameField.siegeVillainId == gameField.contract) {
				lines.push(getCaption('For fulfilling your contract'));
				lines.push(getCaption('you receive an additional') + " " + villains[gameField.contract].reward + " " + getCaption('gold (P)') + "…");
				lines.push(getCaption("…and a piece of the map to"));
				lines.push(getCaption("the stolen scepter."));
				villainCaught(villain);
			} else {
				lines.push(getCaption("Since you did not have the proper"));
				lines.push(getCaption("contract, the Lord has been set free."));
				villainFlee(villain);
			}
		} else {
			lines[lines.length - 1] = lines[lines.length - 1] + ".";
		}

		openInfoWindow(capitalizeFirstLetter(getCaption('victory')) + "!", lines, function() {
			gameField.gold += gameField.spoilsOfWar;
			gameField.adventureMode = true;
			showAdventureStatus();

			if (!gameField.siege) {
				setMapChar(gameField.enemyX, gameField.enemyY, '+');
				if (!gameField.fightInitiatedByEnemy) {
					getMap().armies[gameField.enemyY + '_' + gameField.enemyX] = getPlayerArmy();
					getMap().armies[gameField.playerY + '_' + gameField.playerX] = null;
					gameField.playerX = gameField.enemyX;
					gameField.playerY = gameField.enemyY;
				}
			} else {
				gameField.siteX = gameField.enemyX;
				gameField.siteY = gameField.enemyY;
				getMap().ownerToCastle[getSiteName()] = 'you';
				openCiteWindow(gameField.siteX, gameField.siteY, true);
				gameField.castlesGarrisoned.push({
					x: gameField.siteX,
					y: gameField.siteY,
					continent: gameField.continentIndex
				});
			}
		});
	} else {
		openInfoWindow(capitalizeFirstLetter(getCaption('defeat')) + "!", [
			capitalizeFirstLetter(getCaption("after being disgraced on the")),
			getCaption("field of battle, King Maximus"),
			getCaption("summons you to his castle."),
			getCaption("After a lesson in tactics, he"),
			getCaption("reluctantly reissues your"),
			getCaption("commission and sends you"),
			getCaption("on your way.")
		], function() {
			restartAdventure(gameField.siege);
		});
	}
}

function restartAdventure(lostSiegeWeapons) {
	movePlayerToKingCastle();
	setupPlayerArmy();
	gameField.adventureMode = true;
	if (lostSiegeWeapons) {
		gameField.hasSiegeWeapons = false;
	}
	showAdventureStatus();
}

// time issues
function movePlayerToKingCastle() {
	gameField.continentIndex = 0;
	for (var i = 0; i < getMap().height; i++) {
		for (var j = 0; j < getMap().width; j++) {
			if (getMapChar(j, i) == '5') {
				gameField.playerX = j;
				gameField.playerY = i + 1;
				break;
			}
		}
	}
}

function moveActivePointer(dx, dy) {
	var x = activePointer.fieldX + dx;
	var y = activePointer.fieldY + dy;

	if (x >= 0 && y >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT) {
		activePointer = {
			fieldX: x,
			fieldY: y
		};
	}
}

function moveActiveUnit(dx, dy) {
	if (activeUnit.fieldX < 0 || activeUnit.moves <= 0) {
		return;
	}

	var x = activeUnit.fieldX + dx;
	var y = activeUnit.fieldY + dy;

	if (x >= 0 && y >= 0 && x < config.FIELD_WIDTH && y < config.FIELD_HEIGHT && field[y][x].groundType == 0) {
		if (!(field[y][x].quantity > 0)) {
			activeUnit.alreadyMoved = true;
			moveUnit(activeUnit, dx, dy)
			activeUnit.moves--;
			if (sourceUnit.moves <= 0) {
				melee();
			}

			showUnitStatus(activeUnit);
		} else {
			if (field[y][x].side != activeUnit.side) {
				var targetUnit = field[y][x];
				activeUnit.alreadyMoved = true;
				hit(activeUnit, targetUnit, Math.max(Math.abs(targetUnit.fieldX - activeUnit.fieldX), Math.abs(targetUnit.fieldY - activeUnit.fieldY)) > 1, melee);
			}
		}
	}
}

function activeUnitSkip() {
	if (activeUnit.fieldX >= 0) {
		activeUnit.moves = 0;
		activeUnit.alreadyMoved = true;
		setTimeout(melee, 1);
	}
}

function activeUnitWait() {
	if (activeUnit.fieldX >= 0) {
		showStatus(getUnitName(activeUnit) + " " + getCaption('waiting') + ".");
		activeUnit.wait = true;
		setTimeout(melee, 1);
	}
}

function activeUnitShoot() {
	if (activeUnit.ammo && !activeUnit.frozen && countCloseUnits(activeUnit.fieldX, activeUnit.fieldY, activeUnit.side) == 0) {
		shootUnit = activeUnit;
		activePointer = {
			fieldX: activeUnit.fieldX,
			fieldY: activeUnit.fieldY
		};
		activeUnit = {
			fieldX: -1,
			fieldY: -1
		};
	}
}

function activeUnitFly() {
	if (units[activeUnit.unit].fly && !activeUnit.alreadyMoved) {
		flyUnit = activeUnit;
		activePointer = {
			fieldX: activeUnit.fieldX,
			fieldY: activeUnit.fieldY
		};
		activeUnit = {
			fieldX: -1,
			fieldY: -1
		};
	}
}

function castSpell() {
	if (gameField.hasMagicSkill) {
		if (!gameField.playersInfo[gameField.sideToMove].spellCasted || gameField.adventureMode) {
			showCastSpellMenu();
		} else {
			showStatus(capitalizeFirstLetter(getCaption('you can cast spell only once per round')) + ".");
		}
	} else {
		showStatus(capitalizeFirstLetter(getCaption('You have not been trained in the art of spellcasting yet')) + ".");
	}
}

function performContinentTravel() {
	showChooseContinentMenu();
}

function hasAnyUndeadUnits(side) {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (field[i][j].quantity > 0 && field[i][j].side == side && units[field[i][j].unit].undead) {
				return true;
			}
		}
	}
	return false;
}

function hasAnyUndeadUnitsNotSide(side) {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (field[i][j].quantity > 0 && field[i][j].side != side && units[field[i][j].unit].undead) {
				return true;
			}
		}
	}
	return false;
}

function hasAnyMagicVulnerableUnits(side) {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (field[i][j].quantity > 0 && field[i][j].side == side && !units[field[i][j].unit].magicImmunity) {
				return true;
			}
		}
	}
	return false;
}

function hasAnyMagicVulnerableUnitsNotSide(side) {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (field[i][j].quantity > 0 && field[i][j].side != side && !units[field[i][j].unit].magicImmunity) {
				return true;
			}
		}
	}
	return false;
}

function hasAnyUnitsToResurrect(side) {
	for (var i = 0; i < config.FIELD_HEIGHT; i++) {
		for (var j = 0; j < config.FIELD_WIDTH; j++) {
			if (field[i][j].quantity > 0 && field[i][j].side == side && !units[field[i][j].unit].magicImmunity && (field[i][j].quantity < field[i][j].startQuantity)) {
				return true;
			}
		}
	}
	return false;
}

function startSpellCasting(spellIndex) {
	closeWindow('castSpellMenu');
	var name = gameField.adventureMode ? adventureSpells[spellIndex].name : spells[spellIndex].name;
	var globalSpellIndex = gameField.adventureMode ? adventureSpells[spellIndex].index : spells[spellIndex].index;

	showStatus(capitalizeFirstLetter(getCaption('cast')) + ": " + getCaption(name) + ".");

	switch (name) {
		case 'lightning bolt':
		case 'fireball':
			if (!hasAnyMagicVulnerableUnitsNotSide(gameField.sideToMove)) {
				showStatus(capitalizeFirstLetter(getCaption('there are no enemy armies vulnerable to magic')) + ".");
				return;
			}
			break;
		case 'resurrect':
			if (!hasAnyUnitsToResurrect(gameField.sideToMove)) {
				showStatus(capitalizeFirstLetter(getCaption('nobody to resurrect in your army')) + ".");
				return;
			}
			break;
		case 'teleport':
		case 'clone':
			if (!hasAnyMagicVulnerableUnits(gameField.sideToMove)) {
				showStatus(capitalizeFirstLetter(getCaption('nobody can be ' + (spells[spellIndex].name == 'clone' ? 'cloned' : 'teleported') + ' in your army')) + ".");
				return;
			}
			break;
		case 'turn undead':
			if (!hasAnyUndeadUnitsNotSide(gameField.sideToMove)) {
				showStatus(capitalizeFirstLetter(getCaption('there are no undead enemy armies on the field')) + ".");
				return;
			}
			break;
		case 'time stop':
			gameField.timeStop = 10 * gameField.spellPower;
			gameField.playersInfo[0].spells[globalSpellIndex]--;
			sounds.magic.play();
			break;
		case 'raise control':
			gameField.extraLeadership += gameField.spellPower * 100;
			gameField.playersInfo[0].spells[globalSpellIndex]--;
			sounds.magic.play();
			break;
		case 'find villain':
			castFindVillain();
			gameField.playersInfo[0].spells[globalSpellIndex]--;
			sounds.magic.play();
			break;
		case 'instant army':
			castInstantArmy();
			gameField.playersInfo[0].spells[globalSpellIndex]--;
			sounds.magic.play();
			break;
		case 'bridge':
			gameField.bridgeMode = true;
			showStatus(getCaption('Build bridge in which direction') + ": ⇦⇧⇨⇩");
			gameField.playersInfo[0].spells[globalSpellIndex]--;
			sounds.magic.play();
			break;
		case 'castle gate':
			castCastleGate();
			gameField.playersInfo[0].spells[globalSpellIndex]--;
			break;
		case 'town gate':
			castTownGate();
			gameField.playersInfo[0].spells[globalSpellIndex]--;
			break;
		default:
			break;
	}

	activeSpellIndex = globalSpellIndex;

	if (!gameField.adventureMode) {
		spellCastUnit = activeUnit;
		activePointer = {
			fieldX: activeUnit.fieldX,
			fieldY: activeUnit.fieldY
		};
		activeUnit = {
			fieldX: -1,
			fieldY: -1
		};
	}
}

function tryTeleport(x, y) {
	if (getMapChar(x, y) != '.') {
		return false;
	}

	gameField.boatX = x;
	gameField.boatY = y;
	gameField.boatContinent = gameField.continentIndex;

	return true;
}

function isMultipleContinentsVisited() {
	for (var i = 1; i < gameField.map.length; i++) {
		if (gameField.map[i].available) {
			return true;
		}
	}
	return false;
}

function castCastleGate() {
	if (isMultipleContinentsVisited()) {
		showChooseContinentMenu(showCastleGateMenu);
	} else {
		showCastleGateMenu(0);
	}
}

function castTownGate() {
	if (isMultipleContinentsVisited()) {
		showChooseContinentMenu(showTownGateMenu);
	} else {
		showTownGateMenu(0);
	}
}

function castFindVillain() {
	if (gameField.contract == null) {
		openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
			capitalizeFirstLetter(getCaption('you have no contract')) + '!'
		]);
		return;
	}

	var villain = villains[gameField.contract];

	for (var i = 0; i < gameField.map.length; i++) {
		for (castleName in gameField.map[i].ownerToCastle) {
			if (gameField.map[i].ownerToCastle.hasOwnProperty(castleName)) {
				var ownerName = gameField.map[i].ownerToCastle[castleName];
				if (ownerName == villain.name) {
					openInfoWindow(capitalizeFirstLetter(getCaption('success')) + "!", [
						capitalizeFirstLetter(getCaption('looking through the magic window')),
						getCaption('you have seen the army of'),
						getCaption(villain.name) + " " + getCaption("occupying"),
						getCaption('the castle of') + " " + getCaption(castleName) + " " + getCaption("at"),
						getCaption(gameField.map[i].name)
					]);
					return;
				}
			}
		}
	}

	openInfoWindow(capitalizeFirstLetter(getCaption('success')) + "!", [
		capitalizeFirstLetter(getCaption('looking through the magic window')),
		getCaption('you have seen the army of'),
		getCaption(villain.name) + " " + getCaption("at march.")
	]);
}

function castInstantArmy() {
	var army = getInstantArmy();

	if (joinArmy(army)) {
		openInfoWindow(capitalizeFirstLetter(getCaption('success')) + "!", [
			capitalizeFirstLetter(getCaption('army reinforcement')) + ": " + getUnitName(army[0]) + " (" + army[0].quantity + ")"
		]);
	} else {
		openInfoWindow(capitalizeFirstLetter(getCaption('fail')) + "!", [
			capitalizeFirstLetter(getCaption('there are no open slots')),
			getCaption('or any of this army type!') + '!'
		]);
	}
}

function getInstantArmy() {
	return [
		{
			unit: playerRoles[gameField.playerRole].instantArmyUnits[gameField.playerLevel],
			quantity: (gameField.spellPower + 1) * instantArmyMultiplier[gameField.playerLevel]
		}
	];
}

function joinArmy(army) {
	var unitsLost = false;
	var playerArmy = getPlayerArmy();
	for (var i = 0; i < army.length; i++) {
		unitsLost = unitsLost || joinUnit(playerArmy, army[i]);
	}
	return !unitsLost;
}

function joinUnit(army, unit) {
	var pos = -1;
	for (var i = 0; i < army.length; i++) {
		if (army[i].unit == unit.unit) {
			pos = i;
			break;
		}
	}

	if (pos == -1) {
		if (army.length == 5) {
			return true;
		} else {
			army.push(unit);
		}
	} else {
		army[pos].quantity += unit.quantity;
		return false;
	}
}

function abortShootSpellOrFly() {
	unitToTeleport = null;
	if (shootUnit.fieldX >= 0) {
		activeUnit = shootUnit;
		shootUnit = {
			fieldX: -1,
			fieldY: -1
		};
		activePointer = {
			fieldX: -1,
			fieldY: -1
		};
	} else {
		if (flyUnit.fieldX >= 0) {
			activeUnit = flyUnit;
			flyUnit = {
				fieldX: -1,
				fieldY: -1
			};
			activePointer = {
				fieldX: -1,
				fieldY: -1
			};
		} else {
			if (spellCastUnit.fieldX >= 0) {
				activeUnit = spellCastUnit;
				spellCastUnit = {
					fieldX: -1,
					fieldY: -1
				};
				activePointer = {
					fieldX: -1,
					fieldY: -1
				};
			}
		}
	}
}

function completeShootSpellOrFly() {
	var destField = field[activePointer.fieldY][activePointer.fieldX];
	if (shootUnit.fieldX >= 0) {
		if (destField.quantity > 0 && destField.side != shootUnit.side) {
			activeUnit = shootUnit;
			shootUnit = {
				fieldX: -1,
				fieldY: -1
			};
			activePointer = {
				fieldX: -1,
				fieldY: -1
			};
			activeUnit.alreadyMoved = true;
			hit(activeUnit, destField, Math.max(Math.abs(destField.fieldX - activeUnit.fieldX), Math.abs(destField.fieldY - activeUnit.fieldY)) > 1, melee);
		}
	} else {
		if (spellCastUnit.fieldX >= 0) {
			var spellName = allSpells[activeSpellIndex].name;
			if (typeof(sounds[spellName]) != 'undefined') {
				sounds[spellName].play();
			} else {
				sounds.magic.play();
			}

			switch (spellName) {
				case 'clone':
					if (destField.quantity > 0 && destField.side == spellCastUnit.side && !units[destField.side].magicImmunity) {
						var surplus = Math.floor(10 * gameField.spellPower / units[destField.unit].hitPoints);
						var heal = 10 * gameField.spellPower - surplus * units[destField.unit].hitPoints;
						showStatus(getUnitName(destField) + ", " + getCaption('cloned') + ": " + surplus + ".");
						destField.quantity += surplus;
						destField.injury -= heal;
						if (destField.quantity > destField.startQuantity) {
							destField.startQuantity = destField.quantity;
						}
						gameField.playersInfo[spellCastUnit.side].spells[activeSpellIndex]--;
						abortShootSpellOrFly();
						gameField.playersInfo[gameField.sideToMove].spellCasted = true;
					}
					break;
				case 'resurrect':
					if (destField.quantity > 0 && destField.side == spellCastUnit.side && !units[destField.side].magicImmunity) {
						var surplus = Math.floor(20 * gameField.spellPower / units[destField.unit].hitPoints);
						var heal = 20 * gameField.spellPower - surplus * units[destField.unit].hitPoints;
						if (surplus + destField.quantity > destField.startQuantity) {
							surplus = Math.max(0, destField.startQuantity - destField.quantity);
							heal = destField.injury;
						}
						showStatus(getUnitName(destField) + ", " + getCaption('resurrected') + ": " + surplus + ".");
						destField.quantity += surplus;
						destField.injury -= heal;
						gameField.playersInfo[spellCastUnit.side].spells[activeSpellIndex]--;
						abortShootSpellOrFly();
						gameField.playersInfo[gameField.sideToMove].spellCasted = true;
					}
					break;
				case 'lightning bolt':
					if (destField.quantity > 0 && destField.side != spellCastUnit.side && !units[destField.side].magicImmunity) {
						gameField.playersInfo[spellCastUnit.side].spells[activeSpellIndex]--;
						gameField.playersInfo[gameField.sideToMove].spellCasted = true;
						activePointer = {
							fieldX: -1,
							fieldY: -1
						};

						magicHit(spells[activeSpellIndex].name, destField, 10 * gameField.spellPower, function() {
							abortShootSpellOrFly();
							if (isGameFinished()) {
								endBattle();
								return;
							}
						});
					}
					break;
				case 'fireball':
					if (destField.quantity > 0 && destField.side != spellCastUnit.side && !units[destField.unit].magicImmunity) {
						gameField.playersInfo[spellCastUnit.side].spells[activeSpellIndex]--;
						gameField.playersInfo[gameField.sideToMove].spellCasted = true;
						activePointer = {
							fieldX: -1,
							fieldY: -1
						};

						magicHit(allSpells[activeSpellIndex].name, destField, 25 * gameField.spellPower, function() {
							abortShootSpellOrFly();
							if (isGameFinished()) {
								endBattle();
								return;
							}
						});
					}
					break;
				case 'turn undead':
					if (destField.quantity > 0 && destField.side != spellCastUnit.side && !units[destField.unit].magicImmunity && units[destField.unit].undead) {
						gameField.playersInfo[spellCastUnit.side].spells[activeSpellIndex]--;
						gameField.playersInfo[gameField.sideToMove].spellCasted = true;
						activePointer = {
							fieldX: -1,
							fieldY: -1
						};

						magicHit(allSpells[activeSpellIndex].name, destField, 50 * gameField.spellPower, function() {
							abortShootSpellOrFly();
							if (isGameFinished()) {
								endBattle();
								return;
							}
						});
					}
					break;
				case 'freeze':
					if (destField.quantity > 0 && destField.side != spellCastUnit.side && !units[destField.unit].magicImmunity) {
						gameField.playersInfo[spellCastUnit.side].spells[activeSpellIndex]--;
						gameField.playersInfo[gameField.sideToMove].spellCasted = true;
						destField.frozen = true;
						abortShootSpellOrFly();
						showStatus(getUnitName(destField) + " " + $.trim(getCaption((destField.quantity == 1) ? 'is' : 'are') + " " + getCaption('frozen')) + ".");
					}
					break;
				case 'teleport':
					if (unitToTeleport != null) {
						if (!(destField.quantity > 0) && destField.groundType == 0) {
							moveUnit(unitToTeleport, destField.fieldX - unitToTeleport.fieldX, destField.fieldY - unitToTeleport.fieldY, true);
							gameField.playersInfo[spellCastUnit.side].spells[activeSpellIndex]--;
							gameField.playersInfo[gameField.sideToMove].spellCasted = true;
							showStatus(getUnitName(unitToTeleport) + " " + $.trim(getCaption((destField.quantity == 1) ? 'is' : 'are') + " " + getCaption('teleported')) + ".");
							abortShootSpellOrFly();
						}
					} else {
						if (destField.quantity > 0 && destField.side == spellCastUnit.side && !units[destField.unit].magicImmunity) {
							unitToTeleport = destField;
							showStatus(capitalizeFirstLetter(getCaption('teleport')) + ": " + getUnitName(unitToTeleport) + ".");
						}
					}
					break;
				default:
					break;
			}
		} else {
			if (!(destField.quantity > 0) && destField.groundType == 0) {
				if (flyUnit.fieldX >= 0) {
					activeUnit = flyUnit;
					flyUnit = {
						fieldX: -1,
						fieldY: -1
					};
					activeUnit.alreadyMoved = true;
					moveUnit(activeUnit, activePointer.fieldX - activeUnit.fieldX, activePointer.fieldY - activeUnit.fieldY);
					activePointer = {
						fieldX: -1,
						fieldY: -1
					};
				}
			}
		}
	}
}

function openCharacterView() {
	showCharacterViewWindow();
	setAnyKeyHandler(function () {
		closeWindow('characterViewWindow');
	});
}

function openArmyView() {
	if (gameField.adventureMode) {
		armyToShow = getPlayerArmy();
	} else {
		armyToShow = getPlayerArmyFromBattleField();
	}

	updateMorale(armyToShow, 0);
	showArmyViewWindow();
	setAnyKeyHandler(function () {
		closeArmyView();
	});
}

function closeArmyView() {
	closeWindow('armyViewWindow');
	armyToShow = null;
}

function processBattleInput(keyCode) {
	if (isWindowActive('unitInfo')) {
		closeWindow('unitInfo');
	} else {
		if (activeUnit.fieldX >= 0 && typeof(activeUnit.side) != 'undefined' && activeUnit.moves > 0 && gameField.playersInfo[activeUnit.side].isHuman) {
			switch (keyCode) {
				case 102:
				case 54:
				case 39: // right
					moveActiveUnit(1, 0);
					break;
				case 100:
				case 52:
				case 37: // left
					moveActiveUnit(-1, 0);
					break;
				case 104:
				case 56:
				case 38: // up
					moveActiveUnit(0, -1);
					break;
				case 98:
				case 50:
				case 40: // down
					moveActiveUnit(0, 1);
					break;
				case 101:
				case 83: // shoot
					activeUnitShoot();
					break;
				case 103:
				case 55:
				case 36: // left-up
					moveActiveUnit(-1, -1);
					break;
				case 97:
				case 49:
				case 35: // left-down
					moveActiveUnit(-1, 1);
					break;
				case 105:
				case 57:
				case 33: // right-up
					moveActiveUnit(1, -1);
					break;
				case 99:
				case 51:
				case 34: // right-down
					moveActiveUnit(1, 1);
					break;
				case 32: // skip
					activeUnitSkip();
					break;
				case 96:
				case 70: // fly
					activeUnitFly();
					break;
				case 85: // cast spell
					castSpell();
					break;
				case 65: // view army
					openArmyView();
					break;
				case 87: // wait
					activeUnitWait();
					break;
				case 73: // unit info
					openUnitInfo(activeUnit);
					break;
				case 67: // controls
					showBattleControlsInfo();
					break;
				case 71: // give up
					showGiveUpConfirmation();
					break;
				default:

				break;
			}
		} else {
			if (activePointer.fieldX >= 0) {
				switch(keyCode)
				{
					case 102:
					case 54:
					case 39: // right
						moveActivePointer(1, 0);
						break;
					case 100:
					case 52:
					case 37: // left
						moveActivePointer(-1, 0);
						break;
					case 104:
					case 56:
					case 38: // up
						moveActivePointer(0, -1);
						break;
					case 98:
					case 50:
					case 40: // down
						moveActivePointer(0, 1);
						break;
					case 103:
					case 55:
					case 36: // left-up
						moveActivePointer(-1, -1);
						break;
					case 97:
					case 49:
					case 35: // left-down
						moveActivePointer(-1, 1);
						break;
					case 105:
					case 57:
					case 33: // right-up
						moveActivePointer(1, -1);
						break;
					case 99:
					case 51:
					case 34: // right-down
						moveActivePointer(1, 1);
						break;
					case 27: // abort (ESC)
						abortShootSpellOrFly();
						break;
					case 13:
					case 32:
						completeShootSpellOrFly();
						break;
					default:
						break;
				}
			}
		}
	}
}

function getClickedSquare(x, y) {
	x = Math.floor(x / (config.SCALE_FACTOR * config.SPRITE_WIDTH));
	y = Math.floor(y / (config.SCALE_FACTOR * config.SPRITE_HEIGHT));
	if (x < 0 || y < 0 || x >= config.FIELD_WIDTH || y >= config.FIELD_HEIGHT || gameField == null) {
		return {
			fieldX: -1,
			fieldY: -1
		};
	} else {
		return field[y][x];
	}
}

function getClickHandler(x, y) {
	for (var i in gameWindows) {
		if (gameWindows[i].isActive) {
			for (var j = 0; j < gameWindows[i].handlers.length; j++) {
				var clickHandler = gameWindows[i].handlers[j];
				if (x >= clickHandler.left && y >= clickHandler.top && x <= clickHandler.left + clickHandler.width && y <= clickHandler.top + clickHandler.height) {
					return clickHandler.handler;
				}
			}
		}
	}
	return null;
}

function getClickHandlerByKeyCode(keyCode) {
	for (var i in gameWindows) {
		if (gameWindows[i].isActive) {
			for (var j = 0; j < gameWindows[i].handlers.length; j++) {
				var clickHandler = gameWindows[i].handlers[j];
				if (clickHandler.keyCode == keyCode) {
					return clickHandler.handler;
				}
			}
		}
	}
	return null;
}

function processAnyKeyHandler() {
	if (anyKeyHandler != null) {
		var handler = anyKeyHandler;
		anyKeyHandler = null;
		handler();
		return true;
	}

	return false;
}

function openUnitInfo(unit) {
	infoUnit = unit;
	showWindow('unitInfo');
	setAnyKeyHandler(function () {
		closeWindow('unitInfo');
	});
}

function processClick(x, y, isRightMB) {
	if (processAnyKeyHandler()) {
		return;
	}

	var clickHandler = getClickHandler(x, y);
	if (clickHandler != null) {
		clickHandler();
		return;
	}

	if (isWindowActive('castSpellMenu')) {
		closeWindow('castSpellMenu');
		return;
	}

	if (isWindowActive('requestFightConfirmation') || isWindowActive('goldChestMenu')) {
		return;
	}

	var clickedSquare = getClickedSquare(x, y);
	if (clickedSquare.fieldX >= 0) {
		if (gameField.adventureMode) {
			if (isRiderVisibleAt(clickedSquare.fieldX, clickedSquare.fieldY)) {
				if (!isWindowActive('citeWindow')) {
					openCharacterView();
				}
			} else {
				if (!isRightMB) {
					var dx = clickedSquare.fieldX - 2;
					var dy = clickedSquare.fieldY - 2;

					if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
						if (dx == -1 && dy == -1) processAdventureInput(36);
						else if (dx == -1 && dy == 0) processAdventureInput(37);
						else if (dx == -1 && dy == 1) processAdventureInput(35);
						else if (dx == 0 && dy == -1) processAdventureInput(38);
						else if (dx == 0 && dy == 1) processAdventureInput(40);
						else if (dx == 1 && dy == -1) processAdventureInput(33);
						else if (dx == 1 && dy == 0) processAdventureInput(39);
						else if (dx == 1 && dy == 1) processAdventureInput(34);
					} else {
						// right pane click
						if (clickedSquare.fieldX == 5) {
							if (isWindowActive('citeWindow')) {
								closeCiteWindow();
							}
							switch (clickedSquare.fieldY) {
								case 0:
									showContractInfo();
									break;
								case 2: // magic
									castSpell();
									break;
								case 3: // puzzle
									openPuzzleMap();
									break;
								default:
									break;
							}
						}
					}
				}
			}
		} else {
			if (isRightMB) {
				if (clickedSquare.quantity > 0) {
					openUnitInfo(clickedSquare);
				}
			} else {
				if (activePointer.fieldX >= 0) {
					activePointer = clickedSquare;
					processBattleInput(32);
				} else {
					if (activeUnit.fieldX >= 0) {
						var dx = clickedSquare.fieldX - activeUnit.fieldX;
						var dy = clickedSquare.fieldY - activeUnit.fieldY;

						if (units[activeUnit.unit].fly && !activeUnit.alreadyMoved && !(clickedSquare.quantity > 0) && clickedSquare.groundType == 0) {
							activeUnitFly();
							activePointer = {
								fieldX: clickedSquare.fieldX,
								fieldY: clickedSquare.fieldY
							};
							completeShootSpellOrFly();
						} else {
							if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
								if (dx == -1 && dy == -1) processBattleInput(36);
								else if (dx == -1 && dy == 0) processBattleInput(37);
								else if (dx == -1 && dy == 1) processBattleInput(35);
								else if (dx == 0 && dy == -1) processBattleInput(38);
								else if (dx == 0 && dy == 1) processBattleInput(40);
								else if (dx == 1 && dy == -1) processBattleInput(33);
								else if (dx == 1 && dy == 0) processBattleInput(39);
								else if (dx == 1 && dy == 1) processBattleInput(34);
							} else {
								if (activeUnit.ammo > 0 && countCloseUnits(activeUnit.fieldX, activeUnit.fieldY, activeUnit.side) == 0 && clickedSquare.quantity > 0 && clickedSquare.side != activeUnit.side) {
									activeUnitShoot();
									activePointer = {
										fieldX: clickedSquare.fieldX,
										fieldY: clickedSquare.fieldY
									};
									completeShootSpellOrFly();
								}
							}
						}
					}
				}
			}
		}
	}
}

function processStatusBarClick(x, y) {
	if (processAnyKeyHandler()) {
		return;
	}

	if (isWindowActive('requestFightConfirmation') || isWindowActive('goldChestMenu')) {
		return;
	}

	if (!isWindowActive('citeWindow') && gameField != null) {
		if (x >= statusCanvas.width - 18 - 18 && x < statusCanvas.width - 18) {
			if (activeUnit.fieldX >= 0 && gameField.playersInfo[activeUnit.side].isHuman) {
				castSpell();
			}
		} else {
			if (x >= statusCanvas.width - 18 && x < statusCanvas.width) {
				showActionsMenu();
			}
		}
	}
}

function makeIndex(arr, fieldName) {
	var result = {};
	for (var i = 0; i < arr.length; i++) {
		arr[i].id = i;
		result[arr[i][fieldName]] = arr[i];
	}
	return result;
}

function initGameData() {
	artefactsByChar = makeIndex(artefacts, 'ch');
	signsByChar = [];

	for (var i = 0; i < gameField.map.length; i++) {
		signsByChar.push(makeIndex(signs[i], 'ch'));
	}
}

$(document).ready(function() {
	// Prevent the backspace key from navigating back.
	$(document).unbind('keydown').bind('keydown', function (event) {
		var doPrevent = false;
		if (event.keyCode === 8) {
			var d = event.srcElement || event.target;
			if ((d.tagName.toUpperCase() === 'INPUT' && 
				 (
					 d.type.toUpperCase() === 'TEXT' ||
					 d.type.toUpperCase() === 'PASSWORD' || 
					 d.type.toUpperCase() === 'FILE' || 
					 d.type.toUpperCase() === 'SEARCH' || 
					 d.type.toUpperCase() === 'EMAIL' || 
					 d.type.toUpperCase() === 'NUMBER' || 
					 d.type.toUpperCase() === 'DATE' )
				 ) || 
				 d.tagName.toUpperCase() === 'TEXTAREA') {
				doPrevent = d.readOnly || d.disabled;
			}
			else {
				doPrevent = true;
			}
		}

		if ($.inArray(event.keyCode, [32, 33, 34, 35, 36, 37, 38, 39, 40]) > -1) {
			doPrevent = true;
		}

		if (doPrevent) {
			event.preventDefault();
		}
	});
	
	canvas = document.getElementById("kbAnimation");
	canvas.width = config.SPRITE_WIDTH * config.FIELD_WIDTH * config.SCALE_FACTOR;
	canvas.height = config.SPRITE_HEIGHT * config.FIELD_HEIGHT * config.SCALE_FACTOR;

	statusCanvas = document.getElementById("kbStatus");
	statusCanvas.width = 578;
	statusCanvas.height = 18;
	statusContext = statusCanvas.getContext("2d");

	warriorsImage = new Image();
	warriorsImage.addEventListener("load", function() {
		window.warriorsReady = true;
	});
	warriorsImage.src = "images/warriors.png";

	warriorsMirrorImage = new Image();
	warriorsMirrorImage.addEventListener("load", function() {
		window.warriorsMirrorReady = true;
	});
	warriorsMirrorImage.src = "images/warriors_mirror.png";

	groundImage = new Image();
	groundImage.addEventListener("load", function() {
		window.groundReady = true;
	});
	groundImage.src = "images/comtiles.png";

	menuImage = new Image();
	menuImage.addEventListener("load", function() {
		window.menuReady = true;
	});
	menuImage.src = "images/menu.png";
	
	magicImage = new Image();
	magicImage.addEventListener("load", function() {
		window.magicReady = true;
	});
	magicImage.src = "images/magic.png";

	adventureImage1 = new Image();
	adventureImage1.addEventListener("load", function() {
		window.adventure1Ready = true;
	});
	adventureImage1.src = "images/tileseta.png";

	adventureImage2 = new Image();
	adventureImage2.addEventListener("load", function() {
		window.adventure2Ready = true;
	});
	adventureImage2.src = "images/tilesetb.png";

	adventureImage3 = new Image();
	adventureImage3.addEventListener("load", function() {
		window.adventure3Ready = true;
	});
	adventureImage3.src = "images/tilesalt.png";

	cursorImage = new Image();
	cursorImage.addEventListener("load", function() {
		window.cursorReady = true;
	});
	cursorImage.src = "images/cursor.png";

	addonsImage = new Image();
	addonsImage.addEventListener("load", function() {
		window.addonsReady = true;
	});
	addonsImage.src = "images/addons.png";

	cursorMirrorImage = new Image();
	cursorMirrorImage.addEventListener("load", function() {
		window.cursorMirrorReady = true;
	});
	cursorMirrorImage.src = "images/cursor_mirror.png";

	sitesImage = new Image();
	sitesImage.addEventListener("load", function() {
		window.sitesReady = true;
	});
	sitesImage.src = "images/cites.png";

	paneImage = new Image();
	paneImage.addEventListener("load", function() {
		window.paneReady = true;
	});
	paneImage.src = "images/pane.png";

	cursorSimpleImage = new Image();
	cursorSimpleImage.addEventListener("load", function() {
		window.cursorSimpleReady = true;
	});
	cursorSimpleImage.src = "images/cursor_simple.png";

	villainsImage = new Image();
	villainsImage.addEventListener("load", function() {
		window.villainsReady = true;
	});
	villainsImage.src = "images/villains.png";

	rolesImage = new Image();
	rolesImage.addEventListener("load", function() {
		window.rolesReady = true;
	});
	rolesImage.src = "images/roles.png";

	viewImage = new Image();
	viewImage.addEventListener("load", function() {
		window.viewReady = true;
	});
	viewImage.src = "images/view.png";

	winImage = new Image();
	winImage.addEventListener("load", function() {
		window.winReady = true;
	});
	winImage.src = "images/win.png";

	selectImage = new Image();
	selectImage.addEventListener("load", function() {
		window.selectReady = true;
	});
	selectImage.src = "images/select.png";

	titanImage = new Image();
	titanImage.addEventListener("load", function() {
		window.titanReady = true;
	});
	titanImage.src = "images/titan.png";

	lepraImage = new Image();
	lepraImage.addEventListener("load", function() {
		window.lepraReady = true;
	});
	lepraImage.src = "images/lepra.png";

	lepraGreyImage = new Image();
	lepraGreyImage.addEventListener("load", function() {
		window.lepraGreyReady = true;
	});
	lepraGreyImage.src = "images/lepra_grey.png";

	init();

	window.oncontextmenu = function()
	{
		return false;
	}

	$(statusCanvas).click(function(e) {
		var x = e.pageX - statusCanvas.offsetLeft;
		var y = e.pageY - statusCanvas.offsetTop;
		processStatusBarClick(x, y);
	});

	$(document).mousedown(function(e) { 
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;

		if (e.button == 2) { 
			processClick(x, y, true);
			return false; 
		} else {
			processClick(x, y);
		}
		return true; 
	}); 

	setTimeout(startGame, 50);
});

