import {
    ESLINT,
    exec,
    OUTPUT_LINT_OUTPUT_PROCESS,
    PRETTIER,
    BIOME,
    OXLINT,
    execWithStandartOutput,
} from '../constants.js';
import { readFileSync } from 'node:fs';

const ALLOWED = {
    BIOME: 1,
    ESLINT: 1,
    PRETTIER: 1,
    OXLINT: 1,
};

async function lintFileWithPrettier(filePath) {
    if (!ALLOWED.PRETTIER) return '';
    const command = `${PRETTIER} --write ${filePath} --print-width=80 --semi=false --jsx-single-quote ${
        filePath.endsWith('.scss') ? '' : '--single-quote'
    }`;
    await exec(command);
}

async function lintFileWithEslint(filePath) {
    if (!ALLOWED.ESLINT) return '';
    const command = `${ESLINT} --fix ${filePath} -o ${OUTPUT_LINT_OUTPUT_PROCESS}`;
    await exec(command);
    console.log('command', command);
    const output = readFileSync(OUTPUT_LINT_OUTPUT_PROCESS, 'utf8');
    return output ?? false;
}

async function biomeLint(filePath) {
    if (!ALLOWED.BIOME) return '';
    // check include lint and format command
    const checkCommand = `${BIOME} check --write --unsafe --javascript-formatter-line-width=85 --organize-imports-enabled=true --jsx-quote-style=single --line-width=85 ${filePath}`;

    const { errorMessage: checkCommandErrorMessage, success } =
        await exec(checkCommand);
    if (!success) return checkCommandErrorMessage ?? '';

    return '';
}

async function oxlint(filePath) {
    if (!ALLOWED.OXLINT) return '';
    const command = `${OXLINT} --fix-dangerously --fix-suggestions --fix ${filePath}`;

    const { logs, success, errorMessage } = await execWithStandartOutput(command);
    if (!success) return errorMessage ?? '';
    return logs ?? '';
}

export async function lintFn(filePath) {
    const oxlintOutput = await oxlint(filePath);
    const biomeOutput = await biomeLint(filePath);
    await lintFileWithPrettier(filePath);
    const lintOutput = await lintFileWithEslint(filePath);

    return { biomeOutput, lintOutput, oxlintOutput };
}

export { ALLOWED };
