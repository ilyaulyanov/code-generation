import { Project } from 'ts-morph'

const API_FOLDER = './src/api' as const

// create the project
const project = new Project()

// Load the file into the project
const TypesAPI = project.addSourceFileAtPath(`${API_FOLDER}/Types.tsx`)

/* Remove all
    export const = ...
  * statements from the file
*/
const variableStatements = TypesAPI.getVariableStatements()
variableStatements.forEach((statement) => {
  statement.remove()
})

/*
  remove export default, if any
*/
TypesAPI.removeDefaultExport()

/**
 * Save the file in place
 */
const srcDir = project.getDirectoryOrThrow(API_FOLDER)
const newDir = srcDir.copy(API_FOLDER, { includeUntrackedFiles: false })

newDir.saveSync()
