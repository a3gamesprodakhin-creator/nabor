import { TextInputStyle } from "discord.js";

// Конфигурация системы, включающая токен бота и ID гильдии (сервера)
export const system = {
    token: process.env.TOKEN || "", // Токен берется из переменных окружения
    guildId: "1446341668025405567", // ID сервера, на котором будет работать бот
};

// Конфигурация ролей, определяющих доступ к заявкам
export const roles = {
    allowed: ["1446341668679974963", "1446341668679974962"], // Роли, которые могут подавать заявки
    staff: "1446341668436578337", // Роль сотрудников, ответственных за обработку заявок
};

// Конфигурация каналов, используемых ботом
export const channels = {
    sets: "1446341671217532937", // Канал, в который будет отправлен эмбед с заявкой
};

// Конфигурация набора вопросов и ролей для заявок
export const set = {
    defaultAuditLogId: "1471364392913473659", // ID стандартного канала для логирования действий
    questions: [
        {
            custom_id: "name&&age", // Уникальный идентификатор вопроса
            embed: "Имя и возраст", // Текстовое значение для эмбеда
            label: "Ваше имя и возраст", // Подсказка для модального окна
            placeholder: "Пример: Владимир, 24 года", // Пример ввода для пользователя
            style: TextInputStyle.Short, // Стиль ввода (короткий текст)
            max_length: 64, // Максимально допустимая длина ввода
            require: true, // Обязательный ли вопрос (true/false)
        },
        {
            custom_id: "time",
            embed: "Часовой пояс",
            label: "Ваш часовой пояс и прайм-тайм",
            placeholder: "Пример: GMT+3, 18:00 - 22:00",
            style: TextInputStyle.Short,
            max_length: 64,
            require: true,
        },
        {
            custom_id: "bio",
            embed: "О себе",
            label: "Расскажите о себе и почему именно Вы?",
            placeholder: "Расскажите о себе здесь",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "experience",
            embed: "Работал ли в этой сфере",
            label: "Работал ли в этой сфере?",
            placeholder: "Был ли опыт у вас в этой сфере",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "opit",
            embed: "Опыт",
            label: "Был ли опыт в данной сфере, если да то где?",
            placeholder: "Расскажите об своем опыте тут",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "rules",
            embed: "Знание правил платформы",
            label: "Знание правил платформы от 1 до 10",
            placeholder: "Знание правил платформы от 1 до 10",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "opitit",
            embed: "Опыт",
            label: "Был ли опыт в данной сфере, если да то где?",
            placeholder: "Расскажите об своем опыте тут",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "ruless",
            embed: "Знание правил платформы",
            label: "Знание правил платформы от 1 до 10",
            placeholder: "Знание правил платформы от 1 до 10",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "event_exp",
            embed: "Опыт в ивентах",
            label: "Ваш опыт проведения ивентов?",
            placeholder: "Расскажите, какие ивенты проводили",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "event_ideas",
            embed: "Идея ивента",
            label: "Предложите идею для нового ивента",
            placeholder: "Формат, правила, суть...",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "stream_exp",
            embed: "Опыт стриминга",
            label: "Ваш опыт ведения трансляций?",
            placeholder: "Где стримили, какая аудитория...",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "mic_quality",
            embed: "Оборудование",
            label: "Качество микрофона и наличие шумов",
            placeholder: "Модель микрофона, есть ли посторонние шумы",
            style: TextInputStyle.Short,
            max_length: 128,
            require: true,
        },
        {
            custom_id: "close_exp",
            embed: "Опыт клозов",
            label: "Опыт организации клозов/кастомок",
            placeholder: "Какие режимы, сколько людей собирали...",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "portfolio",
            embed: "Портфолио",
            label: "Ссылка на портфолио или примеры работ",
            placeholder: "Google Drive, Behance, YouTube...",
            style: TextInputStyle.Short,
            max_length: 256,
            require: true,
        },
        {
            custom_id: "communication_skills",
            embed: "Навыки общения",
            label: "Оцените свои навыки общения",
            placeholder: "Насколько вы коммуникабельны, грамотны...",
            style: TextInputStyle.Paragraph,
            max_length: 512,
            require: true,
        },
        {
            custom_id: "soft_skills",
            embed: "Софт",
            label: "В каких программах работаете?",
            placeholder: "Photoshop, Premiere Pro, Figma...",
            style: TextInputStyle.Short,
            max_length: 128,
            require: true,
        },
    ],
    /*
        Вопросы заданы в формате:
        custom_id - уникальный идентификатор вопроса
        embed - текст, отображаемый в эмбеде
        label - текст, отображаемый в модальном окне
        placeholder - пример текста для ввода
        style - стиль ввода (TextInputStyle.Paragraph или TextInputStyle.Short)
        min_length - минимально допустимое количество символов (если требуется)
        max_length - максимально допустимая длина ввода
        require - обозначает, является ли вопрос обязательным (true/false)
    */
    roles: [
        {
            role: "1446341668444836067", // ID роли, к которой относится заявка
            log: "1446341670257037383", // ID канала для логирования действий по этой роли
            pingRole: "1446341668444836060", // Moderator ping
            label: "Модератор", // Залоговок меню выбора
            modalLabel: "Заявка на должность модератора", // Заголовок модального окна с заявкой
            description: "Следят за порядком на сервере", // Описание роли, для которой подается заявка
            question: ["name&&age", "time", "bio", "experience"], // Массив ID вопросов, относящихся к этой роли
        },
        {
            role: "1446341668444836068", // ID роли, к которой относится заявка
            log: "1470686494455763144", // ID канала для логирования действий по этой роли
            pingRole: "1470687633511551121", // Control ping
            label: "Контрол", // Залоговок меню выбора
            modalLabel: "Заявка на должность Контрола", // Заголовок модального окна с заявкой
            description: "Следят за порядком на сервере в текстовых каналах", // Описание роли, для которой подается заявка
            question: ["name&&age", "time", "rules", "opit"], // Массив ID вопросов, относящихся к этой роли
        },
        {
            role: "1446341668461871212",
            log: "1446341670412095568",
            pingRole: "1446341668444836065", // Eventsmod ping
            label: "Eventsmod",
            modalLabel: "Заявка на Eventsmod",
            description: "Проводит ивенты на сервере",
            question: ["name&&age", "time", "event_exp", "event_ideas", "mic_quality"],
        },
        {
            role: "1446341668461871209",
            log: "1446341670412095569",
            pingRole: "1446341668444836064", // Broadcaster ping
            label: "Broadcaster",
            modalLabel: "Заявка на Broadcaster",
            description: "Ведет трансляции и эфиры",
            question: ["name&&age", "time", "stream_exp", "mic_quality"],
        },
        {
            role: "1446341668461871211",
            log: "1446341670412095570",
            pingRole: "1446341668436578342", // Closemaker ping
            label: "Closemaker",
            modalLabel: "Заявка на Closemaker",
            description: "Организует клозы",
            question: ["name&&age", "time", "close_exp", "mic_quality"],
        },
        {
            role: "1446341668461871213",
            log: "1446341670412095571",
            pingRole: "1446341668444836066", // Creative ping
            label: "Creative",
            modalLabel: "Заявка на Creative",
            description: "Занимается креативными задачами",
            question: ["name&&age", "time", "portfolio", "soft_skills"],
        },
        {
            role: "1446341668444836069", // ID роли, к которой относится заявка
            log: "1446341670257037382", // ID канала для логирования действий по этой роли
            pingRole: "1446341668444836063", // Support ping
            label: "Support", // Залоговок меню выбора
            modalLabel: "Заявка на должность Support", // Заголовок модального окна с заявкой
            description: "Занимаются верификацией пользователей", // Описание роли, для которой подается заявка
            question: ["name&&age", "time", "communication_skills", "ruless", "opitit"], // Массив ID вопросов, относящихся к этой роли
        },
    ],
    /*
        Роли заданы в формате:
        role - ID роли, к которой относится заявка
        log - ID канала, где будут сохранились логи по этой роли
        modalLabel - текст заголовка для модального окна
        description - текст описания для всей заявки

        question - массив идентификаторов вопросов, которые задаются при подаче заявки
    */
};
