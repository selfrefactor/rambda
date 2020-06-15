import { readFile } from 'fs-extra'
import { template } from 'rambdax'

const mostInfluentialContributors = [
  'farwayer',
  'synthet1c',
  'vlad-zhukov'
]

function getAdditionalInfo(){

  const additionalInfoTemplate = `
## Additional info

> Most influential contributors

{{contributors}}

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

> Links to Rambda

- (https://mailchi.mp/webtoolsweekly/web-tools-280)[Web Tools Weekly]

- (https://github.com/stoeffel/awesome-fp-js)[awesome-fp-js]

- (https://github.com/docsifyjs/awesome-docsify)[awesome-docsify]  
`

  const contributors = mostInfluentialContributors.map(
    x => `- [@${x}](https://github.com/${x})`
  ).join('\n')

  return template(additionalInfoTemplate, {contributors})
}

const templateTail = `
## CHANGELOG

{{changelog}}

{{additionalInfo}}
`

export async function getTail(withRambdax){
  const changelogSource = withRambdax ?
    `${ __dirname }/assets/CHANGELOG_RAMBDAX.md` :
    `${ __dirname }/assets/CHANGELOG.md`

  const changelogContent = await readFile(changelogSource)

  return template(templateTail, {
    additionalInfo : getAdditionalInfo(),
    changelog      : changelogContent.toString(),
  })
}
