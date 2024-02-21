import { DECORATORS } from '../constants';
import { SecurityRequirementObject } from '../interfaces';
import { createMixedDecorator } from './helpers';

export function ApiSecurity(
  name: string | SecurityRequirementObject,
  requirements: string[] = []
): ClassDecorator {
  let metadata: SecurityRequirementObject;

  if (typeof name === 'string') {
    metadata = { [name]: requirements || [] };
  } else {
    metadata = name;
  }
  return createMixedDecorator(DECORATORS.API_SECURITY, metadata);
}

export function ApiExcludeSecurity(): MethodDecorator {
  return createMixedDecorator(DECORATORS.API_EXCLUDE_SECURITY, true);
}
