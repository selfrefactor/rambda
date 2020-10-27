import { readFile } from 'fs-extra'
import { forEach, interpolate } from 'rambdax'
import { getSeparator } from '../utils'

const mostInfluentialContributors = {
  'farwayer' :
    'improving performance in R.find, R.filter; give the idea how to make benchmarks more reliable;',
  'thejohnfreeman' : 'add R.assoc, R.chain;',
  'helmuthdu'      : 'add R.clone; help improve code style;',
  'jpgorman'       : 'add R.zip, R.reject, R.without, R.addIndex;',
  'ku8ar'          :
    'add R.slice, R.propOr, R.identical, R.propIs and several math related methods; introduce the idea to display missing Ramda methods;',
  'romgrk'    : 'add R.groupBy, R.indexBy, R.findLast, R.findLastIndex;',
  'squidfunk' :
    'add R.assocPath, R.symmetricDifference, R.difference, R.intersperse;',
  'synthet1c'   : 'add all lenses methods; add R.applySpec, R.converge;',
  'vlad-zhukov' :
    'help with configuring Rollup, Babel; change export file to use ES module exports;',
}

function getAdditionalInfo(){
  const additionalInfoTemplate = `
## ➤ Additional info

> Most influential contributors

{{contributors}}

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

> Links to Rambda

- [https://mailchi.mp/webtoolsweekly/web-tools-280](Web Tools Weekly)

- [https://github.com/stoeffel/awesome-fp-js](awesome-fp-js)

- [https://github.com/docsifyjs/awesome-docsify](awesome-docsify)

> Deprecated from \`Used by\` section

- [SAP's Cloud SDK](https://github.com/SAP/cloud-sdk) - This repo doesn't uses \`Rambda\` since *October/2020* [commit that removes Rambda](https://github.com/SAP/cloud-sdk/commit/b29b4f915c4e4e9c2441e7b6b67cf83dac1fdac3)

> Releases

[Rambda's releases](https://github.com/selfrefactor/rambda/releases) are used mostly for testing purposes, so it is not advisable to be used.
`
  let contributors = ''

  forEach((reason, contributor) => {
    contributors += `- [@${ contributor }](https://github.com/${ contributor }) - ${ reason }\n\n`
  }, mostInfluentialContributors)

  return interpolate(additionalInfoTemplate, { contributors })
}

const templateTail = `
## ➤ CHANGELOG

{{changelog}}

{{changelogSeparator}}

{{additionalInfo}}

{{additionalInfoSeparator}}

{{myLibraries}}
`

const myLibraries = `

## My other libraries

<table>
    <tbody>
        <tr valign="top">
            <td width="20%" align="center">
                <h4>Niketa theme</h4>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.Niketa-theme">Collection of 9 light VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h4>Niketa dark theme</h4>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.niketa-dark-theme">Collection of 9 dark VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h4>String-fn</h4>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/string-fn">String utility library</a>
            </td>
            <td width="20%" align="center">
                <h4>Useful Javascript libraries</h4>
                <a href="https://github.com/selfrefactor/useful-javascript-libraries">Large collection of JavaScript,Typescript and Angular related repos links</a>
            </td>
            <td width="20%" align="center">
                <h4>Run-fn</h4>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/run-fn">CLI commands for lint JS/TS files, commit git changes and upgrade of dependencies</a>
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
    additionalInfoSeparator : getSeparator('additional-info'),
    additionalInfo : getAdditionalInfo(),
    myLibraries,
    changelogSeparator : getSeparator('changelog'),
    changelog      : changelogContent.toString(),
  })
}
