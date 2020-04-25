import { readFile } from 'fs-extra'
import { template } from 'rambdax'

const templateTail = `
## CHANGELOG

{{changelog}}

{{additionalInfo}}
`

// TODO
// ============================================
// const mostInfluentialContributors = ''

export async function getTail(withRambdax){
  const additionalInfoContent = await readFile(`${ __dirname }/assets/ADDITIONAL.md`)
  const changelogSource = withRambdax ?
    `${ __dirname }/assets/CHANGELOG_RAMBDAX.md` :
    `${ __dirname }/assets/CHANGELOG.md`

  const changelogContent = await readFile(changelogSource)

  return template(templateTail, {
    additionalInfo : additionalInfoContent.toString(),
    changelog      : changelogContent.toString(),
  })
}
