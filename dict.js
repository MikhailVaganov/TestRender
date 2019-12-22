var Questions = Questions || [
    {
        question: "ПТЭ ЭП п.2.3.9. Когда, согласно настоящим Правилам, должны проводиться внеочередные осмотры ВЛ или их участков?",
        options : {
            a: 'При образовании на проводах и тросах гололеда.',
            b: 'При пляске проводов, во время ледохода и разлива рек.',
            c: 'При пожарах в зоне трассы ВЛ.',
            d: 'После сильных бурь, ураганов и других стихийных бедствий.',
            e: 'После отключения ВЛ релейной защитой и неуспешного автоматического повторного включения.',
            f: 'Не реже 1 раза в год.',
            g: 'По мере необходимости - после успешного повторного автоматического включения.'
        },
        type : 'radio',
        answers: ['f'],
    },
    {
        question: " ПТЭ ЭП п.2.3.11. Что необходимо проверять при осмотре ВЛ и токопроводов?",
        options : {
            a: 'Противопожарное состояние трассы.',
            b: 'Состояние фундаментов, приставок.',
            c: 'Состояние опор.',
            d: 'Состояние проводов и тросов.',
            e: 'Состояние гибких шин токопроводов.',
            f: 'Состояние изоляторов.',
            g: 'Состояние арматуры.',
            h: 'Состояние разрядников, коммутационной аппаратуры и концевых кабельных муфт на спусках.',
            i: 'Состояние дорожных знаков в местах пересечения ВЛ с шоссейными дорогами.',
        },
        type : 'radio',
        answers: ['i'],
    },
    {
        question: "ПТЭ ЭП п.2.3.11. При осмотре ВЛ и токопроводов необходимо проверять состояние опор:",
        options : {
            a: 'Не должно быть их наклонов или смещения в грунте, видимого загнивания деревянных опор, обгорания и расщепления деревянных деталей.',
            b: 'Не должно быть нарушения целостности бандажей, сварных швов, болтовых и заклепочных соединений на металлических опорах.',
            c: 'Не должно быть отрывов металлических элементов, коррозии металла, трещин и повреждений железобетонных опор.',
            d: 'Не должно быть птичьих гнезд, других посторонних предметов на опорах.',
            e: 'На опорах должны быть плакаты и знаки безопасности.',
        },
        type : 'checkbox',
        answers: ['b', 'e'],
    },
    {
        question: "ПТЭ ЭП п.2.3.11 При осмотре ВЛ и токопроводов необходимо проверять состояние фундаментов, приставок:",
        options : {
            a: 'Не должно быть оседания или вспучивания грунта вокруг фундаментов.',
            b: 'Не должно быть трещин и повреждений в фундаментах (приставках).',
            c: 'Должно быть достаточное заглубление фундаментов.',
            d: 'Допускается небольшое оседание грунта вокруг фундаментов.',
        },
        type : 'checkbox',
        answers: ['a', 'b'],
    },
    {
        question: "ПТЭ ЭП п.2.3.11. При осмотре ВЛ и токопроводов необходимо проверять состояние проводов и тросов:",
        options : {
            a: 'Не должно быть обрывов и оплавлений отдельных проволок, набросов на провода и тросы, нарушений их регулировки.',
            b: 'Не должно быть недопустимого изменения стрел провеса и расстояний от проводов до земли и объектов.',
            c: 'Не должно быть смещения от места установки гасителей вибрации, предусмотренных проектом ВЛ.',
            d: 'Не должно быть птичьих гнезд, других посторонних предметов на опорах.',
            e: 'Допускается превышение допустимого изменения стрел провеса и расстояний от проводов до земли и объектов в летнее время.',
        },
        type : 'checkbox',
        answers: ['b', 'e'],
    },
    {
        question: "ПТЭ ЭП п.2.3.11. При осмотре ВЛ и токопроводов необходимо проверять состояние изоляторов:",
        options : {
            a: 'Не должно быть боя, ожогов, трещин, загрязненности, повреждения глазури.',
            b: 'Не должно быть неправильной насадки штыревых изоляторов на штыри или крюки, повреждений защитных рогов.',
            c: 'Должны быть на месте гайки, замки или шплинты.',
            d: 'Не должно быть птичьих гнезд, других посторонних предметов на опорах.',
            e: 'Допускаются небольшие трещины.',
        },
        type : 'checkbox',
        answers: ['b', 'e'],
    },
    {
        question: "ПТЭ ЭП п.2.3.11. При осмотре ВЛ и токопроводов необходимо проверять состояние разрядников, коммутационной аппаратуры на ВЛ и концевых кабельных муфт на спусках:",
        options : {
            a: 'Не должно быть повреждений или обрывов заземляющих спусков на опорах и у земли.',
            b: 'Не должно быть нарушений контактов в болтовых соединениях молниезащитного троса с заземляющим спуском или телом опоры.',
            c: 'Должны быть на месте гайки, замки или шплинты.',
            d: 'Не должно быть разрушения коррозией элементов заземляющего устройства.',
            e: 'Допускаются незначительные разрушения коррозией элементов заземляющего устройства.',
        },
        type : 'checkbox',
        answers: ['b', 'e'],
    },
    {
        question: "ПТЭ ЭП п.2.4.25. Какие требования необходимо соблюдать при раскопках грунта зимой на глубину более 0,4 м в местах прохождения кабелей?",
        options : {
            a: 'Работы должны выполняться с отогревом грунта.',
            b: 'От поверхности отогреваемого слоя до кабелей должен сохраняться слой грунта толщиной не менее 0,15 м.',
            c: 'При необходимости могут применяться ударные и вибропогружные механизмы.',
            d: 'Оттаявший грунт следует отбрасывать лопатами.',
        },
        type : 'checkbox',
        answers: ['b', 'd'],
    },
    {
        question: "ПТЭ ЭП п.2.4.25. Какие требования необходимо соблюдать при раскопках грунта зимой на глубину более 0,4 м в местах прохождения кабелей?",
        options : {
            a: 'Работы должны выполняться с отогревом грунта.',
            b: 'От поверхности отогреваемого слоя до кабелей должен сохраняться слой грунта толщиной не менее 0,15 м.',
            c: 'При необходимости могут применяться ударные и вибропогружные механизмы.',
            d: 'Оттаявший грунт следует отбрасывать лопатами.',
        },
        type : 'checkbox',
        answers: ['b', 'd'],
    },
    {
        question: "ПТЭ ЭП п.2.4.25. Какие требования необходимо соблюдать при раскопках грунта зимой на глубину более 0,4 м в местах прохождения кабелей?",
        options : {
            a: 'Работы должны выполняться с отогревом грунта.',
            b: 'От поверхности отогреваемого слоя до кабелей должен сохраняться слой грунта толщиной не менее 0,15 м.',
            c: 'При необходимости могут применяться ударные и вибропогружные механизмы.',
            d: 'Оттаявший грунт следует отбрасывать лопатами.',
        },
        type : 'checkbox',
        answers: ['b', 'd'],
    },
    {
        question: "ПТЭ ЭП п.2.4.25. Какие требования необходимо соблюдать при раскопках грунта зимой на глубину более 0,4 м в местах прохождения кабелей?",
        options : {
            a: 'Работы должны выполняться с отогревом грунта.',
            b: 'От поверхности отогреваемого слоя до кабелей должен сохраняться слой грунта толщиной не менее 0,15 м.',
            c: 'При необходимости могут применяться ударные и вибропогружные механизмы.',
            d: 'Оттаявший грунт следует отбрасывать лопатами.',
        },
        type : 'checkbox',
        answers: ['b', 'd'],
    },
    {
        question: "ПТЭ ЭП п.2.4.25. Какие требования необходимо соблюдать при раскопках грунта зимой на глубину более 0,4 м в местах прохождения кабелей?",
        options : {
            a: 'Работы должны выполняться с отогревом грунта.',
            b: 'От поверхности отогреваемого слоя до кабелей должен сохраняться слой грунта толщиной не менее 0,15 м.',
            c: 'При необходимости могут применяться ударные и вибропогружные механизмы.',
            d: 'Оттаявший грунт следует отбрасывать лопатами.',
        },
        type : 'checkbox',
        answers: ['b', 'd'],
    }
];