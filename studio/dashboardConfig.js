export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea274b482d17fea70a659f2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qiior9ih',
                  apiId: 'ae3ad317-47d1-4e8d-bc8e-196dfacb754f'
                },
                {
                  buildHookId: '5ea274b5b58fb6f5bce28b69',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-boc888sa',
                  apiId: '0204ae91-8b26-4ef1-8d86-e6bb3767ca95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raymondl0016/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-boc888sa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
