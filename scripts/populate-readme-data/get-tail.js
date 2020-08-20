import { readFile } from 'fs-extra'
import { interpolate } from 'rambdax'

const mostInfluentialContributors = [
  'farwayer',
  'thejohnfreeman',
  'helmuthdu',
  'jpgorman',
  'ku8ar',
  'romgrk',
  'squidfunk',
  'synthet1c',
  'vlad-zhukov',
  'WhoAteDaCake',
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

  const contributors = mostInfluentialContributors
    .map(x => `- [@${ x }](https://github.com/${ x })`)
    .join('\n')

  return interpolate(additionalInfoTemplate, { contributors })
}

const templateTail = `
## CHANGELOG

{{changelog}}

{{additionalInfo}}

{{myLibraries}}
`

const myLibraries = `

## My other libraries

<table>
    <tbody>
        <tr valign="top">
            <td width="20%" align="center">
                <h3>Niketa theme</h3>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.Niketa-theme">Collection of 9 light VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h3>Niketa dark theme</h3>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.niketa-dark-theme">Collection of 9 dark VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h3>String-fn</h3>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/string-fn">String utility library</a>
            </td>
            <td width="20%" align="center">
                <h3>Run-fn</h3>
                <a href="https://github.com/selfrefactor/useful-javascript-libraries">Large collection of JavaScript/Typescript/Angular repos links</a>
            </td>
            <td width="20%" align="center">
                <h3>Run-fn</h3>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/run-fn">CLI commands for lint JS/TS files and commit git changes</a>
            </td>
        </tr>
    </tbody>
</table>
`.trim()

export async function getTail(withRambdax){
  const changelogSource = withRambdax ?
    `${ __dirname }/assets/CHANGELOG_RAMBDAX.md` :
    `${ __dirname }/assets/CHANGELOG.md`

  const changelogContent = await readFile(changelogSource)

  return interpolate(templateTail, {
    additionalInfo : getAdditionalInfo(),
    myLibraries,
    changelog      : changelogContent.toString(),
  })
}
