// restful-react.config.js
module.exports = {
  petStoreApi: {
    output: "src/api/FooAPI.tsx",
    file: "schema/pet_store.yaml",
    customImport: `import { useSWR, ConfigInterface } from "./fetchers"`,
    customGenerator: ({ componentName, verb, route, description, genericsTypes, paramsInPath, paramsTypes }) => {
      const propsType = type =>
        `Custom${type}Props<${genericsTypes}>${paramsInPath.length ? ` & {${paramsTypes}}` : ""}`;

      const DataType = genericsTypes.split(',')[0].trim()
      const ErrorType = genericsTypes.split(',')[1].trim()

      return `${description}export const use${componentName}API = (props: ConfigInterface<${DataType}, ${ErrorType}>) => useSWR<${DataType}, ${ErrorType}>('${route}', props)\n`
    },
  }
}