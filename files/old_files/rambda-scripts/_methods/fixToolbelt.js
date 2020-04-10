const { replace } = require('rambda')
const TOOLBELT = 'import { FToolbelt } from "../_ts-toolbelt/src/index";'
const TOOLBELT_FIXED = 'import { FToolbelt } from "./_ts-toolbelt/src/index";'

function fixToolbelt(content){
  return replace(
    TOOLBELT, TOOLBELT_FIXED, content
  )
}

exports.fixToolbelt = fixToolbelt
