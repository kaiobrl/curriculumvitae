const CV = {
    lang: 'pt',
    meta: {
        title: 'Kaiobrl',
        description: 'Currículo de Kaiobrl | full stack developer',
        author: 'Kaiobrl',
        themeColor: '#003147',
        url: 'https://kaiobrl.github.io/curriculumvitae'
    },
    i18n: {
        pt: {
            available: 'Disponível',
            contact: 'Contato',
            phone: 'Telefone',
            email: 'Email',
            location: 'Localização',
            education: 'Formação',
            highSchool: 'Ensino Médio',
            vocational: 'Profissionalizante',
            technical: 'Técnico em Informática',
            languages: 'Idiomas',
            native: 'Nativo',
            intermediate: 'Intermediário',
            skills: 'Habilidades',
            about: 'Sobre Mim',
            aboutText: 'Olá! Sou **Kaiobrl**, full stack developer em formação apaixonado por tecnologia. Estou sempre me desafiando com novos projetos e buscando feedback na comunidade de programação, além de compartilhar meus conhecimentos.',
            experience: 'Experiência Profissional',
            interests: 'Interesses',
            certifications: 'Certificações & Cursos',
            completed: 'Concluído',
            inProgress: 'Concluído',
            projects: 'Projetos',
            contactForm: 'Entre em Contato',
            send: 'Enviar',
            message: 'Mensagem',
            name: 'Nome',
            share: 'Compartilhar',
            shareWhatsApp: 'WhatsApp',
            shareLinkedIn: 'LinkedIn',
            shareEmail: 'Email',
            footer: 'Feito com muito café',
            games: 'Jogos',
            coding: 'Programar',
            reading: 'Leitura',
            cooking: 'Culinária',
            movies: 'Filmes',
            series: 'Séries',
            viewProject: 'Ver Projeto',
            sourceCode: 'Código Fonte',
            yearsOld: 'anos de idade',
            visitorCount: 'Visitas'
        },
        en: {
            available: 'Available',
            contact: 'Contact',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            education: 'Education',
            highSchool: 'High School',
            vocational: 'Vocational Course',
            technical: 'IT Technician',
            languages: 'Languages',
            native: 'Native',
            intermediate: 'Intermediate',
            skills: 'Skills',
            about: 'About Me',
            aboutText: 'Hello! I\'m **Kaiobrl**, full stack developer in training passionate about technology. I\'m always challenging myself with new projects and seeking feedback from the programming community.',
            experience: 'Professional Experience',
            interests: 'Interests',
            certifications: 'Certifications & Courses',
            completed: 'Completed',
            inProgress: 'Completed',
            projects: 'Projects',
            contactForm: 'Get in Touch',
            send: 'Send',
            message: 'Message',
            name: 'Name',
            share: 'Share',
            shareWhatsApp: 'WhatsApp',
            shareLinkedIn: 'LinkedIn',
            shareEmail: 'Email',
            footer: 'Made with lots of coffee',
            games: 'Games',
            coding: 'Coding',
            reading: 'Reading',
            cooking: 'Cooking',
            movies: 'Movies',
            series: 'Series',
            viewProject: 'View Project',
            sourceCode: 'Source Code',
            yearsOld: 'years old',
            visitorCount: 'Visits'
        }
    },
    profile: {
        name: 'Kaiobrl',
        title: 'full stack developer',
        image: './img/perfil.png',
        status: 'available',
        social: [
            { icon: 'fab fa-github', url: 'https://github.com/Kaiobrl', label: 'GitHub' },
            { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/Kaiobrl', label: 'LinkedIn' },
            { icon: 'fas fa-envelope', url: 'mailto:formatolivre1@gmail.com', label: 'Email' },
            { icon: 'fab fa-whatsapp', url: 'https://wa.me/5583981374944', label: 'WhatsApp' }
        ]
    },
    contact: [
        { icon: 'fas fa-phone', labelKey: 'phone', value: '+55 83 9.8137-4944', href: 'tel:+5583981374944' },
        { icon: 'fas fa-envelope', labelKey: 'email', value: 'formatolivre1@gmail.com', href: 'mailto:formatolivre1@gmail.com' },
        { icon: 'fas fa-map-marker-alt', labelKey: 'location', value: 'João Pessoa, PB', href: null }
    ],
    education: [
        { date: '2016', degreeKey: 'technical', school: 'Técnico e Suporte em Informática' },
        { date: '2015', degreeKey: 'vocational', school: 'Técnico de Apoio ao Usuário de Informática' },
        { date: '2011', degreeKey: 'highSchool', school: 'E.E.E.F.M Cônego Francisco Gomes de Lima' }
    ],
    languages: [
        { name: 'Português', levelKey: 'native', percent: 100 },
        { name: 'Inglês', levelKey: 'intermediate', percent: 65 }
    ],
    skills: [
        { icon: 'fab fa-html5', name: 'HTML5', percent: 92 },
        { icon: 'fab fa-css3-alt', name: 'CSS3', percent: 89 },
        { icon: 'fab fa-js', name: 'JavaScript', percent: 76 },
        { icon: 'fab fa-node-js', name: 'Node.js', percent: 60 },
        { icon: 'fab fa-git-alt', name: 'Git', percent: 60 },
        { icon: 'fab fa-react', name: 'React', percent: 60 },
        { icon: 'fas fa-database', name: 'SQL', percent: 60 },
        { icon: 'fas fa-server', name: 'Express', percent: 60 }
    ],
    experience: [
        { date: 'Out 2019 - Ago 2024', title: 'A Tradicional Tapioca do Lula', company: 'Geisel, João Pessoa', description: 'Serviços gerais e atendimento ao cliente.' },
        { date: 'Abr 2013 - Jul 2013', title: 'On Line Prestadora de Serviços LTDA', company: 'São Braz, João Pessoa', description: 'Auxiliar de produção.' },
        { date: 'Mai 2011 - Ago 2011', title: 'Carrefour Comércio e Indústria', company: 'Bessa, João Pessoa', description: 'Empacotador e organização de mercadorias.' }
    ],
    interests: [
        { icon: 'fas fa-gamepad', key: 'games' },
        { icon: 'fas fa-laptop-code', key: 'coding' },
        { icon: 'fas fa-book-open', key: 'reading' },
        { icon: 'fas fa-utensils', key: 'cooking' },
        { icon: 'fas fa-film', key: 'movies' },
        { icon: 'fas fa-tv', key: 'series' }
    ],
    certifications: [
        { icon: 'fab fa-html5', title: 'HTML5 & CSS3', desc: 'Desenvolvimento Web', statusKey: 'completed' },
        { icon: 'fab fa-js', title: 'JavaScript Moderno', desc: 'ES6+ & DOM', statusKey: 'completed' },
        { icon: 'fab fa-node-js', title: 'Node.js Basics', desc: 'Backend Fundamentals', statusKey: 'completed' },
        { icon: 'fab fa-react', title: 'React Essentials', desc: 'Componentes & Hooks', statusKey: 'completed' }
    ],
    projects: [
        { title: 'Currículo Online', desc: 'Currículo responsivo com dark mode e animações', tech: ['HTML', 'CSS', 'JS'], image: null, url: '#', source: 'https://github.com/Kaiobrl/curriculumvitae' },
        { title: 'Em Breve', desc: 'Projeto em desenvolvimento', tech: ['React', 'Node'], image: null, url: '#', source: '#' }
    ],
    github: {
        username: 'Kaiobrl',
        showRepos: true,
        repoCount: 4
    }
};
