import Link from 'next/link'

const content = {
  team: [
    {
      name: 'Anna Guercio',
      age: '21',
      imageUrl: '/image/anna.png',
      linkedinUrl: 'https://www.linkedin.com/in/annaguercio/',
      githubUrl: 'https://github.com/anna-guercio'
    },
    {
      name: 'Kaique Lucena',
      age: '21',
      imageUrl: '/image/kaique.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/kaique-lucena-1383401a2/',
      githubUrl: 'https://github.com/KaiqueeFigui'
    },
    {
      name: 'Rodrigo Cunha',
      age: '22',
      imageUrl: '/image/rodrigo.jpeg',
      linkedinUrl:
        'https://www.linkedin.com/in/rodrigo-moreira-cunha-b92016177',
      githubUrl: 'https://github.com/rodrigo-cunha-sptech'
    },
    {
      name: 'Willian Leal',
      age: '21',
      imageUrl: '/image/will.png',
      linkedinUrl:
        'https://www.linkedin.com/in/willian-leal-de-oliveira-0aab05192/',
      githubUrl: 'https://github.com/willian-leal'
    }
  ],
  homePage: {
    title: 'Pesquisa de campo: extração de dados do YouTube',
    subtitle: `Estamos precisando de ajuda para realizar nosso TCC! Nosso projeto envolve a criação de um modelo de Machine Learning capaz de analisar dados de recomendação. Para isso, precisamos coletar dados do histórico do YouTube de vários usuários para criar nossa base de dados.`,
    logoUrl: '/image/logo.png'
  },
  learnMore: [
    {
      title: 'Como vai funcionar a Extração?',
      subtitle: `A extração será realizada por meio do Google Takeout, recurso próprio do Google que permite exportar dados de vários serviços, incluindo o YouTube. Através dele, poderemos extrair os arquivos JSON do histórico de visualizações da conta, que serão carregados em nosso banco de dados.`
    },
    {
      title: '“Mas você vai usar meus dados para realizar o projeto?”',
      subtitle: `Coletaremos apenas dados históricos de exibição do YouTube, que serão enviados anonimamente e tratados com base em dados. Pode ficar tranquilo!`,
      sx: {
        textAlign: 'right'
      }
    },
    {
      title: '“Não entendo nada de computadores, não poderei ajudar.”',
      subtitle: `Não se preocupe! Não é necessário ter conhecimento de informática para realizar a extração. Montamos um passo a passo explicando tudo o que tem que ser feito.`
    }
  ],
  aboutUs: {
    title:
      'Somos alunos de Ciência da Computação na faculdade SPTech e precisamos da sua ajuda para realizar nosso TCC',
    subtitle:
      'Nosso projeto envolve a elaboração de um modelo de Machine Learning de recomendação personalizada de vídeos do YouTube para usuários, com base em seus interesses e preferências, analisando seu comportamento de visualização e comparando-o com suas escolhas. Para desenvolver nosso modelo e criar um banco de dados relevante, precisamos coletar dados de usuários reais para tornar a IA mais realista e fornecer métricas precisas para o nosso projeto.'
  },
  steps: [
    {
      title: 'Passo 1 de 9',
      subtitle: (
        <>
          Acesse o site do{' '}
          <Link href="https://takeout.google.com/">Google Takeout</Link>.
        </>
      )
    }
  ]
}
export default content
