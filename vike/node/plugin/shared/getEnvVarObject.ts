export { getEnvVarObject }

import pc from '@brillout/picocolors'
import { assertUsage, isObject } from '../utils.js'
import JSON5 from 'json5'

function getEnvVarObject(
  envVarName: 'VITE_CONFIG' | 'VIKE_CRAWL'
  /* Let's eventually implement this for Vike's config as well
  | 'VIKE_CONFIG'
  */
): null | Record<string, unknown> {
  const valueStr = process.env[envVarName]
  if (!valueStr) return null
  let value: unknown
  try {
    value = JSON5.parse(valueStr)
  } catch (err) {
    console.error(err)
    assertUsage(
      false,
      `Cannot parse ${envVarName} (see error above) because it's set to the following which isn't a valid JSON5 string: ${pc.bold(valueStr)}`
    )
  }
  assertUsage(value, `${envVarName} should define an object but it's ${pc.bold(String(value))} instead.`)
  assertUsage(
    isObject(value),
    `${envVarName} should define an object but it's set to the following which isn't an object: ${pc.bold(valueStr)}`
  )
  return value
}
