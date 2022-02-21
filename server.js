const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
});

server.get('/about', (req, res) => {
  const about = {
    avatar_url: 'https://avatars.githubusercontent.com/u/53240427?v=4',
    name: 'Eduardo Candido',
    role: 'Programador web',
    description:
      'Programador focado em Desenvolvimento Web a procura da primeira oportunidade no mercado de trabalho, pronto paradar o meu melhor.',
    links: [
      {
        name: 'Github',
        url: 'https://www.github.com/Eduardosbk/',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/eduardoprog/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/deveducandido/',
      },
    ],
  };
  return res.render('about', { about });
});

server.get('/lessons', (req, res) => {
  return res.render('lessons', { items: videos });
});

server.listen(3333, () => {
  console.log('Server running at port 3333');
});
